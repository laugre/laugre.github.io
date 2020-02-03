import React, { Component } from 'react';
import styles from '../assets/sass/navigation-bar.module.scss';

class NavigationBar extends Component {
  render() {
    return (
      <header className={styles.navigationBar}>
        <ul className={styles.navigationBarMenu}>
          {this.props.headerProps.map((item, index) => (
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
