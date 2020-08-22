import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Flex, useTheme } from '@chakra-ui/core'

function FloatingBanner({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const theme = useTheme()

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y * -1 > window.innerHeight / 3) setIsVisible(true)
      else setIsVisible(false)
    },
    [],
    null,
    null,
    300
  )

  return (
    <Flex
      display={{ base: isVisible ? 'flex' : 'none', xl: 'none' }}
      position="fixed"
      zIndex="1"
      bottom="0"
      backgroundColor="rgba(255,255,255,0.95)"
      borderTop={`1px solid ${theme.colors.gray[100]}`}
      width="100%"
      paddingX={4}
      paddingY={2}
      justify="space-between"
      align="center"
    >
      {children}
    </Flex>
  )
}

FloatingBanner.propTypes = {
  children: PropTypes.node,
}

export default FloatingBanner
