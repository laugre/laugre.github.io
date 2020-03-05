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
        <div
          data-sal="zoom-in"
          data-sal-duration="300"
          data-sal-delay="0"
          data-sal-easing="ease"
          className="content"
        >
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
                  "<p>Je m'appelle Laurent Garnier, je suis <strong>développeur</strong> orienté <strong>front end</strong> et je travaille en <strong>freelance</strong>.</p>"
                )
                .pauseFor(pause)
                .typeString(
                  "<p>J'aide les agences et les entreprises à <strong>concevoir</strong> et <strong>développer</strong> des <strong>sites</strong> et <strong>applications web</strong>, <strong>mobile</strong> et <strong>multimédia</strong>.</p>"
                )
                .pauseFor(pause)
                .typeString(
                  "<p><strong>Activité</strong>, <strong>Réactivité</strong> et <strong>Interactivité</strong> guident mes développements afin de rendre l'<strong>expérience utilisateur intuitive</strong>, <strong>fluide</strong> et <strong>immersive</strong>.</p>"
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
