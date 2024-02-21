import { Card, CardContent } from '@mui/material';
import React from 'react';
import { Task } from './types';

type TaskItemProps = {
  task: Task;
};



const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Card>
      <CardContent>{task.title}</CardContent>
    </Card>
  );
};

export default TaskItem;
