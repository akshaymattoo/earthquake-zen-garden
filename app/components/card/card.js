import React from 'react';
import './card.css';

function Card (props){
 	// have a similar DS for card
	let properties = props.data;
	let allowList = props.allowList;
	
	return (
		<div className='card'>
			{
				Object.entries(properties).map(([key, value]) => (
			    // Pretty straightforward - use key for the key and value for the value.
			    // Just to clarify: unlike object destructuring, the parameter names don't matter here.
		     	allowList.includes(key) ?
		    	<div key={key} className='card__container'>
				    <span>{key}</span>
				    <div className='card__container__right'>
				    	<span>{value}</span>
				    </div>
		    	</div>:null
				))
			}
		</div>
	)
}

export default Card;