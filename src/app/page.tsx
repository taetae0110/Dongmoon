import Link from "next/link";
import { Users, GraduationCap, MessageCircle, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">동문</h1>
          </div>
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

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            동문동창과 다시 만나는 
            <span className="text-blue-600"> 특별한 공간</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            학교에서 함께했던 소중한 인연들을 다시 찾아보세요. 
            동창들과의 새로운 네트워킹을 시작하세요.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <Link 
              href="/register" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              지금 시작하기
            </Link>
            <Link 
              href="/search" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              동창 찾아보기
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">동창 네트워크</h3>
            <p className="text-gray-600 leading-relaxed">
              졸업한 학교별로 동창들을 쉽게 찾고 연결할 수 있습니다. 
              같은 학교, 같은 학과, 같은 졸업년도의 친구들을 만나보세요.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">스마트 검색</h3>
            <p className="text-gray-600 leading-relaxed">
              이름, 학교, 전공, 졸업년도 등 다양한 조건으로 
              동창들을 빠르고 정확하게 찾을 수 있습니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">안전한 소통</h3>
            <p className="text-gray-600 leading-relaxed">
              프라이버시를 보호하는 안전한 메시징 시스템으로 
              동창들과 자유롭게 소통하고 추억을 나누세요.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">등록된 학교</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">활성 사용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-gray-600">성공한 연결</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">동문</span>
          </div>
          <p className="text-gray-400 mb-4">
            동문동창 연결 서비스 - 소중한 인연을 다시 만나는 곳
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Dongmoon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
