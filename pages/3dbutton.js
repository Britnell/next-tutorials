import React from "react"
import Page from "../lib/page"


import styles from '../styles/Button3dtest.module.css'

// * 3 D - B U T T O N
import buttonstyles from '../styles/Button3d.module.css'
function Button3D({onClick,className=''}){    
    return(
        <div >
        <button 
            className={buttonstyles.button+' '+className} 
            onClick={(ev)=>{if(onClick)onClick(ev)}}
            >CLACK</button>
        </div>)
}

import perspective from '../styles/Perspective.module.css'
function Perspective(){


    return (
        <div  className={perspective.container}
        >
            <div className={perspective.cube}>
                <div className={perspective.front}>F</div>
                <div className={perspective.back}>B</div>
                <div className={perspective.left}>L</div>
                <div className={perspective.right}>R</div>
                <div className={perspective.top}>T</div>
                <div className={perspective.bottom}>B</div>
            </div>
        </div>
    )
}

function Carousel(){

    return (
        <div>
            asddsa
        </div>
    )
}
export default function Empty(){

    const click = ()=> console.log(' CLICK ')
    return (
    <Page>
        <div className={styles.container}>
            <div>Reference : <a className="underline text-blue-500" href="https://codepen.io/screenthink/pen/ZeOyjP" >codepen</a></div>
            <div className={styles.btn} >mousedown</div>

            <div>My copy</div>
            <div className={styles.mybutton} >mousedown</div>

            <div>REact component - ish - not fully customizeable yet, but its a template</div>
            <Button3D 
                onClick={click} 
                className=" bg-green-600"
                />

            <div>CSS box</div>

            <div className=" inline-block h-20 ">
                <div className={styles.box}>FRONT FRONT FRONT</div>
                <div style={{
                    position: "absolute",
                    width:  '20px',
                    height: '60px',
                    backgroundColor: 'blue',
                    transformOrigin: 'top right',
                    transform: 'translate(-20px) skew(0deg,-45deg)',
                }}>B</div>
                <div style={{
                    position: "relative",
                    width:  '60px',
                    height: '20px',
                    backgroundColor: 'red',
                    transformOrigin: 'top right',
                    transform: 'translate(0,60px) skew(-45deg,0deg) ', //skew(0deg,-45deg)
                }}>bottom</div>
            </div>

            <div>perspective</div>

            <Perspective />

            <div>Carousel</div>

            
            <Carousel />

        </div>
    </Page>)
}

//--