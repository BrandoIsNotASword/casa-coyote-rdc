import React from 'react'
import { Heading } from '@chakra-ui/core'

export const LIS_GAP = 3
export const COL_GAP = 8
export const ROW_GAP = 10
export const GAP = 6

export function H1({ children, ...restProps }) {
  return (
    <Heading as="h1" {...restProps}>
      {children}
    </Heading>
  )
}

export function H2({ children, ...restProps }) {
  return (
    <Heading as="h2" fontWeight="light" fontSize={{ base: 'lg', md: '2xl' }} {...restProps}>
      {children}
    </Heading>
  )
}

export function H3({ children, ...restProps }) {
  return (
    <Heading as="h3" fontSize="2xl" {...restProps}>
      {children}
    </Heading>
  )
}
