import React from "react";
import Title from "./Title";
import { tourlinks } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title head1="featured" head2="tours" />

      <div className="section-center featured-center">
        {tourlinks.map((liked) => {
          const { id, pic, isp, date, title, text, place, duration, price } =
            liked;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={pic}className="tour-img" alt="" />
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
        })}

        
  
      </div>
    </section>
  );
};

export default Tours;
