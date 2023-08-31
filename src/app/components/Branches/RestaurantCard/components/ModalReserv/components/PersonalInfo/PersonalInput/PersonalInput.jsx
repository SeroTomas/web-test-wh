'use client'
import { handlePlaseHolder } from "@/utilities/handlePlaceHolder.utilities";
// style
import style from "./personalInput.module.scss";
//components and hooks
import { useState } from "react";


function PersonalInput({ label, type, name }) {
    const [placeHolder] = useState(handlePlaseHolder(name));

    return (
        <>
            <div className={style.inputContainer}>
                <label>{label}</label>
                <input type={type} name={name} placeholder={placeHolder} />
            </div>
        </>
    )
}

export default PersonalInput;