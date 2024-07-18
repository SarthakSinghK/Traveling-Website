import React from "react";
import Title from "./Title";
import { servicelinks } from "../data";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title head1="our" head2="services" />



      <div className="section-center services-center">
        {servicelinks.map((linked) => {
          return (
            <Service key={linked.id} {...linked}/>
          )
        })}
      </div>
    </section>
  );
};

export default Services;
