import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

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
        Je développe des applications multimédias aux interfaces interactives
        depuis 2009 et je me focalise aujourd'hui sur le développement web front end.
        <br />
        Je travaille désormais en freelance afin de pouvoir échanger directement
        avec les clients sur des projets variés
        <br />
        et ainsi leur apporter mes compétences en leur proposant des solutions
        <br />
        aux expériences utilisateurs toujours plus immersives, réactives et
        interactives.
        <br />
      </p>
      {/* <img src={pic0} alt="" className="image" /> */}
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            Jettes un oeil à mes dernières réalisations !
          </a>
        </Scroll>
      </footer>
    </section>

    <Projects />

    <article className="container box style3">
      <header>
        <h2>CONTACT</h2>
        <p>Une idée à faire germer ? Besoin d'un avis, d'un conseil, d'un devis ? Écris-moi !</p>
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
    </article>

    <article className="container box style3">
      <header>
        <h2>Elements</h2>
        <p>This starter has other elements.</p>
        <br />
        Check it out
        <Link to="/Element"> here </Link>
      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
