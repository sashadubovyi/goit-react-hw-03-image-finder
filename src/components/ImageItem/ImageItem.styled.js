import styled from 'styled-components';

export const ImageBox = styled.li`
  width: 30%;

  &:hover {
    box-shadow: 4px 4px 10px #070707;
    outline: 2px solid #fa4753;
    cursor: zoom-in;
  }
`;

export const PrevImage = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
`;
