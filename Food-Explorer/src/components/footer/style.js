import styled from "styled-components";


export const Component = styled.footer`

display: flex;
align-items: center;
justify-content: space-between;
padding: 0 28px;
background-color: ${({theme}) => theme.COLORS.dark_dark_600};


width: 100%;
height: 77px;

div{

display: flex;
gap: 7px;
align-items: center;

 p{
  font-weight: 700;
color: ${({theme}) => theme.COLORS.light_light_700};

}


}

a{

  font-size: 12px;

}






`