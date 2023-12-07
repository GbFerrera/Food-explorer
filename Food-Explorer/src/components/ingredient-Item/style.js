import styled from "styled-components";

export const Component = styled.div `


  display: flex;
  
  align-items: center;
  border-radius: 8px;
  padding: 10px 16px;
  width: 130px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.light_light_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.light_light_500}` : "none"};


  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.light_light_500};
  }

  > input {
  

    color: ${({ theme }) => theme.COLORS.Light_Light_100};
    background: transparent;
    width: 100%;
    font-size: 16px;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.light_light_500};
    }
  }











`