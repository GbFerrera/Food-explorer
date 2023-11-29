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
    gap: 14px;
    
  }

  #headerSearch{
    background: ${({theme}) => theme.COLORS.Dark_dark_600};
    padding: 12px 14px;
    width: 100%;

    input {
     width: 100%;

    }
  }

  .title {
display: flex;
flex-direction: column;
align-items: center;

div {

  display: flex;
  gap: 10px;
}

#adm {

margin-left: 185px;

}


  }
  
}


`