import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from './CurrencyFormat/currency-format.pipe';
@NgModule({
    declarations: [CurrencyFormatPipe],
    imports: [],
    exports: [CurrencyFormatPipe]
})
export class PipesModule {}