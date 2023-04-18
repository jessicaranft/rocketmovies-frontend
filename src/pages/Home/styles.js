import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "home-header"
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

    a {
    color: ${({ theme }) => theme.COLORS.PEARL_WHITE};
  }
  }
`;

export const HomeHeader = styled.div`
  grid-area: home-header;
  padding: 50px 123px;

  display: flex;
  justify-content: space-between;

  > h1 {
    font-weight: normal;
  }

  > button {
    width: 220px;
  }
`;