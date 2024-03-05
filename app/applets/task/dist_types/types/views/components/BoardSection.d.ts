import React from 'react';
import { Task, TaskStatus } from './types';
type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Task[];
    status: TaskStatus;
};
declare const BoardSection: ({ id, title, tasks, status }: BoardSectionProps) => React.JSX.Element;
export default BoardSection;
