import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

// Define type for blog post
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorPosition: string;
  image: string;
  tags: string[];
}

export const metadata = {
  title: 'Percy Blog - Insights on Digital Adoption & User Onboarding',
  description: 'Expert insights, best practices, and strategies for digital adoption platforms, product tours, and user onboarding optimization.',
};

export default function BlogPage() {
  // Get all blog posts
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);
  
  const posts: BlogPost[] = files.map(filename => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      authorPosition: data.authorPosition,
      image: data.image || '/blog/default-blog-image.png',
      tags: data.tags || [],
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get the main feature post and the remaining posts
  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 4); // Get the next 3 posts
  const remainingPosts = posts.slice(4); // Get any remaining posts

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 xl:px-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Percy Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expert insights and best practices for digital adoption platforms and user onboarding
        </p>
      </div>
      
      {/* Main Featured Post */}
      {mainPost && (
        <div className="mb-16">
          <Link 
            href={`/blog/${mainPost.slug}`}
            className="block group"
          >
            <div className="relative h-[500px] w-full mb-6 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={mainPost.image} 
                alt={mainPost.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white max-w-3xl">
                <div className="flex flex-wrap gap-2 mb-3">
                  {mainPost.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{mainPost.title}</h2>
                <p className="text-gray-200 mb-4 text-lg">{mainPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="font-medium">{mainPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(mainPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
      
      {/* Secondary Posts - 3 Column Layout */}
      {secondaryPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryPosts.map(post => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Remaining Posts - If Any */}
      {remainingPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map(post => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] flex flex-col h-full"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-1">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 mt-auto pt-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 