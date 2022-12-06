import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: pink;
`;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-family: "Emilys Candy", cursive;
  letter-spacing: 2px;

  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

const TitleEyebrow = styled.p`
  font-family: "Shadows Into Light Two", cursive;
  letter-spacing: 2px;
  font-size: 1.7rem;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const Quote = styled.h3`
  font-size: 2rem;
  color: #fff;
  font-family: "Shadows Into Light Two", cursive;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin: 0 20px;
    text-align: center;
    letter-spacing: 1.3px;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Head = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Section>
      <Container>
        <Img data-aos="fade-down" data-aos-duration="3000" src="unicorn2.png" />
        <TitleEyebrow data-aos="fade-right" data-aos-duration="1000">
          The Life of
        </TitleEyebrow>
        <Title data-aos="fade-right" data-aos-duration="1500">
          Delilah Mae
        </Title>
        <Quote data-aos="fade-right" data-aos-duration="2000">
          "Be the light to the world that God created you to be"
        </Quote>
      </Container>
    </Section>
  );
};

export default Head;
