import React from 'react'
import PropTypes from 'prop-types'

import { SimpleGrid, Text, Flex, Divider } from '@chakra-ui/core'

import { GAP } from '../globals'

export function FooterColumn({ title, children, ...restProps }) {
  return (
    <Flex direction="column" {...restProps}>
      {title && (
        <Text fontWeight="bold" fontSize="xl" marginBottom={GAP}>
          {title}
        </Text>
      )}
      {children}
    </Flex>
  )
}

export function FooterBody({ children, columns, ...restProps }) {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: children.length }}
      direction={{ base: 'column', lg: 'row' }}
      width="100%"
      spacing={GAP}
      {...restProps}
    >
      {children}
    </SimpleGrid>
  )
}

FooterBody.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node,
}

FooterBody.propTypes = {
  children: null,
}

export function FooterDivider({ props }) {
  return <Divider width="100%" opacity="0.15" marginY={6} {...props} />
}

export function FooterBottom({ children, ...restProps }) {
  return <Flex {...restProps}>{children}</Flex>
}

FooterBottom.propTypes = {
  children: PropTypes.node,
}

FooterBottom.propTypes = {
  children: null,
}

export function Footer({ children, ...restProps }) {
  return (
    <Flex
      as="footer"
      direction="column"
      justify="space-between"
      backgroundColor="black"
      color="white"
      paddingX={{ base: 6, lg: 20 }}
      paddingY={10}
      alignItems="center"
      flexWrap="wrap"
      {...restProps}
    >
      {children}
    </Flex>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

Footer.propTypes = {
  children: null,
}

export default Footer
