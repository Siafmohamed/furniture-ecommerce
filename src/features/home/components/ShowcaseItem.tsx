import React from "react";
import Heading from "../../../components/atoms/Heading/Heading";
import Text from "../../../components/atoms/Text/Text";
import Icon from "../../../components/atoms/Icon/Icon";

type ShowcaseItemProps = {
  title: string;
  imageUrl: string;
};

const ShowcaseItem = ({ title, imageUrl }: ShowcaseItemProps) => (
  <div className="p-4 text-center">
    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-cover transition duration-500 hover:scale-[1.03]"
      />
    </div>
    <Heading level={3} size="xl">
      {title}
    </Heading>
    <a href="#" className="mt-2 text-sm text-gray-600 flex items-center justify-center hover:text-amber-600 transition">
      <Text size="sm" color="text-gray-600">
        View More <Icon name="ArrowRight" size="small" className="ml-1" />
      </Text>
    </a>
  </div>
);

export default ShowcaseItem;