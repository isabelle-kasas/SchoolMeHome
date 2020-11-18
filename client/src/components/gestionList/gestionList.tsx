import React, { useState } from 'react';
import './gestionList.css';
import { ButtonDouble, ButtonLeft, ButtonRight } from './gestionListstyle';
import IntervenantListCalendar from './intervenantListCalendar';
import PromotionListCalendar from './promotionListCalendar';
import { Link } from "react-router-dom";
import add from "../../icons/add_white.png";

export default function GestionList (){
    const [showList, setShowList] = useState(true);

    return(
        <div>
            <div className='gestionTitre'>
                <h1>Gestion des planning</h1>
                <div className='gestionBouton'>
                    <div className="bouton_4">
                    <Link to="/new"><img className="image" src={add} alt="plus"/>
                        <span className="texteduboutton_4">Nouveau&nbsp;calendrier</span></Link>
                    </div>
                </div>
            </div>
            <ButtonDouble>
                <ButtonLeft onClick={() => setShowList(true)} className={ showList ? 'active' : ''}>Intervenants</ButtonLeft>
                <ButtonRight onClick={() => setShowList(false)} className={ showList ? '' : 'active'}>Promotions</ButtonRight>
            </ButtonDouble>
            <div>
                { showList ? <IntervenantListCalendar/> : <PromotionListCalendar/> }
            </div>
        </div>
    )
}