const voices = {
  male: { informal: "WTUK291rZZ9CLPCiFTfh", formal: "lnieQLGTodpbhjpZtg1k" },
  female: { informal: "yM93hbw8Qtvdma2wCnJG", formal: "sarah" },
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][style as keyof (typeof voice)[keyof typeof voice]] || "sarah";

  const vapiAssistant = {
    name: "Calm Mind Companion",
    firstMessage:
      "Hello, let's start the session. We will be talking about {{description}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 0.9,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a calm and supportive mental health companion helping the user reflect on their thoughts and emotions during a real-time voice session.

                    Mental Health Support Guidelines:
                    - Focus on the selected topic: {{ description }} and category: {{ category }} to guide the conversation gently.
                    - Encourage the user to explore their feelings or thoughts.
                    - Ask reflective or open-ended questions that invite the user to speak more.
                    - From time to time, check if the user is feeling okay or wants to continue.
                    - Avoid giving direct advice. Instead, help the user gain insight through gentle guidance.
                    - Keep your speaking style {{ style }} - warm, supportive, and non-judgemental.
                    - Keep your responses short and suitable for a natural voice conversation.
                    - Do not include special characters in your response - this is a voice conversation.
                    - If the user tries to shift the conversation away from the topic: {{ description }} ({{ category }}), or from core mental health areas such as Anxiety, Depression, Relationships, Productivity, Work & Burnout, Sleep, Self-Esteem, Motivation, Anger, or Mindfulness — gently steer the conversation back to the original topic.
                    `,
        },
      ],
    },
    // clientMessages: [],
    // serverMessages: []
  };

  return vapiAssistant;
};
