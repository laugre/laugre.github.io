import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// import MagicScroll from 'magic-scroll';
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
    // });
    // window.document.scrollingElement.scrollTop = 0;
    // magicScroll.pos = window.document.scrollingElement.scrollTop;

    // console.log(window.document.scrollingElement.scrollTop);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    
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
                {
                  name: 'description',
                  content: 'Développement Front End, Web, Mobile, Multimédia',
                },
                {
                  name: 'keywords',
                  content: 'développeur, front-end, web, mobile, multimédia',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <NavigationBar />
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
