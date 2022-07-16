import React from 'react'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  let hexValue = '#' + hexColor;
  let rgbValue = 'rgb('+ rgb.join(',')+')';
  return (
    <article className={index >10 ? 'color-light':'color-dark'} style ={{backgroundColor:hexValue
    }
    }>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <p className='color-value'>{rgbValue}</p>
    </article>
  )
}

export default SingleColor