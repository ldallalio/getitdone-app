/* eslint-disable react/prop-types */
import React from 'react';
import '../../input.css';
import '../../index.css';

function Card({ children }) {
	return <div className='card'>{children}</div>;
}

export default Card;
