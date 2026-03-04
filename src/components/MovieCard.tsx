interface MovieCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const MovieCard = ({ image, title, subtitle }: MovieCardProps) => {
  return (
    <div className="group flex-shrink-0 w-[160px] md:w-[180px] cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-2 aspect-[2/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
      </div>
      <p className="text-xs text-foreground font-medium truncate">{title}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
      )}
    </div>
  );
};

export default MovieCard;
