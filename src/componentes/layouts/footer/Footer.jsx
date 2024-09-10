import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Todos los derechos reservados por copyright</p>
        <div class="redes">
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="">
            <EmailIcon />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
