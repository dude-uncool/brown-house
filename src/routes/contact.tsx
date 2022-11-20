import type { Component } from 'solid-js';
import styles from "../routes.module.css"

const sosmedIcons = {
    WhatsApp: "../assets/WhatsApp.svg",
}
type type = keyof typeof sosmedIcons;

const SosMed: Component<{ type: type, to: string }> = (props) => {
    return <a href={props.to}><img src={sosmedIcons[props.type]} /></a>
}

const Contact: Component = () => {
    return (
        <div>
            <div>
                <div class={styles.name}>
                    Vanderrich
                </div>
                <div class={styles.sosmeds}>
                    <SosMed type="WhatsApp" to='tel: +62 895-1652-5394' />
                </div>
            </div>
        </div >
    )
}

export default Contact;