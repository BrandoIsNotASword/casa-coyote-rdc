import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text } from '@chakra-ui/core'

function ImageContent({ children, image, imageDesc, reversed, ...restProps }) {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} minHeight={{ lg: '500px' }} {...restProps}>
      <Flex
        order={{ base: 1, lg: reversed && 1 }}
        direction="column"
        flexShrink={0}
        flexBasis="50%"
        paddingRight={{ lg: reversed ? 0 : 10 }}
        paddingLeft={{ lg: reversed ? 10 : 0 }}
        justify="center"
      >
        {children}
      </Flex>
      <Box
        order={{ base: 0, lg: reversed ? 0 : 1 }}
        flexShrink={0}
        flexBasis="50%"
        overflow="hidden"
        position="relative"
        marginBottom={{ base: 6, lg: 0 }}
        width="100%"
        paddingBottom={{ base: '66%', lg: '0%' }}
        maxHeight="500px"
        borderRadius="15px"
        backgroundImage={`url(${image})`}
        backgroundColor="gray.200"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        {imageDesc && (
          <Text
            color="white"
            fontWeight="bold"
            position="absolute"
            bottom="0"
            right="0"
            width="100%"
            background="linear-gradient(0deg,rgba(0,0,0,0.65) 0%,rgba(255,255,255,0) 100%)"
            padding={4}
            textAlign="right"
            textShadow="1px 1px 5px rgba(0,0,0,0.85)"
          >
            {imageDesc}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

ImageContent.propTypes = {
  reversed: PropTypes.bool,
  imageDesc: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node,
}

ImageContent.defaultProps = {
  reversed: false,
  imageDesc: '',
  image: null,
  children: null,
}

export default ImageContent
