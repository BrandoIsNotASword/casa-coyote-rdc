import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/core'

function FeaturedBanner({ children, bg }) {
  return (
    <Flex
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 100%), url(${bg})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      direction="column"
      padding={4}
      align="center"
      justify="center"
      height={{ base: '350px', lg: '550px' }}
    >
      {children}
    </Flex>
  )
}

FeaturedBanner.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
}

FeaturedBanner.defaultProps = {
  bg: '',
}

export default FeaturedBanner
