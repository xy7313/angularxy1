import { Pipe, PipeTransform } from "@angular/core";
import { Iproduct } from "./iproduct";

@Pipe({
  name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
  //1. args:string[]
  //2. args.toLowerCase() 
  //3. why return value
  transform(value: Iproduct[], args?: string): Iproduct[] {
    if (args) {
      console.log("before value: ", value);
      return value.filter(function(items) {
            return items.productName.toLowerCase().indexOf(args) != -1;
      });
    } else {
      return value;
    }
    // return args ? value.filter(function(items){
    //   if(items.productName.toLowerCase().indexOf(args)!=-1){
    //     return value;
    //   }
    // }) : value;

    //4. another 
    // return args ? value.filter((product:Iproduct)=>
    //   product.productName.toLocaleLowerCase().indexOf(args)!=-1):value;
  }
}
