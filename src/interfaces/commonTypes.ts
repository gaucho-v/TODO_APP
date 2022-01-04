interface ITodoItem {
  id: string;
  message: string;
  isActive?: boolean;
}

export interface IAction {
  type?: string;
  payload?: any;
}

export type InputChangeType = (event: any) => void;

export interface IAppState {
  todoState: {
    todoList: ITodoItem[];
  };
  formState: {
    message: string;
    buttonDisabled: boolean;
  };
}

export interface IItemsList {
  id?: string;
  isActive?: boolean;
}

export interface IInputProps {
  value: string;
  placeholder?: string;
  onChange: InputChangeType;
}

export interface IButtonProps {
  buttonValue: string;
  buttonClickHandler: () => void;
  disabled: boolean;
}
