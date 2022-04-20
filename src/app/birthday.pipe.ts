import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: any): any {
    let index = value.indexOf('T')
    value = value.substring(0, index)
    var date = value.split('-') 
    let year,month, day
    for(let i=0; i<date.length; i++){
      year = date[0];
      month = date[1];
      day = date[2]
    }
    
    return day + '/' + month + '/' +  year
  }

}
