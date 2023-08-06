import { Box, Flex } from '@chakra-ui/react';
import RiskCard from '../../components/RiskCard';
import TaskHeader from '../../components/TaskHeader';
import { assignees, tasks, TaskType } from '../../mockdata';

const TaskDetails = () => {
  return (
    <Box
      bgColor={'#F7F9FC'}
      padding={10}
      borderRadius={6}
      marginX={'10%'}
      mx={'4%'}
      maxW={720}
      my={'3%'}
    >
      <TaskHeader
        avatar={tasks[0].avatar}
        creationDate={tasks[0].creationDate}
        taskTitle={tasks[0].taskTitle}
        assignees={assignees}
      />
      <Box mt={'5%'}>
        <Flex gap={'5%'}>
          <Flex direction={'column'}>
            <Box fontSize={12} color={'#98A2B3'}>
              Status
            </Box>
            <Box
              backgroundColor={'#EEF2F8'}
              paddingX={2}
              paddingY={0.5}
              borderRadius={16}
              fontSize={13}
            >
              Open
            </Box>
          </Flex>
          <Flex direction={'column'}>
            <Box fontSize={12} color={'#98A2B3'}>
              Date Created
            </Box>
            <Box
              backgroundColor={'#EEF2F8'}
              px={2}
              py={0.5}
              borderRadius={16}
              fontSize={13}
            >
              Sep 10, 2023 4:40 PM
            </Box>
          </Flex>
          <Flex direction={'column'}>
            <Box fontSize={12} color={'#98A2B3'}>
              Assignee
            </Box>
            <Box
              backgroundColor={'#EEF2F8'}
              px={2}
              py={0.5}
              borderRadius={16}
              fontSize={13}
            >
              Unassigned
            </Box>
          </Flex>
        </Flex>
        <Flex width={'100%'} flexDirection={'column'} gap={5} mt={10}>
          <Box fontSize={12} color={'#98A2B3'} fontWeight={500}>
            Description
          </Box>
          <Flex alignItems={'center'}>
            <Box
              flexBasis={'95%'}
              fontSize={13}
              fontWeight={500}
              padding={2}
              backgroundColor={'#EEF2F8'}
              borderRadius={10}
              minH={134}
            >
              To live is to risk it all. Otherwise you're just an inert chunk of
              randomly assembled molecules drifting wherever the universe blows
              you.
            </Box>
            <Box
              flexBasis={'5%'}
              display={'flex'}
              justifyContent={'center'}
              pl={5}
            >
              <img
                src={require('../../assets/ArrowRight.svg').default}
                alt='rightpointer'
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mt={'10%'}>
        <Box></Box>
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
          <Flex
            fontSize={16}
            color={'#475467'}
            gap={2}
            ml={5}
            cursor={'pointer'}
          >
            <img
              src={require('../../assets/plus.svg').default}
              alt='PlusIcon'
            />
            <Box>Link to other tasks</Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default TaskDetails;
