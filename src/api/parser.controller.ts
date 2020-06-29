import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ParseDto } from 'src/core/dto/parse.dto';
import { IParserService } from 'src/service/iparser.service';

@Controller('parser')
export class ParserController {

    constructor(@Inject('IParserService') private parseService: IParserService){
        
    }

    @Post()
    parse(@Body() parseDto: ParseDto){
        return this.parseService.parse(parseDto);
    }
}
