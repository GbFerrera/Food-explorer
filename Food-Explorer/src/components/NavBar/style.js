import styled from "styled-components";
import theme from "../../styles/theme";


export const Component = styled.header`

width: 100%;
position: relative;

.none{
display: none;

}

background: ${({theme})=> theme.COLORS.Dark_dark_700};


#BtnNav{
padding: 12px 32px;


}


div {

display: flex;
align-items: center;
gap: 8px;


img{

height: 25px;
width: 25px;


}


h1 {

  font-size: 22px;

}


}


span {

position: absolute;
background: ${({theme}) => theme.COLORS.Tints_Tomato_100};
padding: 2px 5.5px;
border-radius: 99px;


font-family: Poppins;
font-size: 14px;
font-weight: 500;

}

@media (max-width: 430px){
  display: flex;
  align-items: center;
justify-content: space-between;
}


@media (min-width: 431px){

  padding: 24px 123px;
  
.wrapper{
display: none;

}



#BtnNav{
padding: 12px 32px;

display: flex;
align-items: center;
gap: 8px;
background: ${({ theme }) => theme.COLORS.Tints_Tomato_100};
color: ${({ theme }) => theme.COLORS.Light_Light_100};
border-radius: 5px;

}

#search{

display :flex ;
align-items: center;


width: 100%;
background: ${({theme}) => theme.COLORS.dark_dark_900};
padding: 0 14px ;

button{

background: none;

}

}





}





`