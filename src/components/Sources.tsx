import "./Sources.css";
import { sources } from "../config";

const Sources = () => {
  return (
    <div id="sources" className="sources-box">
      <span className="sources-header">Zdroje:</span>
      <div className="sources">
        {sources.map((source, index) => {
          return <span key={index}>{source}</span>;
        })}
      </div>
    </div>
  );
};

export default Sources;
