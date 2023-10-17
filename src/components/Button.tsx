import {ReactNode} from "react";
import s from './button.module.css'

export default function Button(props: { children: ReactNode, onClick: () => void }) {
    return <div className={s.btn} onClick={props.onClick}>
        {props.children}
    </div>
}