import styled from 'styled-components';

export const Form = styled.form`
  margin-top: ${props => props.theme.space[3]}px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${props => props.theme.space[0]}px;
  }
`;

export const Button = styled.button`
  margin: auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 20px;
  color: ${props => props.theme.colors.secondaryText};
  background-color: ${props => props.theme.colors.avatarBackground};
  border: 1px solid black;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.cardItemBackground};
  }
`;

export const Input = styled.input`
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  outline: none;
`;
