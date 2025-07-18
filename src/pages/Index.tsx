import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/blog-hero.jpg";

// Mock blog data
const featuredPosts = [
  {
    id: "1",
    title: "The Art of Minimalist Design",
    excerpt: "Discover how minimalism can transform your creative process and lead to more impactful designs that truly resonate with your audience.",
    author: "Emma Chen",
    publishDate: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: "2", 
    title: "Building Sustainable Web Applications",
    excerpt: "Learn practical strategies for creating environmentally conscious applications that perform better and consume less energy.",
    author: "Alex Rodriguez",
    publishDate: "Dec 12, 2024",
    readTime: "7 min read",
    category: "Development",
    image: "/api/placeholder/600/400"
  }
];

const recentPosts = [
  {
    id: "3",
    title: "The Future of Remote Collaboration",
    excerpt: "Exploring emerging technologies and methodologies that are reshaping how distributed teams work together effectively.",
    author: "Sarah Johnson",
    publishDate: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Technology",
    image: "/api/placeholder/600/400"
  },
  {
    id: "4",
    title: "Typography in Digital Storytelling",
    excerpt: "How the right font choices can enhance narrative flow and create emotional connections with your readers.",
    author: "Michael Park",
    publishDate: "Dec 8, 2024",
    readTime: "4 min read",
    category: "Design",
    image: "/api/placeholder/600/400"
  },
  {
    id: "5",
    title: "AI-Powered Content Creation",
    excerpt: "Examining the evolving landscape of artificial intelligence in creative industries and its impact on traditional workflows.",
    author: "Lisa Wang",
    publishDate: "Dec 5, 2024",
    readTime: "8 min read",
    category: "AI",
    image: "/api/placeholder/600/400"
  },
  {
    id: "6",
    title: "Sustainable Design Practices",
    excerpt: "A comprehensive guide to eco-friendly design principles that reduce environmental impact without compromising quality.",
    author: "David Thompson",
    publishDate: "Dec 3, 2024",
    readTime: "5 min read",
    category: "Sustainability",
    image: "/api/placeholder/600/400"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Blog Hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Stories That
              <span className="block bg-text-gradient bg-clip-text text-transparent">
                Inspire
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
              Discover insights, tutorials, and stories from creative professionals 
              who are shaping the future of design and technology.
            </p>
            <Button size="lg" variant="secondary" className="animate-slide-up">
              Start Reading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <Star className="h-8 w-8 text-accent mr-3" />
              Featured Stories
            </h2>
            <p className="text-muted-foreground">
              Curated content from our most talented writers
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                Latest Articles
              </h2>
              <p className="text-muted-foreground">
                Fresh perspectives and cutting-edge insights
              </p>
            </div>
            <Button variant="outline">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center bg-card-gradient rounded-2xl p-12 shadow-elegant">
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-8">
            Get the latest stories and insights delivered directly to your inbox. 
            Join our community of creative professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
