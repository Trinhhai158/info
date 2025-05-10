import classNames from "classnames/bind";
import styles from "./Hobbies.module.scss";
import styles2 from "../Content.module.scss";
const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);

function Hobbies() {
    const hobbies = [
        { icon: "🎵", label: "Nghe nhạc" },
        { icon: "🎮", label: "Chơi game" },
        { icon: "💻", label: "Lập trình" },
        { icon: "✈️", label: "Du lịch" },
        { icon: "🧋", label: "Trà sữa" },
    ];

    return (
        <div className={`${cx("hobbies")} ${cx2("common")}`}>
            <h2 className={cx("title")}>🌟 Sở thích của tôi</h2>
            <ul className={cx("list")}>
                {hobbies.map((item, index) => (
                    <li key={index} className={cx("item")}>
                        <span className={cx("icon")}>{item.icon}</span>
                        <span className={cx("label")}>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;
