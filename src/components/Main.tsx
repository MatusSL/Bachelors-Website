import "./Main.css";
import WeeklyReport from "./WeeklyReport";

const Main = () => {
  const informations = [
    {
      name: "Matúš Šlechta",
      title:
        "Chatbot na vytváranie kontrolných zoznamov na testovanie softvéru",
      supervisor: "doc. Mgr. Yevheniia Kataieva, PhD.",
      contact: "slechta1@uniba.sk",
    },
  ];

  return (
    <main>
      <div className="main">
        <h2 className="main-header">
          <div id="main">
            Chatbot na vytváranie kontrolných zoznamov na testovanie softvéru
          </div>
        </h2>

        <div className="info-section">
          <div className="info-card">
            <span className="info-card-title">Základné informácie</span>

            <div className="info-box">
              {informations.map((item) => (
                <div key={item.contact} className="info-list">
                  <div className="info-row">
                    <strong className="info-label">Meno:</strong>
                    <span className="info-value">{item.name}</span>
                  </div>

                  <div className="info-row">
                    <strong className="info-label">Názov:</strong>
                    <span className="info-value">{item.title}</span>
                  </div>

                  <div className="info-row">
                    <strong className="info-label">Školiteľ:</strong>
                    <span className="info-value">{item.supervisor}</span>
                  </div>

                  <div className="info-row">
                    <strong className="info-label">Kontakt:</strong>
                    <span className="info-value">{item.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card">
            <span className="info-card-title">Anotácia</span>
            <div className="info-box">
              <p>
                Cieľom bakalárskej práce je návrh a implementácia chatbota,
                ktorý podporuje proces testovania softvéru prostredníctvom
                automatizovaného vytvárania kontrolných zoznamov (checklistov).
              </p>
            </div>
          </div>
        </div>
        <WeeklyReport />
      </div>
    </main>
  );
};

export default Main;
