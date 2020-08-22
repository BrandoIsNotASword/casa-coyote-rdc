import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled'

import { Button, Text } from '@chakra-ui/core'

import { Menu } from '../ui'

import logo from '../images/casa-coyote-logo.png'

const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 65px;
  }
`

const LogoLink = styled(Link)`
  flex-shrink: 0;
`

const NavLink = styled(Link)`
  color: white;
  opacity: 0.85;
  padding: 10px 0;
  display: inline-block;

  &:hover {
    opacity: 1;
  }
`

function Header() {
  return (
    <Menu
      logo={
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
      }
      button={<Button onClick={() => alert('ay!')}>Book now</Button>}
    >
      <NavLink to="#hotel">
        <Text>Hotel</Text>
      </NavLink>
      <NavLink to="#rooms">
        <Text>Rooms</Text>
      </NavLink>
      <NavLink to="#experience">
        <Text>Experience</Text>
      </NavLink>
      <NavLink to="#restaurant">
        <Text>Restaurant</Text>
      </NavLink>
      <NavLink to="#contact">
        <Text>Contact</Text>
      </NavLink>
    </Menu>
  )
}

export default Header
