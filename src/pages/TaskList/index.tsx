import { Box, Flex } from '@chakra-ui/react';
import RiskCard from '../../components/RiskCard';
import { tasks, TaskType } from '../../mockdata';

const TaskList = () => {
  return (
    <Box mx={'10%'} mt={10}>
      <Box display={'flex'}>
        <Box fontSize={22} fontWeight={600}>
          Tasks
        </Box>
      </Box>
      <Flex direction={'column'} gap={5}>
        {tasks.map((task: TaskType) => (
          <RiskCard
            key={task.id}
            avatar={task.avatar}
            taskTitle={task.taskTitle}
            assignee={task.assignee}
            creationDate={task.creationDate}
            status={task.status}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default TaskList;
