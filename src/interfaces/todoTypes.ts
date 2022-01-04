export type UpdateTodoListType = (todoId: string) => () => void;

type InputChangeType = (event: any) => void;

export interface ITodoItem {
  id: string;
  message: string;
  isActive?: boolean;
}

export interface ITodoProps extends ITodoItem {
  onRemoveTodo: UpdateTodoListType;
  onChangeTodoState: UpdateTodoListType;
}

export interface ITodoState {
  todoList: ITodoItem[];
}

export interface ITodoListProps {
  onRemoveTodo: UpdateTodoListType;
  onChangeTodoState: UpdateTodoListType;
  todoList: ITodoItem[];
}

export interface ITodoFormProps {
  message: string;
  buttonDisabled: boolean;
  addTodoHandler: () => void;
  changeMessageHandler: InputChangeType;
}
