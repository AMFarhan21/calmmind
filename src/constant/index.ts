import {
  Angry,
  BatteryPlus,
  Bed,
  Brain,
  HeartCrack ,
  Flame,
  Frown,
  Heart,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export const categoriesColor = {
  Anxiety: "#A8C5DA", // Indigo 500
  Depression: "#6B6B9F", // Amber 500
  Relationships: "#F4A9A8", // Amber 500
  Productivity: "#7FDBFF", // Emerald 500
  "Work & Burnout": "#C2B280", // Rose 500
  Sleep: "#BFA2DB", // Cyan 500
  "Self-Esteem": "#F88379", // Teal 500
  Motivation: "#FFD966", // Purple 500
  Anger: "#D9534F", // Crimson
  Mindfulness: "#B7C8B5", // Violet
};

export const getCategoriesColor = (category: string) => {
  const categoriesAndColor: Record<string, string> = {
    Anxiety: "#A8C5DA", 
    Depression: "#6B6B9F", 
    Relationships: "#F4A9A8", 
    Productivity: "#7FDBFF", 
    "Work & Burnout": "#C2B280", 
    Sleep: "#BFA2DB", 
    "Self-Esteem": "#F88379", 
    Motivation: "#FFD966", 
    Anger: "#D9534F", 
    Mindfulness: "#B7C8B5", 
  };

  return categoriesAndColor[category];
};

export const categoriesIcon = {
  Anxiety: Frown, // Red
  Depression: HeartCrack , // Blue
  Relationships: Heart, // Teal
  Productivity: BatteryPlus, // Orange
  "Work & Burnout": Flame, // Green
  Sleep: Bed, // Dark Green
  "Self-Esteem": HeartPulse, // Orange-Yellow
  Motivation: ShieldCheck, // Reddish-Pink
  Anger: Angry, // Crimson
  Mindfulness: Brain, // Violet
};

export const categories = [
  {
    name: "Anxiety",
    totalPosts: 10,
    icon: Frown,
  },
  {
    name: "Depression",
    totalPosts: 5,
    icon: HeartCrack ,
  },
  {
    name: "Relationships",
    totalPosts: 8,
    icon: Heart,
  },
  {
    name: "Productivity",
    totalPosts: 12,
    icon: ShieldCheck,
  },
  {
    name: "Work & Burnout",
    totalPosts: 15,
    icon: Flame,
  },
  {
    name: "Sleep",
    totalPosts: 20,
    icon: Bed,
  },
  {
    name: "Self-Esteem",
    totalPosts: 25,
    icon: HeartPulse,
  },
  {
    name: "Motivation",
    totalPosts: 30,
    icon: ShieldCheck,
  },
  {
    name: "Anger",
    totalPosts: 30,
    icon: Angry,
  },
  {
    name: "Mindfulness",
    totalPosts: 30,
    icon: Brain,
  },
];

export const calmCompanions = [
  {
    id: "$#kjfs;lkdj",
    title: "Reduce Anxiety with Mindfulness",
    description:
      "Learn how mindfulness can help reduce anxiety and improve your mental well-being.",
    category: "Anxiety",
    duration: 45,
  },
  {
    id: "$1a2bsd3c4d",
    title: "Deep Breathing for Anxiety Relief",
    description:
      "Discover simple breathing techniques to help manage anxiety and promote relaxation.",
    category: "Anxiety",
    duration: 30,
  },
  {
    id: "$5e6f7ggf8h",
    title: "Progressive Muscle Relaxation",
    description:
      "A guided session to relieve muscle tension and reduce anxiety symptoms.",
    category: "Anxiety",
    duration: 40,
  },
  {
    id: "$9i0j1sdk2l",
    title: "Managing Social Anxiety",
    description:
      "Strategies to cope with social situations that trigger anxiety.",
    category: "Anxiety",
    duration: 35,
  },
  {
    id: "$m4n5fsdo6p7",
    title: "Overcoming Panic Attacks",
    description:
      "Learn techniques to manage and minimize panic attack symptoms.",
    category: "Anxiety",
    duration: 50,
  },

  {
    id: "$q8r9dahjs0t1",
    title: "Depression Self-Help Strategies",
    description:
      "Explore practical self-help methods for managing depressive symptoms.",
    category: "Depression",
    duration: 45,
  },
  {
    id: "$u2v3wu54x5",
    title: "Mindfulness for Depression",
    description:
      "Incorporate mindfulness practices to alleviate depressive thoughts and emotions.",
    category: "Depression",
    duration: 60,
  },
  {
    id: "$y7z8axcv9b0",
    title: "Cognitive Behavioral Therapy (CBT) Basics",
    description:
      "Understand the principles of CBT and how to apply them for depression management.",
    category: "Depression",
    duration: 55,
  },

  {
    id: "$1c2d3e4568f",
    title: "Improving Communication in Relationships",
    description:
      "Learn effective communication strategies to strengthen your relationships.",
    category: "Relationships",
    duration: 60,
  },
  {
    id: "$zdgvccvbcbv",
    title: "Conflict Resolution Skills",
    description:
      "Master techniques for resolving disagreements constructively with loved ones.",
    category: "Relationships",
    duration: 45,
  },
  {
    id: "$9k0l1mu65eeg2n",
    title: "Building Trust in Relationships",
    description:
      "Explore ways to nurture trust and deepen connections with your partner or friends.",
    category: "Relationships",
    duration: 50,
  },

  {
    id: "$op3qqqdwfdf4r5s",
    title: "Time Management Techniques",
    description:
      "Implement effective time management strategies to boost productivity.",
    category: "Productivity",
    duration: 40,
  },
  {
    id: "$t6u7vxczfvxcve8w9",
    title: "Prioritizing Tasks for Maximum Efficiency",
    description:
      "Discover methods to prioritize tasks and focus on what truly matters.",
    category: "Productivity",
    duration: 35,
  },
  {
    id: "$y0z1a2sdfgw5y53b3",
    title: "Avoiding Procrastination",
    description:
      "Learn strategies to overcome procrastination and stay focused on your goals.",
    category: "Productivity",
    duration: 45,
  },

  {
    id: "$4e5hsgfdxvcf6g7h",
    title: "Setting Boundaries at Work",
    description:
      "Establish healthy work-life boundaries to prevent burnout and maintain well-being.",
    category: "Work & Burnout",
    duration: 30,
  },
  {
    id: "$8i9sdfgs53j0k1l",
    title: "Mindful Breaks for Stress Reduction",
    description:
      "Explore short, guided mindfulness exercises to manage work-related stress.",
    category: "Work & Burnout",
    duration: 25,
  },
  {
    id: "$m2nsdcvt53o4p5",
    title: "Healthy Work Habits for Sustainability",
    description:
      "Develop long-term strategies to maintain a healthy work-life balance.",
    category: "Work & Burnout",
    duration: 50,
  },

  {
    id: "$q8rzzzwg9s0t1",
    title: "Improving Sleep Hygiene",
    description:
      "Create a sleep-conducive environment and routine for better rest.",
    category: "Sleep",
    duration: 40,
  },
  {
    id: "$u2v3vvbewwww4x5",
    title: "Relaxation Techniques for Better Sleep",
    description:
      "Learn various relaxation methods to help fall asleep faster and stay asleep.",
    category: "Sleep",
    duration: 35,
  },
  {
    id: "$y7zxxverq8a9b0",
    title: "Managing Insomnia Symptoms",
    description:
      "Address common causes of insomnia and practical solutions to improve sleep quality.",
    category: "Sleep",
    duration: 60,
  },

  {
    id: "$1c2fye4y322d3e4f",
    title: "Boosting Self-Esteem Through Affirmations",
    description:
      "Discover the power of positive affirmations for enhancing self-esteem.",
    category: "Self-Esteem",
    duration: 30,
  },
  {
    id: "$xxcvxdcvwww",
    title: "Overcoming Negative Self-Talk",
    description:
      "Develop strategies to recognize and combat harmful inner dialogues.",
    category: "Self-Esteem",
    duration: 45,
  },
  {
    id: "$9k0l1hhhgtrherm2n",
    title: "Building Confidence in Social Situations",
    description:
      "Learn techniques for boosting confidence when interacting with others.",
    category: "Self-Esteem",
    duration: 50,
  },

  {
    id: "$op3qfgeeegert4r5s",
    title: "Motivational Strategies for Goal Achievement",
    description:
      "Explore methods to stay motivated and overcome obstacles in pursuit of your goals.",
    category: "Motivation",
    duration: 40,
  },
];
