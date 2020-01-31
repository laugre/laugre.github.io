import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import ReactPlayer from 'react-player';

import '../assets/sass/project.scss';

const project = props => {
  const { pageContext } = props;
  const {
    title,
    image,
    text,
    quote,
    objectif,
    client,
    year,
    role,
    technology,
    medias,
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
        {medias.map((media, index) => (
          <article
            key={index}
            id="project-media"
            className={'style1 ' + (index % 2 ? 'right' : 'left')}
          >
            <div className="media">
              {(() => {
                switch (media.type) {
                  case 'image':
                    return (
                      <img
                        src={require('../assets/images/' + media.media)}
                        alt=""
                      />
                    );
                  case 'video':
                    return (
                      <ReactPlayer
                        url={require('../assets/videos/' + media.media)}
                        playing={true}
                        loop={true}
                        width="100%"
                        height="100%"
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
            <div className="inner">
              <header>
                <h3>{media.title}</h3>
              </header>
              <p>{media.caption}</p>
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
