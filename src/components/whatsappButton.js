import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Link } from '@chakra-ui/core'
import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton() {
  return (
    <Flex
      zIndex="1"
      position="fixed"
      bottom="0"
      right="0"
      backgroundColor="#4dc247"
      borderRadius="100px"
      size="60px"
      justify="center"
      align="center"
      color="white"
      marginBottom={{ base: '70px', xl: '10px' }}
      marginRight="10px"
      boxShadow="0px 0px 6px rgba(0,0,0,0.25)"
    >
      <Link
        href="https://api.whatsapp.com/send?phone=5219841135252&text="
        width="100%"
        height="100%"
        display="inline-grid"
        alignItems="center"
        justifyItems="center"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size="2.25rem" />
      </Link>
    </Flex>
  )
}

WhatsappButton.propTypes = {
  text: PropTypes.string,
}

WhatsappButton.defaultProps = {
  text: '',
}

export default WhatsappButton
