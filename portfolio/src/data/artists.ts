import lovejoy from "../assets/img/artists/lovejoy.webp";
import jamesMarriott from "../assets/img/artists/james-marriott.webp";
import lunaBlue from "../assets/img/artists/luna-blue.webp";
import rockett from "../assets/img/artists/poppy.webp";
import finnian from "../assets/img/artists/finnian.webp";
import mez from "../assets/img/artists/mez.webp";

export interface Artist {
  id: number;
  name: string;
  src: string;
  liveDemo: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Lovejoy",
    src: lovejoy,
    liveDemo:
      "https://open.spotify.com/album/5nlhLmWKBfIzkCxwVRAFd2?si=eBMfRftNTFCw5Afj4_kIwA",
  },
  {
    id: 2,
    name: "James Marriott",
    src: jamesMarriott,
    liveDemo:
      "https://open.spotify.com/album/1doa12HkHOap91vDyHQkB5?si=JTEfPq7pRAuuvwiYagN3jQ",
  },
  {
    id: 3,
    name: "Luna Blue",
    src: lunaBlue,
    liveDemo:
      "https://open.spotify.com/track/7kbKcqVsikFIvrCLWg8dwf?si=aedeb64b4aca4db8",
  },
  {
    id: 4,
    name: "Poppy Rockett",
    src: rockett,
    liveDemo: "https://open.spotify.com/artist/2WtdUdDkpWNrNQ19yFm1NY",
  },
  {
    id: 5,
    name: "Finnian James",
    src: finnian,
    liveDemo: "https://open.spotify.com/artist/2FKENDqbruPLmYg4JIfvva",
  },
  {
    id: 6,
    name: "Mez",
    src: mez,
    liveDemo:
      "https://open.spotify.com/track/5KfAnCNhpi0pZiwvuhmKkr?si=69d35f1238b94e05",
  },
];
