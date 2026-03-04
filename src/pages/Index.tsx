import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import MovieCarousel from "@/components/MovieCarousel";
import FeaturedMovie from "@/components/FeaturedMovie";
import Footer from "@/components/Footer";

import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const mostViewed = [
  { image: movie1, title: "Shadow Agent", subtitle: "Action · 2024" },
  { image: movie2, title: "Family Fun", subtitle: "Comedy · 2023" },
  { image: movie3, title: "Alien Contact", subtitle: "Sci-Fi · 2024" },
  { image: movie4, title: "Dark Whisper", subtitle: "Horror · 2023" },
  { image: movie5, title: "The Warriors", subtitle: "Fantasy · 2024" },
  { image: movie6, title: "Hero Rising", subtitle: "Action · 2024" },
];

const mostPopular = [
  { image: movie5, title: "The Warriors", subtitle: "Fantasy · 2024" },
  { image: movie3, title: "Alien Contact", subtitle: "Sci-Fi · 2024" },
  { image: movie6, title: "Hero Rising", subtitle: "Action · 2024" },
  { image: movie1, title: "Shadow Agent", subtitle: "Action · 2024" },
  { image: movie4, title: "Dark Whisper", subtitle: "Horror · 2023" },
  { image: movie2, title: "Family Fun", subtitle: "Comedy · 2023" },
];

const tvSeries = [
  { image: movie4, title: "Stranger Things", subtitle: "Season 5 · Dual Audio" },
  { image: movie1, title: "The Boys", subtitle: "Season 3 · Dual Audio" },
  { image: movie3, title: "The Expanse", subtitle: "Dual Audio" },
  { image: movie5, title: "Game of Thrones", subtitle: "Complete Series" },
  { image: movie6, title: "1899", subtitle: "Season 1 · Multi Audio" },
  { image: movie2, title: "Wanted", subtitle: "2024" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryFilter />
      <MovieCarousel title="Most Viewed" movies={mostViewed} />

      <FeaturedMovie
        image={featured1}
        title="BLACK ADAM"
        rating="4.0"
        imdb="8.1"
        description="Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice."
      />

      <MovieCarousel title="Most Popular" movies={mostPopular} />

      <div className="px-6 md:px-12 py-8">
        <h2 className="font-display text-4xl md:text-5xl text-center text-foreground tracking-wide">
          Popular TV Series
        </h2>
      </div>

      <FeaturedMovie
        image={featured2}
        title="THE FLASH : SEASON 9"
        rating="4.0"
        imdb="7.8"
        description="After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the next Flash fighting crime in Central City."
      />

      <MovieCarousel title="Trending Series" movies={tvSeries} />
      <Footer />
    </div>
  );
};

export default Index;
