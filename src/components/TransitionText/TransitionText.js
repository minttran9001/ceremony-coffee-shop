import React from "react";
import { NavLink } from "react-router-dom";

import "./TransitionText.scss";

export default function TransitionText() {
  return (
    <div className="transitionText">
      <div className="textTransition">
        <p>Subscription Collection</p>
      </div>
      <div className="subscriptions">
        <div className="details">
          <span className="subName">Origin Set</span>
          <span>Intro</span>
          <span className="subDes">
            Erstklassiger Rohkaffee, mediterrane Leidenschaft und alpines
            Qualitätsdenken finden ihren höchsten Ausdruck in den edlen
            Mischungen von Alps Coffee. Für die Südtiroler Kaffeerösterei
            Schreyögg ist Perfektion in der Tasse weit mehr als eine über
            Jahrzehnte gelebte Familientradition. Einzigartige Kaffeemomente,
            zelebriert seit 1890. Auserlesen, sortenrein langzeitgeröstet und
            mit viel Erfahrung zu feinsten Geschmackssymphonien komponiert.
            Ehrlich, kompromisslos, exzellent.
          </span>
          <div className='moreInfoWrap'>
          <NavLink className='subsLink' to='/subscription'>More Info</NavLink>
          <div className='line'>

          </div>
          </div>
        </div>
        <div className="imageWrap">
          <img
            alt="subscription"
            src={require('../../images/100ppi/sub.jpg')}
          />
        </div>
      </div>
    </div>
  );
}
