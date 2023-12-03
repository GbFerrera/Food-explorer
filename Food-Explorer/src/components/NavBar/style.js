import styled from "styled-components";
import theme from "../../styles/theme";


export const Component = styled.header`

width: 100%;
position: relative;
margin: auto;


background: ${({theme})=> theme.COLORS.Dark_dark_700};



@media (max-width: 430px){

  min-width: 320px;

  .desktop{
    display: none;
  }

 .mobile{

  padding: 64px 28px 28px ;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  

 .title{
  display: flex;
  align-items: center;
  gap: 10px;

  img{
    width: 24px;
    height: 24px;

  }

 }

 h1{
font-size: 21px;

 }


span{
  position: absolute;
  top: 56px;
  right: 28px ;
  padding: 2px 5px;

  border-radius: 99px;
  background: ${({theme}) => theme.COLORS.Tints_Tomato_100};

}

button {
background: none;
}

 } 
 

}


@media (min-width: 431px){

  padding: 24px 123px;

 button{
  background: none;

 } 
 

.mobile {

  display: none;
}

.desktop{
  
  display: flex;
  gap: 36px;
}


.title {

  display: flex;
  align-items: center;
  gap: 10px;
  width: 197px;

  h1{

    font-size: 24px;
    width: 146px;
    display: flex;
  }
}


#search{

 display :flex ;
 align-items: center;
 justify-content: center;
 padding: 12px 14px;
 gap: 14px;
 width: 100%;
 background-color: ${({theme}) => theme.COLORS.dark_dark_900};
 border-radius: 5px;

 .itensSearch{
  display: flex;
  gap: 16px;
  width: 300px;
 }

 input{
  padding: 0;
 }


button {
  background: none;
 height: 24px;
img {

  width: 24px;
  height: 24px;
}

}

}

#requests{

  background: ${({theme})=> theme.COLORS.Tints_Tomato_100};
  padding: 12px 32px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;

  p{
    font-size: 14px;
   font-weight: 500;

  }

  
}




 




}





`