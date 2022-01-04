import { v4 as uuidv4 } from 'uuid';
import { IItemsList } from '../interfaces/commonTypes';

export const getTodoItem = (message: string) => ({
  message,
  id: uuidv4(),
  isActive: false,
});

export const filterListById = <T extends IItemsList>(list: T[], id: string) => {
  return list.filter((item) => item.id !== id);
};

export const changeItemStateById = <T extends IItemsList>(list: T[], id: string) =>
  list.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isActive: !item.isActive,
      };
    }
    return item;
  });
