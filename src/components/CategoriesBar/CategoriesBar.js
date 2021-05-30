import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/action/video.action';
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


    const dispatch = useDispatch()
    const handleClick = (value) => {
        setActiveElement(value)
        if(value === 'All'){
            dispatch(getPopularVideos())
        } else{
            dispatch(getVideosByCategory())
        }
        dispatch(getVideosByCategory(value))
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