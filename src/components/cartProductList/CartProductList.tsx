import style from "./CartProductList.module.scss";

import { RiDeleteBinLine, RiAddLine } from "react-icons/ri";
import { HiMinus } from "react-icons/hi";
import {
  getAllCart,
  deleteFromCart,
  addToCart,
} from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hook";
import ModalDialog from "../modalDialog";
import { Row, Col } from "antd";
import { useState } from "react";
import { getAllProducts } from "../../redux/slices/productSlice";

type IProps = any[] | any;
const CartProductList: React.FC = () => {
  const cartList: IProps = useSelector(getAllCart);
  const productList: IProps = useSelector(getAllProducts);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const productDeleteFromCartButtonClick = (item: any) => {
    setOpen(true);
  };

  const productQuantityIncreaseButtonClick = (item: any) => {
    dispatch(addToCart(item));
  };

  const productQuantityDecreaseButtonClick = (item: any) => {
    if (item.quantity > 1) {
      dispatch(deleteFromCart(item));
    }
  };

  const cartTotalPrice = () => {
    let total = 0;
    cartList?.map((item: any) => {
      const products = productList.find(
        (product: any) => product.id === item.id
      );
      total += products.price * item.quantity;
    });
    return total;
  };

  return (
    <div className={style.cartProductListWrapper}>
      <div className={style.containerMyCart}>
        <p className={style.myCartText}>Sepetim ({cartList.length} ürün)</p>
      </div>
      <Row className={style.row}>
        <Col flex={3}>
          <div className={style.wrapperContainer}>
            <div className={style.containerCartProducts}>
              <div className={style.cartProduct}>
                {cartList?.map((item: any) => (
                  <div className={style.Product} key={item.id}>
                    <div className={style.productImage}>
                      <img
                        src={item.image}
                        alt="product"
                        className={style.image}
                      />
                    </div>
                    <div className={style.productDescription}>
                      <p className={style.titleText}>{item.title}</p>
                      <p className={style.descriptionText}>
                        {" "}
                        {item.description.slice(0, 35).toLowerCase()}...
                      </p>
                    </div>
                    <div className={style.productQuantity}>
                      <button
                        className={style.quantityButton}
                        onClick={() => productQuantityIncreaseButtonClick(item)}
                      >
                        <RiAddLine className={style.buttonIcon} />
                      </button>
                      <span className={style.quantityText}>
                        {item.quantity}
                      </span>
                      <button
                        className={style.quantityButton}
                        onClick={() => productQuantityDecreaseButtonClick(item)}
                      >
                        <HiMinus className={style.buttonIcon} />
                      </button>
                    </div>
                    <div className={style.productPrice}>
                      <span className={style.priceText}>{item.price} $</span>
                    </div>
                    <button
                      className={style.productDeleteFromCartButton}
                      onClick={() => productDeleteFromCartButtonClick(item)}
                    >
                      <RiDeleteBinLine className={style.buttonIcon} />
                    </button>
                    <div className={style.modal}>
                      <ModalDialog open={open} setOpen={setOpen} item={item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col flex={2} push={1}>
          <div className={style.cartInformationContainer}>
            <div className={style.cartInformation}>
              <div className={style.informationTitle}>
                <p className={style.titleText}>Sipariş Özeti</p>
              </div>
              <div className={style.orderDesciption}>
                <p className={style.textName}>Ürün toplamı</p>
                <p className={style.textPrice}>{cartTotalPrice()}</p>
              </div>
              <p className={style.textPrice1}>{cartTotalPrice()} $</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartProductList;
