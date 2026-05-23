import "./Work.css";

const Work = () => {
  return (
    <div className="work-box">
      <span className="work-header">Práca:</span>
      <div>
        <div className="thesis-item">
          <a
            href={`${import.meta.env.BASE_URL}bakalarska_praca.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="thesis-link"
          >
            Zobraziť prácu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
