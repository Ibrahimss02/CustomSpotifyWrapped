import React, { Component } from 'react';
import { ChakraProvider, Spinner, Stack, Text } from "@chakra-ui/react";

const textArray = ["Please wait until the page is fully loaded...", "Try clicking some models later 👀", "Ini dikerjain 3 hari loh", "Fun fact: Ini project react pertamaku", "Source code ini no clean code sama sekali. 🤫", "How's your day?", "Why did I create this? Idk I just like 3d", "Loading assets from spline.design", "I did not create all of the asset"]

class LoadingText extends Component {
  constructor() {
    super();
    this.state = { text: textArray[0] };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({ text: textArray[Math.floor(Math.random() * textArray.length)] });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = this.state.text;

    return (
        <ChakraProvider>
        <Stack align="center" mb={8}>
        <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
        <Text fontSize="sm">{textThatChanges}</Text>
      </Stack>
      </ChakraProvider>
    )
  }
}
export default LoadingText;