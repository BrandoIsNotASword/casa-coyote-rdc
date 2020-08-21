import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Stack } from '@chakra-ui/core'

import { GAP } from '../globals'

function Nav({ children, ...restProps }) {
  return (
    <Stack
      as="nav"
      isInline
      spacing={GAP}
      alignItems="center"
      shouldWrapChildren
      overflowX="auto"
      paddingX={{ base: 0, md: GAP }}
      flex={{ base: '0 0 100%', md: 'auto' }}
      {...restProps}
    >
      {children}
    </Stack>
  )
}

function Menu({ children, logo, button, navPosition, ...restProps }) {
  const flexPositions = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  return (
    <Flex
      as="header"
      justify="space-between"
      backgroundColor="black"
      minHeight={{ base: 'auto', lg: 20 }}
      paddingX={{ base: 4, lg: 20 }}
      paddingTop={{ base: 3, lg: 0 }}
      paddingBottom={{ sm: 3, lg: 0 }}
      alignItems="center"
      flexWrap="wrap"
      {...restProps}
    >
      {logo}
      <Box order={{ base: 0, md: 1 }}>{button}</Box>
      <Nav
        order={{ base: 1, md: 0 }}
        justify={{ base: 'flex-start', md: flexPositions[navPosition] }}
      >
        {children}
      </Nav>
    </Flex>
  )
}

Menu.propTypes = {
  navPosition: PropTypes.oneOf(['left', 'center', 'right']),
  logo: PropTypes.node,
  children: PropTypes.node,
  button: PropTypes.node,
}

Menu.defaultProps = {
  logo: '',
  children: '',
  button: '',
  navPosition: 'right',
}

export default Menu
