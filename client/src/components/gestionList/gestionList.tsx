import React, { useState } from 'react';
import { Add } from '../../styled-global-components/buttonstyle';
import './gestionList.css';
import { ButtonDouble, ButtonLeft, ButtonRight } from './gestionListstyle';
import IntervenantListCalendar from './intervenantListCalendar';
import PromotionListCalendar from './promotionListCalendar';
import { Link } from "react-router-dom";

export default function GestionList (){
    const [showList, setShowList] = useState(true);

    return(
        <div>
            <div className='gestionTitre'>
                <h1>Gestion des planning</h1>
                <div><Link to="/new"><Add /></Link></div>
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