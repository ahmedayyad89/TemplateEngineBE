import { ParseDto, ResultDto } from "src/core/dto/parse.dto";

export interface IParserService {
    parse(parseDto: ParseDto): Promise<ResultDto>;
}