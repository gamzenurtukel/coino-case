import style from "./ProductList.module.scss";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import { getAllProducts } from "../../redux/slices/productSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/slices/cartSlice";

type IProps = any[] | any;

const ProductList: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState<Boolean>(false);
  const productList: IProps = useSelector(getAllProducts);
  const dispatch = useAppDispatch();

  const favoriteButtonOnClick = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCartButton = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={style.productListWrapper}>
      <div className={style.product}>
        {productList?.map((product: any) => (
          <div className={style.productContainer} key={product.id}>
            <div className={style.productImage}>
              <img src={product.image} alt="product" className={style.img} />
              <button
                className={style.favoriteButton}
                onClick={() => favoriteButtonOnClick()}
              >
                {isFavorite ? (
                  <AiFillHeart className={style.favoriteIconFill} />
                ) : (
                  <AiOutlineHeart className={style.favoriteIcon} />
                )}
              </button>
            </div>
            <div className={style.productCover}>
              <div className={style.productDesc}>
                <span className={style.productTitle}>{product.category}</span>
                <span className={style.productSubtitle}>
                  {product.description.slice(0, 35).toLowerCase()}...
                </span>
              </div>
              <div className={style.productRate}>
                <Rating
                  className={style.rate}
                  name="half-rating-read"
                  value={product.rating.rate}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className={style.productPrice}>
                <span className={style.priceText}>{product.price} $</span>
              </div>
            </div>
            <div className={style.productAddToCart}>
              <button
                className={style.addToCartButton}
                onClick={() => addToCartButton(product)}
              >
                Sepete ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
