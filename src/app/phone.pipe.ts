import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, prefix:number): string {
    return '(+'+prefix+')'+value.split("-").join("");
  }

}
