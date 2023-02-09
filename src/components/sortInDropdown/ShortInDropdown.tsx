import style from "./ShortInDropdown.module.scss";

import React, { useState } from "react";
import classNames from "classnames";
import { dropdownMenuList } from "../../utils/DropdownMenuList";
import { RiArrowUpSLine, RiArrowDownSLine, RiCheckLine } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hook";
import { setSelectedSort } from "../../redux/slices/sortSlice";

const ShortInDropdown: React.FC = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [interest, setInterest] = useState<string>("Sıralama");
  const [data, setData] = useState(dropdownMenuList);
  const dispatch = useAppDispatch();

  const handleMenu = () => {
    setHamburger(!hamburger);
  };

  const selectInterest = (e: any) => {
    setInterest(e.target.value);
    setHamburger(!hamburger);
  };

  const clickCheck = (item: any) => {
    dispatch(setSelectedSort(item));
    const newData = data.map((x: any) => {
      if (x.id === item.id) {
        return { ...x, isCheck: !x.isCheck };
      }
      return { ...x, isCheck: false };
    });
    setData(newData);
  };

  return (
    <div className={style.dropdown}>
      <div className={style.dropdownInput} onClick={handleMenu}>
        <span className={style.inputText}>{interest}</span>
        {hamburger ? (
          <RiArrowUpSLine className={style.arrowDownIcon} />
        ) : (
          <RiArrowDownSLine className={style.arrowDownIcon} />
        )}
      </div>
      {hamburger ? (
        <div className={style.dropdownMenu}>
          <ul className={style.dropdownMenuUl}>
            {data.map((item: any) => (
              <li key={item.id} className={style.dropdownMenuLi}>
                <button
                  type="button"
                  value={item.name}
                  className={classNames([style.dropdownItem], {
                    [style.checked]: item.isCheck,
                  })}
                  onClick={(e) => {
                    selectInterest(e);
                    clickCheck(item);
                  }}
                >
                  {item.name}
                  <RiCheckLine className={style.checkIcon} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShortInDropdown;
