import { Component, For, Index } from 'solid-js';
import styles from "../App.module.css";
import halfStar from "../assets/half star.svg";
import reviews from "../assets/reviews.json";
import star from "../assets/star.svg";

const Home: Component = () => {
    return (
        <div class={styles.home}>
            <h1>Brown House</h1>
            <div class={styles.reviews}>
                <For each={reviews}>
                    {(review) => (
                        <div class={styles.review}>
                            <div>
                                "{review.quote}"<br />
                                <Index each={Array.from(Array(Math.floor(review.rating)).keys())}>
                                    {() => (
                                        <img src={star} />
                                    )}
                                </Index>
                                {review.rating % 1 == 0.5 ? (<><img src={halfStar} /><br /></>) : ""}<br />
                                ~ {review.name}<br />{review.class}<br />
                            </div>
                            <br /><br />
                        </div>
                    )
                    }
                </For >
            </div>
        </div >
    )
};

export default Home;