import styled from "styled-components";



export const Container = styled.div`



@media (max-width: 430px) {

 main{

padding: 16px 56px  0 ;
text-align: center;

 }


.detailsFood{

margin-top : 16px;
display: flex;
flex-direction: column;
gap: 24px;


#imgFood{
  width: 264px;
 height: 264px;
 margin: auto;
 }

 .recipe{
  display: flex;
    flex-direction: column;
    gap: 24px;
 }

h2{
  font-size: 27.041px;
}

 p{
 font-size: 17px;
 }

section{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  .rowOne,.rowTwo{
    display: flex;
    gap: 24px ;
  }
  
 #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }

}
 

}


.order{

  margin: 48px 0 55px ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;


.quantity{

display: flex;
align-items: center;
gap: 16px;

}

#request{
    padding: 8px 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 3px;

    background:${({theme}) => theme.COLORS.Tints_Tomato_100} ;
  
    font-size: 14px;
 
}





}

#editBtn{
  margin-top: 48px;
 
}

  footer{
padding: 24px 28px ;
}
  
}


@media (min-width: 431px) {



main{

  padding: 24px 120px 155px ;
  

  #btnBack {

 display: flex;
 align-items: center;
  font-size: 24px;




}

.detailsFood{


  margin-top: 42px ;
  display: flex;
  gap: 48px;

 .detailsRequest{
 display: flex;
 flex-direction: column;
 gap: 48px;
 margin-top: 45px;

 } 

#imgFood{
  width: 390px;
height: 389px;

}

 .recipe{
  display: flex;
  flex-direction: column;
  gap: 24px ;

  h2{
    font-size: 40px;

  }

  #description{
    font-size: 24px;
    line-height: 140%;
  }

section{
  display: flex;
  gap: 28px;


  #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

 }

  .rowOne,.rowTwo{
  display: flex;
  gap: 28px;
 
  }
}



 }


}

}


.order{
display: flex;
align-items: center;
gap: 34px;

img{

}
}

.quantity{
display: flex;
gap: 14px;


span{
  font-size: 20px;
  font-weight: 700;
}


button{
  display: flex;
  align-items: center;
}
}

#editBtn{
  width: 130px;
  padding: 12px 24px;
  font-size: 14px;

}




footer{
  padding: 24px 123px;
}


  
}




`