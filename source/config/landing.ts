import { FeatureLdg, InfoLdg, TestimonialType, CtaSection } from "types";

export const infos: InfoLdg[] = [
  {
    title: "1. SnapSummarize.",
    description:
      "Read less, do more. Get overviews of channel chats with actions and blockers summarised with a couple of keystrokes.",
    image: "/slack-clips.gif",
    button: {
      primary: {
        text: "Free Trial",
        url: "/features/summarize"
      },
      secondary: {
        text: "Pricing",
        url: "/pricing"
      }
    },
    list: [
      {
        title: "Less reading, more doing.",
        description: "Stay up to speed and keep your team on point with laser-focused, on-demand summaries.",
        icon: "laptop",
      },
      {
        title: "No dumb answers.",
        description: "Give context, get context. Teach your personal AI about team members and projects to get tuned-in recommendations.",
        icon: "laptop",
      },
      {
        title: "Accountability and action at every step.",
        description:
          "Help the team move forward. Record decisions in channel, get highlights on wins, issues and blockers.",
        icon: "laptop",
      },
    ],
  },
  {
    title: "2. SnapFlow.",
    description:
      "Claim back clarity, focus and productivity. Smash through your goals. Find your flow state. Get things done without feeling overwhelmed.",
    image: "/slack-clips.gif",
    button: {
      primary: {
        text: "GetEarly Access",
        url: "/features/flow"
      },
      secondary: {
        text: "Pricing",
        url: "/pricing"
      }
    },
    list: [
      {
        title: "Do the most important things first.",
        description:
          "Prioritise your projects and todo list. A virtual assistant that helps you break down big tasks into achievable chunks and deliver what matters.",
        icon: "laptop",
      },
      {
        title: "Find your flow state.",
        description: "Ring fence your time for deep work. Find your flow state for better thinking.",
        icon: "laptop",
      },
      {
        title: "Improve everything.",
        description:
          "Tailor you todo based on how you feel. Track your progress and how you feel. Order your day based on your mood to get the best results.",
        icon: "laptop",
      },
    ],
  },
  {
    title: "3. SnapSense.",
    description:
      "A sixth sense for team vibes, project performance and personal happiness. Keep your team on track and your people happy with weekly temperature checks, all within Slack.",
    image: "/slack-clips.gif",
    button: {
      primary: {
        text: "Get Early Access",
        url: "/features/sense"
      },
      secondary: {
        text: "Pricing",
        url: "/pricing"
      }
    },
    list: [
      {
        title: "Project performance.",
        description:
          "Get intelligence on how your team members are performing and interacting with each other.",
        icon: "laptop",
      },
      {
        title: "People performance.",
        description: "Streamline your processes and reducing manual effort.",
        icon: "laptop",
      },
      {
        title: "Better one-to-ones.",
        description:
          "Get intelligence on how your team members are performing and interacting with each other.",
        icon: "laptop",
      },
    ],
  }
];

export const features: FeatureLdg[] = [
  {
    title: "Feature 1",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Feature 2",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "settings",
  },
  {
    title: "Feature 3",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "gitHub",
  },
  {
    title: "Feature 4",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Feature 5",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "user",
  },
  {
    title: "Feature 6",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "copy",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The next-saas-stripe-starter repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend next-saas-stripe-starter to any developer.",
  },
  {
    name: "Alice Smith",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time. ",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!",
  },
  {
    name: "Emily Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  },
  {
    name: "Jason Stan",
    job: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
];

export const ctaSection: CtaSection = {
  title: "Ready to get started?",
  subtitle: "Join thousands of users who are already using our platform.",
  videoSrc: "/videos/cta-background.mp4",
  button: {
    text: "Get Started",
  },
  input: {
    placeholder: "Enter your email",
  },
};
