import styled from "styled-components";


export const Component = styled.header`

display: flex;
max-width: 100%;
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

@media (max-width: 767px) {

  .wrapper {
   display: none;
   max-width: 428px;
  }

  display: flex;
  justify-content: space-between;
  padding: 60px 28px 28px;
  margin: auto;

 #titleMobile{
  display: flex;
  gap: 8px;
 }

 #adm{
  margin-left: 8px;
 }
  
}


@media (min-width: 768px) {

  display: flex;
  gap: 32px ;
  padding: 24px 123px;
  justify-content: space-between;


  .none {
   display: none;

  }

  #headerDetails {

    display: flex;
    gap: 32px;
    width: 100%;

    #btnNew{
      display: flex;
     justify-content: center;
     align-items: center;
      max-width: 216px;
     
    }
    
  }

  #headerSearch{
    display: flex;
    gap: 14px;
    background: ${({theme}) => theme.COLORS.dark_dark_900};
    padding: 12px 130px;
    width: 100%;

    .searchItens{
      display: flex;
      margin: auto;
      gap: 16px;
      
    }

    input {
     width: 100%;
     min-width: 250px;
     background: ${({theme}) => theme.COLORS.dark_dark_900};
     color: white;
    }
  }

  .title {
display: flex;
flex-direction: column;
align-items: center;

h1{
  font-size: 24px;

}

p{
font-size: 12px;
margin-left: 160px;
}



div {

  display: flex;
  gap: 10px;
}




  }

  #btnNew {

    padding: 12px 32px ;
    background: ${({theme}) => theme.COLORS.Tints_Tomato_100};
  
  }

}


`