import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishDate, 
  readTime, 
  category, 
  image,
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-card-gradient ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <Link to={`/post/${id}`}>
        {image && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={title}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                featured ? 'h-64' : 'h-48'
              }`}
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                {category}
              </Badge>
            </div>
          </div>
        )}
        
        <CardHeader className={featured ? 'pb-3' : 'pb-2'}>
          <h3 className={`font-bold transition-colors group-hover:text-primary ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>
        </CardHeader>
        
        <CardContent className="pb-4">
          <p className={`text-muted-foreground leading-relaxed ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between text-sm text-muted-foreground pt-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <span>{publishDate}</span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;