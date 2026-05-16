const MovieCard = ({
  movie,
  onFavorite,
  isFavorite,
}) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={imageURL}
        alt={movie.title}
        loading="lazy"
        className="w-full h-[400px] object-cover"
      />

      <div className="p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-bold text-lg">
            {movie.title}
          </h2>

          <button
            onClick={() =>
              onFavorite(movie)
            }
            className="text-2xl"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="flex justify-between text-sm text-zinc-400">
          <span>
            {movie.release_date?.split(
              "-"
            )[0]}
          </span>

          <span>
            ⭐ {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;