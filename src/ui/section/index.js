import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, useTheme } from '@chakra-ui/core'

import { flexPositions } from '../utils'
import { H3 } from '../globals'

function Section({ children, fullWidth, titleAlign, title, subtitle, ...restProps }) {
  const theme = useTheme()
  const fullWidthProps = fullWidth && {
    marginX: '0',
    paddingX: '0',
    maxWidth: '100%',
  }

  return (
    <Box
      as="section"
      paddingY={{ base: 8, md: 12 }}
      paddingX={{ base: 6, md: 20, lg: 6, xl: 20 }}
      maxWidth={{ md: theme.breakpoints.lg, lg: theme.breakpoints.mw }}
      marginX="auto"
      width="100%"
      {...fullWidthProps}
      {...restProps}
    >
      {(title || subtitle) && (
        <Flex direction="column" marginBottom={6} alignItems={flexPositions[titleAlign]}>
          <Box maxWidth="720px" textAlign={titleAlign}>
            {title && <H3>{title}</H3>}
            {subtitle && <Text marginTop={2}>{subtitle}</Text>}
          </Box>
        </Flex>
      )}
      {children}
    </Box>
  )
}

Section.propTypes = {
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']),
  fullWidth: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

Section.defaultProps = {
  titleAlign: 'left',
  fullWidth: false,
  title: '',
  subtitle: '',
  children: null,
}

export default Section
