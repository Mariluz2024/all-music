import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-4"  style={{background: '#AF4D98'}}>
      <div className="container">
        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} All Music. All rights reserved. <a class="text-white" href="https://github.com/Mariluz2024">Mariluz</a></small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
