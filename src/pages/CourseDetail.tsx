import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [courseProgress, setCourseProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem(`course-${id}-progress`);
    if (saved) {
      setCourseProgress(JSON.parse(saved));
    }
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleLesson = (lessonId: string) => {
    const newProgress = {
      ...courseProgress,
      [lessonId]: !courseProgress[lessonId],
    };
    setCourseProgress(newProgress);
    localStorage.setItem(`course-${id}-progress`, JSON.stringify(newProgress));
    
    if (!courseProgress[lessonId]) {
      toast({
        title: "Lesson Completed! 🎉",
        description: "Great job! Keep up the momentum.",
      });
    }
  };

  const completedLessons = Object.values(courseProgress).filter(Boolean).length;
  const progressPercentage = (completedLessons / course.lessons.length) * 100;
  const allCompleted = completedLessons === course.lessons.length;

  const markCourseComplete = () => {
    const allLessonsComplete = course.lessons.reduce((acc, lesson) => {
      acc[lesson.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCourseProgress(allLessonsComplete);
    localStorage.setItem(`course-${id}-progress`, JSON.stringify(allLessonsComplete));
    toast({
      title: "Course Completed! 🎓",
      description: "Congratulations on completing the entire course!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Badge className="mb-4 bg-white/20 text-primary-foreground hover:bg-white/30">
                {course.level}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-primary-foreground/90 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span>{course.rating} rating</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About this course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Taught by <span className="font-semibold text-foreground">{course.instructor}</span>
                </p>
                <p className="text-muted-foreground">
                  This comprehensive course will take you through all the essential topics you need to master.
                  Each lesson is carefully designed to build upon previous knowledge, ensuring a smooth learning experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>
                  {course.lessons.length} lessons • {completedLessons} completed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {course.lessons.map((lesson, index) => {
                  const isCompleted = courseProgress[lesson.id];
                  return (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-success" />
                          ) : (
                            <Circle className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">
                            {index + 1}. {lesson.title}
                          </h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant={isCompleted ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        {isCompleted ? "Unmark" : "Complete"}
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-semibold">
                      {completedLessons} / {course.lessons.length}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    {Math.round(progressPercentage)}% Complete
                  </p>
                </div>

                {!allCompleted ? (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={markCourseComplete}
                  >
                    Mark Course as Complete
                  </Button>
                ) : (
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-2" />
                    <p className="font-semibold text-success">Course Completed!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Congratulations on finishing this course!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
