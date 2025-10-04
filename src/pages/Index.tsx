import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn Anything, Anytime
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Master new skills with our expert-led courses designed for your success
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {filteredCourses.length === courses.length
                ? "All Courses"
                : `Found ${filteredCourses.length} course${filteredCourses.length !== 1 ? "s" : ""}`}
            </h2>
            <p className="text-muted-foreground">
              Choose from our selection of professionally crafted courses
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No courses found matching your criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
