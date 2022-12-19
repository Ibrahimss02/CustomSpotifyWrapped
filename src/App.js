import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/thunder_logo.svg";
import Blob from "./images/podcast_blob.svg";
import Blob2 from "./images/podcast_blob2.svg";
import InstagramLogo from "./images/logo-instagram.svg";
import LinkedInLogo from "./images/linkedin-logo.svg";
import GithubLogo from "./images/logo_github.svg";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingText from "./LoadingText";
import { useEffect, useState } from "react";


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    disableScroll();
    window.scrollTo(0,0);
    document.title = "Ibrahim's Spotify Wrapped"
  }, []);

  function disableScroll() { 
    document.body.classList.add("remove-scrolling");
  } 
  
  function enableScroll() { 
    setTimeout(() => {
      document.body.classList.remove("remove-scrolling");  
      setLoading(false);
    }, 15000);
  }


  return (
    <>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/BGDlXQOcZxz76ZEB/scene.splinecode"
          onLoad={enableScroll}
        />

        <Content>
          <Menu>
            <li>
              <img src={Logo} alt="Logo" />
            </li>
          </Menu>
          <h1>
            ibrahim’s <br />
            Spotify Wrapped
          </h1>
          <p>
            Check out my own design of 2022 Spotify recap with some changes
            from Spotify original wrapped. Get to know about my accompanist thru
            the whole day and compare with yours. Who knows maybe we love the
            same type of songs. Cheers 🍻

            <br/>
            <br/>
            Website feels laggy? Try turning on your browser <a href="https://help.glorify.com/en/articles/3730301-turn-hardware-acceleration-on-in-google-chrome">hardware acceleration.</a>
          </p>
          {loading ? <LoadingText/> : <></>}
        </Content>
      </Wrapper>

      <PlaytimeWrapper>
        <Spline
          onClick={() =>
            openInNewTab(
              "https://open.spotify.com/user/21q6z43shkq65nn2arzuarcay"
            )
          }
          className="spline"
          scene="https://prod.spline.design/uNUbzWfvruzc-H9W/scene.splinecode"
        />

        <PlaytimeContent>
          <h1>Total Playtime</h1>
          <h2>38,989 Minutes</h2>
          <p>
            In 2022, I did spent 38.989 minutes playing music from Spotify which
            is more than 97% of other listeners in <b>Indonesia</b> (kata
            Spotify).
            <br />
            <br />
            Dengerin lagu paling mungkin saat di jalan ke kampus atau pulang
            kampus. Dengerin{" "}
            <b>
              <i>A Dream is a Wish Your Heart Make</i>
            </b>
            pas pulang dari kampus jam 6 sore ditemani suasana pasca hujan
            really makes the day! Feelnya kayak di dunia Disney. LOL
          </p>
        </PlaytimeContent>
      </PlaytimeWrapper>

      <SongsWrapper>
        <h1>Top Songs</h1>
        <p>
          Rata-rata lagu OST karena pasti setiap kali habis nonton serial yang
          bagus bgt pasti jadi hampa. Satu-satunya obat rindu ya OST-nya. LOL
        </p>
        <Spline
          onClick={() =>
            openInNewTab(
              "https://open.spotify.com/playlist/5ZvdieRbDlxowcNMReLjDC?si=5b328d0ca9e44303"
            )
          }
          className="spline"
          scene="https://prod.spline.design/wXPExQgA5ynL8Jcb/scene.splinecode"
        />
        <Spline
          className="spline spline-artist"
          scene="https://prod.spline.design/M2z0J34ypKe0surH/scene.splinecode"
        />
      </SongsWrapper>

      <PodcastWrapper>
        <img className="blob" src={Blob} alt="Blob" />
        <Spline
          className="spline"
          scene="https://prod.spline.design/E4xW9kaFBGxv0muf/scene.splinecode"
        />
        <PodcastContent>
          <h1>Top Podcast</h1>
          <p>
            Sisanya podcast berita doang yang paling keputar karena dimasukin
            sama Spotify ke playlist <b>Daily Drive</b>
            <br />
            <br />
            <br />
            <b>
              <i>“You spent 723 minutes listening to podcasts"</i>
            </b>
          </p>
          <Spline
            className="spline-batman"
            onClick={() =>
              openInNewTab(
                "https://open.spotify.com/show/1PNSjCc2G8x8x4vo34jiWZ?si=488283a4e0ad4234"
              )
            }
            scene="https://prod.spline.design/h0Q3DXHr7exYBezX/scene.splinecode"
          />
        </PodcastContent>
      </PodcastWrapper>

      <PodcastWrapper>
        <img className="blob2" src={Blob2} alt="Blob" />
        <Spline
          onClick={() =>
            openInNewTab(
              "https://open.spotify.com/track/4hzeoIOERTL4jdTXAQ0FWr?si=7141464485af44e2"
            )
          }
          className="spline2"
          scene="https://prod.spline.design/m5UY-V6KEac4vsMU/scene.splinecode"
        />
        <PodcastContent>
          <h1>Bonus Info</h1>
          <p>
            Katanya sih
            <b> “You played 3,413 songs, but these played again and again”</b>
          </p>

          <h2>
            Your top song was GO! by DOKYEOM You played it 134 times, with the
            most listens on May 5, 2022.
          </h2>
        </PodcastContent>
      </PodcastWrapper>

      <BottomWrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/tjkqAP3MOr11jIVT/scene.splinecode"
        />

        <BottomContent>
          <h1>That’s It</h1>
          <p>
            Thank you for showing interest in my own designed Spotify Wrapped.
            See you later. Cheerzz
          </p>
          

          
        <ChakraProvider>
          <SpotifyNowPlaying/>
        </ChakraProvider>
          <p className="second-text">
            Made with hardwork not just ❤️ by @Ibrahimss02
          </p>
          <p>
            Developed with <a href="https://codesandbox.io/">CodeSandbox</a> &{" "}
            {"  "} <a href="https://spline.design/">Spline.design</a> for the
            assets
          </p>
          <Social>
            <li>
              <div>
                <img src={InstagramLogo} alt="Logo" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/ibrahimss02/"
                >
                  @ibrahimss02
                </a>
              </div>
            </li>
            <li>
              <div>
                <img src={LinkedInLogo} alt="Logo" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ibrahimss02/"
                >
                  linkedin.com/in/ibrahimss02/
                </a>
              </div>
            </li>
            <li>
              <div>
                <img src={GithubLogo} alt="Logo" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Ibrahimss02"
                >
                  github.com/Ibrahimss02
                </a>
              </div>
            </li>
          </Social>
          
        </BottomContent>
      </BottomWrapper>
    </>
  );
}

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1600px) {
      transform: scale(0.715);
      transform-origin: top right;
    }

    @media (max-width: 1366px) {
      transform: scale(0.65);
      transform-origin: top right;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1600px) {
    gap: 40px;
  }

  @media (max-width: 1366px) {
    gap: 20px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    max-width: 800px;
    margin: 30px 30px 0 100px;

    @media (max-width: 1600px) {
      font-size: 50px;
      max-width: 500px;
    }

    @media (max-width: 1366px) {
      font-size: 42px;
      max-width: 500px;
      margin: 10px 30px 0 75px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 560px;
    margin: 0 30px 0 100px;
    font-size: 20px;

    @media (max-width: 1600px) {
      font-size: 16px;
    }

    @media (max-width: 1366px) {
      font-size: 16px;
      margin: 0 30px 0 75px;
    }
  }

  a {
    text-decoration: underline;
  }

`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 50px 30px 0 100px;
  padding: 0;

  @media (max-width: 1600px) {
    margin: 15px 100px;
  }

  @media (max-width: 1600px) {
    margin: 15px 75px;
  }
`;

const PlaytimeWrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #ffcbe0;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 1600px) {
      transform: scale(0.75);
      transform-origin: top right;
    }

    @media (max-width: 1366px) {
      transform: scale(0.65);
      top: 25px;
      transform-origin: top right;
    }
  }
