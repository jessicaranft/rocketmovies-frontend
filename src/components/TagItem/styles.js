import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};

  padding: 16px;
  
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;

  > input {
    font-family: 'Roboto', sans-serif;

    background: none;
    border: none;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 16px;
      height: 16px;
    }
  }

`;