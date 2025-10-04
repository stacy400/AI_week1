export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  students: number;
  rating: number;
  image: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Modern Web Development",
    description: "Master the fundamentals of modern web development with React, TypeScript, and Tailwind CSS.",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    level: "Intermediate",
    students: 1234,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    lessons: [
      { id: "1-1", title: "Introduction to React", duration: "45 min", completed: false },
      { id: "1-2", title: "TypeScript Basics", duration: "60 min", completed: false },
      { id: "1-3", title: "Component Architecture", duration: "50 min", completed: false },
      { id: "1-4", title: "State Management", duration: "55 min", completed: false },
      { id: "1-5", title: "Styling with Tailwind", duration: "40 min", completed: false },
      { id: "1-6", title: "Building Your First App", duration: "90 min", completed: false },
    ],
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Learn Python programming and data analysis with pandas, NumPy, and visualization libraries.",
    instructor: "Michael Chen",
    duration: "12 hours",
    level: "Beginner",
    students: 2567,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop",
    lessons: [
      { id: "2-1", title: "Python Fundamentals", duration: "60 min", completed: false },
      { id: "2-2", title: "Working with Data Structures", duration: "75 min", completed: false },
      { id: "2-3", title: "Introduction to NumPy", duration: "65 min", completed: false },
      { id: "2-4", title: "Data Analysis with Pandas", duration: "90 min", completed: false },
      { id: "2-5", title: "Data Visualization", duration: "70 min", completed: false },
      { id: "2-6", title: "Real-World Projects", duration: "120 min", completed: false },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with industry-standard design principles.",
    instructor: "Emily Rodriguez",
    duration: "10 hours",
    level: "Intermediate",
    students: 987,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    lessons: [
      { id: "3-1", title: "Design Principles", duration: "50 min", completed: false },
      { id: "3-2", title: "User Research Methods", duration: "65 min", completed: false },
      { id: "3-3", title: "Wireframing & Prototyping", duration: "80 min", completed: false },
      { id: "3-4", title: "Color Theory & Typography", duration: "60 min", completed: false },
      { id: "3-5", title: "Design Systems", duration: "70 min", completed: false },
      { id: "3-6", title: "Portfolio Project", duration: "105 min", completed: false },
    ],
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    description: "Dive into machine learning algorithms, neural networks, and AI applications.",
    instructor: "David Park",
    duration: "15 hours",
    level: "Advanced",
    students: 1543,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
    lessons: [
      { id: "4-1", title: "Introduction to ML", duration: "55 min", completed: false },
      { id: "4-2", title: "Supervised Learning", duration: "90 min", completed: false },
      { id: "4-3", title: "Unsupervised Learning", duration: "85 min", completed: false },
      { id: "4-4", title: "Neural Networks", duration: "100 min", completed: false },
      { id: "4-5", title: "Deep Learning", duration: "110 min", completed: false },
      { id: "4-6", title: "Model Deployment", duration: "80 min", completed: false },
    ],
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    description: "Master digital marketing channels, SEO, social media, and content marketing strategies.",
    instructor: "Jessica Thompson",
    duration: "9 hours",
    level: "Beginner",
    students: 3421,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    lessons: [
      { id: "5-1", title: "Digital Marketing Overview", duration: "40 min", completed: false },
      { id: "5-2", title: "SEO Fundamentals", duration: "70 min", completed: false },
      { id: "5-3", title: "Content Marketing", duration: "65 min", completed: false },
      { id: "5-4", title: "Social Media Strategy", duration: "75 min", completed: false },
      { id: "5-5", title: "Email Marketing", duration: "55 min", completed: false },
      { id: "5-6", title: "Analytics & Optimization", duration: "85 min", completed: false },
    ],
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native and modern mobile development practices.",
    instructor: "Alex Kumar",
    duration: "14 hours",
    level: "Intermediate",
    students: 876,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    lessons: [
      { id: "6-1", title: "Mobile Development Basics", duration: "50 min", completed: false },
      { id: "6-2", title: "React Native Setup", duration: "45 min", completed: false },
      { id: "6-3", title: "Navigation & Routing", duration: "80 min", completed: false },
      { id: "6-4", title: "State Management", duration: "75 min", completed: false },
      { id: "6-5", title: "Native APIs", duration: "90 min", completed: false },
      { id: "6-6", title: "App Publishing", duration: "100 min", completed: false },
    ],
  },
];