`;

const PlaytimeContent = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1600px) {
    gap: 60px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    color: #655cb8;
    margin: 250px 30px 0 100px;

    @media (max-width: 1600px) {
      font-size: 60px;
      max-width: 600px;
      margin: 200px 30px 0 100px;
    }

    @media (max-width: 1366px) {
      font-size: 42px;
      max-width: 500px;
      margin: 100px 30px 0 75px;
    }
  }

  h2 {
    font-family: "Spline Sans Mono", monospace;
    color: #5786ca;
    font-size: 70px;
    margin: 0;
    max-width: 800px;
    margin: 0 30px 0 100px;

    @media (max-width: 1600px) {
      font-size: 42px;
    }

    @media (max-width: 1366px) {
      font-size: 28px;
      margin: 0 30px 0 75px;
    }
  }

  p {
    color: #5ba7d0;
    max-width: 600px;
    margin: -20px 30px 0 100px;
    font-size: 20px;
    text-align: justify;

    @media (max-width: 1600px) {
      font-size: 16px;
      max-width: 500px;
    }

    @media (max-width: 1600px) {
      font-size: 16px;
      max-width: 500px;
      margin: -20px 30px 0 75px;
    }
  }
`;

const SongsWrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  background: #ffcbe0;
  color: #6d1bbd;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding-bottom: 24px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;

    @media (max-width: 1600px) {
      margin-top: 60px;
      font-size: 60px;
    }

    @media (max-width: 1600px) {
      margin-top: 40px;
      font-size: 42px;
    }
  }

  p {
    font-size: 20px;
    display: block;
    max-width: 600px;
    margin: 24px auto;

    @media (max-width: 1600px) {
      font-size: 16px;
    }

    @media (max-width: 1366px) {
      font-size: 14px;
    }
  }

  .spline {
    margin: 0 auto;

    @media (max-width: 1600px) {
      transform: scale(0.8);
    }

    @media (max-width: 1366px) {
      transform: scale(0.7);
      margin-top: -35px;
    }

    :hover {
      cursor: pointer;
    }
  }

  .spline-artist {
    @media (max-width: 1600px) {
      margin-top: -50px;
    }
    
    @media (max-width: 1366px) {
      margin-top: -80px;
    }
  }

  .spline-blob {
    position: absolute;
    top: 0;
  }
