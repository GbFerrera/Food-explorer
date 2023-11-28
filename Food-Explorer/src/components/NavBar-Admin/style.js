import styled from "styled-components";


export const Component = styled.header`

display: flex;
width: 100%;
background: ${({theme}) => theme.COLORS.Dark_dark_700};

button{
background:none ;

}

div {
  display: flex;
  align-items: center;

  p{

    color: #82F3FF;
  }

}


`