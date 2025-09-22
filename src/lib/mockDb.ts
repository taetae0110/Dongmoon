// Mock database using JSON files for demonstration
import fs from 'fs/promises';
import path from 'path';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  graduationYear?: number;
  major?: string;
  bio?: string;
  location?: string;
  jobTitle?: string;
  company?: string;
  linkedIn?: string;
  phone?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  schoolId?: string;
}

interface School {
  id: string;
  name: string;
  nameEn?: string;
  type: 'ELEMENTARY' | 'MIDDLE_SCHOOL' | 'HIGH_SCHOOL' | 'UNIVERSITY' | 'GRADUATE_SCHOOL';
  location?: string;
  website?: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
}

interface WhereClause {
  name?: { contains: string };
  major?: { contains: string };
  graduationYear?: number;
  school?: { name: { contains: string } };
}

interface FindManyOptions {
  where?: WhereClause;
  take?: number;
  orderBy?: { name: 'asc' | 'desc' };
}

const DB_DIR = path.join(process.cwd(), 'data');

async function ensureDbDir() {
  try {
    await fs.access(DB_DIR);
  } catch {
    await fs.mkdir(DB_DIR, { recursive: true });
  }
}

async function readData<T>(filename: string): Promise<T[]> {
  await ensureDbDir();
  const filePath = path.join(DB_DIR, `${filename}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeData<T>(filename: string, data: T[]): Promise<void> {
  await ensureDbDir();
  const filePath = path.join(DB_DIR, `${filename}.json`);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const mockDb = {
  user: {
    async findUnique({ where }: { where: { email: string } }) {
      const users = await readData<User>('users');
      return users.find(user => user.email === where.email) || null;
    },

    async create({ data }: { data: Omit<User, 'id' | 'createdAt' | 'updatedAt'> }) {
      const users = await readData<User>('users');
      const newUser: User = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      users.push(newUser);
      await writeData('users', users);
      return newUser;
    },

    async findMany({ where, take, orderBy }: FindManyOptions = {}) {
      let users = await readData<User>('users');
      const schools = await readData<School>('schools');
      
      // Filter by criteria
      if (where) {
        users = users.filter(user => {
          if (where.name?.contains) {
            const contains = where.name.contains.toLowerCase();
            if (!user.name.toLowerCase().includes(contains)) return false;
          }
          if (where.major?.contains) {
            const contains = where.major.contains.toLowerCase();
            if (!user.major?.toLowerCase().includes(contains)) return false;
          }
          if (where.graduationYear) {
            if (user.graduationYear !== where.graduationYear) return false;
          }
          if (where.school?.name?.contains) {
            const contains = where.school.name.contains.toLowerCase();
            const userSchool = schools.find(s => s.id === user.schoolId);
            if (!userSchool?.name.toLowerCase().includes(contains)) return false;
          }
          return true;
        });
      }

      // Sort
      if (orderBy?.name === 'asc') {
        users.sort((a, b) => a.name.localeCompare(b.name));
      }

      // Limit
      if (take) {
        users = users.slice(0, take);
      }

      // Include school data and exclude password
      return users.map(user => {
        const school = schools.find(s => s.id === user.schoolId);
        const { password: _password, ...userWithoutPassword } = user;
        return {
          ...userWithoutPassword,
          school: school ? { id: school.id, name: school.name } : null
        };
      });
    }
  },

  school: {
    async upsert({ where, create }: { 
      where: { name: string }; 
      create: Omit<School, 'id' | 'createdAt' | 'updatedAt'>; 
      update: Record<string, never>;
    }) {
      const schools = await readData<School>('schools');
      const existing = schools.find(school => school.name === where.name);
      
      if (existing) {
        return existing;
      }
      
      const newSchool: School = {
        ...create,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      schools.push(newSchool);
      await writeData('schools', schools);
      return newSchool;
    }
  }
};

// Initialize with sample data
export async function initializeDb() {
  const schools = await readData<School>('schools');
  if (schools.length === 0) {
    const sampleSchools: Omit<School, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        name: '서울대학교',
        nameEn: 'Seoul National University',
        type: 'UNIVERSITY',
        location: '서울특별시 관악구',
        website: 'https://snu.ac.kr'
      },
      {
        name: '연세대학교',
        nameEn: 'Yonsei University',
        type: 'UNIVERSITY',
        location: '서울특별시 서대문구',
        website: 'https://yonsei.ac.kr'
      },
      {
        name: '고려대학교',
        nameEn: 'Korea University',
        type: 'UNIVERSITY',
        location: '서울특별시 성북구',
        website: 'https://korea.ac.kr'
      }
    ];

    const newSchools: School[] = sampleSchools.map(school => ({
      ...school,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    await writeData('schools', newSchools);
  }
}

// Export for use in API routes
export type { User, School, WhereClause };