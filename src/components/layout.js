import React from 'react'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'
import { useRecoilState } from 'recoil'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { FiMapPin, FiMail, FiPhone, FiInstagram, FiGlobe } from 'react-icons/fi'
import {
  ThemeProvider,
  CSSReset,
  theme,
  Flex,
  Text,
  Stack,
  Link,
  Image,
  Button,
} from '@chakra-ui/core'

import Header from './header'
import WhatsappButton from './whatsappButton'
import { Footer, FooterBody, FooterBottom, FooterDivider, FooterColumn, BookingModal } from '../ui'

import CircularStdBookWoff from '../fonts/CircularStd-Book.woff'
import CircularStdBookWoff2 from '../fonts/CircularStd-Book.woff2'
import CircularStdMediumWoff from '../fonts/CircularStd-Medium.woff'
import CircularStdMediumWoff2 from '../fonts/CircularStd-Medium.woff2'
import CircularStdBlackWoff from '../fonts/CircularStd-Black.woff'
import CircularStdBlackWoff2 from '../fonts/CircularStd-Black.woff2'

import footerLogo from '../images/logo.png'

import { bookingModalState } from '../store'

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
  const { t } = useTranslation()
  const { changeLanguage, language } = useI18next()
  const [isBookingModalOpen, setIsBookingModalOpen] = useRecoilState(bookingModalState)

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
              <Link href="/" maxWidth="300px" marginBottom={4}>
                <Image src={footerLogo} />
              </Link>
              <Text>{t('footer.desc')}</Text>
              <Button
                variant="outline"
                rightIcon={FiGlobe}
                marginTop={4}
                _hover={{ color: 'inherit' }}
                onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
              >
                {language === 'es' ? 'English' : 'Español'}
              </Button>
            </FooterColumn>

            <FooterColumn />

            <FooterColumn
              title={t('footer.contact.title')}
              marginTop={6}
              direction="column"
              marginX="auto"
            >
              <Stack spacing={3}>
                <Stack isInline align="center" spacing={3} shouldWrapChildren>
                  <FiMapPin size="1.25rem" />
                  <Text>{t('footer.contact.address')}</Text>
                </Stack>
                <Link href="mailto:mary@sancarlosmr.com">
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiMail size="1.25rem" />
                    <Text wordBreak="break-word" lineHeight="normal">
                      mary@sancarlosmr.com
                    </Text>
                  </Stack>
                </Link>
                <Link href="tel:+5219983548467">
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiPhone size="1.25rem" />
                    <Text>+52 1 998 354 8467</Text>
                  </Stack>
                </Link>
                <Link
                  href="https://www.instagram.com/sancarlosecolodge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Stack isInline align="center" spacing={3} shouldWrapChildren>
                    <FiInstagram size="1.25rem" />
                    <Text>sancarlosecolodge</Text>
                  </Stack>
                </Link>
              </Stack>
            </FooterColumn>
          </FooterBody>

          <FooterDivider />

          <FooterBottom>
            <Text fontSize="sm" textAlign="center">
              {t('footer.terms')}{' '}
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
      <WhatsappButton />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
