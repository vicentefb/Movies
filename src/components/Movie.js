import Image from "next/image";

const Movie = ({ title, index, overview, poster_path }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";
  if (title !== "" && title !== undefined) {
    return (
      <div className="movie" key={index}>
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
  } else {
    return null;
  }
};

export default Movie;
