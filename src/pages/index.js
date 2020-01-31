import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import ScrollLock from 'react-scrolllock';

import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import config from '../../config';

const IndexPage = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [typeWriter, setTypeWriter] = useState();
  const [showProjectButton, setShowProjectButton] = useState(false);
  const [lockScroll, setLockScroll] = useState(true);

  const toggleBannerVisible = () => {
    setLockScroll(false);
    setShowBanner(true);
    typeWriter.start();
  };

  const delay = 20;
  const pause = 1000;
  const createTypingAnim = typewriter => {
    setTypeWriter(typewriter);
    typewriter
      .changeDelay(delay)
      .pauseFor(pause * 2)
      .typeString('<header><h2>Bonjour et bienvenue !</h2></header>')
      .pauseFor(pause * 2)
      .typeString(
        "<p>Je m'appelle Laurent Garnier, j'ai 34 ans, je suis passionné de nouvelles technologies. <br />"
      )
      .pauseFor(pause)
      .typeString(
        "Concepteur d'applications interactives dans les secteurs de la muséographie et de l'évènementiel depuis 2009, je me focalise aujourd'hui sur le développement front end, web, mobile et multimédia.<br />"
      )
      .pauseFor(pause)
      .typeString(
        'Appréciant la diversité des projets et le côté relationnel,<br />je travaille désormais en freelance afin de pouvoir échanger directement avec les clients sur des projets variés.<br />'
      )
      .pauseFor(pause)
      .typeString(
        "Mon souhait est d'apporter mes compétences en proposant des solutions sur mesure.<br />"
      )
      .pauseFor(pause)
      .typeString(
        "Mon objectif est de rendre l'expérience utilisateur toujours plus immersive.<br />"
      )
      .pauseFor(pause)
      .typeString(
        'Activité, Réactivité et Interactivité sont les trois critères qui guident mes développements.'
      )
      .pauseFor(pause * 2)
      .callFunction(() => {
        setShowProjectButton(true);
      });
  };

  return (
    <Layout>
        <ScrollLock isActive={lockScroll} />
        <section id="header">
          <div className="inner">
            <h2>{config.authorName}</h2>
            <p>{config.heading1}</p>
            <p>{config.heading2}</p>
          </div>
          <Scroll
            type="id"
            element="banner"
            offset={-10}
            onClick={toggleBannerVisible}
          >
            <a href="#banner" className="button style1 more">
              What Else ?
            </a>
          </Scroll>
        </section>

        <section id="banner">
          <div className={'content ' + (showBanner ? 'show' : '')}>
            <Typewriter onInit={createTypingAnim} />
            <footer className={showProjectButton ? 'show' : ''}>
              <Scroll type="id" element="first">
                <a href="#first" className="button style2 scrolly">
                  Découvrons ensemble une sélection de mes réalisations
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <Projects />

        <article className="container box style3">
          <header>
            <h2>CONTACT</h2>
            <p>
              Une idée à faire germer ?<br />
              Besoin d'un avis, d'un conseil, d'un devis ?<br /> Écris-moi !
            </p>
          </header>
          {/* <form method="post" action="#">
      <div className="row gtr-50">
        <div className="col-6 col-12-mobile">
          <input
            type="text"
            className="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="col-6 col-12-mobile">
          <input
            type="text"
            className="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message" />
        </div>
        <div className="col-12">
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </div>
      </div>
    </form> */}
        </article>

        {/* <article className="container box style3">
    <header>
      <h2>Elements</h2>
      <p>This starter has other elements.</p>
      <br />
      Check it out
      <Link to="/Element"> here </Link>
    </header>
  </article> */}

        <Footer />
    </Layout>
  );
};

export default IndexPage;
