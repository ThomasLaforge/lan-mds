import {PropsWithChildren} from "react";
import "./Card.scss";

type CardProps = PropsWithChildren

export function Card(props: CardProps){
    return <div className="card">
        {props.children}
    </div>
}