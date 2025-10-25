// src/mockData.js
import { FiDollarSign, FiBox, FiClock, FiUsers } from 'react-icons/fi';

export const overviewStats = [
  {
    id: 1,
    icon: FiDollarSign,
    iconColor: 'purple',
    title: 'Total revenue',
    value: '$53,00989',
    change: 10,
    changeType: 'increase',
  },
  {
    id: 2,
    icon: FiBox,
    iconColor: 'blue',
    title: 'Projects',
    value: '95',
    subValue: '/100',
    change: 10,
    changeType: 'decrease',
  },
  {
    id: 3,
    icon: FiClock,
    iconColor: 'orange',
    title: 'Time spent',
    value: '1022',
    subValue: '/1300 Hrs',
    change: 8,
    changeType: 'increase',
  },
  {
    id: 4,
    icon: FiUsers,
    iconColor: 'green',
    title: 'Resources',
    value: '101',
    subValue: '/120',
    change: 2,
    changeType: 'increase',
  },
];

export const projects = [
  { id: 1, name: 'Nelsa web developement', manager: 'Om prakash sao', date: 'May 25, 2023', status: 'Completed', progress: 100 },
  { id: 2, name: 'Datascale AI app', manager: 'Nelsan mando', date: 'Jun 20, 2023', status: 'Delayed', progress: 38 },
  { id: 3, name: 'Media channel branding', manager: 'Tiruvelly priya', date: 'July 13, 2023', status: 'At risk', progress: 60 },
  { id: 4, name: 'Corlax iOS app developement', manager: 'Matte hannenry', date: 'Dec 20, 2023', status: 'Completed', progress: 100 },
  { id: 5, name: 'Website builder developement', manager: 'Sukumar rao', date: 'Mar 15, 2024', status: 'On going', progress: 52 },
];

export const tasks = [
  { id: 1, text: 'Create a user flow of social application design', status: 'Approved' },
  { id: 2, text: 'Create a user flow of social application design', status: 'In review' },
  { id: 3, text: 'Landing page design for Fintech project of singapore', status: 'In review' },
  { id: 4, text: 'Interactive prototype for app screens of deltamine project', status: 'On going' },
  { id: 5, text: 'Interactive prototype for app screens of deltamine project', status: 'Approved' },
];

export const workload = [
  { name: 'Sam', tasks: 7 },
  { name: 'Meldy', tasks: 8 },
  { name: 'Ken', tasks: 2 },
  { name: 'Dmitry', tasks: 10 },
  { name: 'Vego', tasks: 8 },
  { name: 'Kadin', tasks: 4 },
  { name: 'Melm', tasks: 4 },
];