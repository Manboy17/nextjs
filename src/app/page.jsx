import Image from "next/image";
import styles from "./page.module.css";
import main from "../../public/main.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Building Exceptional Websites for Your Business
        </h1>
        <p className={styles.desc}>
          Our talented team of designers and developers works closely with you
          to bring your vision to life.
        </p>
        <Button href="/about" text="View Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={main} alf="main-image" className={styles.image} />
      </div>
    </div>
  );
}
