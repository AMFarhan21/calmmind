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
    id: "0822604d-f329-4472-8ce1-976660101a97",
    title: "Reduce Anxiety with Mindfulness",
    description:
      "Learn how mindfulness can help reduce anxiety and improve your mental well-being.",
    category: "Anxiety",
    duration: 45,
  },
  {
    id: "08f0e315-621e-4f9a-aa81-8cf53638bbb3",
    title: "Deep Breathing for Anxiety Relief",
    description:
      "Discover simple breathing techniques to help manage anxiety and promote relaxation.",
    category: "Anxiety",
    duration: 30,
  },
  {
    id: "eb7a3c50-fcce-4a02-9c60-18008e8edd49",
    title: "Progressive Muscle Relaxation",
    description:
      "A guided session to relieve muscle tension and reduce anxiety symptoms.",
    category: "Anxiety",
    duration: 40,
  },
  {
    id: "454f3265-f10d-4341-966a-e483bedd991d",
    title: "Managing Social Anxiety",
    description:
      "Strategies to cope with social situations that trigger anxiety.",
    category: "Anxiety",
    duration: 35,
  },
  {
    id: "88c1d206-ffda-4e88-8a99-143fb434e465",
    title: "Overcoming Panic Attacks",
    description:
      "Learn techniques to manage and minimize panic attack symptoms.",
    category: "Anxiety",
    duration: 50,
  },

  {
    id: "81324071-3005-4c07-afa7-08c5963f2f82",
    title: "Depression Self-Help Strategies",
    description:
      "Explore practical self-help methods for managing depressive symptoms.",
    category: "Depression",
    duration: 45,
  },
  {
    id: "e134843d-6849-4f52-bc15-aa1203b2c569",
    title: "Mindfulness for Depression",
    description:
      "Incorporate mindfulness practices to alleviate depressive thoughts and emotions.",
    category: "Depression",
    duration: 60,
  },
  {
    id: "9a07fb67-d059-4dfe-92df-505151ec9780",
    title: "Cognitive Behavioral Therapy (CBT) Basics",
    description:
      "Understand the principles of CBT and how to apply them for depression management.",
    category: "Depression",
    duration: 55,
  },

  {
    id: "e73a1ae9-0285-4556-b752-105fe62707cd",
    title: "Improving Communication in Relationships",
    description:
      "Learn effective communication strategies to strengthen your relationships.",
    category: "Relationships",
    duration: 60,
  },
  {
    id: "d2f66ac9-de0d-42ee-9dc8-5ea12330a6fb",
    title: "Conflict Resolution Skills",
    description:
      "Master techniques for resolving disagreements constructively with loved ones.",
    category: "Relationships",
    duration: 45,
  },
  {
    id: "fa41f980-c832-4fef-aa67-2db50d67775d",
    title: "Building Trust in Relationships",
    description:
      "Explore ways to nurture trust and deepen connections with your partner or friends.",
    category: "Relationships",
    duration: 50,
  },

  {
    id: "8f430df6-151c-48aa-8f14-d9dee9779eed",
    title: "Time Management Techniques",
    description:
      "Implement effective time management strategies to boost productivity.",
    category: "Productivity",
    duration: 40,
  },
  {
    id: "a0be6edc-8da6-48c6-b1bf-b3d050df4753",
    title: "Prioritizing Tasks for Maximum Efficiency",
    description:
      "Discover methods to prioritize tasks and focus on what truly matters.",
    category: "Productivity",
    duration: 35,
  },
  {
    id: "5976c5e3-def6-46d2-944c-77e65375409f",
    title: "Avoiding Procrastination",
    description:
      "Learn strategies to overcome procrastination and stay focused on your goals.",
    category: "Productivity",
    duration: 45,
  },

  {
    id: "121dcfd7-a3db-45b5-95df-52bd4375f6f7",
    title: "Setting Boundaries at Work",
    description:
      "Establish healthy work-life boundaries to prevent burnout and maintain well-being.",
    category: "Work & Burnout",
    duration: 30,
  },
  {
    id: "f6a7122f-5b51-48fb-a166-d9cdf1b2ae10",
    title: "Mindful Breaks for Stress Reduction",
    description:
      "Explore short, guided mindfulness exercises to manage work-related stress.",
    category: "Work & Burnout",
    duration: 25,
  },
  {
    id: "f6be93d4-ffc2-4c46-a401-f50bdd33df55",
    title: "Healthy Work Habits for Sustainability",
    description:
      "Develop long-term strategies to maintain a healthy work-life balance.",
    category: "Work & Burnout",
    duration: 50,
  },

  {
    id: "bd4250fb-9557-4b8e-ad68-083c73770232",
    title: "Improving Sleep Hygiene",
    description:
      "Create a sleep-conducive environment and routine for better rest.",
    category: "Sleep",
    duration: 40,
  },
  {
    id: "d6612055-252a-4c55-bb20-99c48e9ec205",
    title: "Relaxation Techniques for Better Sleep",
    description:
      "Learn various relaxation methods to help fall asleep faster and stay asleep.",
    category: "Sleep",
    duration: 35,
  },
  {
    id: "7a76e4e8-8309-4784-ad16-c4944dadc36e",
    title: "Managing Insomnia Symptoms",
    description:
      "Address common causes of insomnia and practical solutions to improve sleep quality.",
    category: "Sleep",
    duration: 60,
  },

  {
    id: "ad7162ee-c186-4aba-92a7-5d0f834df76f",
    title: "Boosting Self-Esteem Through Affirmations",
    description:
      "Discover the power of positive affirmations for enhancing self-esteem.",
    category: "Self-Esteem",
    duration: 30,
  },
  {
    id: "4793d52a-be70-4943-ad08-55ee9b40793f",
    title: "Overcoming Negative Self-Talk",
    description:
      "Develop strategies to recognize and combat harmful inner dialogues.",
    category: "Self-Esteem",
    duration: 45,
  },
  {
    id: "abe581a1-b034-4893-9d98-3e61175697a5",
    title: "Building Confidence in Social Situations",
    description:
      "Learn techniques for boosting confidence when interacting with others.",
    category: "Self-Esteem",
    duration: 50,
  },

  {
    id: "1cfc3537-d383-4cdc-a5e2-4ab729f04934",
    title: "Motivational Strategies for Goal Achievement",
    description:
      "Explore methods to stay motivated and overcome obstacles in pursuit of your goals.",
    category: "Motivation",
    duration: 40,
  },
];
