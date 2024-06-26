import React from 'react';
import { Task, TaskStatus } from './types';
type SortableTaskItemProps = {
    id: string;
    task: Task;
    status: TaskStatus;
};
declare const SortableTaskItem: ({ id, task, status }: SortableTaskItemProps) => React.JSX.Element;
export default SortableTaskItem;
