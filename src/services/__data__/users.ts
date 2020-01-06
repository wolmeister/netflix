import User from '~/models/User';

const users: User[] = [
  {
    id: 1,
    name: 'Victor Wolmeister',
    email: 'victor@gmail.com',
    phone: '(51) 99999-9876',
    plan: 'Ultra HD',
    password: 'test',
  },
  {
    id: 2,
    name: 'Matheus Michels',
    email: 'mm@gmail.com',
    phone: '(51) 99999-1234',
    plan: 'Standard HD',
    password: '1234',
  },
  {
    id: 3,
    name: 'Geraldo',
    email: 'geraldo@gmail.com',
    phone: '(51) 99999-6789',
    plan: 'Ultra HD',
    password: 'rivia',
  },
];

export default users;
