import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './index';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoRepo.find();
  }

  create(title: string) {
    const todo = this.todoRepo.create({ title });
    return this.todoRepo.save(todo);
  }

  async toggle(id: number, completed: boolean) {
    return this.todoRepo.findOneBy({ id }).then((todo) => {
      if (!todo) return null;
      todo.completed = completed;
      return this.todoRepo.save(todo);
    });
  }

  remove(id: number) {
    return this.todoRepo.delete(id);
  }
}
