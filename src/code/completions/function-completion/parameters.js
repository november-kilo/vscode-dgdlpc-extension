export default class FunctionCompletionParameters {
	static getParameters(formalParams) {
		if (!formalParams || (formalParams.VOID && formalParams.VOID())) {
			return [];
		}

		const params = [];
		const paramList = formalParams.parameterList();
		if (paramList) {
			const paramDecls = paramList.parameterDeclaration();
			if (Array.isArray(paramDecls)) {
				for (const param of paramDecls) {
					const typeSpec = param.typeSpecifier().getText();
					const identifier = param.IDENTIFIER().getText();
					params.push(`${typeSpec} ${identifier}`);
				}
			}
		}

		return params;
	}
}
