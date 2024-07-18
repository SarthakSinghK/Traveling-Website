import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pagelinks = [
  { id: "1", hre: "#home", txt: "Home" },
  { id: "2", hre: "#about", txt: "about" },
  { id: "3", hre: "#services", txt: "services" },
  { id: "4", hre: "#tours", txt: "tours" },
];

export const socialLinks = [
  { id: "1", hre: "https://www.meta.com", icn: "fab fa-facebook" },
  { id: "2", hre: "https://www.twitter.com", icn: "fab fa-twitter" },
  { id: "3", hre: "https://www.youtube.com", icn: "fab fa-squarespace" },
];

export const servicelinks = [
  {
    id: "1",
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "saving money",
  },
  {
    id: "2",
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "endless hiking  ",
  },
  {
    id: "3",
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "amazing comfort",
  },
];

export const tourlinks = [
  {
    id: "1",
    pic: img1,
    isp: "fas fa-map",
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    place: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: "2",
    pic: img2,
    isp: "fas fa-map",
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    place: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: "3",
    pic: img3,
    isp: "fas fa-map",
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    place: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: "4",
    pic: img4,
    isp: "fas fa-map",
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    place: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
