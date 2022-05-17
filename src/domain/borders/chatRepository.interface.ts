export interface IChatRepository {
  create(userId: string, firstName: string, text: string, room: string): any;

  findAll(): any;

  findOne(id: number): any;

  remove(id: number): any;
}
