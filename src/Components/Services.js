import React from 'react'
import Title from './Title';
import { servicelinks } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title head1="our" head2='services' />
      <div className="section-center services-center">
        {servicelinks.map((liked) => {
          const { id, icon, text ,title } = liked
          return (


            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article>)
        })}
      

        {/* <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Services
