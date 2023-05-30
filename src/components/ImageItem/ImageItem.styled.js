import styled from 'styled-components';

export const ImageBox = styled.li`
  width: 30%;
  opacity: 0.7;
  transition: 0.4s linear;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  &:hover {
    box-shadow: 4px 4px 10px #070707;
    outline: 2px solid #fa4753;
    opacity: 1;
    cursor: zoom-in;
  }
`;

export const PrevImage = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
`;
