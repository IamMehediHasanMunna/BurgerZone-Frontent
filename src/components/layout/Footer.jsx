import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BurgerZone</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback. </em>

        <strong>All right received @BurgerZone</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://github.com/IamMehediHasanMunna">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/munna_ami_05/">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/MunnaAmi69/">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
