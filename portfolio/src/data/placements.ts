import bondi from "../assets/img/placements/bondi.webp";
import chelsea from "../assets/img/placements/chelsea.png";
import googlebox from "../assets/img/placements/googlebox.jpg";
import hollyoaks from "../assets/img/placements/hollyoaks.jpg";
import landarzt from "../assets/img/placements/landarzt.png";
import loveisland from "../assets/img/placements/loveisland.jpg";

export interface Placement {
  id: number;
  name: string;
  src: string;
}

export const placements: Placement[] = [
  {
    id: 1,
    name: "Bondi Rescue",
    src: bondi,
  },
  {
    id: 2,
    name: "Chelsea",
    src: chelsea,
  },
  {
    id: 3,
    name: "Gogglebox",
    src: googlebox,
  },
  {
    id: 4,
    name: "Hollyoaks",
    src: hollyoaks,
  },
  {
    id: 5,
    name: "Landarzt",
    src: landarzt,
  },
  {
    id: 6,
    name: "Love Island",
    src: loveisland,
  },
];
