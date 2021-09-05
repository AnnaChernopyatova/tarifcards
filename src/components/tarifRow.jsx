import React, {useState} from 'react';
import Tarif from './tarif';

export default function TarifRow(props){
    const [chosen, setChosen] = useState(props.chosen || false);

    const handleChange = () =>{
        setChosen(!chosen);
    }

    return(
        <Tarif handleChange={handleChange} {...props}>
        </Tarif>
    )
}