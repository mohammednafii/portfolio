import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize teamwork, fostering effective communication.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Learning java spring boot",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: " Shopwise : e-commerce website ",
      des: "Created a responsive e-commerce clothing store with Next.js, React.js, Tailwind CSS, and Sanity for dynamic content management.",
      img: "/shopwise.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.svg"],
      git: "https://github.com/mohammednafii/e-com",
      link :  "",
    },
    {
      id: 2,
      title: "MeetUpNow: Video Conferencing App ",
      des: "Built a video conferencing app with Next.js, React.js, and Tailwind CSS, utilizing the Stream API for real-time communication.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      git: "https://github.com/mohammednafii/meetupnow",
      link :  "https://meetupnow1.vercel.app/",
    },
  ];
  
export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link : "https://github.com/mohammednafii",
    },

    {
      id: 2,
      img: "/link.svg",
      link : "https://www.linkedin.com/in/mohamednafii/",
    },
  ];