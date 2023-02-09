import style from "./FavoriteProductList.module.scss";

import Rating from "@mui/material/Rating";
import { RiCloseLine } from "react-icons/ri";
import {
  deleteFromFavorite,
  getAllFavorite,
} from "../../redux/slices/favoriteSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/slices/cartSlice";
import informationImage from "../../image/favoriteProduct.png";
import informationImage1 from "../../image/favoriteFillProduct.png";

type IProps = any[] | any;

const FavoriteProductList: React.FC = () => {
  const favoriteList: IProps = useSelector(getAllFavorite);
  const dispatch = useAppDispatch();

  const addtoCartButtonClick = (item: any) => {
    dispatch(addToCart(item));
  };

  const deleteFavoriteButtonClick = (item: any) => {
    dispatch(deleteFromFavorite(item.id));
  };

  return (
    <div className={style.favoriteProductListWrapper}>
      {favoriteList.length ? (
        <div className={style.product}>
          {favoriteList?.map((item: any) => (
            <div className={style.productContainer} key={item.id}>
              <div className={style.productImage}>
                <img src={item.image} alt="product" className={style.img} />
                <button
                  className={style.deleteFavoriteButton}
                  onClick={() => deleteFavoriteButtonClick(item)}
                >
                  <RiCloseLine className={style.buttonDeleteIcon} />
                </button>
              </div>
              <div className={style.productCover}>
                <div className={style.productDesc}>
                  <span className={style.productTitle}>{item.category}</span>
                  <span className={style.productSubtitle}>
                    {item.description.slice(0, 35).toLowerCase()}...
                  </span>
                </div>
                <div className={style.productRate}>
                  <span className={style.rateText}>{item.rating.rate}</span>
                  <Rating
                    className={style.rate}
                    name="half-rating-read"
                    value={item.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className={style.productPrice}>
                  <span className={style.priceText}>{item.price} $</span>
                </div>
              </div>
              <div className={style.productAddToCart}>
                <button
                  className={style.addToCartButton}
                  onClick={() => addtoCartButtonClick(item)}
                >
                  Sepete ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.information}>
          <div className={style.informationImage}>
            <img src={informationImage} alt="product" className={style.image} />
            <img src={informationImage1} alt="" className={style.image1} />
          </div>
          <div className={style.informationText}>
            <p className={style.textTitle}>
              Favoriler listende ürün bulunmamaktadır.
            </p>
            <p className={style.textSubtitle}>
              Favoriler listene istediğin ürünü eklemek için{" "}
              <span>
                ürünler sayfasından kalbe tıklayarak fovoriler listene ürün
                ekleyebilirsin.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteProductList;
