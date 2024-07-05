import Header from "../header/Header";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
}
