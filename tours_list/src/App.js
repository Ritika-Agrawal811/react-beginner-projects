import ToursSection from "./components/ToursSection";
import styles from "./css/main.module.css";

function App() {
  return (
    <main className={styles["flex-center"]}>
      <h1 className={styles["heading"]}>Our Tours</h1>
      <ToursSection />
    </main>
  );
}

export default App;
