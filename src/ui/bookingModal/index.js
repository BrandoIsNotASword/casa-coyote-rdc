import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent, useTheme } from '@chakra-ui/core'

function BookingModal({ isOpen, lang, onClose }) {
  const theme = useTheme()

  useEffect(() => {
    window.addEventListener('message', onMessage, false)
    return () => window.removeEventListener('message', onMessage, false)
  })

  const onMessage = (e) => {
    if (e.data.func === 'zbeCloseBooking') onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full" closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent marginY={0} marginX="auto" minHeight="100vh" maxWidth={theme.breakpoints.lg}>
          <iframe
            title="Booking Engine"
            style={{ height: '100vh', width: '100%' }}
            src={`https://rbe.zaviaerp.com/?zbe_hotel_id=259&lng=${lang}`}
          />
        </ModalContent>
      </Modal>
    </>
  )
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool,
  lang: PropTypes.string,
  onClose: PropTypes.func,
}

BookingModal.defaultProps = {
  isOpen: false,
  lang: 'en',
  onClose: () => {},
}

export default BookingModal
