import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { Custumer } from "../models/custumer.model";




@Controller('v1/custumers')
export class CustumerController {
    @Get()
    get(): string {
        return "Ola Waggin!";
    }

    @Get(':document')
    getByDocument(@Param('document') document): Custumer[] {  
        let custumer = new Custumer(1, "Waggin", "12345678900");  
        let custumer2 = new Custumer(2, "Jaime", "98765431502");  
        let listCustumer = [];
        listCustumer.push(custumer);
        listCustumer.push(custumer2);        
        return listCustumer;
    }

    @Post()
    post(@Body() body : Custumer): string {
        return "Cadastro do Waggin: " + body.name + " ID do Wagguin " + body.id + " Email do Waguin " + body.email;
    }

    
}