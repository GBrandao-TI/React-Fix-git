import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Play ${movieName}`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Carregando')}>
            Upload Image
        </Button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Movie"></PlayButton>
            <UploadButton />
        </div>
    )
}