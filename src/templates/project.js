import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

import '../assets/sass/project.scss';

const project = props => {
  const { pageContext } = props;
  const {
    id,
    title,
    subtitle,
    image,
    text,
    quote,
    objectif,
    client,
    year,
    role,
    technology,
    images,
  } = pageContext;
  return (
    <Layout>
      <section id="project-header">
        <img src={require('../assets/images/' + image)} alt="" />
        <Scroll type="id" element="project-banner" offset={-10}>
          <a href="#banner" className="button style1 more">
            {title}
          </a>
        </Scroll>
      </section>

      <section id="project-banner">
        <header>
          <h2>{title}</h2>
        </header>
        <p>{text}</p>
        <blockquote>{quote}</blockquote>
        <p>{objectif}</p>
      </section>

      <section>
        {images.map((image, index) => (
          <article key={index} id="project-media" className={'style1 ' + (index % 2 ? 'right' : 'left')}>
            <div className="image">
              <img src={require('../assets/images/' + image.image)} alt="" />
            </div>
            <div className="inner">
              <header>
                <h3>
                  {image.title}
                </h3>
              </header>
              <p>
              {image.caption}
              </p>
            </div>
          </article>
        ))}
      </section>

      <article className="container box style2">
        <header>
          <p>{client}</p>
          <p>{year}</p>
          <p>{role}</p>
          <p>{technology}</p>
        </header>
      </article>

      <Footer />
    </Layout>
  );
};
export default project;
