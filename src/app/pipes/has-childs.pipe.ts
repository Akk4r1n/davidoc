import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasChilds',
  pure: false,
})
export class HasChildsPipe implements PipeTransform {

  transform(items: any[], callback: (item: any) => boolean): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item));
  }

}
