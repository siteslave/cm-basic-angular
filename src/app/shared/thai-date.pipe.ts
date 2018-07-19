import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    moment.locale('th');
    let thDate = moment(value).format('D MMM ') + (moment(value).get('year') + 543);
    return thDate;

  }

}
