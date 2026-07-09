import img1 from "../assets/images/Rectangle 20.jpg";
import img2 from "../assets/images/Rectangle 20-1.jpg";
import img3 from "../assets/images/Rectangle 20-2.jpg";
import img4 from "../assets/images/Rectangle 20-3.jpg";
import img5 from "../assets/images/Rectangle 20-4.jpg";
import img6 from "../assets/images/Rectangle 20-5.jpg";
import img7 from "../assets/images/Rectangle 20-6.jpg";
import img8 from "../assets/images/Rectangle 20-7.jpg";

export interface CardStats {
  today: { likes: number; comments: number };
  date: { date: string; likes: number; comments: number };
  upload: { label: string; date: string };
}

export interface Card {
  id: number;
  image: string;
  stats: CardStats;
}

export const cardsData: Card[] = [
  {
    id: 1,
    image: img1,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 2,
    image: img2,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 3,
    image: img3,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 4,
    image: img4,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 5,
    image: img5,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 6,
    image: img6,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 7,
    image: img7,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
  {
    id: 8,
    image: img8,
    stats: {
      today: { likes: 128, comments: 31 },
      date: { date: "9-08-2016", likes: 67, comments: 22 },
      upload: { label: "Image upload", date: "11-04-2016" },
    },
  },
];
