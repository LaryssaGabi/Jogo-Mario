# Projeto MarioGame 

Este projeto é um **jogo interativo do Mario** desenvolvido em **React** com **styled-components** para estilização. O objetivo é recriar uma experiência de jogo simples, onde o personagem Mario pula para evitar obstáculos (tubos), e o jogo termina quando o Mario colide com um tubo.

## Objetivo do Jogo
O jogo tem como objetivo **controlar o Mario para que ele pule e evite bater nos tubos que vêm da direita para a esquerda**. O jogo termina quando o Mario colide com um tubo, momento em que a animação para, e a imagem do Mario muda para um indicativo de "Game Over". Há também um botão para reiniciar o jogo.

## Estrutura do Código

### 1. Componente `MarioGame`
- **Referências e Estado:**
  - Utiliza `useRef` para obter referências ao Mario e ao tubo.
  - `useState` para gerenciar se o Mario está pulando (`isJumping`) ou se o jogo terminou (`isGameOver`).
- **Lógica do Jogo:**
  - **Pulo:** Um evento de teclado ativa o pulo do Mario, que dura 500ms.
  - **Colisão:** Um loop verifica a posição do tubo e do Mario; se eles se sobrepõem (colisão), o jogo termina e exibe a imagem de "Game Over".
  - **Reinício do Jogo:** Um botão "Restart" recarrega a página para reiniciar o jogo.
- **Renderização:**
  - Renderiza os elementos gráficos do jogo, como o céu, Mario, tubos e nuvens em movimento.

### 2. Estilos e Animações (`styled-components`)
- **Board:** Define o cenário de fundo com um gradiente de céu e uma borda verde representando o chão.
- **Pipe:** Anima o tubo movendo-o da direita para a esquerda em um loop, simulando um obstáculo. A animação para em caso de colisão.
- **Mario:** Define o pulo com a animação `jumpAnimation`, subindo até 120px. Quando ocorre o `Game Over`, uma animação adicional faz o Mario descer.
- **Clouds:** Simula nuvens flutuando no céu com animação contínua para criar movimento.
- **RestartButton:** Um botão estilizado para reiniciar o jogo, com efeito de escala ao passar o mouse.

## Tecnologias Utilizadas
- **React:** Para gerenciar a interface e a lógica do jogo.
- **Styled-components:** Para definir estilos e animações com base nas propriedades do estado do jogo.
  
Este jogo recria uma experiência básica de plataforma com animações e eventos interativos, tornando-o um exemplo divertido e visualmente atraente para aprender React e animações com `styled-components`.
