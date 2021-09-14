export class RequestResult {

    constructor(
        public statuscode: number,
        public message: string,
        public isOk: boolean,
        public data: any
    ) {
        
        
    }
}