import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// import MagicScroll from 'magic-scroll.js';
import '../assets/sass/main.scss';
import NavigationBar from '../components/NavigationBar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);

    // let magicScroll = new MagicScroll({
    //   speed: 50,
    //   smooth: 20,
    //   // current: 1980,
    // });
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    const navigationItems = [
      { link: '/#home', name: 'home' },
      // { link: '#project', name: 'Projets' },
      { link: '#about', name: 'about' },
      // { link: '#contact', name: 'Contact' },
    ];
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Devologic' },
                { name: 'keywords', content: 'développeur, web, mobile' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <NavigationBar navigationProps={navigationItems} />
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
