import React from "react";
import { Calendar, Eye, PenTool } from "lucide-react";
import Card from "../../../components/molecules/Card/Card";
import Text from "../../../components/atoms/Text/Text";

type Blog = {
  title: string;
  author: string;
  date: string;
  views?: string;
  imageUrl: string;
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => (
  <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img src={blog.imageUrl} alt={blog.title} className="w-full h-52 object-cover" />
    <div className="p-6">
      <Text size="xl" weight="bold" className="mb-2">{blog.title}</Text>
      <div className="flex items-center text-sm text-gray-500 space-x-4">
        <div className="flex items-center">
          <PenTool size={14} className="mr-1" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{blog.date}</span>
        </div>
        {blog.views && (
          <div className="flex items-center">
            <Eye size={14} className="mr-1" />
            <span>{blog.views}</span>
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default BlogCard;