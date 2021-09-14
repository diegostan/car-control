import { Guid } from "guid-typescript";

export class BaseEntity {

    constructor(

    ) {
        this.id = Guid.create().toString();
        this.createdAt = new Date();

    }
    public id: string;
    public createdAt: Date;
}