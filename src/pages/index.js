import React, { useState } from 'react';
import config from '../../config';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Scroll from '../components/Scroll';
import Banner from '../components/Banner';

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
    caption: 'Sass',
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
    caption: 'Vue',
  },
  {
    src: require('../assets/images/skills/git-seeklogo.com.svg'),
    caption: 'Git',
  },
];

const IndexPage = () => {
  // const [showProjectButton, setShowProjectButton] = useState(false);

  return (
    <Layout>
      <section id="header">
        <div className="inner">
          <h1>{config.authorName}</h1>
          <p>{config.heading1}</p>
          <p>{config.heading2}</p>
        </div>
        <Scroll type="id" element="banner" offset={-20}>
          <a href="#banner" className="button style1 more">
            What Else ?
          </a>
        </Scroll>
      </section>

      <Banner />
      <Projects />

      <article className="container box style2">
        <header>
          <h2>Prestations</h2>
          <p>
            Afin de développer votre communication digitale et gagner en
            visibilité sur le web je propose de vous accompagner dans la
            réalisation de votre projet.
          </p>
          <p>
            <strong>site vitrine</strong> | <strong>site one page</strong> |{' '}
            <strong>landing page</strong> | <strong>e-commerce</strong> |{' '}
            <strong>sur mesure</strong>
          </p>
          <p>
            À l'ère à laquelle les sites web sont largement plus consultés
            depuis des mobiles (smartphones et tablettes), il devient
            indispensable de s'adapter à tous les formats d'affichage.
          </p>
          <p>
            <strong>rafraîchissement de site</strong> | <strong>refonte</strong>{' '}
            | <strong>application mobile dédiée</strong>
          </p>
          <p>
            En constante évolution, une veille quotidienne est primordiale pour
            suivre et s'inspirer des nouveaux concepts du web
          </p>
          <p>
            <strong>responsive design</strong> |{' '}
            <strong>creative coding</strong> | <strong>UX design</strong> |{' '}
            <strong>interactivity</strong> |{' '}
            <strong>progressive web app</strong>
          </p>
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
