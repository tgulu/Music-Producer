import type { Artist } from "../data/artists";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div>
      <a href={artist.liveDemo} target="_blank" rel="noreferrer">
        <img
          src={artist.src}
          alt={artist.name}
          className="gallery-img w-full rounded shadow-lg"
        />
      </a>
      <h3 className="mt-3 text-center text-2xl font-light text-white">
        {artist.name}
      </h3>
    </div>
  );
};

export default ArtistCard;
