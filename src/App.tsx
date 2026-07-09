import { useState } from "react";
import type { Dayjs } from "dayjs";
import vector1 from "./assets/vector1.svg";
import vector2 from "./assets/vector2.svg";
import group1 from "./assets/group1.svg";
import { cardsData } from "./data/cards";
import DatePickerWithButtons from "./components/DatePickerWithButtons";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [isCardView, setIsCardView] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  return (
    <div className="app">
      <div className="shape">
        <img src={vector1} alt="Decorative shape" />
      </div>
      <div className="shape-secondary">
        <img src={group1} alt="Secondary shape" />
      </div>
      <div className="shape-third">
        <img src={vector2} alt="Third decorative shape" />
      </div>

      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <h1 className="brand-title">monblanproject</h1>
            <p className="brand-subtitle">Start on 17-02-2016</p>
          </div>
          <ul className="header-stats">
            <li className="stat-item">
              <span className="stat-value">870</span>
              posts
            </li>
            <li className="stat-item">
              <span className="stat-value">11,787</span>
              followers
            </li>
            <li className="stat-item">
              <span className="stat-value">112</span>
              following
            </li>
          </ul>
          <div className="header-date">
            <h3>Date</h3>
            <div className="date-inputs">
              <DatePickerWithButtons
                value={startDate}
                onChange={setStartDate}
                placeholder="from"
                open={openStart}
                onOpenChange={setOpenStart}
                onClear={() => setStartDate(null)}
                onOpenPicker={() => setOpenStart(true)}
              />
              <DatePickerWithButtons
                value={endDate}
                onChange={setEndDate}
                placeholder="to"
                open={openEnd}
                onOpenChange={setOpenEnd}
                onClear={() => setEndDate(null)}
                onOpenPicker={() => setOpenEnd(true)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="card-display">
          <button
            className={`card-button ${!isCardView ? "active" : ""}`}
            onClick={() => setIsCardView(false)}
          >
            <svg width="24" height="22" fill="currentColor">
              <use href="/sprite.svg#Group 23" />
            </svg>
          </button>
          <button
            className={`card-button ${isCardView ? "active" : ""}`}
            onClick={() => setIsCardView(true)}
          >
            <svg width="24" height="22" fill="currentColor">
              <use href="/sprite.svg#Group 13" />
            </svg>
          </button>
        </div>

        <ul className={`card-content ${isCardView ? "card-grid" : ""}`}>
          {cardsData.map((card) => (
            <li
              key={card.id}
              className={`card-item ${isCardView ? "card-view" : "row-view"}`}
            >
              <img
                className="card-image"
                src={card.image}
                alt={`Card ${card.id}`}
              />
              <div className="card-stats-all">
                <div className="card-stats">
                  <h3>Today</h3>
                  <div className="card-stats-inner">
                    <div className="card-stat-likes">
                      <svg width="18" height="18">
                        <use href="/sprite.svg#ci_heart-fill" />
                      </svg>
                      <p>{card.stats.today.likes}</p>
                    </div>
                    <div className="card-stat-comments">
                      <svg width="18" height="18">
                        <use href="/sprite.svg#ic_round-mode-comment" />
                      </svg>
                      <p>{card.stats.today.comments}</p>
                    </div>
                  </div>
                </div>
                <div className="card-stats">
                  <h3>{card.stats.date.date}</h3>
                  <div className="card-stats-inner">
                    <div className="card-stat-likes">
                      <svg width="18" height="18">
                        <use href="/sprite.svg#ci_heart-fill" />
                      </svg>
                      <p>{card.stats.date.likes}</p>
                    </div>
                    <div className="card-stat-comments">
                      <svg width="18" height="18">
                        <use href="/sprite.svg#ic_round-mode-comment" />
                      </svg>
                      <p>{card.stats.date.comments}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image-upload">
                  <h3>{card.stats.upload.label}</h3>
                  <p>{card.stats.upload.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="load-more-button">Load more</button>
    </div>
  );
}

export default App;
