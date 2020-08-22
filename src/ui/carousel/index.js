import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@chakra-ui/core'
import { default as NukaCarousel } from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Carousel({ nextText, prevText, slideIndex, children, ...restProps }) {
  return (
    <Box
      overflow="hidden"
      position="relative"
      width="100%"
      display="flex"
      alignItems="center"
      {...restProps}
    >
      <NukaCarousel
        slideIndex={slideIndex}
        renderCenterLeftControls={({ previousSlide, currentSlide }) => (
          <Button
            display={currentSlide === 0 ? 'none' : 'flex'}
            onClick={previousSlide}
            leftIcon={FiChevronLeft}
            backgroundColor="rgba(0,0,0,0.65)"
            color="white"
            _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          >
            {prevText}
          </Button>
        )}
        renderCenterRightControls={({ nextSlide, currentSlide }) => (
          <Button
            display={currentSlide === children.length - 1 ? 'none' : 'flex'}
            onClick={nextSlide}
            rightIcon={FiChevronRight}
            backgroundColor="rgba(0,0,0,0.65)"
            color="white"
            _hover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          >
            {nextText}
          </Button>
        )}
        disableEdgeSwiping
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'transparent',
            margin: '0 3px',
          },
        }}
      >
        {children}
      </NukaCarousel>
    </Box>
  )
}

Carousel.propTypes = {
  slideIndex: PropTypes.number,
  nextText: PropTypes.string,
  prevText: PropTypes.string,
  children: PropTypes.node,
}

Carousel.defaultProps = {
  slideIndex: 0,
  nextText: 'Next',
  prevText: 'Prev',
  children: null,
}

export default Carousel
