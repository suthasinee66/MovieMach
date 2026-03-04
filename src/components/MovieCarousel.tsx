import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

interface Movie {
  image: string;
  title: string;
  subtitle?: string;
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  return (
    <section className="px-6 md:px-12 py-8">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-2xl tracking-wide text-foreground">{title}</h3>
        <a href="#" className="flex items-center gap-1 text-xs text-primary hover:underline">
          View all <ChevronRight className="w-3 h-3" />
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieCarousel;
