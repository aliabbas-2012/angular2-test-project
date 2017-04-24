
import {PipeTransform,Pipe} from '@angular/core'
import { IProduct }  from './product';
 
@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[],args: string ): IProduct[]{
        console.log("------filtering-------")
        // defining filter from argument having value or null
        let filter: string = args ? args.toLocaleLowerCase():null;
        console.log(args)
        return filter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().search(filter)!=-1) : value;
    }
}