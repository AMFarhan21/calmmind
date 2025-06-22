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
git clone https://github.com/AMFarhan21/calmmind.git
cd calmmind
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

## 🤖 AI Support Explanation

🧠 IBM Granite 3.3:8b
During the development process, I used IBM Granite 3.3:8B to assist in debugging, solving programming errors, and refining prompt engineering for the AI behavior.
It acted as my AI assistant to increase development speed and code reliability.

🗣️ Vapi – Voice AI Integration

CalmMind AI integrates with Vapi to enable real-time voice conversations between users and the AI-based mental health companion.

The voice experience is powered by custom prompt engineering designed to simulate an emotionally intelligent, calm, and supportive guide — allowing users to talk and receive reflective responses, similar to speaking with a mental health companion.

Key prompt behaviors:
```
`You are a calm and supportive mental health companion helping the user reflect on their thoughts and emotions during a real-time voice session.
                    Mental Health Support Guidelines:
                    - Focus on the selected topic: {{ description }} and category: {{ category }} to guide the conversation gently.
                    - Encourage the user to explore their feelings or thoughts.
                    - Ask reflective or open-ended questions that invite the user to speak more.
                    - From time to time, check if the user is feeling okay or wants to continue.
                    - Avoid giving direct advice. Instead, help the user gain insight through gentle guidance.
                    - Keep your speaking - warm, supportive, and non-judgemental.
                    - Keep your responses short and suitable for a natural voice conversation.
                    - Do not include special characters in your response - this is a voice conversation.
                    - If the user tries to shift the conversation away from the topic: {{ description }} ({{ category }}), or from core mental health areas such as Anxiety, Depression, Relationships, Productivity, Work & Burnout, Sleep, Self-Esteem, Motivation, Anger, or Mindfulness — gently steer the conversation back to the original topic.
                    `
```
