import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Lấy từ localStorage nếu có
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={cx("Header")}>
            {/* Logo */}
            <div className={cx("div_logo")}>
                <div className={cx("div_logo-img")}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`}
                        alt="Logo"
                        className={cx("logo")}
                    />
                </div>
            </div>

            {/* Search */}
            <div className={cx("div_search")}>
                <input
                    type="text"
                    className={cx("input_search")}
                    placeholder="Search..."
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className={cx("icon_search")}
                />
            </div>

            {/* Nút bật/tắt sáng tối */}
            <div className={cx("toggle")} onClick={toggleTheme}>
                <div className={cx("toggle_btn")}></div>
                <FontAwesomeIcon
                    icon={isDarkMode ? faMoon : faSun}
                    className={cx("icon_toggle")}
                />
            </div>

            {/* Avatar */}
            <div className={cx("div_avatar")}>
                <div className={cx("div_avatar-img")}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/avatar-2.jpg`}
                        alt="Avatar"
                        className={cx("avatar")}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
