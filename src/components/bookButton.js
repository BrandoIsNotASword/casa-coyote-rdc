import React from 'react'
import PropTypes from 'prop-types'
import { useSetRecoilState } from 'recoil'

import { Button } from '@chakra-ui/core'

import { bookingModalState } from '../store'

function BookButton({ children, ...restProps }) {
  const setIsBookingModalOpen = useSetRecoilState(bookingModalState)

  return (
    <Button
      size="lg"
      variantColor="teal"
      onClick={() => setIsBookingModalOpen(true)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

BookButton.propTypes = {
  children: PropTypes.node,
}

BookButton.defaultProps = {
  children: null,
}

export default BookButton
