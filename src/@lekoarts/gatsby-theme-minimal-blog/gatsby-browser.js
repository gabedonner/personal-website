import React from 'react';
import {AnimatePresence} from 'framer-motion';

const transitionDelay = 500;

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);


// scroll position magic to consider later

/* export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
}; */