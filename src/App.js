import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/thunder_logo.svg";

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
            </b>{" "}
            pas pulang dari kampus jam 6 sore ditemani suasana pasca hujan
            really makes the day! Feelnya kayak di dunia Disney. LOL
          </p>
        </PlaytimeContent>
      </PlaytimeWrapper>

      <SongsWrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/wXPExQgA5ynL8Jcb/scene.splinecode"
        />
        <SongsContent>
          <h1>Top Songs</h1>
          <p>
            Rata-rata lagu OST karena pasti setiap kali habis nonton serial yang
            bagus bgt pasti berasa hampa dan satu-satunya obat untuk itu ya...
            OST-nya. LOL
          </p>

          <h4>Hover item to see details!!!</h4>
        </SongsContent>
      </SongsWrapper>
    </body>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

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
    margin: 0;
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
    max-width: 300px;
    margin: 0 30px 0 100px;
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
    margin: 0;
    max-width: 800px;
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
    font-size: 16px;
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
  font-size: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #ffcbe0;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: -20px;

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

const SongsContent = styled.div`
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
    margin: 0;
    max-width: 800px;
    color: #6d1bbd;
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

  h4 {
    font-family: "Spline Sans Mono", monospace;
    color: #6d1bbd;
    font-weight: bold;
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
    color: #6d1bbd;
    max-width: 600px;
    margin: -30px 30px 0 100px;
    font-size: 16px;
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
