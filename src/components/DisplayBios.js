import React from 'react';
import DeveloperBio from './DeveloperBio';

function DisplayBios(props){

    return (
        props.developers.map((dev, index)=><DeveloperBio developer={dev} key={index} />)
    );
}

export default DisplayBios;
