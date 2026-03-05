import { useState } from "react";

const categories = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Romance",
  "Thriller",
  "Sci-Fi",
  "Horror",
  "Crime"
];
interface Props {
  onChange: (category: string) => void;
}

const CategoryFilter = ({ onChange }: Props) => {
  const [active, setActive] = useState("All");

  const handleClick = (cat: string) => {
    setActive(cat);
    onChange(cat); // ส่งค่ากลับไปหน้า parent
  };

  return (
    <div className="flex items-center gap-3 px-6 md:px-12 py-6 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            active === cat
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;