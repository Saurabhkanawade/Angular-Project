import { Expression } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xpipe',
})
export class XpipePipe implements PipeTransform {
  transform(value: string, experience: number): string {
    if (experience < 6) {
      return 'Junior Developer with experience in year :   ' + experience;
    } else {
      return 'Senior Developer with experience in year :   ' + experience;
    }
  }
}
