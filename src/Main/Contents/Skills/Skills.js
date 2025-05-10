import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import styles2 from "../Content.module.scss";

const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);

function Skills() {
    const [animated, setAnimated] = useState(false);

    const skills = [
        { name: "HTML", level: 90, icon: "🔤" },
        { name: "CSS / SCSS", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 80, icon: "🧠" },
        { name: "ReactJS", level: 75, icon: "⚛️" },
        { name: "Figma / XD", level: 70, icon: "🎨" },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 1000); // Delay nhẹ để tạo hiệu ứng smooth
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${cx("skills")} ${cx2("common")}`}>
            <h2 className={cx("title")}>💼 Kỹ năng</h2>
            <ul className={cx("list")}>
                {skills.map((skill, index) => (
                    <li key={index} className={cx("item")}>
                        <div className={cx("name")}>
                            {skill.icon} {skill.name}
                        </div>
                        <div className={cx("bar")}>
                            <div
                                className={cx("progress")}
                                style={{
                                    width: animated ? `${skill.level}%` : "0%",
                                    transitionDelay: `${index}s`,
                                }}
                            >
                                <span>{skill.level}%</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
