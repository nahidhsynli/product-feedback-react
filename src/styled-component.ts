import { styled } from "styled-components";

export const Hero = styled.div`
  margin: 20px 50px 0px 50px;
  display: flex;
  gap: 30px;
`;

export const FeedbackBoard = styled.div`
  background: radial-gradient(#e84d70, #a337f6, #28a7ed);
  width: 255px;
  color: #fff;
  padding: 60px 20px 10px 10px;
  border-radius: 10px;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const FeedbackCategory = styled.div`
  padding: 20px 30px 20px 20px;
  width: 255px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;

  div {
    background-color: #f2f4ff;
    display: inline;
    border-radius: 10px;
    padding: 5px 15px;
  }
  a {
    color: #4661e6;
    text-decoration: none;
  }
`;

export const Roadmap = styled.div`
  border-radius: 10px;
  background: #fff;
  width: 255px;
`;

export const RoadmapHeadingH1 = styled.h1`
  color: #3a4374;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const RoadmapHeadingA = styled.a`
  color: #4661e6;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  opacity: 0.25;
`;
