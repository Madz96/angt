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
    var AngtLibModule = (function () {
        function AngtLibModule() {
        }
        AngtLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [AngtLibComponent],
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndC1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd0LWxpYi9saWIvYW5ndC1saWIuc2VydmljZS50cyIsIm5nOi8vYW5ndC1saWIvbGliL2FuZ3QtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndC1saWIvbGliL2FuZ3QtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3RMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndGwtYW5ndC1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgYW5ndC1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3RMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3RMaWJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3QtbGliLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndExpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd0TGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd0TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxnREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsrQkFWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7NEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=