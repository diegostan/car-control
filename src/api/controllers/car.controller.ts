import { Body, Controller, Get, Post } from "@nestjs/common";
import { InsertCarCommand } from "src/application/commands/insert.car.command";
import { InsertCarHandler } from "src/application/handlers/insert.car.handler";

import { RequestResult } from "src/application/Results/request.result";
import { Car } from "src/domain/entities/car.entity";

@Controller('v1/cars')
export class CarController {
    @Get()
    get(): Car {
        return new Car('Astra', 15000, 2001, 'Astra Gl 1.8 2p', 'Hatch médio');
    }

    @Post()
    post(@Body() body: InsertCarCommand): RequestResult {

        const handler = new InsertCarHandler(body);        
        return handler.handle();
    }
}