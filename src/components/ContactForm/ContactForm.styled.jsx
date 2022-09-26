import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  text-align: left;

  border-radius: 8px;
  border: 5px solid #45f3ff;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #45f3ff;
  color: #45f3ff;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #45f3ff;
  background-color: #1c1c1c;
  border: 1px solid #45f3ff;
  border-radius: 2px;
  transition: background-color 0.3s ease-in;
  &:hover,
  &:focus {
    color: #1c1c1c;
    background-color: #45f3ff;
    box-shadow: 0px 8px 43px #45f3ff;
  }
`;
