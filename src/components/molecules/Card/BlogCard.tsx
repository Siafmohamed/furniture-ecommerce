import Card from "../Card/Card";
import Heading from "../../atoms/Heading/Heading";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

type Blog = {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card>
      <img src={blog.imageUrl} alt={blog.title} className="w-full h-52 object-cover" />
      <div className="p-6">
        {/* Use Heading for the blog title */}
        <Heading level={3} size="xl" weight="bold" className="mb-2">
          {blog.title}
        </Heading>

        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Icon name="PenTool" size="small" className="mr-1" />
            <Text size="sm">{blog.author}</Text>
          </div>

          <div className="flex items-center">
            <Icon name="Calendar" size="small" className="mr-1" />
            <Text size="sm">{blog.date}</Text>
          </div>

          <div className="flex items-center">
            <Icon name="Eye" size="small" className="mr-1" />
            <Text size="sm">4.5K views</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;