import styles from "./UpdateInfo.module.css";

interface InfoProps {
  totalCreatedTasks: number;
  totalDoneTasks: number;
}

export function UpdateInfo({ totalCreatedTasks, totalDoneTasks }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <div className={styles.counter}>{totalCreatedTasks}</div>
      </div>
      <div className={styles.done}>
        <span>Concluídas</span>
        <div className={styles.counter}>
          {totalDoneTasks} de {totalCreatedTasks}
        </div>
      </div>
    </div>
  );
}