import orchids from "./ListOfOrchids";
import Presentation from "./Presentation";
import "./App.css";
import React, { useState } from "react";
import useTheme from "./useTheme";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Container() {
  const [detail, setDetail] = useState(null);

  const{toggleTheme} = useTheme();


  const handleDetail = (orchid) => {
    setDetail(orchid);
  };

  const handleClose = () => {
    setDetail(null);
  };

  return (
    <div className="form_group">
      <button className="theme_btn" onClick={toggleTheme}>
        <i className="bi bi-lightbulb"></i>
      </button>
      <h1 className="title">List Of Orchids</h1>
      <div className="items">
        {orchids.map((orchid, index) => (
          <Presentation key={index} orchid={orchid} onDetail={handleDetail} />
        ))}
      </div>
      <div>
        {detail && (
          <div className="modal_overlay">
            <div className="modal_content">
                <Presentation orchid={detail} onClose={handleClose} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Container;
