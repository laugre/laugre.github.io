import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import '../assets/sass/main.scss';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { writer: null };
    this.startAnim = this.startAnim.bind(this);
  }

  componentDidMount() {
    document.addEventListener('sal:in', this.startAnim);
  }

  componentWillUnmount() {
    document.removeEventListener('sal:in', this.startAnim);
  }

  startAnim() {
    this.state.writer.start();
  }

  render() {
    return (
      <section id="banner">
        <div data-sal="zoom-in" className="content">
          <Typewriter
            onInit={typewriter => {
              this.setState({
                writer: typewriter,
              });
              var delay = 20;
              var pause = 500;
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
                );
            }}
          />
        </div>
        {/* <Scroll type="id" element="first">
          <a
            href="#first"
            className={'button style2 ' + (showBanner ? 'show' : '')}
          >
            Projets Sélectionnés
          </a>
        </Scroll> */}
      </section>
    );
  }
}

export default Banner;
