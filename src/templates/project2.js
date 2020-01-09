import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/travelzik2.png'),
    thumbnail: require('../assets/images/thumbs/travelzik.png'),
    caption: 'Application Mobile',
  },
  {
    src: require('../assets/images/fulls/travelzik.png'),
    thumbnail: require('../assets/images/thumbs/travelzik.png'),
    caption: 'Site Web',
  },
  {
    src: require('../assets/images/fulls/travelzik2.png'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Application Mobile',
  },
  {
    src: require('../assets/images/fulls/travelzik2.png'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Application Mobile',
  },
];

const project = props => {
  const { pageContext } = props;
  const { title, subtitle, text } = pageContext;
  return (
    <Layout>
      <section id="header">
        {/* <header>
        <h1>Travelzik</h1>
        <p>Mobile App</p>
      </header> */}
        <footer>
          <Scroll type="id" element="banner">
            <a href="#banner" className="button style2 scrolly">
              {/* <header> */}
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              {/* </header> */}
            </a>
          </Scroll>
        </footer>
      </section>

      <section id="banner">
        <header>
          <h2>{title}</h2>
        </header>
        <p>
          <a href="http://www.travelzik.com/">Travelzik</a> est une webradio
          alternative consacrée à la découverte et aux voyages.
        </p>
        <blockquote>
          "Écoutez, lisez et voyagez avec des émissions et chroniques de
          <br />
          passionnés. Une playlist éclectique, retravaillée chaque mois, des
          <br />
          émissions curieuses avec la possibilité de réecouter en podcast, des
          <br />
          lives et mixes en direct et plein de belles surprises et le tout sans
          pub !"
        </blockquote>
        <p>
          Mon objectif en tant que bénévole sur ce projet en cours d'évolution :
          <br />
          concevoir et développer{' '}
          <a href="https://play.google.com/store/apps/details?id=com.travelzik.player&hl=fr">
            l'application
          </a>{' '}
          pour smartphones et tablettes.
        </p>
        <footer>
          <a
            href="https://play.google.com/store/apps/details?id=com.travelzik.player&hl=fr"
            className="button style2"
          >
            Go to play store !
          </a>
        </footer>
      </section>

      <article className="container box style2">
        <header>
          <p>Client : Travelzik</p>
          <p>Année : 2019</p>
          <p>Rôle : Développeur</p>
          <p>Technologies : React Native, iOS, Android</p>
        </header>

        <div className="inner gallery">
          <Gallery
            images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
              src,
              thumbnail,
              caption,
            }))}
          />
        </div>
      </article>

      {/* <article className="container box style3">
      <header>
        <h2>Contact</h2>
        <p>
          Une question à poser, besoin d'un devis sur un projet de ce type ?
        </p>
      </header>
      <form method="post" action="#">
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
      </form>
    </article> */}

      <Footer />
    </Layout>
  );
};
export default project;
