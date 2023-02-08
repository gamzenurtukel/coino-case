import style from "./ProductList.module.scss";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import { getAllProducts } from "../../redux/slices/productSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/slices/cartSlice";
import ShortInDropdown from "../sortInDropdown";
import {
  addToFavorite,
  deleteFromFavorite,
  getAllFavorite,
} from "../../redux/slices/favoriteSlice";

type IProps = any[] | any;

const ProductList: React.FC = () => {
  const productList: IProps = useSelector(getAllProducts);
  const favoriteList: IProps = useSelector(getAllFavorite);
  const dispatch = useAppDispatch();

  const favoriteButtonOnClick = (product: any) => {
    dispatch(addToFavorite(product));
  };

  const deleteFavoriteButtonOnClick = (product: any) => {
    dispatch(deleteFromFavorite(product.id));
  };

  const addToCartButton = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={style.productListWrapper}>
      <ShortInDropdown />
      <div className={style.product}>
        {productList?.map((product: any) => (
          <div className={style.productContainer} key={product.id}>
            <div className={style.productImage}>
              <img src={product.image} alt="product" className={style.img} />
              <button className={style.favoriteButton}>
                {favoriteList.find((item: any) => item.id === product.id) ? (
                  <AiFillHeart
                    className={style.favoriteIconFill}
                    onClick={() => deleteFavoriteButtonOnClick(product)}
                  />
                ) : (
                  <AiOutlineHeart
                    className={style.favoriteIcon}
                    onClick={() => favoriteButtonOnClick(product)}
                  />
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
