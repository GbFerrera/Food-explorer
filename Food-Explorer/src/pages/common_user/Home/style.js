import styled from "styled-components";



export const Container = styled.div`
 

 max-width: 1368px;
 margin: auto;


@media (max-width: 430px){
  min-width: 425px;


 
header{
 
   span{
 position:absolute ;
top: 50px ;
right: 20px;
  }
}
section{
display: flex;
height: 120px;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
border-radius: 3px;
margin: 44px 16px 0 36px;
position: relative;
img{
position: absolute;
top: -30px;
left: -30px;
opacity: 0.8;
}
div {
margin: 36px 21px 22px 140px;
font-family: Poppins;
p{
  margin-top: 6px;
  font-size: 12px;
}
h5 {
  font-weight: 600;
  font-size: 18px;
}
}
}
.title{
  margin: 62px 0 24px 24px;
  
}
.cards{
display: flex;
gap: 24px ;
overflow-x: auto;
margin: 24px;
padding: 0 24px;
.itens{
padding: 24px ;
display: flex;
justify-content: center;
align-items: center;
width: 210px;
}
}
}
@media(min-width: 431px) {

header{

  #LogOut{
    background: none;
   }

  div:nth-child(2){
  display: flex;
  justify-content: space-between;
  }

  #search{

   display :flex ;
   min-width: 581px;
   border-radius: 5px;
   padding-left: 90px;

   button{
    height: 25px;
   }


   input{
    padding: 12px 0;
   }

 
    
  }

}

section{
display: flex;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
margin-top: 164px;
border-radius: 8px;



h5{
  font-family: Poppins;
font-size: 40px;
font-weight: 500;
}
 } 
.cards{
padding :24px ;
display: flex;
gap: 55px ;
margin-top: 60px;
overflow-x: auto;
}
main{
max-width: 1120px ;
padding: 0 124px ;
margin: auto;

> p{
margin-top: 60px;
}
}
footer {
padding: 24px 123px ;
}
}
`