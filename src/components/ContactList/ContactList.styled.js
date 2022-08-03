import styled from 'styled-components';

export const List = styled.ul`
  margin: 10px auto;
`;

export const Contact = styled.li`
  display: flex;
  margin-bottom: ${props => props.theme.space[2]}px;
  background-color: ${props => props.theme.colors.secondaryCardItemBackground};
  color: ${props => props.theme.colors.secondaryText};
  border-radius: ${props => props.theme.radii.normal};
  padding-left: ${props => props.theme.space[1]}px;
`;

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  width: 60px;
  height: 20px;
  color: ${props => props.theme.colors.secondaryText};
  background-color: inherit;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: ${props => props.theme.colors.cardItemBackground};
  }
`;

export const ContactData = styled.p`
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  margin-right: ${props => props.theme.space[4]}px; ;
`;
