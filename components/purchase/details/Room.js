import React, { useContext, useState } from "react";
import breadcumbStyles from "../../../styles/breadcumb/Breadcumb.module.scss";
import styles from "../../../styles/purchase/PurchaseDetails.module.scss";
import Image from "next/image";
import { DataContext } from "../../../context/DataContext";
import { PREFIX_IMG } from "../../../config";
import RequestPurchaseModal from "../../request/modal/RequestPurchaseModal";
import { numberWithCommas } from "../../../utils/DateUtils";

const Room = ({ room_types }) => {
  // console.log(room_types);
  const [opened, setOpened] = useState(null);
  const [contactCurrentId, setContactCurrentId] = useState(room_types[0].id);
  const handleRoomNavClick = (id) => {
    setContactCurrentId(id);
  };
  const settingContext = useContext(DataContext);
  let [setting, setSetting] = settingContext;

  const findIndex = (id) => {
    return room_types.findIndex((item) => {
      return item.id === id;
    });
  };
  return (
    //
    <div className={styles.breadcumb__mainBtn}>
      <div className={"" + " " + styles.wrapper}>
        <ul>
          {room_types &&
            room_types?.map((item, index) => (
              <li
                className={
                  item.id === contactCurrentId
                    ? "btn_primary " + styles.breadcumb__mainBtn_active
                    : "btn_outline" + styles.breadcumb__mainBtn_un_active
                }
                key={item.id}
                onClick={() => handleRoomNavClick(item.id)}
              >
                <span>
                  {item?.number === 1
                    ? `${item?.number} - комната`
                    : `${item?.number} - комнаты`}
                </span>
                {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
              </li>
            ))}
        </ul>

        {room_types[findIndex(contactCurrentId)]?.rooms?.map((room) => (
          <div key={room?.id} className={styles.roomInfoCard}>
            <div className={styles.roomInfoCard_wrapper}>
              <Image
                alt="room"
                width={260}
                height={208}
                src={PREFIX_IMG + room.img}
              />
            </div>

            <div className={styles.roomInfoCard_wrapper}>
              <div className={styles.roomInfoCard_content}>
                <div className={styles.roomInfoCard_content_area}>
                  <p className="caption text_body_dark">Площадь:</p>
                  <span className="h3 breadcumb_active">{room.area} м2</span>
                </div>

                <p
                  style={{ marginBottom: 15 }}
                  className="caption text_body_dark"
                >
                  Цена:
                </p>
                <div className={styles.roomInfoCard_content_price}>
                  <p className="caption text_body_dark">от</p>

                  {Math.floor(room?.price) != 0 ? (
                    <span className="h3 breadcumb_active">
                      {numberWithCommas(Math.floor(room?.price))} ₸{" "}
                    </span>
                  ) : (
                    <span
                      // style={{ textTransform: "capitalize" }}
                      className="h3 breadcumb_active"
                    >
                      Уточнить в отделе продаж
                    </span>
                  )}
                </div>

                <p className="h6 text_body_dark">
                  ≈ ${" "}
                  {numberWithCommas(
                    Math.floor(room?.price / setting?.currency)
                  )}
                </p>
                <button onClick={() => setOpened(true)} className="btn_outline">
                  оставить заявку
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RequestPurchaseModal opened={opened} setOpened={setOpened} />
    </div>

    //
  );
};

export default Room;
