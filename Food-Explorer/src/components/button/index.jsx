import { Container } from "./style";

export function Button({ to,title, ...rest }) {
  return ( 
  
   <Container {...rest}>


       {title}
    
    </Container>
    
  )
}
