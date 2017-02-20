
(function (CS) {
    'use strict';

    function symbolVis() { }
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function (scope, elem) {
        this.onDataUpdate = dataUpdate;
        this.onResize = resize;
    }

    function dataUpdate(data) {

    }

    function resize(width, height) {

    }

    var definition = {
        typeName: 'liquidgauge',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function () {
            return {
                DataShape: 'Gauge',
                Height: 150,
                Width: 150
            };
        }
    };
    CS.symbolCatalog.register(definition)
})(window.Coresight);