import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const Work = () => {
  return (
    <WorkContainer className="work" id="work">
      <div class="head">
        <h1 id="notable">Notable Projects</h1>
        <p>
          <span></span>Some Things I’ve Built
        </p>
      </div>
      <ProjectsWrapper>
        <ProjectImage>
          <a href="https://zed.business/" target="_blank" rel="noreferrer">
            <img src="/img/zed.png" alt="project1" />
          </a>
        </ProjectImage>
        <ProjectDescription>
          <h5>Featured Project</h5>
          <h3>ZED Payments</h3>
          <p>
            ZED allows a business to accept different payment methods including
            mobile money, cash, card and crypto with ease.
          </p>
          <Stack>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
          </Stack>
          <ProjectLinks>
            <a href="https://zed.business/" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </ProjectsWrapper>

      {/* second project */}

      <SecondProjectsWrapper>
        <SecondProjectDescription>
          <h5>Featured Project</h5>
          <h3>BruFinance</h3>
          <p>
            Brú Finance Is Building A DeFi Lending Platform To Create Bankless
            Finance Options For Owners Of Real-World Assets Across The Globe.
            Brú Finance Is Linking Real-World Assets Ranging From Agricultural
            Commodities, Real Estate, Gold, Mortgages, And Receivables To
            Securities With A New DeFi Paradigm Bringing The Two Worlds Of
            TradFi And DeFi Together.
          </p>
          <Stack style={{ justifyContent: "flex-start" }}>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>Angular</li>
            <li>NodeJS</li>
            <li>Typescript</li>
          </Stack>
          <ProjectLinks style={{ justifyContent: "flex-start" }}>
            <a href="https://bru.finance/" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </SecondProjectDescription>
        <ProjectImage>
          <a href="https://bru.finance/" target="_blank" rel="noreferrer">
            <img src="/img/bru.png" alt="project1" />
          </a>
        </ProjectImage>
      </SecondProjectsWrapper>
      <ShowMoreButton>
        <a href="https://github.com/Trend20" target="_blank" rel="noreferrer">
          Show More
        </a>
      </ShowMoreButton>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 100%;
  margin: auto;
  margin-bottom: 50px;
  color: #8892b0;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  padding: 50px 0px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  a {
    width: 100%;
  }
  img {
    display: flex;
    max-width: 100%;
    height: auto;
    position: relative;
    background-color: #cc2121;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: right;

  h5 {
    color: #cc2121;
    font-size: 0.7rem;
    padding: 10px 0px;
  }

  h3 {
    color: #cbd2e6;
    font-size: 1.2rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.7rem;
    background: #112240;
    padding: 20px;
    z-index: 10;
    text-align: justify;
    text-indent: 20px;
    width: 90%;
    justify-content: flex-end;
    margin-left: 38px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;
    text-align: left;

    h5 {
      color: #cc2121;
      font-size: 0.7rem;
      padding: 10px 0px;
    }

    h3 {
      color: #cbd2e6;
      font-size: 1.2rem;
      padding-bottom: 10px;
    }

    p {
      font-size: 0.7rem;
      background: #112240;
      padding: 20px;
      z-index: 10;
      text-align: justify;
      text-indent: 20px;
      width: 100%;
      justify-content: flex-start;
      margin-left: 0px;
    }
  }
`;
const Stack = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    list-style: none;
    font-size: 0.7rem;
    padding: 10px 5px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding: 10px;
    color: #8892b0;

    &:hover {
      color: #cc2121;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const SecondProjectsWrapper = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  padding: 50px 0px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const SecondProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h5 {
    color: #cc2121;
    font-size: 0.7rem;
    padding: 10px 0px;
  }

  h3 {
    color: #cbd2e6;
    font-size: 1.2rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.7rem;
    background: #112240;
    padding: 20px;
    z-index: 10;
    text-align: justify;
    text-indent: 20px;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;

    h5 {
      color: #cc2121;
      font-size: 0.7rem;
      padding: 10px 0px;
    }

    h3 {
      color: #cbd2e6;
      font-size: 1.2rem;
      padding-bottom: 10px;
    }

    p {
      font-size: 0.7rem;
      background: #112240;
      padding: 20px;
      z-index: 10;
      text-align: justify;
      text-indent: 20px;
      width: 100%;
    }
  }
`;

const ShowMoreButton = styled.button`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  background: transparent;
  outline: none;
  border: 1px solid #cc2121;
  border-radius: 5px;

  a {
    display: flex;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: #cc2121;
    font-weight: 500;
  }

  &:hover {
    background: rgb(39, 39, 66);
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export default Work;
