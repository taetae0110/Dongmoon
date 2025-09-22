'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Search, MapPin, Book, Briefcase } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  graduationYear?: number;
  major?: string;
  bio?: string;
  location?: string;
  jobTitle?: string;
  company?: string;
  school?: {
    id: string;
    name: string;
  };
}

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    query: '',
    school: '',
    graduationYear: '',
    major: ''
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const queryParams = new URLSearchParams();
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      const response = await fetch(`/api/users/search?${queryParams}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.users);
      } else {
        console.error('Search failed');
      }
    } catch (error) {
      console.error('Search error:', error);
    }
    
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">동문</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              로그인
            </Link>
            <Link 
              href="/register" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              회원가입
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              동창 <span className="text-blue-600">찾기</span>
            </h2>
            <p className="text-xl text-gray-600">
              함께 공부했던 친구들을 찾아보세요
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 또는 키워드
                  </label>
                  <input
                    type="text"
                    id="query"
                    name="query"
                    value={searchParams.query}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="찾고 싶은 동창의 이름이나 키워드를 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                    학교
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={searchParams.school}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="학교명을 입력하세요"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
                    졸업년도
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    min="1950"
                    max="2030"
                    value={searchParams.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="졸업년도"
                  />
                </div>
                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                    전공
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={searchParams.major}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="전공명을 입력하세요"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>{loading ? '검색 중...' : '동창 찾기'}</span>
              </button>
            </form>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                검색 결과 ({searchResults.length}명)
              </h3>
              
              <div className="grid gap-6">
                {searchResults.map((user) => (
                  <div key={user.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {user.name.charAt(0)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-gray-900">{user.name}</h4>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            연결 요청
                          </button>
                        </div>
                        
                        <div className="space-y-2 text-gray-600">
                          {user.school && (
                            <div className="flex items-center space-x-2">
                              <GraduationCap className="h-4 w-4" />
                              <span>{user.school.name}</span>
                              {user.graduationYear && <span>({user.graduationYear}년 졸업)</span>}
                            </div>
                          )}
                          
                          {user.major && (
                            <div className="flex items-center space-x-2">
                              <Book className="h-4 w-4" />
                              <span>{user.major}</span>
                            </div>
                          )}
                          
                          {user.jobTitle && (
                            <div className="flex items-center space-x-2">
                              <Briefcase className="h-4 w-4" />
                              <span>{user.jobTitle}</span>
                              {user.company && <span>@ {user.company}</span>}
                            </div>
                          )}
                          
                          {user.location && (
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{user.location}</span>
                            </div>
                          )}
                        </div>
                        
                        {user.bio && (
                          <p className="mt-3 text-gray-700">{user.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchResults.length === 0 && !loading && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-500">
                다른 검색 조건으로 다시 시도해보세요
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}