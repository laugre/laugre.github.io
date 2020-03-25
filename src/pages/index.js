import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Projects />
      <article
        data-sal="zoom-in"
        data-sal-duration="300"
        data-sal-delay="0"
        data-sal-easing="ease"
        className="container box style2"
      >
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
            depuis des appareils mobiles (smartphones et tablettes), il devient
            indispensable de s'adapter à tous les formats d'affichage.
          </p>
          <p>
            <strong>rafraîchissement de site</strong> | <strong>refonte</strong>{' '}
            | <strong>application mobile dédiée</strong>
          </p>
        </header>
      </article>
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
