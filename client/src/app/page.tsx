"use client"
import { TypeAnimation } from 'react-type-animation';
import WorkCard from "@/components/layout/WorkCard"

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

      {/* <<====== MAIN = HOME PART */}
      <section id="Home" className="p-3 flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col items-center justify-center space-y-3 md:w-[60%]">
          <div className="text-3xl lg:text-4xl text-D1L1">
            <span>I Am </span><span className="text-theme-text font-semibold">Sharan Patel</span>
          </div>
          <div className="text-lg">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Front-End Developer',
                1000,
                'Back-End Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
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
        className="px-3 sm:px-6 py-6 mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
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


      {/* <<==== MAIN= WORKS PART */}
      <section id="Works" className="p-3 sm:px-6 py-6 space-y-5">
        <div className="flex flex-col space-y-2 w-full text-center items-center justify-center">
          <div className='text-3xl md:text-4xl font-bold text-theme-text'>
            <span>Works</span>
          </div>
          <span className='text-sm'>
            Here are some of my recent projects.
          </span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <WorkCard
            imgSrc={"/assets/activityBro.svg"}
            projectLink={"https://harivandanspices.vercel.app/"}
            title={"Harivandan Spices Website"}
            desc={"Designed and developed a product portfolio website for Harivandan Spices, enabling the client to showcase products, share location and contact details, integrate social media, and manage content seamlessly through an admin panel."}
            buildWith={"NextJs, Tailwind, NodeJs, ExpressJs, MongoDB"}
          />
          <WorkCard
            imgSrc={"/assets/handCoding.svg"}
            projectLink={'https://cloudnotebook-sharan.vercel.app/'}
            title={"Cloud NoteBook"}
            desc={"Developed a cloud-powered note management website enabling users to sign up, log in, and seamlessly store, organize, and access their notes from any device, ensuring data security and accessibility across platforms."}
            buildWith={"NextJs, Tailwind, NodeJs, ExpressJs, MongoDB"}
          />
        </div>
      </section>

      {/* <<==== MAIN = CONTACT PART */}
      <section
        id="ContactMe"
        className="px-3 sm:px-6 py-6 mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <div className="text-center space-y-4 md:w-[60%]">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-text">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-D1L1 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s connect! If you&apos;re interested in working together, have any questions, or simply want to say hello, don&apos;t hesitate to drop me an email at <span className='text-theme-text'>sharanpatel4@gmail.com</span>. I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex-1 w-[90%]">
          <img src={"/assets/emailBro.svg"} alt="Main" />
        </div>
      </section>

    </div>
  );
}
