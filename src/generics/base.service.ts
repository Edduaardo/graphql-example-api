import { FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export abstract class BaseService<T extends ObjectLiteral> {
  protected repository: Repository<T>

  constructor(repository: Repository<T>) {
    this.repository = repository
  }

  findAll(): Promise<T[]> {
    return this.repository.find();
  }
  
  findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as unknown as FindOptionsWhere<T>);
  }

  create(object: T): Promise<T> {
    return this.repository.save(object);
  }

  update(object: T): Promise<T> {
    return this.repository.save(object);
  }
}
