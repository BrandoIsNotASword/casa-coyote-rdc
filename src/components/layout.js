import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { FiMapPin, FiMail, FiPhone, FiInstagram } from 'react-icons/fi'
import { ThemeProvider, CSSReset, theme, Flex, Text, Stack, Link, Image } from '@chakra-ui/core'

import Header from './header'
import { Footer, FooterBody, FooterBottom, FooterDivider, FooterColumn } from '../ui'

import CircularStdBookWoff from '../fonts/CircularStd-Book.woff'
import CircularStdBookWoff2 from '../fonts/CircularStd-Book.woff2'
import CircularStdMediumWoff from '../fonts/CircularStd-Medium.woff'
import CircularStdMediumWoff2 from '../fonts/CircularStd-Medium.woff2'
import CircularStdBlackWoff from '../fonts/CircularStd-Black.woff'
import CircularStdBlackWoff2 from '../fonts/CircularStd-Black.woff2'

import footerLogo from '../images/casa-coyote-logo.png'

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
    font-size: 16px;
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
        <Flex direction="column" as="main" flex="1" width="100%">
          {children}
        </Flex>
        <Footer>
          <FooterBody>
            <FooterColumn
              textAlign="center"
              align="center"
              direction="column"
              maxWidth="350px"
              marginX="auto"
            >
              <Link href="/" maxWidth="150px" marginBottom={4}>
                <Image src={footerLogo} />
              </Link>
              <Text>
                Amazing experience that will free your mind & touch your soul. Very cozy rooms, 100%
                ECO PRIVATE SUITES. Located at the most exclusive área of Tulum.
              </Text>
            </FooterColumn>

            <FooterColumn title="Contact us" marginTop={6} direction="column" marginX="auto">
              <Stack spacing={3}>
                <Stack isInline align="center" spacing={3} shouldWrapChildren>
                  <FiMapPin size="1.25rem" />
                  <Text>Carretera Tulum Boca Paila km 9.2</Text>
                </Stack>
                <Link href="mailto:reservaciones@hotelcasacoyotetulum.com">
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiMail size="1.25rem" />
                    <Text wordBreak="break-word" lineHeight="normal">
                      admongrupomanifesto@gmail.com
                    </Text>
                  </Stack>
                </Link>
                <Link href="tel:+5219841135252">
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiPhone size="1.25rem" />
                    <Text>+52 1 984 113 5252</Text>
                  </Stack>
                </Link>
                <Link
                  href="https://www.instagram.com/casa_coyote/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiInstagram size="1.25rem" />
                    <Text>casa_coyote</Text>
                  </Stack>
                </Link>
              </Stack>
            </FooterColumn>
          </FooterBody>

          <FooterDivider />

          <FooterBottom>
            <Text fontSize="sm" textAlign="center">
              © Hotel Casa Coyote Tulum. All Rights Reserved. Web development by{' '}
              <a
                href="https://hmnagency.com/"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 'inherit', textDecoration: 'underline' }}
              >
                hmnagency
              </a>
              .
            </Text>
          </FooterBottom>
        </Footer>
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
