import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  padding: 32px;
  margin-bottom: 24px;

  border-radius: 16px;

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;

    margin-bottom: 8px;
  }

  svg {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-bottom: 16px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    text-align: justify;

    margin-bottom: 40px;
  }

  .rate {
    display: flex;
    gap: 6px;
  }

  .tag {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;