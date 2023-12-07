import styled from "styled-components";


export const Component = styled.form`
display: flex;
flex-direction: column;




textarea {
  resize: none;
  padding: 14px ;
  background-color: ${({theme}) => theme.COLORS.Dark_dark_700};
  color: ${({theme}) => theme.COLORS.Light_Light_100} ;

}


@media (min-width: 800px) {

  .lineOne{
  display: flex;
  gap: 32px;
  width: 100%;

 .nameWidht{
  width: 100%;


 }




}


.lineTwo{
  display: flex;
  gap: 32px ;
  width: 100%;
  
  #ingredients{
  display: flex;
  height: 48px;

   input{
  padding: 0;
   }

  }

   img{
    height: 8px;
    width: 8px;
   }


 }

#widhtIngredient{
  width: 100%;
}
  
}









`