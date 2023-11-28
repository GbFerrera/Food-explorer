import styled from "styled-components";



export const Container = styled.div`

button {
    background: none;
    color: ${({theme}) => theme.COLORS.light_light_300};
}

label{
    color: ${({theme}) => theme.COLORS.Light_Light_400};

}




@media (max-width: 768px ) {

   min-width : 375px ;


header {

display: flex;
gap: 80px ;
padding: 65px 28px 28px;


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
margin-bottom: -16px;

}

input {
    background: ${({theme}) => theme.COLORS.dark_dark_800};
    color:${({theme}) => theme.COLORS.Light_Light_100} ;


}
select {

padding: 16px;
color: ${({theme}) => theme.COLORS.Light_Light_400};
background: ${({theme}) => theme.COLORS.dark_dark_900} ;
border: none;


}


}
 








    
}





`