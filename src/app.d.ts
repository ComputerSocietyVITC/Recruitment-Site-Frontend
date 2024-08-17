enum Departments {
	TECHNICAL = 'TECHNICAL',
	DESIGN = 'DESIGN',
	MANAGEMENT = 'MANAGEMENT',
	SMC = 'SMC'
}

enum QuestionTypes {
	TEXT = 'TEXT',
	TEXTAREA = 'TEXTAREA',
	RADIO = 'RADIO'
}

interface User {
	id: string | undefined;
	name: string;
	email: string;
}

interface Question {
	id: string;
	question: string;
	department: Departments;
	type: QuestionTypes;
}

interface Response {
	id: string;
	response: string;
}

export { User, Question, Response, QuestionTypes, Departments };
