import styled, {css} from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 40px;


  ${props =>
		props.$primary &&
    css`
      background: palevioletred;
      color: #fff;
    `};
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 300px;
`;
