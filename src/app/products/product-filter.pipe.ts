import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Iproduct[], args?: string): Iproduct[] {
    return args ? value.filter(function(items){
      if(items.productName.toLowerCase().indexOf(args)!=-1){
        return value;
      }
    }) : value;
  }

}
