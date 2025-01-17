import React from 'react';
import style from "./NewsContent.module.scss"
import share from "../../assets/svg/share.svg"
import {NavLink} from "react-router-dom";
const NewsContentItem = (props) => {

    const year = new Date(Date.parse(props.createdAt)).getFullYear();
    const mounth = new Date(Date.parse(props.createdAt)).getMonth();
    const day = new Date(Date.parse(props.createdAt)).getDay();

    return (
        <div className={style.card}>
            <img className={style.img} alt="newsPhoto" src={"https://a.mpstats.store/"+props.img}/>
            <div className={style.info}>
                <div className={style.titleNews}>{props.name}</div>
                <div className={style.date}>{day}-{mounth}-{year}</div>
                <div className={style.leed}>{props.text}</div>
                <div className={style.moreFlex}>
                    <div className={style.share}>
                        <img src={share}  alt="share"/>
                    </div>
                    <NavLink to={'/news/' + props.id}  className={style.more}> Читать далее</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NewsContentItem;
