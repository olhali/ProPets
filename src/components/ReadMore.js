import React, {useState} from "react";
import style from "../css_modules/miniCard.module.css";

function ReadMore ({children, maxCharacterCount = 1500}) {

    const text = children;

    const [hidden, setHidden] = useState(true);

    const resultString = hidden ? text.slice(0, 200) : text;

    function toggleHidden() {
        setHidden(!hidden);
    }

    return (
        <p>
            {resultString}
            <span onClick={toggleHidden} className={style.textHidden}>{hidden ? "... read more" : "Read Less"}</span>
        </p>
    );

}

export default ReadMore;