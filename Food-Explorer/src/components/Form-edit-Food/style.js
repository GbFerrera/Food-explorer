import styled from "styled-components";


export const Component = styled.form`
display: flex;
flex-direction: column;

#Buttons{
  width: 100%;
  display: flex;
  gap: 30px;

  button{
    padding: 12px 16px;
  }

  button:nth-child(1) {
    background: ${({theme}) => theme.COLORS.dark_dark_800};
  }
}


textarea {
  resize: none;
  padding: 14px ;
  background-color: ${({theme}) => theme.COLORS.Dark_dark_700};
  color: ${({theme}) => theme.COLORS.Light_Light_100} ;

}


@media (max-width: 800px) {
  
  .flex{
    margin-top: 16px;
  }
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

  #ingredients{
    padding: 4px 8px;
    border-radius: 8px ;
  }


  #Buttons{


  


  button{
    padding: 12px 24px;
    font-size: 14px;
    text-align: center;
    max-width: 172px ;
  }

  button:nth-child(1){
    max-width: 162px;
   
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

 #Buttons{
  padding-bottom: 120px;
  justify-content: end;

  button{
    width: 172px;
  }
  
  button:nth-child(1){
  width: 135px ;
  font-size: 12px;
  }

 }

#widhtIngredient{
  width: 100%;
}
  
}









`