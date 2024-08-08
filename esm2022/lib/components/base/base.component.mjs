import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseComponent {
    constructor() {
        this.texto = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BaseComponent, isStandalone: true, selector: "lib-base", inputs: { texto: "texto" }, ngImport: i0, template: "<p>base works! {{texto}}</p>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-base', standalone: true, imports: [], template: "<p>base works! {{texto}}</p>\r\n" }]
        }], propDecorators: { texto: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXN0L3NyYy9saWIvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVzdC9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVNqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFXLFVBQUssR0FBWSxFQUFFLENBQUM7S0FDOUI7K0dBRlksYUFBYTttR0FBYixhQUFhLGdHQ1QxQixrQ0FDQTs7NEZEUWEsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLEVBQUU7OEJBS0YsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYmFzZScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Jhc2UuY29tcG9uZW50LmNzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRleHRvIDogc3RyaW5nID0gJyc7XHJcbn1cclxuIiwiPHA+YmFzZSB3b3JrcyEge3t0ZXh0b319PC9wPlxyXG4iXX0=