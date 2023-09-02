import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';

type Props = {
  avatar: string;
  taskTitle: string;
  creationDate: string;
  assignees?: any[];
};

const TaskHeader = ({ avatar, taskTitle, creationDate, assignees }: Props) => {
  const [assignedUser, setAssignedUser] = useState('Unassigned');

  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex gap={5} alignItems={'center'}>
          <img src={avatar} alt='logo' />
          <Flex direction={'column'} gap={2}>
            <Box fontWeight={600} fontSize={14}>
              {taskTitle}
            </Box>
            <Box color={'#667085'} fontSize={12} fontWeight={400}>
              {creationDate}
            </Box>
          </Flex>
        </Flex>
        {assignees && assignees.length > 0 && (
          <Box>
            <Flex alignItems={'center'}>
              <Box fontSize={13} fontWeight={500} color={'#98A2B3'}>
                Assign to
              </Box>
              <Box w={120} ml={-2}>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        rightIcon={
                          isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />
                        }
                        border={'none'}
                        backgroundColor={'unset'}
                        fontSize={13}
                        color={'#475467'}
                        colorScheme='unset'
                      >
                        {assignedUser}
                      </MenuButton>
                      <MenuList>
                        {assignees?.map((assigne) => (
                          <MenuItem
                            key={assigne.id}
                            onClick={() => setAssignedUser(assigne.name)}
                            fontSize={14}
                          >
                            {assigne.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
      <Box
        width={'100%'}
        border={'1px'}
        borderColor={'#98A2B3'}
        marginTop={10}
        opacity={0.5}
      />
    </Box>
  );
};

export default TaskHeader;
