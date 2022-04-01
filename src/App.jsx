import { Component } from "react";
import About from "./component/aboutComponent";
import FooterSection from "./component/footerComponent";
import Hero from "./component/heroComponent";
import Navbar from "./component/navbarComponent";
import PortfolioSection from "./component/portfolioComponent";
import Skills from "./component/skillsComponent";

export default class MyHome extends Component {
  constructor() {
    super();
    this.state = {
      navList: ["Home", "AboutMe", "Skills", "Portfolio", "Footer"],
      skillsList: [
        {
          topic: "HTML",
          persntage: "90%",
          valuenow: "90",
        },
        {
          topic: "CSS",
          persntage: "80%",
          valuenow: "80",
        },
        {
          topic: "Node.JS",
          persntage: "65%",
          valuenow: "65",
        },
        {
          topic: "MongoDB",
          persntage: "60%",
          valuenow: "60",
        },
        {
          topic: "React",
          persntage: "40%",
          valuenow: "40",
        },
        {
          topic: "Angular",
          persntage: "35%",
          valuenow: "35",
        },
        {
          topic: "JavaScript",
          persntage: "25%",
          valuenow: "25",
        },
      ],
      cardList: [
        {
          projectName: "One",
          projectImage: "https://picsum.photos/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
        {
          projectName: "Two",
          projectImage: "https://picsum.photos/seed/picsum/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
        {
          projectName: "Three",
          projectImage: "https://picsum.photos/seed/picsum/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
        {
          projectName: "Four",
          projectImage: "https://picsum.photos/seed/picsum/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
        {
          projectName: "Five",
          projectImage: "https://picsum.photos/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
        {
          projectName: "Six",
          projectImage: "https://picsum.photos/180/100",
          projectDiscription:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          projectLink: "https://github.com/omar160197/Clinic_System",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Hero
          // src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          // src="./images/1.jpg"

          title="Full Stack Developer"
          myName="Omar Barakat"
        />
        <Navbar list={this.state.navList} headTitle="Portfolio" />
        <br/>
        <About
          text="Hero Banner paragraph text - Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum."
          title2="About Me"
        />

        <Skills
          list={this.state.skillsList}
          skillsText=" Hero Banner paragraph text - Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <PortfolioSection cardProjects={this.state.cardList} />
        <FooterSection/>
      </>
    );
  }
}
