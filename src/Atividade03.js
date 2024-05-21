import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Atividade03() {
    

    const [qtdeTotal, setQtdeTotal] = useState(0);
    const [qtdeHomens, setQtdeHomens] = useState(0);
    const [qtdeMulheres, setQtdeMulheres] = useState(0);

    const redimensionarImagens = (largura, altura) => {
        const imagens = document.getElementsByTagName('img');
        for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.width = `${largura}%`;
        imagens[i].style.height = `${altura}%`;
        }
    };

    const adicionarHomem = () => {
        setQtdeHomens(qtdeHomens + 1);
        setQtdeTotal(qtdeTotal + 1);
    };

    const subtrairHomem = () => {
        if (qtdeHomens > 0) {
        setQtdeHomens(qtdeHomens - 1);
        setQtdeTotal(qtdeTotal - 1);
        }
    };

    const adicionarMulher = () => {
        setQtdeMulheres(qtdeMulheres + 1);
        setQtdeTotal(qtdeTotal + 1);
    };

    const subtrairMulher = () => {
        if (qtdeMulheres > 0) {
        setQtdeMulheres(qtdeMulheres - 1);
        setQtdeTotal(qtdeTotal - 1);
        }
    };

    const recarregar = () => {
        setQtdeTotal(0);
        setQtdeHomens(0);
        setQtdeMulheres(0);
    };

    return (
        <div id="container" style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "500px",
        margin: "auto"
        }}>
        <h1 style={{ display: "block", textAlign: "center" }}>Total</h1>
        <input type="number" value={qtdeTotal} readOnly style={{ display: "inline-block", textAlign: "center" }} />
        <img src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/128/sync.png" alt="Recarregar" onClick={recarregar} style={{ display: "inline-block", position: "absolute", right: "30%" }} />
        <img src="https://cdn4.iconfinder.com/data/icons/business-users-1/256/man_white_business.png" alt="Homens" style={{ display: "block", position: "absolute", left: "20%", top: "20%" }} />
        <img src="https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/plus-128.png" alt="addhomem" onClick={adicionarHomem} style={{ position: "absolute", left: "20%", top: "60%" }} />
        <img src="https://cdn0.iconfinder.com/data/icons/mobile-device/512/erase-cut-minus-blue-round-2-128.png" alt="removehomem" onClick={subtrairHomem} style={{ position: "absolute", left: "30%", top: "60%" }} />
        <input type="number" value={qtdeHomens} readOnly style={{ display: "block", position: "absolute", left: "25%", top: "50%" }} />
        <img src="https://i.pinimg.com/originals/9b/67/88/9b6788434b3ea5d2c1ade31388def253.png" alt="Mulheres" style={{ display: "block", position: "absolute", right: "20%", top: "20%" }} />
        <img src="https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/plus-128.png" alt="addmulher" onClick={adicionarMulher} style={{ position: "absolute", right: "30%", top: "60%" }} />
        <img src="https://cdn0.iconfinder.com/data/icons/mobile-device/512/erase-cut-minus-blue-round-2-128.png" alt="removeMulher" onClick={subtrairMulher} style={{ position: "absolute", right: "20%", top: "60%" }} />
        <input type="number" value={qtdeMulheres} readOnly style={{ display: "block", position: "absolute", right: "20%", top: "50%" }} />
        <Link to="/">Retornar a Home</Link>
        </div>
    );
}

export default Atividade03;
