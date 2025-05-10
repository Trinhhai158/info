import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import HumanBeings from "./HumanBeings";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAslInterpreting,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Navbar({ onSelect }) {
    const handRef = useRef(null);
    const itemRefs = [useRef(null), useRef(null), useRef(null)];
    const [angle, setAngle] = useState(30);

    const handleClick = (index) => {
        const hand = handRef.current;
        const item = itemRefs[index].current;

        if (hand && item) {
            const handBox = hand.getBoundingClientRect();
            const itemBox = item.getBoundingClientRect();

            const handX = handBox.left;
            const handY = handBox.top;
            const itemX = itemBox.left;
            const itemY = itemBox.top;

            const dx = handX - itemX;
            const dy = handY - itemY;
            const rad = Math.atan2(dy, dx);
            const deg = rad * (180 / Math.PI) + 80;

            setAngle(deg);
        }

        // Gọi callback từ Main
        if (onSelect) onSelect(index);
    };

    return (
        <nav className={cx("navbar")}>
            <div className={cx("title")}></div>
            <ul>
                <li ref={itemRefs[0]} onClick={() => handleClick(0)}>
                    Thông tin
                </li>
                <li ref={itemRefs[1]} onClick={() => handleClick(1)}>
                    Sở thích
                </li>
                <li ref={itemRefs[2]} onClick={() => handleClick(2)}>
                    Kỹ năng
                </li>
            </ul>

            <div className={cx("support")}>
                <div className={cx("setting", "support_auto")}>
                    <FontAwesomeIcon icon={faAslInterpreting} />
                    <span>Cài Đặt</span>
                </div>
                <div className={cx("logout", "support_auto")}>
                    <FontAwesomeIcon icon={faSignOut} />
                    <span>Exit</span>
                </div>
            </div>

            <HumanBeings handAngle={angle} handRef={handRef} />
        </nav>
    );
}

export default Navbar;
