import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid blue;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid blue;

  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: red;
    scale: 1.1;
  }
`;
