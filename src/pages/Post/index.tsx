import { Pagination } from "antd";
import React from 'react'
import styles from "./FeaturedNews.module.css";
type Props = {}

const PostPage = (props: Props) => {
  return (
    <div>
    <section className={styles.news}>
      <section className={styles.subBanner}>
            <img src='https://sss-dashboard.leanservices.work/upload/6-2022/1654695472615.jpeg' alt='1659522075021'/>

    </section>
    <div className={styles.news__title}>
      <h2>Blog của chúng tôi</h2>
    </div>
    <div className={styles.news__item}>
   
        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
            <p>áiofioaeigo</p>
          </div>
        </div>

        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
          </div>
        </div>
        
        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
          </div>
        </div>

        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
          </div>
        </div>

        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
          </div>
        </div>

        <div className={styles.item__box}>
          <img src="https://cf.shopee.vn/file/a9c48c5185e022563b282ab59540dd53" alt="000017" />
          <div className={styles.detail}>
            <h3>Tin Tức Mới 1</h3>
          </div>
        </div>

        
    </div>
   
    
  </section>

  </div>
  )
}

export default PostPage