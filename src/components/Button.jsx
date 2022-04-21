// rafce

import React from 'react';
import styles from '../styles/Global';
import assets from '../assets'

const Button = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expoIcon" 
       className= {styles. btnIcon}
      />
      <div className=" flex flex-col justify-start ml-4">
        <p className= {`${styles.whiteText} font-normal text-xs`} >
          Voir sur  
        </p>
        <p className= {`${styles.whiteText} font-bold text-sm`}>
          Expo Store
        </p>

      </div>

    </div>
  )
}

export default Button