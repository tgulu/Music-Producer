import em from "../assets/img/lables/em.png";
import felt from "../assets/img/lables/felt.jpg";
import happy from "../assets/img/lables/happy.png";
import kpm from "../assets/img/lables/kpm.jpg";

export interface Label {
  id: number;
  name: string;
  src: string;
  liveDemo: string;
}

export const labels: Label[] = [
  {
    id: 1,
    name: "em",
    src: em,
    liveDemo:
      "https://www.extrememusic.com/search?isLyricsSearch=false&query=CAMERON%20RENFREW%20NESBITT&talent=1",
  },
  {
    id: 2,
    name: "kpm",
    src: kpm,
    liveDemo:
      "https://www.extrememusic.com/search?isLyricsSearch=false&query=CAMERON%20RENFREW%20NESBITT&talent=1",
  },
  {
    id: 3,
    name: "happy",
    src: happy,
    liveDemo:
      "https://bmgproductionmusic.com/en-gb/search/tracks?searchTerm=composer:(Cameron%20Renfrew%20Nesbitt)&typed=composer:(cameron&typed=renfrew&typed=nesbitt)",
  },
  {
    id: 4,
    name: "felt",
    src: felt,
    liveDemo: " https://www.feltpm.com/tracks?q=Cameron%20Nesbitt",
  },
];
