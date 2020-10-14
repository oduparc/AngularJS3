import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorDays]'
})
export class ColorDaysDirective implements OnChanges {

  @Input() appColorDays: number;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges(): void {
    this.className = this.formatClass(this.appColorDays)
  }

  private formatClass(day: number): string {
    if (day <= 3) {
      return `day`
    }
    return `days`
  }

}
