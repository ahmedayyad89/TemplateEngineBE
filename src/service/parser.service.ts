import { Injectable, HttpException, Inject } from '@nestjs/common';
import { ITemplateRepository } from 'src/repository/itemplate.repository';
import { ParseDto, ResultDto } from 'src/core/dto/parse.dto';
import { IParserService } from './iparser.service';
@Injectable()
export class ParserService implements IParserService {

    constructor(@Inject('ITemplateRepository')  private templateRepository: ITemplateRepository) { }

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
        const hashedKeys = templateBody.match(regex);

        const keys = hashedKeys.map(hashedKey => {
            return hashedKey.substring(2, hashedKey.length - 1).trim().toLowerCase();
        });
        keys.forEach((key, i) => {
            const value = data[key];
            if (value == null) {
                errors.add(`You have to add this paramter in the data set: ${key}`);
            } else {
                templateBody = templateBody.replace(hashedKeys[i], value)
            }
        });

        Object.keys(data).forEach(key => {
            if(!keys.includes(key.trim().toLowerCase())){
                errors.add(`You have added a parameter: ${key} that not included in the template`);
            }
        })

        return new ResultDto(templateBody, Array.from(errors));;
    }


    private makeKeysLowerCased(obj: any): any {
        
        return Object.keys(obj).reduce(function(accum, key) {
            accum[key.trim().toLowerCase()] = obj[key];
            return accum;
          }, {});
    }
}
