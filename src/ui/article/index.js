import React from 'react'
import { useTheme } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { Flex, Box } from '@chakra-ui/core'

import { H1, H2 } from '../globals'

function Article({ children, title, subtitle, bgTitlePage, ...restProps }) {
  const theme = useTheme()

  return (
    <Box as="article" {...restProps}>
      {(title || subtitle) && (
        <Flex
          as="section"
          direction="column"
          backgroundColor={bgTitlePage}
          paddingY={{ base: 8, md: 12 }}
          paddingX={{ base: 6, md: 20, lg: 6, xl: 20 }}
          maxWidth={{ md: theme.breakpoints.lg, lg: theme.breakpoints.mw }}
          marginX="auto"
        >
          {title && <H1>{title}</H1>}
          {subtitle && <H2 marginTop={2}>{subtitle}</H2>}
        </Flex>
      )}
      {children}
    </Box>
  )
}

Article.propTypes = {
  bgTitlePage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

Article.defaultProps = {
  bgTitlePage: 'gray.50',
  title: '',
  subtitle: '',
  children: null,
}

export default Article
