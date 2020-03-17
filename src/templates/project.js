import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import ReactPlayer from 'react-player';
import '../assets/sass/project.scss';
import Pagination from '../components/Pagination';
import { Parallax } from 'react-parallax';
import { useWindowSize } from '../hooks/useWindowSize';
import { Swipeable } from 'react-touch';
import { navigate } from 'gatsby';
import { useTriggerTransition } from 'gatsby-plugin-transition-link';
import { fade } from '../transitions/fade'

const Project = props => {
  const { pageContext } = props;
  const {
    title,
    image,
    imageMobile,
    text,
    quote,
    objectif,
    client,
    year,
    role,
    technology,
    medias,
    previous,
    next,
  } = pageContext;
  const windowsSize = useWindowSize();
  const gotoPrevProject = () => {
    navigate('/projects/' + previous.slug);
    // triggerTransition({
    //   to: '/projects/' + previous.slug,
    // });
  };
  const gotoNextProject = () => {
    navigate('/projects/' + next.slug);
    // triggerTransition({
    //   to: '/projects/' + next.slug,
    // });
  };

  const triggerTransition = useTriggerTransition({
    exit: {
      length: 1,
      trigger: ({ exit, node }) => fade({ exit, node, direction: 'out' }),
    },
    entry: {
      length: 1,
      delay: 0.5,
      trigger: ({ exit, node }) => fade({ exit, node, direction: 'in' }),
    },
  })

  return (
    <Layout>
      <Swipeable onSwipeLeft={gotoPrevProject} onSwipeRight={gotoNextProject}>
        <div>
          <Pagination
            previous={'/projects/' + previous.slug}
            next={'/projects/' + next.slug}
          ></Pagination>

          <section id="project-header">
            <Parallax
              strength={windowsSize.width < 897 ? -200 : -100}
              bgImage={
                windowsSize.width < 897
                  ? require('../assets/images/projects/' + imageMobile)
                  : require('../assets/images/projects/' + image)
              }
              bgImageAlt=""
            >
              <div className="parallax-content" />
            </Parallax>
            <Scroll type="id" element="project-banner" offset={-60}>
              <a href="#project-banner" className="button style1 more">
                {title}
              </a>
            </Scroll>
          </section>

          <section id="project-banner">
            <header>
              <h2>{title}</h2>
            </header>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <blockquote>{quote}</blockquote>
            <p dangerouslySetInnerHTML={{ __html: objectif }} />
          </section>

          <section id="project-contents">
            {medias.map((media, index) => (
              <React.Fragment key={index}>
                <div className="line"></div>
                <article
                  className={
                    'project-content ' + (index % 2 ? 'right' : 'left')
                  }
                >
                  <div className="media">
                    {(() => {
                      switch (media.type) {
                        case 'image':
                          return (
                            <img
                              src={require('../assets/images/projects/' +
                                media.media)}
                              alt=""
                            />
                          );
                        case 'video':
                          return (
                            <ReactPlayer
                              url={require('../assets/videos/' + media.media)}
                              playing={true}
                              loop={true}
                              width="100%"
                              height="100%"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                  <div className="inner">
                    <header>
                      <h3>{media.title}</h3>
                    </header>
                    <p dangerouslySetInnerHTML={{ __html: media.caption }} />
                  </div>
                </article>
              </React.Fragment>
            ))}
          </section>

          <article className="container box style2">
            <header>
              <p>{client}</p>
              <p>{year}</p>
              <p>{role}</p>
              <p>{technology}</p>
            </header>
          </article>

          <Footer />
        </div>
      </Swipeable>
    </Layout>
  );
};

export default Project;
