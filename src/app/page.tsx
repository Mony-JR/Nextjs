import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";


export default function Home() {
  return (
    <div className="main">
      <h1>Hello World</h1>
      <Header/>
    </div>
  );
}
