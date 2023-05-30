import styled from 'styled-components';

export const ImageList = styled.ul`
  width: 1200px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const MoreBtn = styled.button`
  margin-bottom: 24px;
  cursor: pointer;
  margin-left: 20px;
  height: 30px;
  background-color: #212121;
  font-family: monospace;
  letter-spacing: 1px;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
  transition: 0.3s linear;
  border: 2px solid #fa4753;

  &:hover {
    border-top: 5px solid #fa4753;
    border-bottom: 5px solid #fa4753;
  }
`;

export const Error = styled.h1`
  transition: 0.5s linear;
  font-family: monospace;
  letter-spacing: 1px;
  color: #fa4753;
`;
