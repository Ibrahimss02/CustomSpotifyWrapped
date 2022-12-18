import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Image,
  Text,
  Link,
  Spinner,
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "styled-components";
import getNowPlayingItem from "./SpotifyApi";
import SpotifyLogo from "./SpotifyLogo";
import PlayingAnimation from "./SpotifyPlayingAnimation";

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <Center>
      <Box width="xs">
        {loading ?
          <Stack align="center" mb={8}>
            <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
            <Text>Fetching Ibrahim listening status...</Text>
          </Stack>
          :
          <Stack width="full" mb={result.isPlaying ? 2 : 4} spacing={3}>
            <Stack spacing={2} direction="row" align="center">
              <SpotifyLogo />
              <Text fontWeight="semibold">{result.isPlaying ? 'Now playing ' : "I\'m off on Spotify right now"}</Text>
              {result.isPlaying && <PlayingAnimation />}
            </Stack>
            {result.isPlaying &&
              <Box p={2} className="box">
                <Stack direction="row" spacing={4} align="center">
                  <Image className="image"
                    alt={`${result.title} album art`}
                    src={result.albumImageUrl}
                    boxSize="85px"
                    sx={{
                      '@media (max-width: 1600px)': {
                        boxSize: "80px",
                      },
                    }}
                  />
                  <Stack spacing={0} overflow="hidden">
                    <Link href={result.songUrl} target="_blank">
                      <Text
                        fontWeight="semibold"
                        width="full"
                        isTruncated
                        color="alph"
                      >
                        {result.title}
                      </Text>
                    </Link>
                    <Text className="text"
                      color="blue.800"
                      isTruncated
                    >
                      {result.artist}
                    </Text>
                    <Text className="text"
                      fontSize="sm"
                      color="blue.800"
                    >
                      Playing on {result.device} ({result.deviceType})
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            }
          </Stack>
        }
      </Box>
    </Center>
  )
};

export default SpotifyNowPlaying;

const Center = styled.div`
  margin-top: 4rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: 1s;
  padding: 1rem;

  :hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }

  @media (max-width: 1600px) {
    margin-top: 2rem;

    .text {
      font-size: 12px;
    }
  }
`;