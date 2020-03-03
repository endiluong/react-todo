import {collatedTask} from '../constant';

export const collatedTasksExist = selectedProject =>
  collatedTasksExist.find(task => task.key === selectedProject);
