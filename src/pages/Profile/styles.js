import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.PINK_900};

    padding: 64px 144px 59px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: auto;

  > div:nth-child(3),
    div:nth-child(5){
    margin-bottom: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 186px;
  height: 186px;

  margin: -100px auto 64px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    padding: 14px;
    border-radius: 50%;

    position: absolute;
    bottom: 0px;
    right: 0px;

    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    input {
      display: none;
    }
  }
`;