# Dongmoon - Alumni Connection Service (동창연결서비스)

**ALWAYS follow these instructions first before attempting any development tasks. Only fall back to additional search and context gathering if the information in these instructions is incomplete or found to be in error.**

Dongmoon is an alumni connection service project currently in its initial development phase. The repository contains basic project structure with MIT license and minimal documentation. This is a Korean service (동창연결서비스) aimed at connecting alumni.

## Repository Status
This repository is in **INITIAL DEVELOPMENT PHASE**. Current contents:
- README.md - Basic project description in Korean
- LICENSE - MIT License (Copyright 2025 김태환)
- No build system, dependencies, or application code yet

## Working Effectively

### Initial Setup
Since this is a new project, the first developer will need to establish the technology stack and project structure. Common patterns for alumni connection services include:

**Web Application Stack Options:**
- Frontend: React/Vue.js + TypeScript
- Backend: Node.js/Express, Python/Django, or Java/Spring Boot
- Database: PostgreSQL/MySQL for relational data, Redis for caching
- Authentication: OAuth2, JWT tokens

**Mobile Application Options:**
- React Native or Flutter for cross-platform
- Native iOS (Swift) and Android (Kotlin) development

### Development Workflow (To Be Established)
**CRITICAL: No build system exists yet. The first developer must:**

1. **Choose Technology Stack**
   - Decide on frontend framework (React, Vue, Angular)
   - Select backend technology (Node.js, Python, Java, etc.)
   - Choose database solution
   - Set up authentication strategy

2. **Initialize Project Structure**
   - Add package.json/requirements.txt/pom.xml depending on chosen stack
   - Set up development dependencies and tooling
   - Create src/ directory structure
   - Add configuration files (eslint, prettier, etc.)

3. **Establish Build System**
   - Configure bundling (Webpack, Vite, etc.)
   - Set up development server
   - Create build scripts
   - Add testing framework

4. **Set Up CI/CD**
   - Create .github/workflows/ directory
   - Add GitHub Actions for testing and deployment
   - Configure linting and code quality checks

## Validation Scenarios (Future Development)

Once the application is developed, **ALWAYS test these core scenarios:**

### User Registration and Authentication
- Register new alumni account with school verification
- Login with email/password
- Password reset functionality
- Profile setup and verification

### Alumni Connection Features
- Search for alumni by graduation year, major, location
- Send connection requests
- Accept/decline connection requests
- View alumni directory with privacy controls

### Communication Features
- Send direct messages between connected alumni
- Create and join alumni groups/communities
- Event creation and RSVP functionality
- News and announcements posting

## Common Development Tasks (Future Reference)

### When Adding New Features
1. **Plan the feature** - Consider user privacy and data protection
2. **Design database schema** - Alumni data requires careful privacy handling
3. **Implement backend API** - Follow RESTful principles
4. **Create frontend components** - Ensure responsive design
5. **Add comprehensive tests** - Unit, integration, and E2E tests
6. **Update documentation** - Keep README and API docs current

### Security Considerations
- **ALWAYS** implement proper authentication and authorization
- **NEVER** expose sensitive alumni data without proper permissions
- Use HTTPS for all communications
- Implement rate limiting on APIs
- Regular security audits and dependency updates

### Privacy and Compliance
- Implement GDPR-compliant data handling for international alumni
- Provide user data export and deletion capabilities
- Clear privacy policy and terms of service
- Opt-in/opt-out mechanisms for data sharing

## Technology Recommendations

Based on typical alumni connection service requirements:

### Recommended Stack
**Frontend:**
- React with TypeScript for type safety
- Material-UI or Ant Design for consistent UI components
- React Router for navigation
- Redux or Zustand for state management

**Backend:**
- Node.js with Express for rapid development
- PostgreSQL for relational alumni data
- Redis for session management and caching
- JWT for authentication tokens

**DevOps:**
- Docker for containerization
- GitHub Actions for CI/CD
- AWS/GCP/Azure for hosting
- Cloudinary or similar for image storage

### Project Structure (Recommended)
```
dongmoon/
├── frontend/           # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/            # Node.js API server
│   ├── src/
│   ├── package.json
│   └── README.md
├── database/           # Database schemas and migrations
├── docs/              # API documentation
├── .github/           # GitHub workflows and templates
└── docker-compose.yml # Development environment
```

## Getting Started for New Developers

**For the first developer setting up this project:**

1. **Initialize the chosen technology stack**
   ```bash
   # Example for Node.js/React stack
   mkdir frontend backend
   cd frontend && npx create-react-app . --template typescript
   cd ../backend && npm init -y && npm install express cors helmet
   ```

2. **Set up development environment**
   - Install Node.js, Python, or chosen runtime
   - Set up database (PostgreSQL recommended)
   - Configure environment variables
   - Create development Docker compose file

3. **Establish coding standards**
   - Add ESLint, Prettier configuration
   - Set up commit hooks with Husky
   - Create pull request templates
   - Add issue templates for bugs and features

## Current Repository Commands

**Available commands (current state):**
```bash
# View project information
cat README.md          # Project description in Korean
cat LICENSE            # MIT License information
ls -la                 # List all files (currently only README.md and LICENSE)

# Git operations
git status             # Check repository status
git log --oneline      # View commit history
```

**No build, test, or run commands available yet** - these need to be established by the development team.

## Important Notes

- **Korean Language Support**: Ensure all user-facing text supports Korean characters
- **Alumni Data Privacy**: Implement strong privacy controls and user consent mechanisms  
- **Scalability**: Design for growth as alumni networks can be large
- **Mobile-First**: Many users will access via mobile devices
- **Accessibility**: Follow WCAG guidelines for inclusive design

## Future Updates Needed

As development progresses, update these instructions with:
- Specific build commands and timeouts
- Test suite execution instructions
- Deployment procedures  
- API documentation links
- Database setup and migration commands
- Environment configuration details

**Remember: This is a foundational document. Expand it as the project grows and more specific procedures are established.**