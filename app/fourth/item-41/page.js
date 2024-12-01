import Link from 'next/link';
import styles from "@/app/page.module.css";
export default function page() {
    return (
        <div className={styles.home} style={{ flexDirection: "column" }}>
            <Link href="/"><h1>Dashboard</h1></Link>
            <h3>item-41</h3>
            <h3>item-41</h3>
            <h3>item-41</h3>
            <h3>item-41</h3>
            <h3>item-41</h3>
            <h3>item-41</h3>
            <h3>item-41</h3>
        </div>
    )
}