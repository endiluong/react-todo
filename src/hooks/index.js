import { useState, useEffect } from "react";
import { collatedTasksExist } from "../helpers";
import { firebase } from "../firebase";
import { moment } from "moment";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setarchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("task")
      .where("userId", "==", "sdf44rwsdd");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTask = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));
      setTasks(
        selectedProject === "NEXT-7"
          ? newTask.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTask.filter(task => task.archived !== true)
      );
      setarchivedTasks(newTask.filter(task => task.archived !== false));
    });
  }, [selectedProject]);
};
