import Page from "../lib/page"

import styles from '../styles/Scrollable.module.css'

function Chapter({title}){
    return (
        <div>
                <div className={styles.stickytitle}>
                    {title}</div>
                <div className={styles.p}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>    
                <div className={styles.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit
                </div> 
                <div className={styles.p}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>    
            </div>
    )
}
export default function Scroll(){
    
    return (
        <Page>
        <div style={{ width: '50%' }}>
            <Chapter title="Introduction" />
            <Chapter title="Chapter 1" />
            <Chapter title="Chapter 2" />
            <Chapter title="Chapter 3" />
            <Chapter title="Outro" />
            <Chapter title="FOOTER" />
        </div>
        </Page>
    )
}