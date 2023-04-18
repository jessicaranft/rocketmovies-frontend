import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto auto;
  grid-template-areas:
  "header"
  "navigation"
  "content";

  > main {
    grid-area: content;
    padding: 0 123px 40px;
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
  }
`;

export const Navigation = styled.div`
  grid-area: navigation;
  padding: 42px 123px;
`;

export const Form = styled.form`
  grid-area: main;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    font-weight: normal;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .col-2 {
    display: flex;
    gap: 40px
  }

  .col-2 button {
    width: 100%;
  }

  .tags {
    display: flex;
    gap: 16px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;

    padding: 16px;

    margin-top: -16px;
  }
`;