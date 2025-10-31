// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share, Facebook, Twitter, Linkedin } from "lucide-react";

// Blog post data - in a real app, this would come from a CMS
const blogPosts = {
  "advancements-in-cardiac-care": {
    id: 1,
    title: "Advancements in Cardiac Care: New Heart Treatment Options",
    excerpt: "Discover the latest innovations in cardiology that are revolutionizing heart disease treatment across our hospitals.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Dr. Adebayo Johnson",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    authorRole: "Head of Cardiology",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Cardiology",
    content: `
      <p>Cardiac care has undergone remarkable transformations in recent years, with new technologies and treatment approaches significantly improving patient outcomes. At Michael Cross Specialist Hospital, we're at the forefront of implementing these advancements across our network of 51 facilities.</p>

      <h2>Minimally Invasive Procedures</h2>
      <p>One of the most significant developments in cardiology has been the shift towards minimally invasive procedures. Techniques like transcatheter aortic valve replacement (TAVR) and robotic-assisted heart surgery allow patients to recover faster with fewer complications.</p>

      <p>Our cardiac team has successfully performed over 500 TAVR procedures in the past year alone, with a 98% success rate and average hospital stays reduced from 7 days to just 2-3 days.</p>

      <h2>Advanced Imaging Technology</h2>
      <p>The integration of artificial intelligence with cardiac imaging has revolutionized how we diagnose and monitor heart conditions. Our facilities now feature:</p>

      <ul>
        <li>AI-enhanced echocardiography for precise measurements</li>
        <li>3D cardiac MRI for detailed structural analysis</li>
        <li>Coronary CT angiography with fractional flow reserve</li>
      </ul>

      <h2>Personalized Treatment Plans</h2>
      <p>Through genetic testing and advanced diagnostics, we can now create highly personalized treatment plans for patients with heart conditions. This approach considers individual risk factors, genetic predispositions, and lifestyle factors to optimize outcomes.</p>

      <blockquote>
        "The future of cardiology lies in prevention and personalization. By identifying risks early and tailoring treatments, we're seeing unprecedented improvements in patient outcomes." - Dr. Adebayo Johnson
      </blockquote>

      <h2>Remote Patient Monitoring</h2>
      <p>Our remote monitoring program allows patients with chronic heart conditions to be tracked from home using wearable technology. This has reduced emergency hospital admissions by 45% and improved medication adherence.</p>

      <p>As we continue to innovate, our commitment remains to provide accessible, advanced cardiac care to communities across Nigeria. With 14 states covered and more facilities planned, quality heart care is becoming increasingly available to those who need it most.</p>
    `
  },
  "pediatric-health-tips": {
    id: 2,
    title: "Pediatric Health: Keeping Our Children Safe and Healthy",
    excerpt: "Essential tips and insights for parents on maintaining children's health through different developmental stages.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da60319?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Dr. Funmi Adebayo",
    authorImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    authorRole: "Head of Pediatrics",
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Pediatrics",
    content: `
      <p>Children's health requires special attention and care at every developmental stage. As parents and caregivers, understanding key health principles can make a significant difference in your child's wellbeing.</p>

      <h2>Nutrition for Growing Children</h2>
      <p>Proper nutrition is fundamental to a child's growth and development. Ensure your child's diet includes:</p>

      <ul>
        <li>Balanced meals with fruits and vegetables</li>
        <li>Adequate protein for muscle development</li>
        <li>Calcium-rich foods for bone health</li>
        <li>Healthy fats for brain development</li>
      </ul>

      <h2>Vaccination Schedule Adherence</h2>
      <p>Following the recommended vaccination schedule is crucial for protecting children from preventable diseases. Our pediatric departments across all 51 locations maintain complete vaccination records and provide timely reminders to parents.</p>

      <h2>Common Childhood Illnesses</h2>
      <p>Understanding when to seek medical attention for common childhood illnesses can prevent complications. Watch for these warning signs:</p>

      <ul>
        <li>High fever that doesn't respond to medication</li>
        <li>Difficulty breathing or rapid breathing</li>
        <li>Dehydration signs (dry mouth, no tears, reduced urination)</li>
        <li>Unusual lethargy or irritability</li>
      </ul>
    `
  }
  // Add other blog posts similarly...
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="relative">
        {/* Back Button */}
        <MaxWidthWrapper className="relative z-10 pt-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </MaxWidthWrapper>

        {/* Featured Image */}
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Article Content */}
        <MaxWidthWrapper className="relative -mt-20 z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="inline-block bg-app-blue text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Author Bio */}
            <div className="flex items-center space-x-4 mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600 text-sm">{post.authorRole}</p>
                <p className="text-gray-500 text-sm">Michael Cross Specialist Hospital</p>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-app-blue prose-blockquote:bg-blue-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Share className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Share this article:</span>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </article>

      {/* Related Articles */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore more health insights and medical updates from our specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(blogPosts)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 3)
            .map(([slug, relatedPost]) => (
              <Link key={slug} href={`/blog/${slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-app-blue transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}