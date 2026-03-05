import { Search, User } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Top Movies", path: "/movies/top" },
    { name: "Recommended", path: "/movies/recommended" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-display tracking-wider text-primary cursor-pointer"
        >
          Movie Love
        </h1>

        {/* 🔥 Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="Search movie"
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40"
          />

          <button
            onClick={handleSearch}
            className="p-1 rounded-full hover:bg-primary/20 transition"
          >
            <Search className="w-4 h-4 text-muted-foreground hover:text-primary" />
          </button>
        </div>

        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;