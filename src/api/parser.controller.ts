import { Controller, Post, Body } from '@nestjs/common';
import { ParseDto } from 'src/core/dto/parse.dto';
import { ParserService } from 'src/service/parser.service';

@Controller('parser')
export class ParserController {

    constructor(private parseService: ParserService){
        
    }

    @Post()
    parse(@Body() parseDto: ParseDto){
        return this.parseService.parse(parseDto);
    }
}
