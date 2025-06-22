# 🧘 CalmMind AI

CalmMind AI is a mental health SaaS app that helps users reflect, explore their thoughts and emotions using AI-powered guidance — via real-time voice conversation.

## 📋 Description

CalmMind AI serves as a digital mental health companion. Whether you're managing stress, anxiety, burnout, or just trying to reflect on your day, CalmMind provides AI voice-based conversations to help users process their emotions in a structured yet gentle way

## ⚙️ Technologies Used

- **Frontend:** Next.js, Tailwind CSS, TypeScript, Shadcn/UI  
- **Backend:** Supabase (PostgreSQL), Prisma ORM  
- **Authentication:** Clerk  
- **AI:** Vapi (AI-powered voice conversations), IBM Granite 3.3:8B (AI support)  
- **Deployment:** Vercel

## 🌟 Features
- 💬 Real-time AI voice conversations
- 🎨 Theme switching (light/dark) with Fast transition
- 🧠 Calm Cards (therapy-style exercises by category)
- 🔒 Secure user authentication and subscription system
- 🧠 Create & manage personalized Companion Cards
- 🔈 Choose your preferred AI THERAPIST
- 🗑️ delete Companion Cards anytime
- 🧾 Live Transcript of Voice Conversations
- 📋 Session History

## Getting Started

Clone the repository:
```bash
git clone https://github.com/yourusername/calm-mind-ai.git
cd calm-mind-ai
```

Install dependencies:
```bash
npm install
```

Create .env
> You'll need accounts on:
> - [Clerk.dev](https://clerk.dev) for authentication
> - [Supabase.com](https://supabase.com) for database
> - [Vapi.ai](https://vapi.ai) for voice AI
> - [OpenAI.com](https://platform.openai.com) for assistant ID & key (optional)

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

DATABASE_URL=your-supabase-db-url
DIRECT_URL=your-supabase-direct-url

NEXT_PUBLIC_VAPI_WEB_TOKEN=your-vapi-web-token
ASSISTANT_ID=your-openai-assistant-id
```

Run the development server:
```bash
npm run dev
```

Visit the app in your browser:
http://localhost:3000
