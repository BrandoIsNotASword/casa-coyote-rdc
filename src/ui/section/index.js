import React from 'react'
import PropTypes from 'prop-types'
import { Box, useTheme } from '@chakra-ui/core'

function Section({ children, ...restProps }) {
  const theme = useTheme()

  return (
    <Box
      as="section"
      paddingY={{ base: 8, md: 12 }}
      paddingX={{ base: 8, md: 20 }}
      maxWidth={{ md: theme.breakpoints.lg, lg: theme.breakpoints.mw }}
      marginX="auto"
      width="100%"
      {...restProps}
    >
      {children}
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
