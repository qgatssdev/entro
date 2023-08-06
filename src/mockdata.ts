import Icon from './assets/Icon.svg';

type Status = 'Open' | 'In Progress' | 'Done';

export type TaskType = {
  id: number;
  taskTitle: string;
  assignee: string;
  avatar: string;
  creationDate: string;
  status: Status;
};

export const tasks: TaskType[] = [
  {
    id: 1,
    taskTitle: 'Fix Bug',
    assignee: 'Uche',
    avatar: Icon,
    creationDate: '10 Sep 10, 4:30',
    status: 'Open',
  },
  {
    id: 2,
    taskTitle: 'Implement New Feature',
    assignee: 'John',
    avatar: Icon,
    creationDate: '10 Sep 11, 5:00',
    status: 'In Progress',
  },
  {
    id: 3,
    taskTitle: 'Refactor Codebase',
    assignee: 'Jane',
    avatar: Icon,
    creationDate: '10 Sep 12, 6:15',
    status: 'Done',
  },
  {
    id: 4,
    taskTitle: 'Write Unit Tests',
    assignee: 'Michael',
    avatar: Icon,
    creationDate: '10 Sep 13, 7:45',
    status: 'Open',
  },
  // {
  //   id: 5,
  //   taskTitle: 'Design User Interface',
  //   assignee: 'Jessica Williams',
  //   avatar: Icon,
  //   creationDate: '10 Sep 14, 9:30',
  //   status: 'In Progress',
  // },
  // {
  //   id: 6,
  //   taskTitle: 'Optimize Performance',
  //   assignee: 'Christopher Lee',
  //   avatar: Icon,
  //   creationDate: '10 Sep 15, 10:20',
  //   status: 'Done',
  // },
  // {
  //   id: 7,
  //   taskTitle: 'Fix Security Vulnerabilities',
  //   assignee: 'Olivia Martinez',
  //   avatar: Icon,
  //   creationDate: '10 Sep 16, 11:55',
  //   status: 'Open',
  // },
  // {
  //   id: 8,
  //   taskTitle: 'Write Documentation',
  //   assignee: 'David Taylor',
  //   avatar: Icon,
  //   creationDate: '10 Sep 17, 13:40',
  //   status: 'In Progress',
  // },
  // {
  //   id: 9,
  //   taskTitle: 'Add Internationalization',
  //   assignee: 'Sophia Anderson',
  //   avatar: Icon,
  //   creationDate: '10 Sep 18, 15:25',
  //   status: 'Done',
  // },
  // {
  //   id: 10,
  //   taskTitle: 'Test End-to-End Functionality',
  //   assignee: 'James Jackson',
  //   avatar: Icon,
  //   creationDate: '10 Sep 19, 17:00',
  //   status: 'Open',
  // },
];

export const assignees = [
  { id: 1, name: 'Unassigned' },
  { id: 2, name: 'Uche' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Jane' },
  { id: 5, name: 'Michael' },
];
