
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({   // it is a decorator
  name: 'custom'    // it is a pipe selector name
})
export class CustomPipe implements PipeTransform {

  transform(value: string, gender: string): string {
  if(gender=='male')
  return "MR. "+value;
  else
  return "MS. "+value;

  }

}
