/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class AppService {
  async getLeave(data: any): Promise<any> {
    let {
      noOfLeaves,
      startDate,
      isSateurdayHoliday,
      isSundayHoliday,
      holidays,
    } = data;
    startDate = moment(new Date(startDate)).format('ddd,YYYY-MM-DD');
    let endDate: any = moment(startDate)
      .add(noOfLeaves, 'days')
      .format('ddd,YYYY-MM-DD');
    const currentDate: Date = new Date();
    const inputDate = new Date(startDate);

    if (currentDate > inputDate) {
      console.log('Please Enter Valid Date');
    } else {
      const dates = [];
      while (moment(startDate) < moment(endDate)) {
        const day = moment(startDate).day();
        const isholiday = await this.checkHoliday(holidays, startDate);
        if (isholiday == false) {
          if (!isSateurdayHoliday && !isSundayHoliday) {
            dates.push(startDate);
          } else if (isSateurdayHoliday && isSundayHoliday) {
            if (day != 6 && day != 0) {
              dates.push(startDate);
            } else {
              endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
            }
          } else if (!isSateurdayHoliday && isSundayHoliday) {
            if (day != 0) {
              dates.push(startDate);
            } else {
              endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
            }
          } else if (isSateurdayHoliday && !isSundayHoliday) {
            if (day != 6) {
              dates.push(startDate);
            } else {
              endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
            }
          }
        } else {
          endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
        }
        startDate = moment(startDate).add(1, 'days').format('ddd,YYYY-MM-DD');
      }
      const lastDay = dates.slice(-1);
      const result = { dates: dates, lastDay: lastDay };
      return result;
    }
  }
  checkHoliday(holidays: any, startDate): any {
    let Holidays = [];
    Holidays = holidays;
    let isholiday = false;
    Array.from(Holidays).forEach((value) => {
      let isSame = moment(startDate).isSame(moment(value));
      if (isSame == true) {
        isholiday = isSame;
      }
    });
    return isholiday;
  }
}
