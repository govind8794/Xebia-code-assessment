import React from 'react'

export const Button = ({className, topicName, clickHandler, index}) =>{
    return(
        
            <button className={className} onClick={ clickHandler} key={topicName} >
                {topicName}
            </button>
       
    )
}