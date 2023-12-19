import styled from "styled-components";
import theme from "../../../styles/theme";


export const Container = styled.div`

button{
  background: none;
  color: white;
}

@media (max-width: 430px) {

 main{

padding: 16px 56px  0 ;
text-align: center;
  #btnBack{

display: flex;
align-items: center;
font-size: 24px;
}
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
 border-radius: 50%;
  object-fit: cover;
 }

 .recipe{
  display: flex;
    flex-direction: column;
    gap: 24px;

    .ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 28px ;
  }
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

  border-radius: 50%;
  object-fit: cover;
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

  .ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 28px ;
  }


  #ingredient{
  background: #192227;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 5px;

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

#request{

 display: flex;
 align-items: center;
 
 padding: 12px 24px;
 background:${({theme}) => theme.COLORS.Tints_Tomato_100} ;
 border-radius: 5px;

img{
  margin-right: 18px;
}

}


footer{
  padding: 24px 123px;
}


  
}




`