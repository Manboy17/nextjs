import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          fill={true}
          className={styles.image}
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className={styles.imageText}>
          <h3 className={styles.imageText}>Digital Storytellers</h3>
          <p className={styles.imageDesc}>
            Award winning expercienced team greatly
          </p>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, vero eum. Libero iusto placeat, expedita nostrum natus
            reprehenderit sapiente blanditiis commodi fuga sunt perferendis
            numquam vitae cumque neque, culpa aspernatur recusandae quaerat
            delectus. Molestiae possimus accusamus praesentium obcaecati nihil
            quisquam sed tempora.
            <br />
            <br />
            Rem amet nulla aperiam, mollitia tenetur quaerat assumenda excepturi
            eligendi hic nisi ad similique quas unde, molestiae esse quibusdam
            eaque nemo nam rerum. Quisquam eveniet quibusdam officia architecto
            nisi odio, illo eius sequi.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corporis possimus excepturi officiis fugit debitis eligendi magnam
            aut, rem odio, delectus ipsa dicta omnis architecto repellat.
          </p>
          <Button href="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
