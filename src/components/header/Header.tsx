import style from "./Header.module.scss";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Badge from "@mui/material/Badge";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerTitle}>
          <p className={style.headerText}>Market App</p>
        </div>
        <div className={style.headerSearchBar}>
          <input
            className={style.inputSearch}
            placeholder="Ürün adı  yazınız"
          />
          <FiSearch className={style.seachIcon} />
        </div>
        <div className={style.headerButtonRow}>
          <button className={style.rowButton}>
            <Badge
              badgeContent={0}
              className={style.buttonBadge}
              color="warning"
            >
              <AiOutlineHeart className={style.buttonIcon} />
              <AiFillHeart className={style.buttonIconAfter} />
            </Badge>
            <span className={style.buttonText}>Favorilerim</span>
          </button>
          <button className={style.rowButton}>
            <Badge
              badgeContent={0}
              className={style.buttonBadge}
              color="warning"
            >
              <RiShoppingCart2Line className={style.buttonIcon} />
              <RiShoppingCart2Fill className={style.buttonIconAfter} />
            </Badge>
            <span className={style.buttonText}>Sepetim</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
