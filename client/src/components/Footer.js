import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="flex flex-col py-6 text-xs justify-center text-center items-center bg-text absolute bottom-0 w-full text-primary">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat
        ipsa nobis fugiat at atque mollitia.
      </p>
      <div className="flex space-x-10 py-4">
        <FacebookIcon />
        <InstagramIcon />
        <GitHubIcon />
      </div>
      <p>Copyright (C) 2021 I am your joy</p>
      <p>All rights reserved.</p>
    </div>
  );
}

export default Footer;
