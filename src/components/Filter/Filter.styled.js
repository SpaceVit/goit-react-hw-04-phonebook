import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[3]}px;
`;

export const FilterInput = styled.input`
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[1]}px;
`;
