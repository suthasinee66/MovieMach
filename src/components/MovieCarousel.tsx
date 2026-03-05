import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

interface Movie {
  image: string;
  title: string;
  subtitle?: string;
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  type: "recommended" | "top";
}

const MovieCarousel = ({ title, movies, type }: MovieCarouselProps) => {
  return (
    <section className="px-6 md:px-12 py-8">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-2xl tracking-wide text-foreground">
          {title}
        </h3>

        <Link
          to={`/movies/${type}`}
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieCarousel;
