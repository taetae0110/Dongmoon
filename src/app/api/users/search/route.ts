import { NextRequest, NextResponse } from 'next/server';
import { mockDb, type WhereClause } from '@/lib/mockDb';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const school = searchParams.get('school') || '';
    const graduationYear = searchParams.get('graduationYear');
    const major = searchParams.get('major') || '';

    // Build where clause
    const whereClause: WhereClause = {};

    // Search by name if query is provided
    if (query) {
      whereClause.name = {
        contains: query,
      };
    }

    // Filter by major if provided
    if (major) {
      whereClause.major = {
        contains: major,
      };
    }

    // Filter by graduation year if provided
    if (graduationYear) {
      whereClause.graduationYear = parseInt(graduationYear);
    }

    // Filter by school if provided
    if (school) {
      whereClause.school = {
        name: {
          contains: school,
        }
      };
    }

    // Search users
    const users = await mockDb.user.findMany({
      where: whereClause,
      take: 50, // Limit results
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json({
      users,
      count: users.length
    });

  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { message: '검색 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}