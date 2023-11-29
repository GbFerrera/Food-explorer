import styled from "styled-components";



export const Container = styled.div`

button {
    background: none;
    color: ${({theme}) => theme.COLORS.light_light_300};
}

label{
    color: ${({theme}) => theme.COLORS.Light_Light_400};

}

input {
    background: ${({theme}) => theme.COLORS.dark_dark_800};
    color:${({theme}) => theme.COLORS.Light_Light_100} ;

}



@media (max-width: 768px ) {

   min-width : 375px ;

   


header {

display: flex;
gap: 60px ;
padding: 56px 28px 24px;


img{

width: 24px;
height: 24px;

}

h1 {
font-size: 21px;

}

p{
    font-size: 12px;

}


div {

display: flex;
align-items: center;
gap: 8px;
}


}

.new {
    padding: 10px 32px 24px;

    button {
        margin-bottom: 35px ;
    }
    
}


form {

display: grid;
gap: 24px;
padding: 0 32px 53px;



label {

display: block;
margin-bottom: 16px;

}

input {
background: ${({theme}) => theme.COLORS.dark_dark_800};
color:${({theme}) => theme.COLORS.Light_Light_100} ;
padding: 12px 16px;
border-radius: 8px;
width: 100%;

}

.flex {
div {
    background: ${({theme}) => theme.COLORS.dark_dark_800} ;
    padding: 2px 8px;
    border-radius: 8px;
    margin-bottom: 24px ;

    button{

        padding: 10px 16px;
    }
}

}
select {

padding: 16px;
color: ${({theme}) => theme.COLORS.Light_Light_400};
background: ${({theme}) => theme.COLORS.dark_dark_900} ;
border: none;
border-radius: 8px;
width: 100%;
}

textarea{
 width: 100%;
}

.btn {
background-color: ${({theme}) => theme.COLORS.Tints_Tomato_400};
margin-top: 36px;
}


}
 








    
}


@media (min-width: 769px) {

  header {
padding: 24px 123px ;

  }  

  section {

        display: flex;
        gap: 20px;
        margin-top:32px ;

      .flex {
        display: grid;
        gap: 16px ;
        width: 100%;
      }
       
    }


.new{
padding: 46px 123px 0 ;

}    

form{


padding: 0 123px ;


 input {
padding: 12px 16px ;
border-radius: 8px;

 }

 #image {

    max-width: 100% ;
 }
 #name {

   width :495px ;
 }

 select {

padding: 16px;
color: ${({theme}) => theme.COLORS.Light_Light_400};
background: ${({theme}) => theme.COLORS.dark_dark_900} ;
border: none;
border-radius: 8px;
max-width: 295px;
}


.flex {
div {
    background: ${({theme}) => theme.COLORS.dark_dark_800} ;
    padding: 2px 8px;
    border-radius: 8px;

    button{

        padding: 10px 16px;
    }
}
}

#rowTwo {
margin-bottom: 32px;

}

textarea {
margin: 16px 0 32px;

}

.btn {
background-color: ${({theme}) => theme.COLORS.Tints_Tomato_400};
width: 250px;

margin-bottom: 200px ;
}





      
}

footer {

padding: 24px 123px;

}
  



    
}





`