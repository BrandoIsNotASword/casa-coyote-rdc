import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal as GatsbyModal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from '@chakra-ui/core'

function Modal({ children, isOpen, onClose }) {
  return (
    <GatsbyModal isOpen={isOpen} onClose={onClose} size="full" closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent marginY={0} marginX="auto" minHeight="100vh">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody display="flex">{children}</ModalBody>
      </ModalContent>
    </GatsbyModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
}

export default Modal
