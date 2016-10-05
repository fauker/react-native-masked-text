export class ToolBoxService {
	static mergeOptions(obj1,obj2){
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}

	static getDefaultValue(value) {
		if(value === undefined || value === null) {
			return '';
		}

		return value;
	}
}