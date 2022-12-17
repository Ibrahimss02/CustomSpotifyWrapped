import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/thunder_logo.svg";
import Blob from "./images/podcast_blob.svg";
import Blob2 from "./images/podcast_blob2.svg";
import InstagramLogo from "./images/logo-instagram.svg";
import LinkedInLogo from "./images/linkedin-logo.svg";
import GithubLogo from "./images/logo_github.svg";

export default function App() {
  return (
    <body>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/BGDlXQOcZxz76ZEB/scene.splinecode"
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
            Listen to my own curated Spotify year 2022 recap with some changes
            from Spotify original wrapped. Get to know about my accompanist thru
            the whole day and compare with yours. Who knows maybe we love the
            same type of songs. Cheers 🍻
          </p>
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
          className="spline"
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
            Thank you for showing interest in my own curated Spotify Wrapped.
            See you later. Cheerzz
          </p>
          <p className="second-text">
            Made with hardwork not just ❤️ by @Ibrahimss02
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
          <p>
            Developed with <a href="https://spline.design/">Spline.design</a> &
            <a href="https://codesandbox.io/"> CodeSandbox</a>
          </p>
        </BottomContent>
      </BottomWrapper>
    </body>
  );
}

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
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

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
      right: auto;
      margin-left: -600px;
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 60%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    max-width: 800px;
    margin: 100px 30px 0 100px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  h2 {
    font-family: "Spline Sans Mono", monospace;
    color: #5786ca;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 800px;
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 560px;
    margin: 0 30px 0 100px;
    font-size: 20px;
  }

  button {
    background: rgba(0, 0, 0, 0);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  /* h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  } */
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 50px 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 14px;
      transition: 1s;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
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

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
      right: auto;
      margin-left: -600px;
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 60%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const PlaytimeContent = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    color: #655cb8;
    margin: 250px 30px 0 100px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  h2 {
    font-family: "Spline Sans Mono", monospace;
    color: #5786ca;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 800px;
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    color: #5ba7d0;
    max-width: 600px;
    margin: -20px 30px 0 100px;
    font-size: 20px;
    text-align: justify;
  }

  button {
    background: rgba(0, 0, 0, 0);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  /* h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  } */
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
  }

  p {
    font-size: 20px;
    display: block;
    max-width: 600px;
    margin: 24px auto;
  }

  .spline {
    margin: 0 auto;
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
  }

  .spline2 {
    position: absolute;
    right: 250px;
    top: 150px;
  }

  .blob {
    position: absolute;
    top: 42px;
  }

  .blob2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const PodcastContent = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  position: absolute;
  margin: 200px 100px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
  }

  h2 {
    max-width: 600px;
    margin-top: 8rem;
  }

  p {
    max-width: 500px;
    margin-top: 36px;
    font-size: 20px;
  }
`;

const BottomWrapper = styled.div`
  background: #e698a8;
  font-family: "Spline Sans", sans-serif;
  font-size: 20px;
  position: relative;
  width: 100%;
  height: 100%;

  .spline {
    position: absolute;
    right: 0;
    top: 30px;
  }
`;

const BottomContent = styled.div`
  margin: 200px 100px;
  color: white;
  position: absolute;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
  }

  p {
    max-width: 500px;
  }

  .second-text {
    margin-top: 6rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Social = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;

    div {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        color: white;
        margin-left: 12px;
      }
    }
  }
`;
