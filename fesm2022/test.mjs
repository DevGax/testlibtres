import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class TestService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TestService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TestService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TestService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class TestComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TestComponent, isStandalone: true, selector: "lib-Test", ngImport: i0, template: `
    <p>
      test works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-Test', standalone: true, imports: [], template: `
    <p>
      test works!
    </p>
  ` }]
        }] });

class BaseComponent {
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

/*
 * Public API Surface of test
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseComponent, TestComponent, TestService };
//# sourceMappingURL=test.mjs.map
