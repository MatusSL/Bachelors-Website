import { useEffect, useState } from "react";
import "./Header.css";

import "./Header.css";

const scrollToReports = () => {
  const element = document.getElementById("reports");

  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const scrollToSources = () => {
  const element = document.getElementById("sources");

  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const scrollToInfo = () => {
  const element = document.getElementById("main");

  element?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const tags = [
    { label: "O práci", action: scrollToInfo },
    { label: "Denník", action: scrollToReports },
    { label: "Zdroje", action: scrollToSources },
  ];

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="navbar">
        <div>
          <h1 className="name-header">Matúš Šlechta</h1>
        </div>
        <div>
          <ul className="tag-list">
            {tags.map((tag, index) => (
              <li key={index} className="tag-item" onClick={tag.action}>
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
