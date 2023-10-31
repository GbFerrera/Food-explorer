import styled from "styled-components";
import theme from "../../../styles/theme";


export const Container = styled.div`

margin: auto;
height: 100%;
max-width: 425px ;



button {


background: none;
color: #E1E1E6;

}



header{

background: ${({theme}) => theme.COLORS.Dark_dark_700};
display: flex;
align-items: center;
gap: 16px;
padding-left: 28px ;
overflow: hidden;

height: 144px ;

button{

height: 16px;
width: 16px;

}

}


main{

  margin: 0 28px;

  min-height: 600px;

  button{
 margin-top:36px ;

font-family: Poppins;
font-size: 24px;




  }

}


.search{

display: flex;
align-items: center;
padding: 0 14px;
border-radius: 5px;


background: ${({theme}) => theme.COLORS.Dark_dark_700};
margin-top: 36px;


button{
margin-top: 5px;
height: 24px;
width: 24px;

}

input {

background: none;

}



}











`