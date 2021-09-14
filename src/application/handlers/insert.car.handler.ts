import { Car } from "src/domain/entities/car.entity";
import { ICommand } from "../commands/icommand";
import { InsertCarCommand } from "../commands/insert.car.command";
import { RequestResult } from "../Results/request.result";
import { IHandler } from "./ihandler";

export class InsertCarHandler implements IHandler
{
    constructor(public command: InsertCarCommand){}
    handle(): RequestResult {
        let car = new Car(this.command.name, this.command.price, this.command.year, this.command.description, this.command.category);
        if (car.isValid())
            return new RequestResult(200, 'Carro cadastrado com sucesso', true, car);

        return new RequestResult(400, 'Falha ao inserir carro', false, car.GetNotifications());
    }

}