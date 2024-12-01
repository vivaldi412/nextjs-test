'use client'
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Link from 'next/link';
import clp from "../public/left-panel-close.svg"
import olp from "../public/left-panel-open.svg"


export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isSelected, setIsSelected] = React.useState(false)
  const selectedRef = React.useRef();
  const [innerText, setInnerText] = React.useState(<h4>Dashboard</h4>);


  function closeNav() {
    setIsOpen(perv => !perv)
  }
  function select(e) {
    let temp = e.currentTarget.firstChild.innerText[5]
    if (e.currentTarget.firstChild.innerText[5] === "1") { temp = "first" }
    if (e.currentTarget.firstChild.innerText[5] === "2") { temp = "second" }
    if (e.currentTarget.firstChild.innerText[5] === "3") { temp = "third" }
    if (e.currentTarget.firstChild.innerText[5] === "4") { temp = "fourth" }
    if (selectedRef.current) {
      selectedRef.current.style.backgroundColor = "";
      // setInnerText(<h4></h4>)
    }
    selectedRef.current = e.currentTarget;
    e.currentTarget.style.backgroundColor = "rgba(42, 157, 144, 0.62)"
    setInnerText(<Link href={`/${temp}/${e.currentTarget.firstChild.innerText}`}><h4>{e.currentTarget.firstChild.innerText}</h4></Link>)
    setIsSelected(true)
    // console.log(selectedRef.current.firstChild.innerText)
    console.log(temp)
  }


  const navbarOpen = (
    <div className={styles.navbar} >
      <span className={styles.span}>
        <Image src={clp} alt="close left panel" width={20} height={20} onClick={closeNav} />
        <h4>Dashboard</h4>
      </span>
      <div><h4>First</h4>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-11</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-12</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-13</p></div>
      </div>
      <div><h4>Second</h4>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-21</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-22</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-23</p></div>
      </div>
      <div><h4>Third</h4>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-31</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-32</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-33</p></div>
      </div>
      <div><h4>Fourth</h4>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-41</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-42</p></div>
        <div className={styles.item} onClick={(e) => select(e)}><p>item-43</p></div>
      </div>
    </div>
  )


  return (
    <div className={styles.home} >
      {isOpen ? navbarOpen : <div className={styles.navbarClose}><Image src={isOpen ? clp : olp} alt="close left panel" width={20} height={20} onClick={closeNav} /></div>}
      <div className={styles.dashboard} style={isOpen ? { width: "78svw" } : { width: "90svw" }}>
        <div className={styles.dashboardTop}><p>NEXTjs TEST</p></div>
        {innerText}
      </div>
    </div>
  );
}
