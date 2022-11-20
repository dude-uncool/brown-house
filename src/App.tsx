import { Component, createSignal } from 'solid-js';
import { Routes, Route } from "@solidjs/router"
import logo from './assets/Logo Brown House.jpg';
import styles from './App.module.css';
import Contact from './routes/contact';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <div class={styles.link}></div> {/**spacing */}
                <a class={styles.link} href="/about">About</a>
                <img src={logo} class={styles.logo} alt="logo" />
                <a class={styles.link} href="/contact">Contact</a>
                <div class={styles.link}></div> {/**spacing */}
            </header>
            <Routes>
                <Route path="/contact" component={Contact!} />
            </Routes>
        </div >
    );
};

export default App;
