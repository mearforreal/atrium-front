import React from "react";
import Heading from "../shared/Heading";
import styles from "../../styles/news/ActualNews.module.scss";
import Link from "next/link";
import { formateDate } from "../../utils/DateUtils";
import { PREFIX_IMG } from "../../config";

const ActualNews = ({ lateNews }) => {
  return (
    <div className={styles.actualNews}>
      <Heading
        className={styles.actualNews_heading}
        isDarkBg={false}
        caption="ПОСЛЕДНИЕ НОВОСТИ"
        h2={"АКТУАЛЬНЫЕ НОВОСТИ"}
        p={""}
      />
      <div className={styles.actualNews__container}>
        <div className={styles.actualNews__leftContainer}>
          <div className={styles.actualNews__leftContainer_top}>
            <Link
              href={"/news/" + lateNews[0]?.id ?? ""}
              style={{
                backgroundImage: `linear-gradient(0deg,
                  rgba(37, 42, 70, 0.35),
                  rgba(37, 42, 70, 0.35)
                ),
              url("${PREFIX_IMG + lateNews[0]?.img ?? ""}")`,
              }}
              className={styles.actualNews__leftContainer_top_news}
            >
              <p>{lateNews[0]?.titleRU}</p>
              <span>{formateDate(lateNews[0]?.created_at ?? "")}</span>
              {/* <span>5 Авг 2022</span> */}
            </Link>
            <Link
              href={"/news/" + lateNews[1]?.id}
              style={{
                backgroundImage: `linear-gradient(0deg,
                rgba(37, 42, 70, 0.35),
                rgba(37, 42, 70, 0.35)
              ),
              url("${PREFIX_IMG + lateNews[1]?.img ?? ""}")`,
              }}
              className={styles.actualNews__leftContainer_top_news}
            >
              <p>{lateNews[1]?.titleRU ?? ""}</p>
              <span>{formateDate(lateNews[1]?.created_at ?? "")}</span>
            </Link>
          </div>
          <Link
            style={{
              backgroundImage: `linear-gradient(0deg,
            rgba(37, 42, 70, 0.35),
            rgba(37, 42, 70, 0.35)
          ),
          url("${PREFIX_IMG + lateNews[2]?.img ?? ""}")`,
            }}
            href={"/news/" + lateNews[2]?.id ?? ""}
            className={styles.actualNews__leftContainer_bottom}
          >
            <p>{lateNews[2]?.titleRU ?? ""}</p>
            <span>{formateDate(lateNews[2]?.created_at ?? "")}</span>
          </Link>
        </div>

        <Link
          style={{
            backgroundImage: `linear-gradient(0deg,
          rgba(37, 42, 70, 0.35),
          rgba(37, 42, 70, 0.35)
        ),
        url("${PREFIX_IMG + lateNews[3]?.img ?? ""}")`,
          }}
          href={"/news/" + lateNews[3]?.id ?? ""}
          className={styles.actualNews__rightContainer}
        >
          <p>{lateNews[3]?.titleRU ?? ""}</p>
          <span>{formateDate(lateNews[3]?.created_at ?? "")}</span>
        </Link>
      </div>
    </div>
  );
};

export default ActualNews;
