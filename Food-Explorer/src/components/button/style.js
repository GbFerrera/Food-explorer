
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 32px;
  background: ${({ theme }) => theme.COLORS.Tints_Tomato_100};
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.COLORS.Light_Light_100};
  font-family: "Poppins", sans-serif;
  font-weight: 500;

   display: flex;
   align-items: center;
   place-content: center;



`;
