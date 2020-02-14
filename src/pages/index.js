import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import ScrollLock from 'react-scrolllock';

import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';
import config from '../../config';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/skills/html5-with-wordmark-color.svg'),
    caption: 'HTML5',
  },
  {
    src: require('../assets/images/skills/css3.svg'),
    caption: 'CSS3',
  },
  {
    src: require('../assets/images/skills/javascript-seeklogo.com.svg'),
    caption: 'JS',
  },
  {
    src: require('../assets/images/skills/sass-seeklogo.com.svg'),
    caption: "Sass",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/skills/gatsby-seeklogo.com.svg'),
    caption: 'Gatsby',
  },
  {
    src: require('../assets/images/skills/react-seeklogo.com.svg'),
    caption: 'React',
  },
  {
    src: require('../assets/images/skills/vuejs-seeklogo.com.svg'),
    caption: "Vue",
  },
  {
    src: require('../assets/images/skills/git-seeklogo.com.svg'),
    caption: "Git",
  },
];

const IndexPage = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [typeWriter, setTypeWriter] = useState();
  // const [showProjectButton, setShowProjectButton] = useState(false);
  const [lockScroll, setLockScroll] = useState(true);

  const toggleBannerVisible = () => {
    setLockScroll(false);
    setShowBanner(true);
    typeWriter.start();
  };

  const delay = 20;
  const pause = 500;
  const createTypingAnim = typewriter => {
    setTypeWriter(typewriter);
    typewriter
      .changeDelay(delay)
      .pauseFor(pause * 2)
      .typeString('<header><h2>Bonjour et bienvenue</h2></header>')
      .pauseFor(pause * 2)
      .typeString(
        "<p>Je m'appelle Laurent Garnier, j'ai 34 ans, j'aime les nouvelles technologies, à bon escient.</p>"
      )
      .pauseFor(pause)
      .typeString(
        "<p><strong>Concepteur d'applications interactives</strong> dans les secteurs de la muséographie et de l'évènementiel depuis 2009, je me focalise aujourd'hui sur le <strong>développement front end</strong>, <strong>web</strong>, <strong>mobile</strong> et <strong>multimédia</strong>.</p>"
      )
      .pauseFor(pause)
      .typeString(
        '<p>Appréciant la diversité des projets et le côté relationnel, je travaille désormais en <strong>freelance</strong> afin de pouvoir échanger directement avec les clients sur des projets variés.</p>'
      )
      .pauseFor(pause)
      .typeString(
        '<p><strong>Artisan du numérique</strong>, je souhaite apporter mon <strong>savoir-faire</strong> en proposant des <strong>solutions sur mesure</strong>.</p>'
      )
      .pauseFor(pause)
      .typeString(
        "<p>Mon objectif est de rendre l'<strong>expérience utilisateur</strong> toujours plus <strong>immersive</strong> et <strong>intuitive</strong>.</p>"
      )
      .pauseFor(pause)
      .typeString(
        '<p><strong>Activité</strong>, <strong>Réactivité</strong> et <strong>Interactivité</strong> sont les trois critères qui guident mes développements.</p>'
      )
      // .pauseFor(pause * 2)
      // .callFunction(() => {
      //   setShowProjectButton(true);
      // });
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
          offset={-20}
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
        </div>
        <Scroll type="id" element="first">
          <a
            href="#first"
            className={'button style2 ' + (showBanner ? 'show' : '')}
          >
            Projets Sélectionnés
          </a>
        </Scroll>
      </section>

      <Projects />

      <article className="container box style2">
        <header>
          <h2>Compétences</h2>
        </header>

        <div className="inner gallery">
          <Gallery
            images={ROW1_IMAGES.map(({ src, caption }) => ({
              src,
              caption,
            }))}
          />
          <Gallery
            images={ROW2_IMAGES.map(({ src, caption }) => ({
              src,
              caption,
            }))}
          />
        </div>
      </article>

      <article className="container box style3">
        <header>
          <h2>CONTACT</h2>
          <p>
            Une idée à faire germer ?<br />
            Besoin d'un avis, d'un conseil, d'un devis ?<br /> Écrivez-moi !
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
