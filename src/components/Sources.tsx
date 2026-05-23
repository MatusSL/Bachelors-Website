import "./Sources.css";
import { sources } from "../config";

const Sources = () => {
  return (
    <div id="sources" className="sources-box">
      <span className="sources-header">Zdroje:</span>
      <ol className="sources">
        {sources.map((source, index) => {
          return (
            <li key={index} className="source-item">
              {source.text}
              {source.url && (
                <>
                  {" "}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link"
                  >
                    [odkaz]
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Sources;
