import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './components/layout.tsx'

export const onRouteUpdate = () => {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.plausible !== `undefined`
  ) {
    window.plausible(`pageview`)
  }
}

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

/*export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

 export const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>;
};
 */

// scroll position magic
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.3 * 1000 * 2
  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
  return false
}
