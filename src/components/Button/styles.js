import styled, { css } from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PINK};

  padding: 14px 32px;
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;

  svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  ${(props) => props.inverted && css`
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  `}
`;