import { Component, For, Index } from 'solid-js';
import styles from "../App.module.css";
import reviews from "../assets/reviews.json";
import star from "../assets/star.svg";
import halfStar from "../assets/half star.svg";

const Home: Component = () => {
    return (
        <div class={styles.home}>
            <h1>Brown House</h1>
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
                            {review.rating % 1 == 0.5 ? (<><img src={halfStar} /><br /></>) : ""}
                            ~ {review.name}<br />{review.class}<br />
                        </div>
                        <img src={`/src/assets/pics of happy customers/${review.name} ${review.classShort}.jpg`} width="100vw" height="100vh" />
                    </div>
                )
                }
            </For >
        </div >
    )
};

export default Home;