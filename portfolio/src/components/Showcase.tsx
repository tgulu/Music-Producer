import { labels } from "../data/labels";
import { placements } from "../data/placements";
import Carousel from "./Carousel";

const Showcase = () => {
  return (
    <div className="flex w-full items-center justify-center bg-black py-20">
      <div className="w-full max-w-5xl px-6 tablet:w-3/5">
        <Carousel title="Labels" items={labels} />
        <Carousel title="Placements" items={placements} />
      </div>
    </div>
  );
};

export default Showcase;
