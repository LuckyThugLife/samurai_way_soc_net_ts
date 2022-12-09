import React from 'react';
import c from './Header.module.css';


function Header() {
  return (

     <header className={c.header}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="logo"/>
     </header>

  );
}

export default Header;
