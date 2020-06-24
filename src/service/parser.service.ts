import { Injectable, HttpException } from '@nestjs/common';
import { TemplateRepository } from 'src/repository/template.repository';
import { ParseDto, ResultDto } from 'src/core/dto/parse.dto';
@Injectable()
export class ParserService {

    constructor(private templateRepository: TemplateRepository) { }

    async parse(parseDto: ParseDto): Promise<ResultDto> {
        const templateEntity = await this.templateRepository.findOneByCode(parseDto.templateCode);
        if (templateEntity == null) {
            throw new HttpException("invalid TemplateCode", 500);
        }
        return this.parseString(templateEntity.templateBody, this.makeKeysLowerCased(parseDto.data));
    }


    private parseString(templateBody: string, data: any): ResultDto {
        const errors = new Set<string>();
        const regex = /\#\:[ ]*[a-zA-z]+[ ]*\#/gm;
        const found = templateBody.match(regex);
        found.map(hashedKey => {
            const key = hashedKey.substring(2, hashedKey.length - 1)
            console.log(key)
            const value = data[key.trim().toLowerCase()];
            if (value == null) {
                errors.add(`You have to add this paramter in the data set: ${key}`);
            } else {
                templateBody = templateBody.replace(hashedKey, value)
            }

        });

        return new ResultDto(templateBody, Array.from(errors));;
    }


    private makeKeysLowerCased(obj: any): any {
        
        return Object.keys(obj).reduce(function(accum, key) {
            accum[key.toLowerCase()] = obj[key];
            return accum;
          }, {});
    }
}
