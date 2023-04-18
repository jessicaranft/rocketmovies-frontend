import styled from "styled-components";
import backgroundImg from '../../assets/main.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 48px;
  }

  > h2 {
    font-weight: 500;
    margin-bottom: 48px;
  }

  > div:nth-child(5) {
    margin-bottom: 24px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 42px;
    text-align: center;
  }
`;

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 48px;
  font-weight: 700;
  line-height: 63px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;