import styled from "styled-components";



export const Component = styled.div`

position: relative;


.BgNone{

background: none;
display: flex;
align-items: center;

}
#price{

color:  #82F3FF;


}


@media (max-width: 430px) {
  .hideInclud{
  display: none;
  
}

#descriptionCard{
  display: none;
}

.wrapperInclud{
  display: flex;
  flex-direction: column;
  gap: 16px ;
   #amountCard{
    display: flex;
    justify-content: center;
   }
   #include{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 32px;
    padding: 12px 24px;
   }
}

.itens {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


}
 
#favorite {

position: absolute;
right: 16px;
top: 16px;
}


#amountCard{
display: flex;
align-items: center;
gap: 14px ;


}



}

@media (min-width: 431px) {


  padding: 24px;
  width: 305px;

  .wrapperInclud{
    display: none;


  }

  .flex{
      display: flex;
      align-items: center;
      gap: 16px ;
    }
  
#favorite{
  top: 16px;
  right: 16px;
  position: absolute;
}
.itens{
  display: grid;
  text-align: center;
  gap: 15px;

  #foodImg{
   margin: auto;
   width: 176px;
   height: 176px;
  }

  #foodName{
  font-size: 24px;
  font-weight: 700;
  min-width: 256px;
  }

  #price{
    font-size: 32px;
    font-weight: 400;
  }
  
}


#amountCard{
  display: flex;
  justify-content: center;
  gap: 14px;

  font-size: 20px;
  font-weight: 700;
}

  
}



`