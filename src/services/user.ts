import User from '~/models/User';
import users from './__data__/users';

export function getUser(idOrEmail: number | string): User | null {
  if (typeof idOrEmail === 'number') {
    return users.find(u => u.id === idOrEmail) || null;
  }
  return users.find(u => u.email === idOrEmail) || null;
}
