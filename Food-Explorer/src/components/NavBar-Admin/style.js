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

@media (max-width: 767px) {

  .wrapper {
   display: none;

  }
  
}


@media (min-width: 768px) {

  display: flex;
  gap: 32px ;


  .none {
   display: none;

  }

  #headerDetails {

    display: flex;
    gap: 32px;
    
  }

  #headerSearch{
    display: flex;
    gap: 14px;
    background: ${({theme}) => theme.COLORS.dark_dark_900};
    padding: 12px 130px;
    width: 100%;
   

    input {
     width: 250px;

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