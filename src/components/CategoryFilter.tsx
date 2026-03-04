import { useState } from "react";

const categories = ["All", "Action", "Comedy", "Series", "Adventure", "Other"];

const CategoryFilter = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex items-center gap-3 px-6 md:px-12 py-6 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
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
