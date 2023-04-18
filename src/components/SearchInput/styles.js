import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    width: 100%;
    height: 56px;

    color: ${({ theme }) => theme.COLORS.PEARL_WHITE};

    border: none;
    background: transparent;

    padding: 19px 16px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;