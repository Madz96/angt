(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angt-lib', ['exports', '@angular/core'], factory) :
    (factory((global['angt-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AngtLibService = (function () {
        function AngtLibService() {
        }
        AngtLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AngtLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngtLibService.ngInjectableDef = i0.defineInjectable({ factory: function AngtLibService_Factory() { return new AngtLibService(); }, token: AngtLibService, providedIn: "root" });
        return AngtLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AngtLibComponent = (function () {
        function AngtLibComponent() {
        }
        /**
         * @return {?}
         */
        AngtLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AngtLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'angtl-angt-lib',
                        template: "\n    <p>\n      angt-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        AngtLibComponent.ctorParameters = function () { return []; };
        return AngtLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MainComponent = (function () {
        function MainComponent() {
        }
        /**
         * @return {?}
         */
        MainComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-main',
                        template: "<p>\n  main works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        MainComponent.ctorParameters = function () { return []; };
        return MainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Main2Component = (function () {
        function Main2Component() {
        }
        /**
         * @return {?}
         */
        Main2Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Main2Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'angtl-main2',
                        template: "<p>\n  main2 works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        Main2Component.ctorParameters = function () { return []; };
        return Main2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AngtLibModule = (function () {
        function AngtLibModule() {
        }
        AngtLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [AngtLibComponent, MainComponent, Main2Component],
                        exports: [AngtLibComponent]
                    },] },
        ];
        return AngtLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.AngtLibService = AngtLibService;
    exports.AngtLibComponent = AngtLibComponent;
    exports.AngtLibModule = AngtLibModule;
    exports.ɵa = MainComponent;
    exports.ɵb = Main2Component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndC1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd0LWxpYi9saWIvYW5ndC1saWIuc2VydmljZS50cyIsIm5nOi8vYW5ndC1saWIvbGliL2FuZ3QtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndC1saWIvbGliL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJuZzovL2FuZ3QtbGliL2xpYi9tYWluMi9tYWluMi5jb21wb25lbnQudHMiLCJuZzovL2FuZ3QtbGliL2xpYi9hbmd0LWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd0TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3RsLWFuZ3QtbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGFuZ3QtbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd0TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tYWluJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgbWFpbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3RsLW1haW4yJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgbWFpbjIgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbjJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3RMaWJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3QtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IE1haW4yQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluMi9tYWluMi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3RMaWJDb21wb25lbnQsIE1haW5Db21wb25lbnQsIE1haW4yQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3RMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3RMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsbUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLGdEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OytCQVZEOzs7Ozs7O0FDQUE7UUFZRTtTQUFpQjs7OztRQUVqQixnQ0FBUTs7O1lBQVI7YUFDQzs7b0JBYkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDRCQUdYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs0QkFURDs7Ozs7OztBQ0FBO1FBWUU7U0FBaUI7Ozs7UUFFakIsaUNBQVE7OztZQUFSO2FBQ0M7O29CQWJGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw2QkFHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7NkJBVEQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7d0JBQy9ELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7NEJBVkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==