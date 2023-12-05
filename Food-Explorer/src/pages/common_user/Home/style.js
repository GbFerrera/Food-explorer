import styled from "styled-components";



export const Container = styled.div`
 

 width: 100%;
 margin: auto;

 .none{
  display: none;
 }


@media (max-width: 430px){
  min-width: 425px;




section{
display: flex;
height: 110px;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
border-radius: 3px;
margin: 44px 16px 0 36px;
position: relative;

img{

  width: 191px;
height: 149px;
position: absolute;
top: -20px;
left: -30px;
opacity: 0.8;
}
#text {
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
.category{
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
gap: 12px;
justify-content: center;
align-items: center;
width: 210px;
}

}
}
@media(min-width: 431px) {


section{
position: relative;
display: flex;
justify-content: flex-end;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
margin-top: 164px;
width: 100%;
border-radius: 8px;



 img{
  opacity: 0.8;
  width: 632px;
  height: 406px;
  position: absolute;
  top: -150px;
  left: -40px;
  

 }

 #text{
  padding: 90px 80px 90px 60px ;
  margin-left: 300px;

 }

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
overflow-x: auto;
}
main{
width: 100%;
padding: 0 124px ;
margin: auto;

> p{
margin-top: 60px;
font-size: 32px;
font-style: normal;
font-weight: 500;
}
}
footer {
padding: 24px 123px ;
}
}


@media (min-width: 1450px) {

  max-width: 2560px;
  section{
    justify-content: center;
    height: 260px;

    img{
      left: 20px;
    }

    #text{
      display: flex;
      gap: 80px;

      p{
        display: flex;
    align-items: center;
      }
    }
  }
}
`