import React, { Component } from 'react';
import '../assets/sass/navigation-bar.scss';

class NavigationBar extends Component {
  render() {
    return (
      <header className="navigationBar">
        <ul className="navigationBarMenu">
          {this.props.navigationProps.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default NavigationBar;
