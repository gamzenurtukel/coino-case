import style from "./ModalDialog.module.scss";

import React from "react";
import Dialog from "@mui/material/Dialog";
import { deleteFromCart } from "../../redux/slices/cartSlice";
import { addToFavorite } from "../../redux/slices/favoriteSlice";
import { getAllFavorite } from "../../redux/slices/favoriteSlice";
import { useAppDispatch } from "../../redux/hook";
import { useSelector } from "react-redux";

type IProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: any;
};

const ModalDialog: React.FC<IProps> = ({ open, setOpen, item }) => {
  const dispatch = useAppDispatch();
  const favoriteList = useSelector(getAllFavorite);

  const favoriteAndDeleteButtonClick = () => {
    dispatch(addToFavorite(item));
    dispatch(deleteFromCart(item));
    setOpen(false);
  };

  const deleteButtonClick = () => {
    dispatch(deleteFromCart(item));
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} className={style.dialog}>
        <div className={style.dialogTitle}>
          {"Ürünü sepetten kaldırmak istediğinize emin misiniz?"}
        </div>
        <div className={style.dialogContent}>
          <p>
            {item.title} adlı ürünü sepetinden çıkardıktan sonra favoriye
            eklemek ister misin?
          </p>
        </div>
        <div className={style.dialogActions}>
          <button onClick={deleteButtonClick} className={style.deleteButton}>
            Sil
          </button>
          {favoriteList?.find((value) => value.id === item.id) ? (
            <div></div>
          ) : (
            <button
              onClick={favoriteAndDeleteButtonClick}
              autoFocus
              className={style.favoriteAndDeleteButton}
            >
              Sil ve fovorilere ekle
            </button>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default ModalDialog;
