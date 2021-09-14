import { BaseEntity } from "./entity.base";

export class Car extends BaseEntity {
    /**
     *
     */
    constructor(
        name: string,
        price: number,
        year: number,
        description: string,
        category: string) {

        super();
        this.name = name;
        this.price = price;
        this.year = year;
        this.description = description;
        this.category = category;
    }
    public name: string;
    public price: number;
    public year: number;
    public description: string;
    public category: string;
    private _listNotifications: any[];

    public isValid(): boolean {
        this._listNotifications = [];
        if (this.name.length < 5)
            this._listNotifications.push('Nome deve ter mais de 5 caracteres');

        if (this.price < 1000)
            this._listNotifications.push('Preço deve ser maior que 1000 reais');

        if (this.description.length < 8)
            this._listNotifications.push('Descrição deve conter mais de 8 caracteres');

        return this._listNotifications.length === 0;
    }
    public GetNotifications(): any[] {
        return this._listNotifications;
    }
}
