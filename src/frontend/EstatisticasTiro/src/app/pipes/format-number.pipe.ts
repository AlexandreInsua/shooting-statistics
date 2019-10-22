import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: string){
    let d = 2, g = 3, s = '.', c = ','
    var thisNum = parseFloat(value);
    if (!thisNum) return "0";
    var re = '\\d(?=(\\d{' + (g || 3) + '})+' + (d > 0 ? '\\D' : '$') + ')',
    num = thisNum.toFixed(Math.max(0, ~~d));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
  }
}
