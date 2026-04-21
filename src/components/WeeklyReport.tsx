import "./WeeklyReport.css";
import { weeeklyReports } from "../config";

import Accordion from "./Accordion";

const WeeklyReport = () => {
  return (
    <div id="reports" className="dropdown-main">
      <div className="dropdown-header">
        <span>Týždenný denník</span>
        <a href="/Bachelors-Website/prezentacia.pptx" download>
          Stiahnuť prezentáciu
        </a>
        <div className="underline"></div>
      </div>
      <div className="reports">
        {weeeklyReports.map((report, index) => {
          return (
            <div key={index}>
              <Accordion report={report} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyReport;
