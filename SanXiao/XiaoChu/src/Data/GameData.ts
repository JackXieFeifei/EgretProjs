class GameData {

	// 地图未放置地图元素的数量
	public static unmapnum: number = 0;
	public static mapData: number [][];
	public static stepNum: number = 0;
	public static levelStepNum: number = 0;
	public static elementTypes: number[];
	public static levelReq: LevelRequire;
	public static elements: GameElement[];
	public static unusedElements: number[];
	public static levelBackgroundImageName: string;

	public static MaxRow: number = 8;
	public static MaxColumn: number = 8;
	public static currentElementNum: number = 0;

	public static initData() {
		GameData.mapData = [];
		for(var i = 0; i < GameData.MaxRow; i++) {
			var arr: number[] = [];
			for (var j = 0; j < GameData.MaxColumn; j++) {
				// -2表示未使用 -1表示不可用 
				GameData.mapData[j].push(-2);
			}
		}

		GameData.levelReq = new LevelRequire();
		
		GameData.elements = [];
		GameData.unusedElements = [];
		var len: number = GameData.MaxRow * GameData.MaxColumn;
		for (var i = 0; i < len; i++) {
			var ele: GameElement = new GameElement();
			ele.id = i;
			GameData.elements.push(ele);
			GameData.unusedElements.push(i);
		}

		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;
	}

	public static stageW: number = 0;
	public static stageH: number = 0;

}