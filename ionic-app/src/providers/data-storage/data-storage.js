import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataStorageProvider = (function () {
    function DataStorageProvider(http) {
        this.http = http;
        console.log('Hello DataStorageProvider Provider');
    }
    DataStorageProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataStorageProvider.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return DataStorageProvider;
}());
export { DataStorageProvider };
//# sourceMappingURL=data-storage.js.map