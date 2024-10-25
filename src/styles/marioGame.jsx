import styled, { keyframes } from "styled-components";

const pipeAnimation = keyframes`
  from {
    right: -80px;
  }
  to {
    right: 100%;
  }
`;

const jumpAnimation = keyframes`
  0% {
    bottom: 0;
  }
  40% {
    bottom: 120px;
  }
  100% {
    bottom: 0;
  }
`;

const cloudsAnimation = keyframes`
  from {
    right: -150px;
  }
  to {
    right: 100%;
  }
`;

const gameOverAnimation = keyframes`
  0% {
    bottom: 120px;
  }
  100% {
    bottom: -120px;
  }
`;

export const Board = styled.div`
  width: 80%;
  height: 500px;
  border-bottom: 15px solid rgb(22, 114, 22);
  margin: 30px auto;
  position: relative;
  overflow: hidden;
  background: linear-gradient(#87ceeb, #e0f6ff);
`;

export const Pipe = styled.img`
  position: absolute;
  bottom: 0;
  width: 80px;
  animation: ${(props) => (props.isGameOver ? "none" : pipeAnimation)} 1.3s infinite linear;
`;

export const Mario = styled.img`
  position: absolute;
  bottom: 0;
  width: ${(props) => (props.isGameOver ? "100px" : "120px")};
  margin-left: ${(props) => (props.isGameOver ? "25px" : "0")};
  animation: ${(props) => (props.isJumping ? jumpAnimation : "none")} 500ms ease-out,
    ${(props) => (props.isGameOver ? gameOverAnimation : "none")} 1000ms cubic-bezier(0.79, 0.3, 0.39, 1.15);
`;

export const Clouds = styled.img`
  position: absolute;
  width: 150px;
  top: 100px;
  animation: ${cloudsAnimation} 10s infinite linear;
`;

export const ButtonWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const RestartButton = styled.button`
  width: 40%;
  padding: 15px 0;
  cursor: pointer;
  border: none;
  background-color: green;
  font-size: 26px;
  border-radius: 10px;
  color: white;
  transition: 800ms;

  &:hover {
    transform: scale(1.02);
  }
`;
