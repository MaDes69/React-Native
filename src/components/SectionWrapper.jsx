import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import Button from './Button'

const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>

      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv}
         ${reverse ? "fadeRightMini" :" fadeLeftMini"}`}>
          <h1 className={`
          ${reverse ? styles.whiteText : styles.blackText }
          ${styles.h1Text}`}>{title}</h1>
          <p className= {`
          ${reverse ? styles.whiteText : styles.blackText }
          ${styles.descriptionText}`}>{description}</p>
            {showBtn && (
             <Button 
                assetUrl={assets.expo}
                link="https://expo.dev/@mades/NFT-react-native?serviceType=classic&distribution=expo-go"        
              />
            )}
        </div>
        <div className={`flex-1  ${styles.flexCenter} p-8 sm:px-0`}>
           <video  
           autoPlay
           loop
           muted            
           src={mockupImg} alt="mockup" type="video/mp4" className={`${styles.sectionImg} rounded-lg`}  /> 
        </div>


      </div>
    </div>
  )
}

export default SectionWrapper