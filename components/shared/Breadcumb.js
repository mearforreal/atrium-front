import Image from "next/image";
import React from "react";
import backArrow from "../../assets/backArrow.svg";
import styles from "../../styles/breadcumb/Breadcumb.module.scss";
import Link from "next/link";

const Breadcumb = ({ current, nav }) => {
  return (
    <div className={"wrapper d-flex breadcumb_wrapper " + styles.breadcumb}>
      <div className={""}>
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
            {nav?.map((item) => (
              <li>
                <Link href={item?.href || ""}> {item?.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={""}></div>
    </div>
  );
};

export default Breadcumb;
