import Image from "next/image";

const Movie = ({ title, index, overview, poster_path }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie" key={index}>
      <h3>{title}</h3>
      <div className="movie-img">
        <Image
          src={IMAGES_API + poster_path}
          alt={title}
          width={300}
          height={400}
        />
      </div>
      <div className="movie-overview">{overview}</div>
    </div>
  );
};

export default Movie;
