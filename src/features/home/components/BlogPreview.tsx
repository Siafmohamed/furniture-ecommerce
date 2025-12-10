import React from "react";
import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Button from "../../../components/atoms/Button/Button";
import Icon from "../../../components/atoms/Icon/Icon";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
};

const blogs: Blog[] = [
  { id: 1, title: "Going to the next level with modern design", author: "Anna", date: "21/08/2023", imageUrl: "https://placehold.co/400x250/F8F8FF/333?text=Blog+1" },
  { id: 2, title: "Our guide to 8 must-have interior design styles", author: "Mark", date: "21/08/2023", imageUrl: "https://placehold.co/400x250/E6E6FA/333?text=Blog+2" },
  { id: 3, title: "Giving life to multi-functional design", author: "Jane", date: "21/08/2023", imageUrl: "https://placehold.co/400x250/ADD8E6/333?text=Blog+3" },
];

const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img src={blog.imageUrl} alt={blog.title} className="w-full h-52 object-cover" />
    <div className="p-6">
      <Heading level={3} size="xl" className="mb-2">
        {blog.title}
      </Heading>
      <div className="flex items-center text-sm text-gray-500 space-x-4">
        <div className="flex items-center">
          <Icon name="PenTool" size="small" className="mr-1" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center">
          <Icon name="Calendar" size="small" className="mr-1" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center">
          <Icon name="Eye" size="small" className="mr-1" />
          <span>4.5K views</span>
        </div>
      </div>
    </div>
  </div>
);

const BlogPreview = () => (
  <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-12">
      <Heading level={2} size="3xl">
        Our Blogs
      </Heading>
      <Text size="base" color="text-gray-600" className="mt-2 max-w-lg mx-auto">
        Find inspiration for your next home renovation or design project with our expert guides.
      </Text>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
    <div className="text-center mt-10">
      <Button variant="outline">
        View All Blogs
      </Button>
    </div>
  </section>
);

export default BlogPreview;