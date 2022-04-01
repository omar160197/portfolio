import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faHackerrank, 
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <footer class="py-4 bg-dark text-white text-center position-relative">
      <div className="flex flex-col items-center justify-center py-2">
        <div className="flex social-container ">

          <a href="https://web.facebook.com/profile.php?id=100009491072232">
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook social p-2"
              size="2x"
            />
          </a>

          <a href="https://github.com/omar160197">
            <FontAwesomeIcon
              icon={faGithub}
              className="Github social p-2"
              size="2x"
            />
          </a>

          <a href="https://www.hackerrank.com/omar133">
            <FontAwesomeIcon
              icon={faHackerrank}
              className="Hackerrank social p-2"
              size="2x"
            />
          </a>

          <a href="https://www.linkedin.com/in/omar-barakat-543b12222/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="Linkedin social p-2"
              size="2x"
            />
          </a>

        </div>
      </div>

      <div class="container">
        <p class="lead">Copyright &copy; 2022 Omar Barakat</p>
        <a href="#" class="position-absolute bottom-0 end-0 px-3 py-3">
          <i class="bi bi-arrow-up-circle "></i>
        </a>
      </div>
    </footer>
  );
}
