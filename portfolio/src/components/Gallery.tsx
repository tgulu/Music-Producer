import { artists } from "../data/artists";
import ArtistCard from "./ArtistCard";

const Gallery = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black py-20">
      <div className="w-full max-w-5xl px-6 tablet:w-3/5">
        <h1 className="mb-12 text-center text-4xl font-light text-white tablet:text-2xl">
          Featured Artists
        </h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(115px,1fr))] gap-4 gap-y-10 md:grid-cols-3 md:gap-17">
          {artists.map((artist) => (
            <ArtistCard artist={artist} key={artist.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
