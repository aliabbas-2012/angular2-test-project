
import {PipeTransform,Pipe} from '@angular/core'
import { IProduct }  from './product';
 
@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[],arg: string ): IProduct[]{
        console.log("------filtering-------")
        // defining filter from argument having value or null
        let nameFilter: string = arg ? arg.toLocaleLowerCase():null;
        console.log(arg)
        return nameFilter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().search(nameFilter)!=-1) : value;
    }
}