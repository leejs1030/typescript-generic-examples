import { User } from './user';

const correctUsage: Pick<User, 'name' | 'birth'> = {
  name: 'kim',
  birth: new Date(),
};
const inCorrectUsage: Pick<User, 'name' | 'birth'> = {
  name: 'kim',
  birth: new Date(),
  password: '1', // Compile error!
};
