import Image from "next/image";
import React from "react";
import backArrow from "../../assets/backArrow.svg";
import styles from "../../styles/breadcumb/Breadcumb.module.scss";
import Link from "next/link";

const BreadcumbContact = ({ current, nav, isButton }) => {
  // console.log(nav);
  return (
    <>
      <div className={"wrapper d-flex breadcumb_wrapper " + styles.breadcumb}>
        <div className={styles.breadcumb__container}>
          <div className={styles.breadcumb__left}>
            <div className={styles.breadcumb__home}>
              <Image src={backArrow} alt="backArrow" />
              <Link href={"/"}> главная </Link>
            </div>
            <span className={styles.breadcumb__current}>
              <Link href={current?.href || ""}> {current?.title} </Link>
              <span className={styles.breadcumb__current_dot} />
            </span>
          </div>
          <div className={styles.breadcumb__main}>
            <ul>
              {nav &&
                nav?.map((item) => (
                  <li key={item.id}>
                    <span className="br">
                      {!!item?.project?.titleRU
                        ? item.project.titleRU
                        : !!item?.titleRU}
                    </span>
                    {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.breadcumb__mainBtn}>
        {isButton && (
          <ul>
            {nav &&
              nav?.map((item, index) => (
                <li
                  key={item.id}
                  className={index === 0 ? "btn_primary" : "btn_outline"}
                >
                  <span>
                    {" "}
                    {!!item?.project?.titleRU
                      ? item.project.titleRU
                      : !!item?.titleRU}
                  </span>
                  {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default BreadcumbContact;
