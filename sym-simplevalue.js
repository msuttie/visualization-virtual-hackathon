(function (PV) {
    function symbolVis() { }
    PV.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope, element) {};

    var definition = {
        typeName: 'simpleValue',
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'Value',
                Height: 150, 
                Width: 150
            };
        }
    };

    PV.symbolCatalog.register(definition);

})(window.PIVisualization);