# Project Brief: Morning Kindness

## Overview
Morning Kindness is a wake-up call system that provides scheduled phone calls to users at their specified times. The system is built with modern web technologies and follows test-driven development practices.

## Core Requirements

### Functional Requirements
1. User Authentication
   - SMS-based magic link authentication
   - Secure user sessions

2. Wake-up Call Scheduling
   - Per-day scheduling capability
   - Timezone-aware scheduling
   - 5-minute interval API polling for initiating calls

3. Admin Features
   - Restricted to phone number "+16465191557"
   - Greetings management with MP3 playback
   - User management dashboard

### Technical Requirements
1. Development
   - Test-driven development approach
   - TypeScript implementation
   - Mobile-first responsive design

2. Infrastructure
   - CI/CD via GitHub Actions
   - Vercel hosting
   - Supabase (PostgreSQL) database
   - Twilio integration for SMS/voice

3. Security
   - Environment variable management
   - Secure authentication flow
   - Admin access control

## Project Goals
1. Provide reliable wake-up call service
2. Ensure high availability and scalability
3. Maintain secure user data handling
4. Deliver intuitive user experience
5. Enable efficient admin management

## Scope Boundaries
- Focus on core wake-up call functionality
- Mobile-first web interface
- Admin capabilities for system management
- Integration with external services (Twilio, Supabase)
