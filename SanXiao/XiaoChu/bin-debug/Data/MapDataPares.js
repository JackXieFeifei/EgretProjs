var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapDataPares = (function () {
    function MapDataPares() {
    }
    MapDataPares.createMapData = function (val) {
        var len = val.length;
        GameData.unmapnum = len;
        var index = 0;
        for (var i = 0; i < len; i++) {
            index = val[i];
            var row = Math.floor(index / GameData.MaxColumn);
            var col = index % GameData.MaxRow;
            GameData.mapData[row][col] = -1;
        }
        GameData.currentElementNum = GameData.MaxRow * GameData.MaxColumn - len;
    };
    return MapDataPares;
}());
__reflect(MapDataPares.prototype, "MapDataPares");
//# sourceMappingURL=MapDataPares.js.map