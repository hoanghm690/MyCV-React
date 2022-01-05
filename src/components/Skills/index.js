import styles from "./Skills.module.scss";
import Heading from "../../components/Heading";
import AstronautMoon from "../../assets/images/astronaut_moon.png";

export default function Skills() {
    return (
        <div className={styles.wrapper}>
            <Heading
                first={"p"}
                second={"owerful skills"}
                bg={
                    "linear-gradient(to right bottom,rgb(51, 202, 248),rgb(51, 137, 248))"
                }
            />
            <div className={styles.content}>
                <span>4</span>
                <div className={styles.contentImg}>
                    <img src={AstronautMoon} alt="skills" />
                </div>
                <span>4</span>
            </div>
            <h3>
                skills <span>not</span> found 😱
            </h3>
        </div>
    );
}
