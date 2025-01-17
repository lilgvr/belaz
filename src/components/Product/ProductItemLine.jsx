import React from "react";
import style from "./Product.module.scss";
import star from "../../assets/svg/star.svg";
import buy from "../../assets/svg/buy.svg";
import favorite from "../../assets/svg/favorite.svg";
import picture from "../../assets/images/nullPicture.png";
import { Link } from "react-router-dom";
const ProductItemLine = (props) => {
  return (
    <Link to={"/product/" + props.id} className={style.lineFlex}>
      <div className={style.lineContain}>
        <img
          alt="product"
          src={
            props.img === null ? picture : "https://a.mpstats.store/" + props.img
          }
          className={style.lineImg}
        />
        {props.special ? (
          <div className={style.special}>Спецпредложение</div>
        ) : (
          <></>
        )}
      </div>
      <div className={style.info}>
        <div className={style.lineTitle}>{props.title}</div>
        <div className={style.grabe}>
          <img alt="star" src={star} className={style.lineStar} />
          <div>
            {props.grabe} ({props.totalGrabe} оценок)
          </div>
        </div>
        <div className={style.description}>{props.description}</div>
        <div className={style.lineSell}>
          <div className={style.lineValue}>{props.price} ₽</div>
          <div className={style.sortFlex}>
            <img alt="favorite" className={style.lineFavorite} src={favorite} />
            <div className={style.lineBuy}>
              <div className={style.lineBuyText}>В корзину</div>
              <img alt="buyIcon" src={buy} className={style.lineBuyIcon} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItemLine;
