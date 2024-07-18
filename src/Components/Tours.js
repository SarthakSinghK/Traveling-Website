import React from "react";
import Title from "./Title";
import { tourlinks } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title head1="featured" head2="tours" />
      <div className="section-center featured-center">
        {tourlinks.map((liked) => { 
          return (
           <Tour key={liked.id} {...liked}/>
          )
        })}
      </div>
    </section>
  );
};

export default Tours;
