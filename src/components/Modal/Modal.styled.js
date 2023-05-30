import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #151515b0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LargeImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
