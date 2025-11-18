import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aarogya Connect",
    description: "To empower individuals with seamless access to their healthcare, fostering better communication, coordination, and ultimately, improved well-being.",
    image: "/projects/project1.png",
    tags: ["React", "Github", "Versel"],
    demoUrl: "https://aarogya-connect.vercel.app/",
    githubUrl: "https://github.com/Lakshaydang47/AarogyaConnect",
  },
  {
    id: 2,
    title: "SoleSync",
    description:
      "SoleSync is a modern Android e-commerce application built with Kotlin that offers a seamless and real-time shopping experience for footwear.",
    image: "/projects/project2.png",
    tags: ["Kotlin", "XML", "FireBase"],
    demoUrl: "https://www.linkedin.com/posts/lakshay-47-dang_androiddevelopment-kotlin-mvvm-activity-7395468192770514945-4QVN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAET08wABQvksdaX3O_WELUygwiUPHGbdiQI",
    githubUrl: "https://github.com/Lakshaydang47/SoleSync",
  },
  {
    id: 3,
    title: "Anvita AI Assistant",
    description:
      "Anvita is the official AI-powered virtual assistant built for Aarogya Connect, your hospital’s centralized care coordination system.",
    image: "/projects/project3.png",
    tags: ["HTML/CSS", "JavaScript", "GEMINI AI"],
    demoUrl: "https://www.linkedin.com/posts/lakshay-47-dang_innovation-aiinhealthcare-aarogyaconnect-activity-7334961603349516288-QETD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAET08wABQvksdaX3O_WELUygwiUPHGbdiQI",
    githubUrl: "https://github.com/Lakshaydang47/Anvita-ChatBot",
  },
  {
    id: 4,
    title: "Campus Commute",
    description:
      "Comming Soon...",
    image: "/projects/project4.png",
    tags: ["Jetpack Compose", "Google Map+Cloud", "Android", "Firebase"],
    demoUrl: "*",
    githubUrl: "*",
  },
  {
    id: 5,
    title: "GharSaaz | Handloom E-Commerce",
    description:
      "A Complete Full Stack Website,Client, Admin and server..Comming Soon...",
    image: "/projects/project5.png",
    tags: ["Client", "Server", "Admin"],
    demoUrl: "*",
    githubUrl: "*",
  },
  
  {
    id: 6,
    title: "Apat Nexus",
    description:
      "Apat Nexus is a pioneering mobile application engineered to deliver immediate, intelligent, and personalized emergency support across India.",
    image: "/projects/project6.png",
    tags: ["Xml", "Kotlin", "MVVM"],
    demoUrl: "https://www.linkedin.com/posts/lakshay-47-dang_emergencypreparedness-firstaidapp-apatnexus-activity-7354209494131720195-FrUc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET08wABQvksdaX3O_WELUygwiUPHGbdiQI",
    githubUrl: "https://github.com/Lakshaydang47/Apat_Nexus",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <p>Demo Link</p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <p>Code</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/LakshayDang47"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
