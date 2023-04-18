import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: none;
  border-radius: 10px;

  padding: 19px 24px;

  resize: none;
`;