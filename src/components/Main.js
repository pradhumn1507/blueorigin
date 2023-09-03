import React from 'react'
import image1 from '../resources/1.png'
import image2 from '../resources/2.png'
import image3 from '../resources/3.png'
import image4 from '../resources/4.png'
import image5 from '../resources/5.png'
import image6 from '../resources/6.png'
import image7 from '../resources/7.png'
import image8 from '../resources/8.png'
import image9 from '../resources/9.png'
import image10 from '../resources/10.png'
import image11 from '../resources/11.png'
import image12 from '../resources/12.png'

import './Main.css'
export default function Main() {
  return (
    <div className='' style={{display:'flex' ,flexDirection:'column' , backgroundColor:"#EEF6FF" ,width:'1496px'}}>
<div className='top' style={{display:'flex'}}>
    <img src={image1} width={284} height={240}  />
    <img src={image2} width={284} height={240}/>
    <img src={image3} width={284} height={240}/>
    <img src={image4} width={284} height={240}/>
    <img src={image5} width={284} height={240}/>
</div>
<div className='mid' style={{display:'flex'}}>
    <img src={image6} width={951} height={520}/>
    <div style={{display:'flex' ,flexDirection:'column'}}>
    <img src={image7} width={617} height={250} />
    <img src={image8} width={617} height={250}/>
    </div>
   
</div>
 <div style={{display:'flex' }}>
    <img src={image9} width={951} height={479} />
    <img src={image10} width={626} height={479}/>
    </div>
    <img src={image11} width={1623} height={862}/>
    <img src={image12} width={1600} height={224}/>
    </div>
  )
}
