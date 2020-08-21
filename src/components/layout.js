import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { ThemeProvider, CSSReset, theme, Flex } from '@chakra-ui/core'

import Header from './header'
import Footer from './footer'

import CircularStdBookWoff from '../fonts/CircularStd-Book.woff'
import CircularStdBookWoff2 from '../fonts/CircularStd-Book.woff2'
import CircularStdMediumWoff from '../fonts/CircularStd-Medium.woff'
import CircularStdMediumWoff2 from '../fonts/CircularStd-Medium.woff2'
import CircularStdBlackWoff from '../fonts/CircularStd-Black.woff'
import CircularStdBlackWoff2 from '../fonts/CircularStd-Black.woff2'

const customTheme = {
  ...theme,
  breakpoints: ['480px', '720px', '1024px', '1280px', '1440px', '1760px'],
}

customTheme.breakpoints.sm = customTheme.breakpoints[0]
customTheme.breakpoints.md = customTheme.breakpoints[1]
customTheme.breakpoints.lg = customTheme.breakpoints[2]
customTheme.breakpoints.xl = customTheme.breakpoints[3]
customTheme.breakpoints.xx = customTheme.breakpoints[4]
customTheme.breakpoints.mw = customTheme.breakpoints[5]

const globalStyles = css`
  @font-face {
    font-family: CircularStd;
    font-style: normal;
    src: url(${CircularStdBookWoff2}) format('woff2'), url(${CircularStdBookWoff}) format('woff');
    font-display: swap;
    font-weight: 300;
  }

  @font-face {
    font-family: CircularStd;
    font-style: normal;
    src: url(${CircularStdMediumWoff2}) format('woff2'),
      url(${CircularStdMediumWoff}) format('woff');
    font-display: swap;
    font-weight: 400;
  }

  @font-face {
    font-family: CircularStd;
    font-weight: 700;
    font-style: normal;
    src: url(${CircularStdBlackWoff2}) format('woff2'), url(${CircularStdBlackWoff}) format('woff');
    font-display: swap;
  }

  * {
    font-size: 14px;
    font-family: CircularStd, Arial, Helvetica, sans-serif !important;
    font-weight: 300;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  p,
  span {
    max-height: 999999px;
  }

  p,
  h2 {
    opacity: 0.85;
  }
`

function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Flex as="main" flex="1">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
