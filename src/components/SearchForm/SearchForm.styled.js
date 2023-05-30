import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 500px;
  height: 30px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #fa475391;
  caret-color: #3f3f3f;
  background-color: #212121;
  padding: 5px;
  transition: 0.5s linear;
  font-family: monospace;
  letter-spacing: 1px;
  color: #fa4753;

  &:focus {
    caret-color: #fa4753;
    color: #fa4753;
    box-shadow: 4px 4px 10px #070707;
    border: 2px solid #fa4753;
  }

  &:focus::placeholder {
    color: #fa4753;
  }
`;

export const SearchBtn = styled.button`
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

  &:hover {
    border: 2px solid #fa4753;
  }
`;
