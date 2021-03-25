import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Link } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled'

import { Text } from '@chakra-ui/core'

import { Menu } from '../ui'
import BookButton from '../components/bookButton'

import logo from '../images/logo.png'

const Logo = styled.img`
  height: 30px;
  width: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 50px;
  }
`

const LogoLink = styled(Link)`
  flex-shrink: 0;
`

const NavLink = styled(Link)`
  opacity: 0.85;
  padding: 10px 0;
  display: inline-block;

  &:hover {
    opacity: 1;
  }
`

function Header() {
  const { t } = useTranslation()

  return (
    <Menu
      logo={
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
      }
      button={<BookButton size="md">{t('commons.bookNow')}</BookButton>}
    >
      <NavLink to="#hotel">
        <Text>{t('nav.hotel')}</Text>
      </NavLink>
      <NavLink to="#experience">
        <Text>{t('nav.experience')}</Text>
      </NavLink>
      <NavLink to="#puerto-morelos">
        <Text>Puerto Morelos</Text>
      </NavLink>
      <NavLink to="#contact">
        <Text>{t('nav.contact')}</Text>
      </NavLink>
    </Menu>
  )
}

export default Header
