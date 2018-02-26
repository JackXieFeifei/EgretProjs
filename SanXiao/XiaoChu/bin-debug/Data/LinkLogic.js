var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LinkLogic = (function () {
    function LinkLogic() {
    }
    // 消除一行或者一列中的内容
    LinkLogic.isHaveLine = function () {
        LinkLogic.lines = [];
        var currentType = "";
        var typeNum = 0;
        // 判断横向
        for (var i = 0; i < GameData.MaxRow; i++) {
            for (var j = 0; j < GameData.MaxColumn; j++) {
                if (GameData.mapData[i][j] != -1) {
                    if (currentType != GameData.elements[GameData.mapData[i][j]].type) {
                        if (typeNum >= 3) {
                            var arr = [];
                            for (var q = 0; q < typeNum; q++) {
                                arr.push(GameData.mapData[i][j - q - 1]);
                            }
                            LinkLogic.lines.push(arr);
                        }
                        currentType = GameData.elements[GameData.mapData[i][j]].type;
                        typeNum = 1;
                    }
                    else {
                        typeNum++;
                    }
                }
                else {
                    if (typeNum >= 3) {
                        var arr = [];
                        for (var q = 0; q < typeNum; q++) {
                            arr.push(GameData.mapData[i][j - q - 1]);
                        }
                        LinkLogic.lines.push(arr);
                    }
                    currentType = "";
                    typeNum = 0;
                }
            }
            if (typeNum >= 3) {
                var arr = [];
                for (var q = 0; q < typeNum; q++) {
                    arr.push(GameData.mapData[i][j - q - 1]);
                }
                LinkLogic.lines.push(arr);
            }
            currentType = "";
            typeNum = 0;
        }
        // 判断纵向
        for (var i = 0; i < GameData.MaxColumn; i++) {
            for (var j = 0; j < GameData.MaxRow; j++) {
                if (GameData.mapData[j][i] != -1) {
                    if (currentType != GameData.elements[GameData.mapData[j][i]].type) {
                        if (typeNum >= 3) {
                            var arr = [];
                            for (var q = 0; q < typeNum; q++) {
                                arr.push(GameData.mapData[j - q - 1][i]);
                            }
                            LinkLogic.lines.push(arr);
                        }
                        currentType = GameData.elements[GameData.mapData[j][i]].type;
                        typeNum = 1;
                    }
                    else {
                        typeNum++;
                    }
                }
                else {
                    if (typeNum >= 3) {
                        var arr = [];
                        for (var q = 0; q < typeNum; q++) {
                            arr.push(GameData.mapData[j - q - 1][i]);
                        }
                        LinkLogic.lines.push(arr);
                    }
                    currentType = "";
                    typeNum = 0;
                }
            }
            if (typeNum >= 3) {
                if (typeNum >= 3) {
                    var arr = [];
                    for (var q = 0; q < typeNum; q++) {
                        arr.push(GameData.mapData[j - q - 1][i]);
                    }
                    LinkLogic.lines.push(arr);
                }
                currentType = "";
                typeNum = 0;
            }
        }
        if (LinkLogic.lines.length != 0) {
            return true;
        }
        return false;
    };
    return LinkLogic;
}());
__reflect(LinkLogic.prototype, "LinkLogic");
//# sourceMappingURL=LinkLogic.js.map