import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/core'

function Article({ children, ...restProps }) {
  return (
    <Box as="article" {...restProps}>
      {children}
    </Box>
  )
}

Article.propTypes = {
  children: PropTypes.node,
}

export default Article
