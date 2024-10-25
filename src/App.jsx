import { useEffect, useRef, useState } from "react";
import { Board, Pipe, Mario, Clouds, ButtonWrapper, RestartButton } from './styles/marioGame'; 
import clouds from './assets/clouds.png';
import marioGif from './assets/mario-gif.gif';
import pipe from './assets/pipe.png';
import gameOver from './assets/game-over.png';

export default function MarioGame() {
  const marioRef = useRef(null);
  const pipeRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const mario = marioRef.current;
    const pipe = pipeRef.current;

    const jump = () => {
      if (!isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };

    const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

      if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.src = gameOver; // Usando a importação correta

        setIsGameOver(true);
        clearInterval(loop);
      }
    }, 10);

    document.addEventListener("keydown", jump);

    return () => {
      clearInterval(loop);
      document.removeEventListener("keydown", jump);
    };
  }, [isJumping]);

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <ButtonWrapper>
        <RestartButton onClick={handleRestart}>RESTART</RestartButton>
      </ButtonWrapper>
      <Board>
        <Clouds src={clouds} alt="nuvens" />
        <Mario
          ref={marioRef}
          src={isGameOver ? gameOver : marioGif} // Troca a imagem do Mario se o jogo terminar
          alt="gif do mario"
          isJumping={isJumping}
          isGameOver={isGameOver}
        />
        <Pipe ref={pipeRef} src={pipe} alt="tubo" isGameOver={isGameOver} />
      </Board>
    </div>
  );
}
