import classNames from "classnames/bind";
import styles from "./Information.module.scss";
import styles2 from "../Content.module.scss";
const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);
function Information() {
    return (
        <div className={`${cx("Information")} ${cx2("common")}`}>
            <div className={cx("info")}>
                <div className={cx("info-item")}>
                    <strong>🙍‍♂️ Họ tên:</strong> <br />
                    <span>Trịnh Thế Thanh Hải</span>
                </div>

                <div className={cx("info-item")}>
                    <strong>🎓 Năm sinh:</strong> <br />
                    <span>2005</span>
                </div>

                <div className={cx("info-item")}>
                    <strong>🎂 Sinh nhật:</strong> <br />
                    <span>11/06/2005</span>
                </div>
                <div className={cx("info-item")}>
                    <strong>💻 Chuyên Ngành:</strong> <br />
                    <span>Lập trình web</span>
                </div>
                <div className={cx("info-item")}>
                    <strong>📍 Nơi sống:</strong> <br />
                    <span>Đồng nai</span>
                </div>
                <div className={cx("info-item")}>
                    <strong>🏫 Học:</strong> <br />
                    <span>Đại học Công nghệ Đồng Nai</span>
                </div>
            </div>
            <div className={cx("div_img")}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/imgs/avatar-1.jpg`}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Information;
