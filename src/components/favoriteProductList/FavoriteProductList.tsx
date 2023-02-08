import style from "./FavoriteProductList.module.scss";

import Rating from "@mui/material/Rating";

const FavoriteProductList: React.FC = () => {
  return (
    <div className={style.favoriteProductListWrapper}>
      <div className={style.product}>
        <div className={style.productContainer}>
          <div className={style.productImage}>
            <img src="" alt="product" className={style.img} />
          </div>
          <div className={style.productCover}>
            <div className={style.productDesc}>
              <span className={style.productTitle}></span>
              <span className={style.productSubtitle}></span>
            </div>
            <div className={style.productRate}>
              <Rating
                className={style.rate}
                name="half-rating-read"
                value={2}
                precision={0.5}
                readOnly
              />
            </div>
            <div className={style.productPrice}>
              <span className={style.priceText}> $</span>
            </div>
          </div>
          <div className={style.productAddToCart}>
            <button className={style.addToCartButton}>Sepete ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductList;
