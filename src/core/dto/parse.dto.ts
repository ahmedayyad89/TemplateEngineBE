export class ParseDto {
    constructor(public templateCode: string, public data: any) {
    }

}

export class ResultDto {
    constructor(public parsedString: string, public errors: string[]){

    }
}
