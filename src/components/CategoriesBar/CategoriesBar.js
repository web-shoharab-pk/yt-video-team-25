import React, { useState } from 'react';
import './_categoriesbar.scss'

const keywords = [
    'All',
    'React js',
    'React Native',
    'Abdul Razzak',
    'Algorithm Art',
    'API',
    'Bangla Songs',
    'Coding',
    'Poor Coder',
    'Bangladesh',
    'Islam'
]


const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All');

    const handleClick = (value) => {
        setActiveElement(value)
    }

    return (
        <div className="categoriesBar">

            {
                keywords.map((value, i) => (
                    <span
                    className={activeElement === value ? 'active' : ''}
                     onClick={() => handleClick(value)} key={i}>{value}</span>
                ))
            }

        </div>
    );
};

export default CategoriesBar;