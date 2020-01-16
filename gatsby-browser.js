/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

  window.scrollTo(...([0, 0]))

  return false
}