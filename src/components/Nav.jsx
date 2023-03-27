import styles from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { TfiLayoutMediaOverlayAlt2 } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const Nav = () => {
  const [close, setClose] = useState(styles.nav);
  const [xclose, setXclose] = useState(styles.xclose);
  const [opened, setOpened] = useState(styles.open);
  const nav = useNavigate();
  const closed = () => {
    setClose(styles.navClose);
    setXclose(styles.Xnone);
    setOpened(styles.open);
  };
  const open = () => {
    setClose(styles.nav);
    setXclose(styles.xclose);
    setOpened(styles.CloseOpen);
  };

  return (
    <div className={styles.body}>
      <button className={opened} onClick={open}>
        <AiOutlineMenu />
      </button>
      <div className={close}>
        <button className={xclose} onClick={closed}>
          <TfiClose />
        </button>
        <div onClick={() => nav("/login")} className={styles.admin}>
          <RiAdminLine />
          <p>ADMIN</p>
        </div>
        <div onClick={() => nav("/")} className={styles.home}>
          <AiOutlineHome />
          <p>HOME</p>
        </div>
        <div onClick={() => nav("/about")} className={styles.about}>
          <TfiLayoutMediaOverlayAlt2 />
          <p>ABOUT</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
