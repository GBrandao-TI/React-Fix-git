import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function Galley(){
    return(
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image/>
        </section>
    )
}

function Image(){
    return(
        <img
        src="https://i.imgur.com/ZF6s192.jpg"
        alt="Floarlis Genérica by Eduardo Catalano"
        />
    );
}
