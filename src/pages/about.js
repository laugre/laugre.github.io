import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

import '../assets/sass/project.scss';
import { Parallax } from 'react-parallax';

const IndexPage = () => {
  return (
    <Layout>
      <section id="project-header">
        <Parallax
          strength={250}
          bgImage={require('../assets/images/about/laurent-44.jpg')}
          bgImageAlt=""
        >
          <div className="parallax-content" />
        </Parallax>
        <Scroll type="id" element="project-banner" offset={-60}>
          <a href="#project-banner" className="button style1 more">
            About me
          </a>
        </Scroll>
      </section>

      <section id="project-banner">
        <p>
          Je m'appelle Laurent Garnier, j'ai 34 ans, j'aime les nouvelles
          technologies, à bon escient.
        </p>
        <p>
          <strong>Concepteur d'applications interactives</strong> dans les
          secteurs de la muséographie et de l'évènementiel depuis 2009, je me
          focalise aujourd'hui sur le <strong>développement front end</strong>,{' '}
          <strong>web</strong>, <strong>mobile</strong> et{' '}
          <strong>multimédia</strong>.
        </p>
        <p>
          Appréciant la diversité des projets et le côté relationnel, je
          travaille désormais en <strong>freelance</strong> afin de pouvoir
          échanger directement avec les clients sur des projets variés.
        </p>
        <p>
          <strong>Artisan du numérique</strong>, je souhaite apporter mon{' '}
          <strong>savoir-faire</strong> en proposant des{' '}
          <strong>solutions sur mesure</strong>.
        </p>
        <p>
          Mon objectif est de rendre l'<strong>expérience utilisateur</strong>{' '}
          toujours plus <strong>immersive</strong> et <strong>intuitive</strong>
          .
        </p>
        <p>
          <strong>Activité</strong>, <strong>Réactivité</strong> et{' '}
          <strong>Interactivité</strong> sont les trois critères qui guident mes
          développements.
        </p>
      </section>

      {/* <section id="project-contents">
      {medias.map((media, index) => (
        <>
          <div className="line"></div>
          <article
            className={'project-content ' + (index % 2 ? 'right' : 'left')}
          >
            <div className="media">
              {(() => {
                switch (media.type) {
                  case 'image':
                    return (
                      <img
                        src={require('../assets/images/projects/' +
                          media.media)}
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
              <p dangerouslySetInnerHTML={{ __html: media.caption }} />
            </div>
          </article>
        </>
      ))}
    </section> */}

      <article className="container box style2">
        <header>
          <p>client</p>
          <p>year</p>
          <p>role</p>
          <p>technology</p>
        </header>
      </article>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
