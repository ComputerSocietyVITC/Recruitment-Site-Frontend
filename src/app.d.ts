interface User {
	id: string | undefined;
	name: string;
	email: string;
}

interface Response {
	id: string;
	question: string;
	response: string;
	userId: string | undefined;
	type: string;
	dept: string;

	required: boolean | undefined;
	options: string[] | undefined;
	limit: number | undefined;
}


export { User, Response };
