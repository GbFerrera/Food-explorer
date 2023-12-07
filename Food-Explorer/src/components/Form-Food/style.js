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


@media (max-width: 800px) {
  
  
  #labelUpdate{
    background: ${({theme}) => theme.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    gap: 8px ;

    input{
      display: none;
    }
  }

}


@media (min-width: 800px) {


  #labelUpdate{
   
    background: ${({theme}) => theme.COLORS.dark_dark_800};
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 230px;

    img{
      width: 24px;
      height: 24px;
    }

    input{
      display: none;
    }
  }

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