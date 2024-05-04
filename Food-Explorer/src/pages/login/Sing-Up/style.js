import styled from "styled-components";



export const Container = styled.div `

margin: auto;

input:focus {
  
  border: 1px solid #fff;
  outline: none;
  

 }


@media(max-width: 435px){

min-width : 425px ;
margin-top: 30%;

padding: 0 65px ;


 h2{
display: none;

 } 

 header{

display: flex;
align-items: center;
gap: 10px ;

margin-bottom: 75px ;

 }

 form {

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 32px;

 }

 a {

display: flex;
justify-content: center;

margin-top: 32px;


 }




}

@media(min-width: 436px){

 max-width: 1368px ;
 display: flex;

 justify-content: center;
 justify-content: space-between;
 align-items: center;
 padding: 0 128px;
 

 height: 90vh;


 header {

display: flex;
align-items: center;
gap: 20px ;


>img {

width: 50px;
height: 48px;
}

 }



 main {


 display :flex ;
 flex-direction: column;
 align-items: center;
 gap: 32px;

background: ${({theme}) => theme.COLORS.Dark_dark_700};

padding: 64px;
border-radius: 16px;




>h2 {

  font-family: Poppins;
  font-weight: 500;
  font-size: 32px;


}
 }


 form{

width: 348px ;

display: flex;
flex-direction: column;
gap: 32px ;



  
}}



`


