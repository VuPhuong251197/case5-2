export interface Service<T> {
    findAll(userId?: number, requesterId?: number): any;

    add(data: any): any;

    update(id: any, data: any): any;

    findById(id: any): any;

    delete(id: any): any;
}