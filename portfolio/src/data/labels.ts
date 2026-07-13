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
      "https://open.spotify.com/album/5nlhLmWKBfIzkCxwVRAFd2?si=eBMfRftNTFCw5Afj4_kIwA",
  },
  {
    id: 2,
    name: "felt",
    src: felt,
    liveDemo:
      "https://open.spotify.com/album/1doa12HkHOap91vDyHQkB5?si=JTEfPq7pRAuuvwiYagN3jQ",
  },
  {
    id: 3,
    name: "happy",
    src: happy,
    liveDemo:
      "https://open.spotify.com/track/7kbKcqVsikFIvrCLWg8dwf?si=aedeb64b4aca4db8",
  },
  {
    id: 4,
    name: "kpm",
    src: kpm,
    liveDemo: "https://open.spotify.com/artist/2WtdUdDkpWNrNQ19yFm1NY",
  },
  {
    id: 5,
    name: "felt",
    src: felt,
    liveDemo:
      "https://open.spotify.com/album/1doa12HkHOap91vDyHQkB5?si=JTEfPq7pRAuuvwiYagN3jQ",
  },
];
