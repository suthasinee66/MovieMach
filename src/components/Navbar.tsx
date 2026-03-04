import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-display tracking-wider text-primary">
          Movie Love
        </h1>
        <div className="hidden md:flex items-center gap-6">
          {["Home", "TV Shows", "Movies", "Upcoming"].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search movie"
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-32"
          />
        </div>
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
