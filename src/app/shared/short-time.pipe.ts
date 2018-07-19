import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'shortTime'
})
export class ShortTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    moment.locale('th');
    let shortTime = moment(value, 'HH:mm:ss').format('HH:mm');
    return shortTime;
  }

}
