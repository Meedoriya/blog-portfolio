import { Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg='white'
      borderRadius='lg'
      boxShadow='md'
      p={0}
      spacing={4}
      cursor='pointer'
      transition='transform 0.2s'
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image
        src={imageSrc}
        alt={title}
        w='full'
        h='400px'
        objectFit='cover'
        borderRadius='md'
        border='none'
      />
      <VStack align='start' spacing={2}>
        <Heading p={2} as='h3' size='md' color='black'>
          {title}
        </Heading>
        <Text p={2} color='grey'>{description}</Text>
        <Link p={2} color='black'>See more</Link>
      </VStack>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </VStack>
  )
};

export default Card;
