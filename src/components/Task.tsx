import { Check, Trash } from "phosphor-react";
import { ITask } from "../type";
import styles from "./Task.module.css";

interface TaskProps {
  task: ITask;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  task: { id, title, isDone },
  onCheckTask,
  onDeleteTask,
}: TaskProps) {
  function handleCheckTask() {
    onCheckTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${isDone && styles.checkDoneButton}`}
        onClick={handleCheckTask}
      >
        {isDone && <Check size={10} weight="bold" />}
      </button>

      <span className={`${styles.title} ${isDone && styles.titleDone}`}>
        {title}
      </span>

      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}