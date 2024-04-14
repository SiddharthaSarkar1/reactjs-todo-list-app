import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "60vh",
    borderTop: "2px solid brown",
  };

  useEffect(() => {
    const currYear = new Date().getFullYear();
    setCurrentYear(currYear);
  }, []);

  return (
    <>
      <footer className="bg-dark text-light py-2" style={footerStyle}>
        <p className="text-center">
          Copyright &copy; {currentYear} <Link to="#"> Siddhartha Sarkar</Link>.
          All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
