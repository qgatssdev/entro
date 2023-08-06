import { Box, Flex } from '@chakra-ui/react';
import { TaskType } from '../../mockdata';

type Props = Omit<TaskType, 'id'>;

const RiskCard = ({
  taskTitle,
  assignee,
  avatar,
  creationDate,
  status,
}: Props) => {
  return (
    <Flex
      p={5}
      paddingRight={10}
      border={'1px'}
      borderColor={'#F0F2F7'}
      borderRadius='10'
      justifyContent={'space-between'}
      maxW={664}
      boxShadow={'rgba(16, 24, 40, 0.03)'}
      backgroundColor={'#FFFFFF'}
    >
      <Flex gap={7}>
        <img src={avatar} alt='logo' />
        <Flex flexDirection={'column'} gap={'20%'}>
          <Box fontSize={14} fontWeight={600}>
            {taskTitle}
          </Box>
          <Flex gap={1}>
            <Box color={'#98A2B3'} fontSize={12} fontWeight={600}>
              {assignee} ·
            </Box>
            <Flex gap={2}>
              <Box color={'#98A2B3'} fontSize={12} fontWeight={500}>
                Creation Date
              </Box>
              <Box color={'#667085'} fontSize={12} fontWeight={400}>
                {creationDate}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems={'center'} gap={'10'}>
        <Box borderLeft={'1px'} borderColor={'#DFE3EB'} height={'100%'}></Box>
        <Box
          border={'1px'}
          borderColor={'#DFE3EB'}
          w={100}
          p={1}
          paddingLeft={2}
          borderRadius={6}
          maxH={32}
          fontSize={12}
        >
          {status}
        </Box>
        <Box>
          <img
            src={require('../../assets/ArrowRight.svg').default}
            alt='rightpointer'
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default RiskCard;
