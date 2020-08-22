import React, { useState } from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { PseudoBox, SimpleGrid, Button, Box } from '@chakra-ui/core'

import Carousel from '../carousel'
import Modal from '../modal'

function Gallery({ images, thumbs, nextText, prevText, buttonText, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (slideIndex) => {
    setSlideIndex(slideIndex)
    setIsOpen(true)
  }

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        height={{ lg: '500px' }}
        {...restProps}
        spacing={2}
        borderRadius="15px"
        overflow="hidden"
      >
        <PseudoBox
          backgroundImage={`url(${thumbs[0]})`}
          backgroundPosition="center"
          backgroundSize="cover"
          paddingBottom={{ base: '66%', lg: '0%' }}
          height={{ lg: '100%' }}
          onClick={() => handleClick(0)}
          position="relative"
          _hover={{ opacity: '0.85', cursor: 'pointer' }}
        >
          <Button
            position="absolute"
            bottom="0"
            right="0"
            marginRight={4}
            marginBottom={4}
            opacity="0.85"
            onClick={() => handleClick()}
          >
            {buttonText}
          </Button>
        </PseudoBox>
        <SimpleGrid
          display={{ base: 'none', lg: 'grid' }}
          columns={2}
          spacing={2}
          height="100%"
          width="100%"
        >
          <PseudoBox
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            backgroundImage={`url(${thumbs[1]})`}
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
            onClick={() => handleClick(1)}
          />
          <PseudoBox
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            backgroundImage={`url(${thumbs[2]})`}
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
            onClick={() => handleClick(2)}
          />
          <PseudoBox
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            backgroundImage={`url(${thumbs[3]})`}
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
            onClick={() => handleClick(3)}
          />
          <PseudoBox
            _hover={{ opacity: '0.85', cursor: 'pointer' }}
            backgroundImage={`url(${thumbs[4]})`}
            backgroundPosition="center"
            backgroundSize="cover"
            height="100%"
            onClick={() => handleClick(4)}
          />
        </SimpleGrid>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Carousel nextText={nextText} prevText={prevText} slideIndex={slideIndex}>
          {images.map((image) => (
            <Box
              key={v4()}
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="80vh"
            >
              {image}
            </Box>
          ))}
        </Carousel>
      </Modal>
    </>
  )
}

Gallery.propTypes = {
  prevText: PropTypes.string,
  nextText: PropTypes.string,
  buttonText: PropTypes.string,
  thumbs: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.node),
}

Gallery.defaultProps = {
  buttonText: '',
  thumbs: [],
  images: [],
}

export default Gallery
