import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Page from '../lib/page';
import styles from '../styles/Intersection.module.css'

export default function Intersection(){

    const { ref, inView, entry } = useInView({
        threshold: 0.7,
    });
    
    return (
        <Page>
        <div className={styles.main} >
            <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>    
            <div >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>    
            <div>
                <h2>INtesection</h2>
                <div> Special part</div>
                <div ref={ref} className={styles.square}
                    style={{ backgroundColor: inView?'green':'red'}}
                >
                    {inView?'Visible':'GONE'}
                </div>
            </div>
            <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit</div> 
        </div>
        </Page>
    )
}