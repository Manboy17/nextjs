import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title Test</h1>
          <p className={styles.desc}>Desc Test</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alth="auth-image"
              width={40}
              height={40}
              className={styles.authorImage}
            />
            <span className={styles.name}>Denys Hlushchenko</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            className={styles.image}
            src="https://images.pexels.com/photos/16963896/pexels-photo-16963896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
          />
        </div>
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ducimus nisi
        minus in illo, accusamus dolores distinctio quidem ullam, quo eligendi
        obcaecati modi. Maxime molestiae assumenda aspernatur facilis quisquam
        alias, voluptates reiciendis. Dolor debitis quasi incidunt animi nisi
        libero autem molestias temporibus suscipit velit sint cum id cumque
        architecto nostrum, est ad. Ipsum, facilis quisquam?
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        explicabo, aspernatur repellat rerum nulla praesentium nobis hic quam
        impedit obcaecati nostrum culpa porro consectetur deleniti. Dolores id
        quae reiciendis maxime vel quia dignissimos nam repellat itaque
        repellendus doloremque natus cumque enim sit placeat, suscipit in?
        Laudantium quis animi quaerat eveniet, officiis eligendi quas ad
        consequuntur!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum
        expedita sunt itaque, temporibus blanditiis dolores, quo quam quas vitae
        commodi repellat aspernatur dicta. Nobis odit ex consequatur voluptate
        exercitationem.
      </p>
    </div>
  );
};

export default BlogPost;
