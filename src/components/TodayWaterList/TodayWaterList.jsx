
import { nanoid } from "nanoid";
import { useState } from "react";
import { WaterEntry } from "./TodayWaterListModal";
import css from "./TodayWaterList.module.css";
import icons from "/public/symbol-defsN.svg";

export const TodayWaterList = () => {
  const [waterItems, setWaterItems] = useState([
    {
      id: nanoid(),
      amount: 340,
      date: new Date(),
    },
  ]);

  const handleAddWater = () => {
    const newWaterItem = {
      id: nanoid(),
      amount: 250,
      date: new Date(),
    };
    setWaterItems([newWaterItem, ...waterItems]);
  };

  const handleDelete = (id) => {
    setWaterItems(waterItems.filter((elem) => elem.id !== id));
  };

  return (
    <div className={css.tableWrapper}>
      <div className={css.todayWrapper}>
        <p className={css.today}>Today</p>
        <div className={css.listContainer}>
          <div className={css.hightRegulator}>
            <ul className={css.listWraper}>
              {waterItems.map((elem) => (
                <li key={elem.id}>
                  <WaterEntry
                    initialAmount={elem.amount}
                    initialDate={elem.date}
                    onDelete={() => handleDelete(elem.id)}
                  />
                </li>
              ))}
            </ul>
            <button className={css.addBtn} onClick={handleAddWater}>
              <svg>
                <use href={`${icons}#icon-plus`}></use>
              </svg>
              <span>Add water</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};