import{ type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
