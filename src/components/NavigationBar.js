import React, { Component } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../assets/sass/navigation-bar.scss';

class NavigationBar extends Component {
  render() {
    return (
      <header className="navigationBar">
        <ul className="navigationBarMenu icons">
          {this.props.navigationProps.map((item, index) => (
            <li key={index}>
              <AniLink cover to={item.link} direction="bottom" bg="black">
                <div className={`icon ${item.icon}`} style={{fontSize: 1.5 + 'em'}}></div>
              </AniLink>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default NavigationBar;
