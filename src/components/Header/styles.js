import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 88px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  padding: 0 123px;
`;

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 24px;
  font-weight: 700;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  width: 320px;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 8px;

    font-size: 14px;
    line-height: 18px;
    text-align: right;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      color: ${({ theme }) => theme.COLORS.PEARL_WHITE};
    }
  }

  > img {
    width: 100%;
    height: 100%;
  }

    a img {
    max-height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 14px;
  text-align: right;
`;