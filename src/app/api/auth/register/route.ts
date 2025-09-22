import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { mockDb, initializeDb } from '@/lib/mockDb';

export async function POST(request: NextRequest) {
  try {
    await initializeDb();
    const { name, email, password, school, graduationYear, major } = await request.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: '필수 정보를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await mockDb.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: '이미 등록된 이메일입니다.' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Find or create school
    let schoolRecord = null;
    if (school) {
      schoolRecord = await mockDb.school.upsert({
        where: { name: school },
        update: {},
        create: {
          name: school,
          type: 'UNIVERSITY' as const // Default type
        }
      });
    }

    // Create user
    const user = await mockDb.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        schoolId: schoolRecord?.id,
        graduationYear: graduationYear ? parseInt(graduationYear) : undefined,
        major: major || undefined,
        isVerified: false
      }
    });

    // Return user data without password
    const { password: _password, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: '회원가입이 완료되었습니다.',
      user: {
        ...userWithoutPassword,
        school: schoolRecord ? { id: schoolRecord.id, name: schoolRecord.name } : null
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}