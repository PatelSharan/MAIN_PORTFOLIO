"use client"
export default function Home() {

  const Logos = [
    {
      src: "/assets/logos/html.png",
      alt: "HTML"
    },
    {
      src: "/assets/logos/css.png",
      alt: "CSS"
    },
    {
      src: "/assets/logos/javascript.png",
      alt: "JS"
    },
    {
      src: "/assets/logos/github.png",
      alt: "GITHUB"
    },
    {
      src: "/assets/logos/reactjs.png",
      alt: "REACT_JS"
    },
    {
      src: "/assets/logos/nextjs.png",
      alt: "NEXT_JS"
    },
    {
      src: "/assets/logos/tailwindcss.png",
      alt: "TAILWIND"
    },
    {
      src: "/assets/logos/nodejs.png",
      alt: "NODE_JS"
    },
    {
      src: "/assets/logos/expressjs.png",
      alt: "EXPRESS_JS"
    },
    {
      src: "/assets/logos/mongodb.png",
      alt: "MONGO DB"
    },
  ]

  return (
    <div className="space-y-7 pb-3">
      <section id="Home" className="min-h-[50vh] p-3 flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col items-center justify-center space-y-3 md:w-[60%]">
          <div className="text-3xl lg:text-4xl text-D1L1">
            <span>I Am </span><span className="text-theme-text font-semibold">Sharan Patel</span>
          </div>
          <div className="text-lg">
            Web Developer
          </div>
        </div>
        <div className="flex-1 w-[90%]">
          <img src={"/assets/menAndCoding.svg"} alt="Main" />
        </div>
      </section>


      {/* <<==== MAIN = SCROLLING MARQUEE PART */}
      <div className="bg-D1L1 h-30 flex items-center p-3 overflow-hidden">
        <div className="flex items-center animate-scroll whitespace-nowrap">
          {Logos?.map((logo, index) => (
            <div key={`first-${index}`} className="w-20 mx-10">
              <img src={logo?.src} alt={logo?.alt} />
            </div>
          ))}

          {Logos?.map((logo, index) => (
            <div key={`second-${index}`} className="w-20 mx-10">
              <img src={logo?.src} alt={logo?.alt} />
            </div>
          ))}
        </div>
      </div>


      {/* <<==== MAIN = ABOUT PART */}
      <section
        id="About"
        className="px-3 sm:px-6 py-12 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4"
      >
        <div className="flex-1 w-[90%]">
          <img src={"/assets/codeTyping.svg"} alt="Main" />
        </div>
        <div className="text-center space-y-4 md:w-[60%]">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-text">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-D1L1 leading-relaxed max-w-3xl mx-auto">
            Hi, I&apos;m <span className="font-semibold text-theme-text">Sharan Patel</span>.
            I hold a <span className="font-medium">BCA degree from Silver Oak University, Ahemdabad. </span>and aspire to become a <span className="font-semibold">Fullstack Web Developer</span>.
            I am passionate about learning modern technologies and using my coding skills
            to craft innovative solutions that enhance and simplify people&apos;s lives.
          </p>
        </div>
      </section>
    </div>
  );
}
