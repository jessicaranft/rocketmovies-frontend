import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  background-color: ${props => props.color};

  padding: 8px 16px;
  margin-right: 8px;

  border-radius: 8px;
`;