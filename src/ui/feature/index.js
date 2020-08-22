import React from 'react'
import PropTypes from 'prop-types'
import { SimpleGrid, Box, Heading, Text, Stack } from '@chakra-ui/core'

import { LIS_GAP, COL_GAP, ROW_GAP } from '../globals'

export function FeatureList({ children, ...restProps }) {
  return (
    <SimpleGrid columns={{ base: 1, lg: children.length }} spacing={COL_GAP} {...restProps}>
      {children}
    </SimpleGrid>
  )
}

FeatureList.propTypes = {
  children: PropTypes.node,
}

FeatureList.defaultProps = {
  children: null,
}

export function FeatureItem({ title, desc, image, icon, ...restProps }) {
  return (
    <Stack direction="column" borderRadius="15px" width="100%" spacing={LIS_GAP} {...restProps}>
      {image && (
        <Box
          backgroundImage={`url(${image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          paddingBottom="66%"
          borderRadius="15px"
        />
      )}
      <Box width="fit-content">{icon}</Box>
      <Heading as="h4" fontWeight="bold" fontSize="xl">
        {title}
      </Heading>
      <Text>{desc}</Text>
    </Stack>
  )
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.node,
}

FeatureItem.defaultProps = {
  title: '',
  desc: '',
  image: '',
  icon: null,
}

export function Features({ children, ...restProps }) {
  return (
    <Stack {...restProps} spacing={ROW_GAP}>
      {children}
    </Stack>
  )
}

Features.propTypes = {
  children: PropTypes.node,
}

Features.defaultProps = {
  children: null,
}
