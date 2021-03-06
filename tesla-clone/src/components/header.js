import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
       <Container>
           
           <a>
               <img src="/images/logo.svg" alt=""></img>
           </a>

           <Menu>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
            <p><a href="#">Solar Roofs</a></p>
            <p><a href="#">Solar Panels</a></p>
           </Menu>



       </Container>
    )
}

export default Header

const Container= styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-itens: center;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
`

const Menu= styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content:center;
    p{
        font-weight: 600;
        text-trasformation: uppercase;
        padding: 0 30px;
        flex-wrap: no-wrap;
    }
`