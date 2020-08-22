import React from 'react'
import { useSetRecoilState } from 'recoil'

import { Button } from '@chakra-ui/core'

import { bookingModalState } from '../store'

function BookButton(props) {
  const setIsBookingModalOpen = useSetRecoilState(bookingModalState)

  return (
    <Button size="lg" variantColor="teal" onClick={() => setIsBookingModalOpen(true)} {...props}>
      Book now
    </Button>
  )
}

export default BookButton
