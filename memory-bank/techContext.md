# Technical Context: Morning Kindness

## Technology Stack

### Frontend
- Next.js (React framework)
- TypeScript
- Mobile-first CSS
- Web Audio API (for MP3 playback)

### Backend
- Next.js API routes
- Prisma ORM
- PostgreSQL (via Supabase)
- Twilio SDK

### Infrastructure
- Vercel (hosting)
- Supabase (database)
- GitHub Actions (CI/CD)
- Twilio (SMS/Voice)

## Development Setup

### Environment Variables
```
# Authentication
JWT_SECRET=****
MAGIC_LINK_SECRET=****

# Public Configuration
NEXT_PUBLIC_BASE_URL=****
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=****

# Database Configuration
POSTGRES_PRISMA_URL=****
POSTGRES_URL_NON_POOLING=****
```

### Required Dependencies
```json
{
  "dependencies": {
    "@prisma/client": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "twilio": "latest",
    "typescript": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "prisma": "latest"
  }
}
```

## Database Schema

### User Table
```prisma
model User {
  id            String     @id @default(cuid())
  phoneNumber   String     @unique
  timezone      String
  schedules     Schedule[]
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
}
```

### Schedule Table
```prisma
model Schedule {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  dayOfWeek   Int      // 0-6 (Sunday-Saturday)
  wakeUpTime  DateTime
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Greeting Table
```prisma
model Greeting {
  id          String   @id @default(cuid())
  phoneNumber String
  messageUrl  String   // MP3 file URL
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## API Integration

### Twilio Configuration
```typescript
interface TwilioConfig {
  accountSid: string;
  authToken: string;
  fromNumber: string;
}
```

### Supabase Configuration
```typescript
interface SupabaseConfig {
  url: string;
  anonKey: string;
  serviceRole: string;
}
```

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies
3. Set up environment variables
4. Run Prisma migrations
5. Start development server

### Testing
1. Unit tests with Jest
2. Integration tests with Testing Library
3. E2E tests with Cypress

### Deployment
1. Push to GitHub
2. GitHub Actions CI/CD pipeline
3. Vercel deployment
4. Database migrations

## Technical Constraints

### Performance Requirements
- Page load time < 3s
- API response time < 500ms
- Wake-up call initiation < 1s

### Security Requirements
- HTTPS only
- JWT token expiration
- Phone number verification
- Admin access restriction

### Scalability Requirements
- Database connection pooling
- Serverless function optimization
- Asset optimization
- Caching strategy

## Monitoring and Logging

### Application Monitoring
- Vercel Analytics
- Error tracking
- Performance metrics
- User analytics

### System Monitoring
- Database performance
- API endpoint health
- Wake-up call success rate
- SMS delivery rate

## Technical Debt Tracking
1. Initial Implementation
   - Basic functionality
   - Core features
   - MVP requirements

2. Future Improvements
   - Performance optimization
   - Enhanced security
   - Additional features
   - Scaling considerations
