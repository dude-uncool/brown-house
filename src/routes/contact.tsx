import type { Component } from 'solid-js';
import styles from "../routes.module.css";
import WhatsAppIcon from "../assets/WhatsApp.svg";
import InstagramIcon from "../assets/Instagram.svg";

const sosmedIcons = {
    WhatsApp: WhatsAppIcon,
    Instagram: InstagramIcon
}
type type = keyof typeof sosmedIcons;

const SosMed: Component<{ type: type, to: string }> = (props) => {
    return <a href={props.to}><img src={sosmedIcons[props.type]} class={styles.sosmedIcon} /></a>
}

const Contact: Component = () => {
    return (
        <div class={styles.contacts}>
            <div class={styles.person}>
                Vanderrich<br />
                JH1-Roger Bacon
                <div class={styles.sosmeds}>
                    <SosMed type="WhatsApp" to='tel: +62 895-1652-5394' />
                    <SosMed type="Instagram" to='https://www.instagram.com/vande.rrich/' />
                </div>
            </div>
            <div class={styles.person}>
                Attila<br />
                JH1-Albert Einstein
                <div class={styles.sosmeds}>
                    <SosMed type="WhatsApp" to='tel: +62 822-9947-8110' />
                </div>
            </div>
        </div >
    )
}

export default Contact;