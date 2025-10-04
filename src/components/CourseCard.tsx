import { Link } from "react-router-dom";
import { Course } from "@/data/courses";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in">
        <div className="relative overflow-hidden h-48">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {course.level}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>
          </div>
          <p className="text-sm font-medium text-foreground">by {course.instructor}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
