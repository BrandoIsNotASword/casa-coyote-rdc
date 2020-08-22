import React from 'react'
import { useTheme } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { Flex, Box } from '@chakra-ui/core'

import { H1, H2 } from '../globals'

function Article({ children, titleAlign, title, subtitle, bgTitlePage, ...restProps }) {
  const theme = useTheme()

  return (
    <Box as="article" {...restProps}>
      {(title || subtitle) && (
        <Box backgroundColor={bgTitlePage}>
          <Flex
            as="section"
            direction="column"
            paddingY={{ base: 8, md: 12 }}
            paddingX={{ base: 6, md: 20, lg: 6, xl: 20 }}
            maxWidth={{ md: theme.breakpoints.lg, lg: theme.breakpoints.mw }}
            marginX="auto"
          >
            {title && <H1 textAlign={titleAlign}>{title}</H1>}
            {subtitle && (
              <H2 textAlign={titleAlign} marginTop={2}>
                {subtitle}
              </H2>
            )}
          </Flex>
        </Box>
      )}
      {children}
    </Box>
  )
}

Article.propTypes = {
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']),
  bgTitlePage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

Article.defaultProps = {
  titleAlign: 'left',
  bgTitlePage: 'gray.50',
  title: '',
  subtitle: '',
  children: null,
}

export default Article
