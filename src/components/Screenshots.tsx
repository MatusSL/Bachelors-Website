import "./Screenshots.css";

const screenshots = [
  { src: "activity_diagram.png", caption: "Aktivity Diagram" },
  { src: "seq_first_message.png", caption: "Main loop aplikácie" },
];

const Screenshots = () => {
  return (
    <div className="screenshots-box">
      <span className="screenshots-header">Screenshoty / Zdrojáky:</span>
      <div className="screenshots-grid">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="screenshot-item">
            <a
              href={`${import.meta.env.BASE_URL}${shot.src}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}${shot.src}`}
                alt={shot.caption}
                className="screenshot-img"
              />
            </a>
            <figcaption className="screenshot-caption">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Screenshots;
