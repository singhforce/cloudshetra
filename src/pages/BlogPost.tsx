import { useParams } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog post data
const blogPosts = {
  "1": {
    title: "The Art of Minimalist Design",
    content: `
      <p>Minimalism in design is more than just a trend—it's a philosophy that emphasizes the power of simplicity. When we strip away the unnecessary, we're left with elements that truly matter.</p>
      
      <h2>What Makes Design Minimalist?</h2>
      <p>True minimalist design follows several key principles:</p>
      <ul>
        <li><strong>Intentional Use of Space:</strong> Every element has a purpose and breathing room</li>
        <li><strong>Limited Color Palette:</strong> Fewer colors create harmony and focus</li>
        <li><strong>Typography Hierarchy:</strong> Clear, readable fonts that guide the eye</li>
        <li><strong>Functional Beauty:</strong> Aesthetics that enhance usability</li>
      </ul>
      
      <h2>The Psychology Behind Minimalism</h2>
      <p>Research shows that cluttered environments can increase cortisol levels and reduce focus. Minimalist design creates calm, allowing users to concentrate on what matters most.</p>
      
      <blockquote>
        "Simplicity is the ultimate sophistication." - Leonardo da Vinci
      </blockquote>
      
      <p>This principle applies beautifully to modern web and product design, where user attention is precious and fleeting.</p>
    `,
    author: "Emma Chen",
    publishDate: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "/api/placeholder/800/400"
  },
  "2": {
    title: "Building Sustainable Web Applications",
    content: `
      <p>As developers, we have a responsibility to create applications that are not just functional, but also environmentally conscious. Sustainable web development is becoming increasingly important.</p>
      
      <h2>Key Principles of Green Development</h2>
      <p>Creating sustainable applications involves several considerations:</p>
      
      <h3>Optimized Performance</h3>
      <ul>
        <li>Minimize bundle sizes and HTTP requests</li>
        <li>Implement efficient caching strategies</li>
        <li>Use modern image formats like WebP and AVIF</li>
        <li>Leverage code splitting and lazy loading</li>
      </ul>
      
      <h3>Efficient Hosting</h3>
      <p>Choose hosting providers that use renewable energy and efficient data centers. Consider edge computing to reduce data transfer distances.</p>
      
      <h2>The Impact of Our Choices</h2>
      <p>Every optimization we make contributes to reduced energy consumption. A faster website uses less CPU, which translates to lower power consumption for both servers and user devices.</p>
    `,
    author: "Alex Rodriguez",
    publishDate: "Dec 12, 2024",
    readTime: "7 min read",
    category: "Development",
    image: "/api/placeholder/800/400"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-elegant">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-foreground leading-relaxed space-y-6"
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;