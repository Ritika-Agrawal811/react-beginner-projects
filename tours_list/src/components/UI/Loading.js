import styled from "styled-components";

const Loading = styled.div`
  position: fixed;
  width: 5em;
  height: 5em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 5px solid #026670;
  border-radius: 50%;
  animation: rotate 1s ease-in-out infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 2s ease-in-out infinite;
  }

  &::before {
    width: 80%;
    height: 80%;
    border-top: 4px solid #75d5fd;
    animation-delay: 250ms;
  }

  &::after {
    width: 50%;
    height: 50%;
    border-top: 5px solid #fce181;
    animation-delay: 500ms;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default Loading;
