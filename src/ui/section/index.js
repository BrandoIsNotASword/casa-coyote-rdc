import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, useTheme } from '@chakra-ui/core'

import { H3 } from '../globals'

function Section({ children, title, subtitle, ...restProps }) {
  const theme = useTheme()

  return (
    <Box
      as="section"
      paddingY={{ base: 8, md: 12 }}
      paddingX={{ base: 6, md: 20, lg: 6, xl: 20 }}
      maxWidth={{ md: theme.breakpoints.lg, lg: theme.breakpoints.mw }}
      marginX="auto"
      width="100%"
      {...restProps}
    >
      {(title || subtitle) && (
        <Box marginBottom={6} maxWidth="720px">
          {title && <H3>{title}</H3>}
          {subtitle && <Text marginTop={2}>{subtitle}</Text>}
        </Box>
      )}
      {children}
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

Section.defaultProps = {
  title: '',
  subtitle: '',
  children: null,
}

export default Section
