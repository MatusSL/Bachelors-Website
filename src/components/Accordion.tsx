import { useState, useRef, useEffect } from "react";
import "./Accordion.css";

type Report = {
  id: number;
  text: string;
  date: string;
};

type Props = {
  report: Report;
};

const Accordion = ({ report }: Props) => {
  const { id, text, date } = report;

  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="report-header">
          <span className="report-title">Týždeň {id}</span>
          {date}
        </span>
        <span className={`accordion-arrow ${open ? "rotate" : ""}`}>▾</span>
      </button>

      <div ref={contentRef} style={{ height }} className="accordion-content">
        <div className="accordion-inner">
          <p>{text || "Zatiaľ nevyplnené."}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
