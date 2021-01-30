import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {

  transform(value: string): string {
    return "assets/doc/" + value + ".md";
  }

}
