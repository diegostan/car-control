import { ICommand } from "./icommand";


export class InsertCarCommand implements ICommand
{
    public name: string;
    public price: number;
    public year: number;
    public description: string;
    public category: string;
}