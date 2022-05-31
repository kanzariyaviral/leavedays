import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class AppService {
  getHello(): any {
    return 'yes';
  }

  getLeave(): any {
    const noOfLeaves = 3;
    let startDate = '2022-06-24';
    startDate = moment(new Date(startDate)).format('ddd,YYYY-MM-DD');

    let endDate: any = moment(startDate).add(noOfLeaves, 'days');
    const isSateurdayHoliday = true;
    const isSundayHoliday = false;

    const currentDate: Date = new Date();
    const inputDate = new Date(startDate);

    if (currentDate > inputDate) {
      console.log('Please Enter Valid Date');
    } else {
      if (!isSateurdayHoliday && !isSundayHoliday) {
        const dates = [];
        while (moment(startDate) < moment(endDate)) {
          dates.push(startDate);
          startDate = moment(startDate).add(1, 'days').format('ddd,YYYY-MM-DD');
        }
        console.log(dates);
        const lastDay = dates.slice(-1);
        console.log(`last day of leave:-${lastDay}`);
      } else if (isSateurdayHoliday && isSundayHoliday) {
        const dates = [];
        while (moment(startDate) < moment(endDate)) {
          const day = moment(startDate).day();
          if (day !== 6 && day !== 0) {
            dates.push(startDate);
          } else {
            endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
          }
          startDate = moment(startDate).add(1, 'days').format('ddd,YYYY-MM-DD');
        }
        console.log(dates);
        const lastDay = dates.slice(-1);
        console.log(`last day of leave:-${lastDay}`);
      } else if (!isSateurdayHoliday && isSundayHoliday) {
        const dates = [];
        while (moment(startDate) < moment(endDate)) {
          const day = moment(startDate).day();
          if (day !== 0) {
            dates.push(startDate);
          } else {
            endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
          }
          startDate = moment(startDate).add(1, 'days').format('ddd,YYYY-MM-DD');
        }
        console.log(dates);
        const lastDay = dates.slice(-1);
        console.log(`last day of leave:-${lastDay}`);
      } else if (isSateurdayHoliday && !isSundayHoliday) {
        const dates = [];
        while (moment(startDate) < moment(endDate)) {
          const day = moment(startDate).day();
          if (day !== 6) {
            dates.push(startDate);
          } else {
            endDate = moment(endDate).add(1, 'days').format('ddd,YYYY-MM-DD');
          }
          startDate = moment(startDate).add(1, 'days').format('ddd,YYYY-MM-DD');
        }
        console.log(dates);
        const lastDay = dates.slice(-1);
        console.log(`last day of leave:-${lastDay}`);
      }
    }
  }
}
