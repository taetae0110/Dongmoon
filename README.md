# 동문 (Dongmoon)

**동문동창 연결 서비스** - Alumni Connection Service

소중한 학교 인연들을 다시 만나는 특별한 공간입니다.

## 🌟 주요 기능

- **🎓 동창 네트워크**: 졸업한 학교별로 동창들을 쉽게 찾고 연결
- **🔍 스마트 검색**: 이름, 학교, 전공, 졸업년도 등 다양한 조건으로 검색
- **💬 안전한 소통**: 프라이버시를 보호하는 안전한 메시징 시스템
- **📱 반응형 디자인**: 모바일과 데스크톱에서 모두 최적화된 UI

## 🚀 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: File-based JSON storage (개발용)
- **Authentication**: JWT, bcrypt
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 코드 린팅
npm run lint
```

## 🌐 접속

- 개발 서버: http://localhost:3000
- 메인 페이지: 동문 소개 및 기능 안내
- 회원가입: `/register`
- 로그인: `/login`
- 동창 검색: `/search`

## 📱 화면 구성

### 메인 페이지
- 서비스 소개 및 주요 기능 안내
- 통계 정보 (등록된 학교, 활성 사용자, 성공한 연결)
- 회원가입/로그인 버튼

### 회원가입
- 이름, 이메일, 비밀번호 입력
- 학교, 졸업년도, 전공 정보
- 실시간 유효성 검사

### 로그인
- 이메일/비밀번호 인증
- JWT 토큰 기반 인증
- 소셜 로그인 지원 예정 (카카오, 네이버)

### 동창 검색
- 이름, 학교, 졸업년도, 전공별 검색
- 검색 결과 프로필 카드
- 연결 요청 기능

## 🔧 개발 정보

### API 엔드포인트

- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/users/search` - 사용자 검색

### 데이터 구조

현재는 개발용으로 JSON 파일 기반 저장소를 사용하며, 실제 배포 시에는 PostgreSQL/MySQL 등의 관계형 데이터베이스로 마이그레이션할 예정입니다.

### 보안

- 비밀번호 해싱 (bcrypt)
- JWT 토큰 기반 인증
- CORS 설정
- 입력값 검증 및 sanitization

## 🎯 향후 개발 계획

- [ ] 실제 데이터베이스 연동 (PostgreSQL/MySQL)
- [ ] 실시간 메시징 시스템
- [ ] 프로필 사진 업로드
- [ ] 소셜 로그인 (카카오, 네이버, 구글)
- [ ] 이메일 인증 시스템
- [ ] 동창회 그룹 기능
- [ ] 이벤트 및 모임 관리
- [ ] 푸시 알림
- [ ] 모바일 앱 (React Native)

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**동문** - 소중한 인연을 다시 만나는 곳 ❤️
