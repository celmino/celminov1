import React from 'react';
import { Task } from './types';
type TaskItemProps = {
    task: Task;
};
declare const TaskItem: ({ task }: TaskItemProps) => React.JSX.Element;
export default TaskItem;
