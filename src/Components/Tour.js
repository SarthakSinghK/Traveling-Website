import React from "react";

const Tour = ({ pic, isp, date, title, text, place, duration, price }) => {
  return (
    <article className="tour-card" >
      <div className="tour-img-container">
        <img src={pic} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={isp}></i>
            </span>
            {place}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
