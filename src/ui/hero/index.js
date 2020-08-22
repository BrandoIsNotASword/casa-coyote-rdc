import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@chakra-ui/core'

import { H1, H2 } from '../globals'

export function HeroBody({ children, ...restProps }) {
  return (
    <Flex
      direction="column"
      justify="center"
      maxWidth={{ base: '300px', md: '420px' }}
      {...restProps}
    >
      {children}
    </Flex>
  )
}

HeroBody.propTypes = {
  children: PropTypes.node,
}

HeroBody.defaultProps = {
  children: null,
}

export function HeroTitle({ children, ...restProps }) {
  return (
    <H1
      color="white"
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
      paddingBottom={2}
      lineHeight="shorter"
      {...restProps}
    >
      {children}
    </H1>
  )
}

HeroTitle.propTypes = {
  children: PropTypes.node,
}

HeroTitle.defaultProps = {
  children: null,
}

export function HeroSubtitle({ children, ...restProps }) {
  return (
    <H2 color="white" fontWeight="light" fontSize={{ base: 'xl', md: '2xl' }} {...restProps}>
      {children}
    </H2>
  )
}

HeroSubtitle.propTypes = {
  children: PropTypes.node,
}

HeroSubtitle.defaultProps = {
  children: null,
}

export function HeroCta({ children, ...restProps }) {
  return (
    <Box marginTop={5} width={{ sm: 'fit-content' }} {...restProps}>
      {children}
    </Box>
  )
}

HeroCta.propTypes = {
  children: PropTypes.node,
}

HeroCta.defaultProps = {
  children: null,
}

export function Hero({ children, bg, ...restProps }) {
  return (
    <Flex
      background={`linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%), url(${bg})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundColor="gray.800"
      padding={{ base: 6, md: 10, lg: 16, xl: 24, xx: 40 }}
      height={{ base: '300px', md: '400px', lg: '500px', xl: '600px' }}
      width="100%"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

Hero.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
}

Hero.defaultProps = {
  bg: '',
  children: null,
}
