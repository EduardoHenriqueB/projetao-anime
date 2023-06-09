import React from "react";
import styles from "../styles/PaginaHistoriaCss.css"
import wallpaperWano from '../images/wallpaperWano.png'
import lutaWano from '../images/lutaWano.png'

function Pagina_Historia()
{
    return(
        <>
        <div id ='fundo'>
        <div id='conteudo'>
            <div id='texto '>
            <p>
            No arco de Wano, a tripulação dos Chapéus de Palha chega ao país de Wano, uma terra inspirada no Japão feudal, governada por um shogun tirânico chamado Orochi. O país está subjugado e oprimido, e os Chapéus de Palha se unem a um grupo de samurais rebeldes e outros personagens para lutar contra a opressão. Ao longo do arco, segredos sobre o passado e a herança dos Kozuki são revelados, e os Chapéus de Palha enfrentam batalhas épicas contra os Piratas das Feras e o shogun. O arco culmina em uma grande batalha pela libertação do país e pela esperança do povo de Wano.
            </p>
            </div>
            <img src={wallpaperWano} alt="luffy" id="imagemDiv" />
            <h1>WANO</h1>
        </div>
            <img src={lutaWano} alt="historiaDeWano" id='briga'/>
        </div>
        </>
    )
}   

export default Pagina_Historia;