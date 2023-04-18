import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "navigation"
  "content";

  > main {
    grid-area: content;
    padding: 0 123px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

    p {
      text-align: justify;
      margin-top: 40px;
    }

    button {
      margin-top: 36px;
      width: 320px;
    }
  }

  .tag {
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;

export const Navigation = styled.div`
  grid-area: navigation;
  padding: 42px 123px;
`;

export const MovieHeader = styled.div`
  .movie-title {
    display: flex;
    align-items: center;

    margin-bottom: 24px;

    h1 {
      margin-right: 19px;
    }

    svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;

    img {
    width: 16px;
    height: 16px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%;
    }
  
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 19px;
    }

    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;