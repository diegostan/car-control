import { Module } from '@nestjs/common';

import { BackofficeModule } from './backoffice/backoffice.module';
import { CarController } from './api/controllers/car.controller';
import { CustumerController } from './backoffice/controllers/custumer.controller';


@Module({
  imports: [BackofficeModule],
  controllers: [CustumerController, CarController],
  providers: [],
})
export class AppModule { }
