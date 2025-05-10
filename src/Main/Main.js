// Main.js
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import Navbar from "./Navbar";

import { useState } from "react";
import Information from "./Contents/Information";
import Hobbies from "./Contents/Hobbies";
import Skills from "./Contents/Skills";

const cx = classNames.bind(styles);

function Main() {
    const [selected, setSelected] = useState(0); // 0: Thông tin, 1: Sở thích, 2: Kỹ năng

    const renderContent = () => {
        switch (selected) {
            case 0:
                return <Information />;
            case 1:
                return <Hobbies />;
            case 2:
                return <Skills />;
            default:
                return null;
        }
    };

    return (
        <div className={cx("main")}>
            <Navbar onSelect={setSelected} />
            <section className={cx("section")}>{renderContent()}</section>
        </div>
    );
}

export default Main;
