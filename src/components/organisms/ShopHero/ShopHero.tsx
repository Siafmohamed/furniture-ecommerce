import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";

type ShopHeroProps = {
  title: string;
  subtitle?: string;
  backgroundUrl?: string;
};

const ShopHero: React.FC<ShopHeroProps> = ({
  title,
  subtitle = "Home / Shop",
  backgroundUrl = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-100">
      <img
        src={backgroundUrl}
        alt={title}
        className="h-56 w-full object-cover sm:h-72"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <Text size="sm" weight="medium" className="uppercase tracking-[0.2em] text-white/80">
          {subtitle}
        </Text>
        <Heading level={1} size="3xl" weight="bold" className="mt-2">
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default ShopHero;

