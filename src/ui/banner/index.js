import React from 'react'
import { Box } from '@chakra-ui/core'

function Banner({ children, ...restProps }) {
  return (
    <Box
      bg="gray.100"
      display="flex"
      minHeight={12}
      alignItems="center"
      justifyContent="center"
      {...restProps}
    >
      {children}
    </Box>
  )
}

export default Banner
