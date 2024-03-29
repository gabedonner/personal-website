import { merge } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import { tailwind } from '@theme-ui/presets'

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    //primary: tailwind.colors.purple[7],
    primary: `#0284c7`,
    background: `#e1e0dd`,
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    //muted: tailwind.colors.gray[4],
    muted: tailwind.colors.gray[5],
    dots: tailwind.colors.gray[6],
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        //primary: tailwind.colors.purple[5],
        primary: `#0ea5e9`,
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        //toggleIcon: `#0ea5e9`,
        // background: `#1A202C`,
        background: `#111827`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        //muted: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[7],
        dots: tailwind.colors.gray[7],
      },
    },
  },
  fonts: {
    body: `"Inter", Arial, "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },

  // fontSizes: [
  //   12, 14, 16, 18, 24, 32, 48, 64, 72,
  // ],

  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    mark: {
      bg: 'background',
    },
    p: {
      fontSize: [1, 2, 2, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        '--baseline-multiplier': 0.179,
        '--x-height-multiplier': 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        '--baseline-multiplier': 0.179,
        '--x-height-multiplier': 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      // fontSize: [5, 6, 6, 7],
      fontSize: [5, 5, 5, 5],
      // mt: 3,
      mt: 2,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 5, 6, 6],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      fontWeight: 'medium',
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
  },
  layout: {
    container: {
      // padding: [3, 4],
      py: [3, 4],
      px: [3, 4],
      // maxWidth: `1024px`,
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
    webDesc: {
      color: 'secondary',
      fontSize: [1, 2, 2],
      lineHeight: 2,
    },
  },

  //bg: 'background', fontSize: [3, 3, 3], a: { color: 'text', textDecoration: 'underline'

  copyButton: {
    backgroundColor: transparentize(`primary`, 0.8),
    border: `none`,
    color: `gray.2`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `default`,
    '&[disabled]': {
      cursor: `not-allowed`,
    },
    ':not([disabled]):hover': {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    top: 0,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `muted`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `muted`,
      pt: 3,
    },
    intersect: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    medium: {
      color: `text`,
      fontSize: [2, 3, 3],
      textDecoration: `none`,
      fontWeight: 'medium',
      ':hover': {
        textDecoration: `underline`,
      },
      ':focus': {},
    },
    tag: {
      color: `secondary`,
      textDecoration: `none`,
      fontWeight: 'light',
      ':hover': {
        textDecoration: `underline`,
      },
      ':focus': {},
    },
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ':hover': {
        color: `heading`,
        textDecoration: `underline`,
      },
      ':focus': {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [3, 3, 3],
      //color: `text`,
      //fontWeight: 'regular',
      //fontWeight: 'medium',
    },
  },
  buttons: {
    toolpill: {
      fontSize: ['12px'],
      padding: '5px 10px',
      color: 'background',
      bg: 'primary',
      borderRadius: '20px',
    },
  },
})

export default theme