`;

const PodcastWrapper = styled.div`
  background: #eb61bf;
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100%;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1600px) {
      transform: scale(0.7);
      transform-origin: top right;
      margin-top: 20px;
    }

    @media (max-width: 1366px) {
      transform: scale(0.6);
      transform-origin: top right;
      margin-top: 20px;
    }
  }

  .spline-batman {
    @media (max-width: 1600px) {
      transform: scale(0.85);
      margin-top: -6rem;
    }

    @media (max-width: 1366px) {
      transform: scale(0.75);
      margin-top: -6rem;
    }

    :hover {
      cursor: pointer;
    }
  }

  .spline2 {
    position: absolute;
    right: 250px;
    top: 150px;

    @media (max-width: 1600px) {
      transform: scale(0.7);
      margin-right: -2rem;
      transform-origin: top right;
    }

    @media (max-width: 1366px) {
      transform: scale(0.65);
      margin-right: -2rem;
      transform-origin: top right;
      top: 100px;
    }

    :hover {
      cursor: pointer;
    }
  }

  .blob {
    position: absolute;
    top: 42px;

    @media (max-width: 1600px) {
      top: -5rem;
      transform: scale(0.75);
      transform-origin: left;
    }

    @media (max-width: 1366px) {
      top: -6rem;
      transform: scale(0.7);
      transform-origin: left;
    }
  }

  .blob2 {
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 1600px) {
      transform: scale(0.7);
      transform-origin: bottom right;
    }
  }
`;

const PodcastContent = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  position: absolute;
  margin: 200px 100px;

  @media (max-width: 1600px) {
    margin: 100px 100px;
  }

  @media (max-width: 1366px) {
    margin: 50px 100px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;

    @media (max-width: 1600px) {
      margin-top: 60px;
      font-size: 60px;
    }

    @media (max-width: 1366px) {
      margin-top: 60px;
      font-size: 60px;
    }
  }

  h2 {
    max-width: 600px;
    margin-top: 8rem;
    font-size: 22px;

    @media (max-width: 1600px) {
      margin-top: 4rem;
      font-size: 20px;
      max-width: 500px;
    }

    @media (max-width: 1366px) {
      margin-top: 3rem;
      font-size: 16px;
      max-width: 500px;
    }
  }

  p {
    max-width: 500px;
    margin-top: 36px;
    font-size: 20px;

    @media (max-width: 1600px) {
      font-size: 16px;
    }
  }
`;

const BottomWrapper = styled.div`
  background: #e698a8;
  font-family: "Spline Sans", sans-serif;
  font-size: 20px;
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1600px) {
    margin-top: -4rem;
  }

  .spline {
    position: absolute;
    right: 0;
    top: 30px;

    @media (max-width: 1600px) {
      transform: scale(0.7);
      transform-origin: right;
      top: -3rem;
    }

    @media (max-width: 1366px) {
      transform: scale(0.65);
      transform-origin: right;
      top: -7rem;
    }
  }
`;

const BottomContent = styled.div`
  margin: 100px 100px;
  color: white;
  position: absolute;

  @media (max-width: 1600px) {
    margin: 50px 100px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;

    @media (max-width: 1600px) {
      font-size: 60px;
    }

    @media (max-width: 1366px) {
      font-size: 42px;
    }
  }

  p {
    max-width: 500px;

    @media (max-width: 1600px) {
      font-size: 16px;
    }

    @media (max-width: 1366px) {
      font-size: 14px;
    }
  }

  .second-text {
    margin-top: 4rem;

    @media (max-width: 1600px) {
      margin-top: 3rem;
    }

    @media (max-width: 1366px) {
      margin-top: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: white;

    @media (max-width: 1600px) {
      font-size: 16px;
    }
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Social = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin-top: 12px;

  li {
    list-style: none;

    div {
      display: flex;
      align-items: center;

      @media (max-width: 1600px) {
        img {
          max-width: 32px;
        }
      }

      @media (max-width: 1366px) {
        img {
          max-width: 28px;
        }

        a {
          font-size: 14px;
        }
      }

      a {
        text-decoration: none;
        color: white;
        margin-left: 12px;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;