# Claude Development Instructions for Voxelbox

## Project Context

Voxelbox is an AI-native software development platform that helps businesses form, build applications, and integrate with Square's ecosystem. This is a reimplementation of the Maverick platform with a focus on the core features and architecture.

## Architecture Overview

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, and Radix UI
- **Backend**: Next.js API routes with Prisma ORM
- **Database**: PostgreSQL (recommended) or SQL Server
- **Authentication**: NextAuth.js with Square OAuth integration
- **AI Integration**: Claude API for multi-threaded conversations
- **Real-time**: WebSocket connections for collaborative editing

## Key Features to Implement

### 1. AI-Powered Project Management
- Multi-threaded AI conversations (Vibe Chat for product planning, Development Chat for technical work)
- Work item generation from natural language descriptions
- Persistent Claude sessions per project with rich context

### 2. Business Formation Automation
- Step-by-step incorporation workflows
- Document generation and e-signature integration
- Square Banking and payment processing setup
- Compliance tracking and reminders

### 3. Template Marketplace System
- Extract successful project patterns into reusable templates
- Template browsing by industry, tech stack, and success metrics
- Revenue sharing for template creators

### 4. GitHub Integration
- Repository import and transformation
- Automated feature branch creation and PR management
- Code generation with project-specific context files
- Issue tracking synchronized with internal work items

## Code Conventions

### File Organization
- Use the established `/src/app` structure for Next.js App Router
- Components in `/src/components` with proper TypeScript interfaces
- Business logic in `/src/lib` with clear separation of concerns
- All documentation in `/project` subdirectories

### TypeScript Standards
- Strict mode enabled
- Proper type definitions for all API responses
- Use Zod for runtime validation
- Interface definitions in `/src/types`

### Styling Guidelines
- Tailwind CSS for all styling
- Follow the established design tokens in `tailwind.config.js`
- Use Radix UI components for complex interactions
- Maintain the minimalist black/white/gray aesthetic

### Database Patterns
- Prisma ORM for all database operations
- Use transactions for complex business operations
- Implement proper foreign key relationships
- Follow naming conventions: camelCase for fields, snake_case for tables

## AI Integration Patterns

### Multi-threaded Conversations
```typescript
interface AIConversation {
  id: string
  type: 'vibe_chat' | 'development' | 'review'
  projectId: string
  context: {
    workItems: WorkItem[]
    projectInfo: Project
    conversationHistory: Message[]
  }
}
```

### System Prompts
- Maintain separate system prompts for different conversation types
- Include project context, work item details, and conversation history
- Use rich context to provide better AI responses

## Business Logic Patterns

### Work Item Management
- Store work items as structured data with markdown content
- Support hierarchical relationships (tasks -> subtasks)
- Implement proper state management (pending, in_progress, completed)

### Template System
- Extract project patterns programmatically
- Store templates with metadata about success metrics
- Support template instantiation with customization

## Security Considerations

- Never log or expose sensitive API keys
- Use proper authentication for all API routes
- Implement rate limiting for AI API calls
- Validate all user inputs with Zod schemas

## Development Workflow

1. **Read existing code** to understand patterns before implementing new features
2. **Follow TypeScript strictly** - no `any` types without justification
3. **Test database operations** using Prisma Studio
4. **Use consistent error handling** throughout the application
5. **Document assumptions** and decisions in code comments

## Current Implementation Status

This is a fresh implementation based on the Maverick specifications. Key areas needing development:

- [ ] Core database schema and Prisma setup
- [ ] Authentication system with NextAuth
- [ ] Basic UI components and layout
- [ ] AI conversation system
- [ ] Work item management
- [ ] GitHub integration
- [ ] Template marketplace

When implementing features, prioritize core functionality over advanced features. Focus on creating a solid foundation that can be extended.

## Environment Variables Needed

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/voxelbox"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# AI Integration
ANTHROPIC_API_KEY="your-claude-api-key"

# Square Integration (for business formation)
SQUARE_CLIENT_ID="your-square-client-id"
SQUARE_CLIENT_SECRET="your-square-client-secret"
```

Always maintain the vision of Voxelbox as a platform where local development and business operations are unified into a single, AI-powered system.