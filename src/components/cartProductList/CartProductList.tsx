import style from "./CartProductList.module.scss";

import { RiDeleteBinLine } from "react-icons/ri";
import { getAllCart } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { Description } from "@mui/icons-material";

type IProps = any[] | any;
const CartProductList: React.FC = () => {
  const cartList: IProps = useSelector(getAllCart);

  return (
    <div className={style.cartProductListWrapper}>
      <div className={style.wrapperContainer}>
        <div className={style.containerMyCart}>
          <p className={style.myCartText}>Sepetim ({cartList.length} ürün)</p>
        </div>
        <div className={style.containerCartProducts}>
          <div className={style.cartProduct}>
            {cartList?.map((item: any) => (
              <div className={style.Product} key={item.id}>
                <div className={style.productImage}>
                  <img src={item.image} alt="product" className={style.image} />
                </div>
                <div className={style.productDescription}>
                  <p className={style.titleText}>{item.title}</p>
                  <p className={style.descriptionText}>
                    {" "}
                    {item.description.slice(0, 35).toLowerCase()}...
                  </p>
                </div>
                <div className={style.productPrice}>
                  <span className={style.priceText}>{item.price} $</span>
                </div>
                <button className={style.productDeleteFromCartButton}>
                  <RiDeleteBinLine className={style.buttonIcon} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductList;
