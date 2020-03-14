import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

import '../assets/sass/project.scss';
import { Parallax } from 'react-parallax';
import Contact from '../components/Contact';
import { useWindowSize } from '../components/useWindowSize';

const IndexPage = () => {
  const windowsSize = useWindowSize();
  
  return (
    <Layout>
      <section id="project-header">
        <Parallax
          strength={200}
          bgImage={
            windowsSize.width < 897
              ? require('../assets/images/about/laurent-44m.jpg')
              : require('../assets/images/about/laurent-44.jpg')
          }
          bgImageAlt=""
        >
          <div className="parallax-content" />
        </Parallax>
        <Scroll type="id" element="project-banner" offset={-60}>
          <a href="#project-banner" className="button style1 more">
            About
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

      <article className="container box style2">
        <header>
          <h2>Parcours Professionnel</h2>
          <p>
            Avant de travailler en indépendant et à compter de la fin de mes
            études (2009) je me suis forgé mon expérience professionnelle à
            travers plusieurs laboratoires de recherches et entreprises.
          </p>
          <p>
            <strong>
              2012 - 2018 : Ingénieur d'étude, Société Blue Yeti, Royan
            </strong>
            <br />
            Dans cette société spécialisée dans la création de dispositifs
            numériques interactifs (installations visuelles et sonores, espaces
            immersifs et expérientiels, moutons numériques à 5 pattes), pour des
            clients privés et publics (musées, institutions, entreprises et
            artistes), j'étais en charge d'une partie R&D ainsi que du
            développement des interfaces et applications interactives.
          </p>
          <p>
            <strong>
              2010 - 2012 : Ingénieur d'étude, Société Galamus Software,
              Bugarach
            </strong>
            <br />
            Dans cette société spécialisée dans la création de dispositifs
            numériques interactifs pour les secteurs de la muséographie et de
            l'évènementiel, j'étais en charge de la partie R&D, en lien avec des
            plateformes de recherche (Jamoma, Virage) afin de faire évoluer des
            bibliothèques d'interopérabilité des dispositifs interactifs et des
            outils en fonction des besoins de l'entreprise.
          </p>
          <p>
            <strong>
              2010 : Ingénieur d'étude, GMEA-Centre National de Création
              Musicale, Albi
            </strong>
            <br />
            Dans cette structure labelisée par le Ministère de la Culture, je
            travaillais sur l'étude et le développement d'un séquenceur temporel
            interactif basé sur l'interopérabilité des dispostifs connectés et
            sur la notion de temps souple.
          </p>
          <p>
            <strong>
              2009 - 2010 : Ingénieur d'étude et développement Multimédia,
              LIMSI-CNRS, Orsay
            </strong>
            <br />
            C'est dans ce laboratoire parisien du CNRS que j'ai pu mettre un
            pied dans le monde de la recherche. Une très belle première
            expérience professionnelle suite à mon stage de fin d'études,
            réalisé sur une plateforme de recherche avec les mêmes acteurs,
            artistes, laboratoires et industriels afin de développer de
            nouvelles interfaces de contrôle, de captation et de pilotage de
            dispositifs interactifs destinées à l'art et au spectacle vivant.
          </p>
        </header>
      </article>

      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
