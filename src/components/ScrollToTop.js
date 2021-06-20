import React, {useEffect, useState} from "react";
import {useWindowScroll} from 'react-use';
import {FaChevronUp} from "react-icons/all";
import style from "../css_modules/header.module.css";

const ScrollToTop = () => {

    const {y: pageYOffset} = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

    if (!visible) {
        return false;
    }

        return (
            <div className={`text-center ${style.scroll_to_top} ${style.cursor_pointer}`} onClick={scrollToTop}>
                <i><FaChevronUp/><br/>Up</i>
            </div>
        );
};

export default ScrollToTop;