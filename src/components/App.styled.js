import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 300px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
`;
