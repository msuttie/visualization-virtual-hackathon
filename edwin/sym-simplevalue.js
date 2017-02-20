(function (CS) {
    function symbol() { }
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function() {};

    var definition = {
        typeName: 'simpleValue',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'Value',
                Height: 150, 
                Width: 150
            };
        }
    };

    CS.symbolCatalog.register(definition);

})(window.PIVisualization);