import styles from "./WithoutTask.module.css";
import clipBoard from "../assets/clipboard.svg";

export function WithoutTask() {
  return (
    <div className={styles.container}>
      <img src={clipBoard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus items a fazer</span>
    </div>
  );
}