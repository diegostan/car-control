import { ICommand } from "../commands/icommand";
import { RequestResult } from "../Results/request.result";

export interface IHandler 
{
    handle(command:ICommand):RequestResult;
}