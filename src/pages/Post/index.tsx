import { Pagination } from "antd";
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { getPosts, setPage } from "../../redux/slices/postSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./FeaturedNews.module.css";
type Props = {}

const PostPage = (props: Props) => {
  const post = useSelector((state: RootState) => state?.post);
  const pages = useSelector((state: RootState) => state?.post.page);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPosts({
        page: pages,
        limit: 12,
      })
    );
  }, [dispatch, pages]);
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
    {post?.posts.Post?.map((e: any, index: any) => {
              return (
                <div className={styles.item__box}>
          <img src={e.image} alt="000017" />
          <div className={styles.detail}>
            <h3>{e.title}</h3>
            <p>{e.descShort}</p>
          </div>
        </div>
              );
            })}
    </div>

    

        <Pagination
          defaultCurrent={1}
          total={post?.posts.count}
          pageSize={12}
          onChange={(pages) => {
            dispatch(setPage(pages));
          }}
        />

    

  </section>
         
  </div>
  
  )
}

export default PostPage