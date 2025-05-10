import styles from "./HumanBeings.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HumanBeings({ handAngle, handRef }) {
    return (
        <div className={cx("HumanBeings")}>
            <div className={cx("head")}>
                <div className={cx("body")}>
                    <div
                        className={cx("hand_left")}
                        ref={handRef}
                        style={{ transform: `rotate(${handAngle}deg)` }}
                    ></div>
                    <div className={cx("hand_right")}></div>
                    <div className={cx("foot_left")}></div>
                    <div className={cx("foot_right")}></div>
                </div>
            </div>
        </div>
    );
}

export default HumanBeings;
