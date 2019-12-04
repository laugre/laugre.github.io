import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/travelzik.png';
import pic2 from '../assets/images/vsfactory.png';
import pic3 from '../assets/images/lascaux4devanture.jpg';
import pic4 from '../assets/images/quiz_mhnn_manger.png';
import pic5 from '../assets/images/paleosite_morphing4.png';
import pic6 from '../assets/images/musee_olympique_stades.png';
import pic7 from '../assets/images/musee_olympique_livre3D.png';
import pic8 from '../assets/images/csi_dataviz.png';
import pic9 from '../assets/images/darwin-01.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];

const ROW3_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h2>Bonjour et bienvenue !</h2>
      </header>
      <p>
        Je m'appelle Laurent Garnier, j'ai 34 ans.
        <br />
        Je développe des applications multimédias et des sites interactifs
        depuis maintenant 8 ans.
        <br />
        Je travaille désormais en freelance afin de pouvoir échanger directement
        avec des clients soucieux du détail.
        <br />
        Je souhaite entre autre leur apporter mes compétences
        <br />
        afin de leur proposer des expériences utilisateurs toujours plus
        immersives, réactives et interactives.
        <br />
      </p>
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            Jettes un oeil à mes dernières réalisations !
          </a>
        </Scroll>
      </footer>
    </section>

    <article id="first" className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Travelzik</h2>
        </header>
        <p>
          Sur ce projet en cours de web radio alternative, je conçois
          et développe l'application Travelzik pour smartphone/tablette.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>VS Factory</h2>
        </header>
        <p>
          Je travaille régulièrement avec cette agence parisienne pour réaliser
          des projets créatifs tournés vers un futur complètement interactif.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic3} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Lascaux IV</h2>
        </header>
        <p>
          Réalisation d’un module interactif permettant de naviguer dans la
          projection 3D stéréoscopique de la grotte de Lascaux.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic4} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Quiz Interactif</h2>
        </header>
        <p>Développement front-end d'un quiz interactif.</p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic5} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Projet muséo, Paléosite</h2>
        </header>
        <p>Réalisation d'un dispositif de morphing temps réel.</p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic6} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Projet muséo, Musée Olympique</h2>
        </header>
        <p>
          Réalisation de l'interface d'un dispositif interactif sur écran
          tactile avec projection carte au sol.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic7} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Projet muséo, Musée Olympique</h2>
        </header>
        <p>
          Réalisation d'un livre virtuel en 3D avec vidéos à lire sur chaque
          page. Défilement des pages en touchless.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic8} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Projet muséo, CSI Dataviz</h2>
        </header>
        <p>
          Réalisation de l'interface d'un dispositif interactif sur écran
          tactile avec slide de curseurs, gestion d'un modèle physique pour
          faire tomber les billes, langages multiples.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic9} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>Projet muséo, CSI Darwin</h2>
        </header>
        <p>
          Réalisation d'un dispositif interactif en se positionnant debout face
          à l'écran pour faire défiler et afficher des paires d'images en
          touchless et se prendre en photo en train d'imiter un animal ou
          personnage affiché et à l'envoyer vers une galerie de portraits.
        </p>
      </div>
    </article>

    {/* <article className="container box style2">
      <header>
        <h2>Magnis parturient</h2>
        <p>
          Justo phasellus et aenean dignissim
          <br />
          placerat cubilia purus lectus.
        </p>
      </header>

      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>
    </article> */}

    {/* <article className="container box style3">
      <header>
        <h2>Nisl sed ultricies</h2>
        <p>Diam dignissim lectus eu ornare volutpat orci.</p>
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

export default IndexPage;
