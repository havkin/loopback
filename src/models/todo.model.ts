import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  decs?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;

  @property({
    type: 'string',
  })
  remindAtAddress?: string; // address,city,zipcode

  @property({
    type: 'string',
  })
  remindAtGeo?: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  todoList?: TodoListWithRelations;
}

export type TodoWithRelations = Todo & TodoRelations;
