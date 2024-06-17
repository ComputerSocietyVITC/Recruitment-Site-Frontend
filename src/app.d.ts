interface User {
	id: string | undefined;
	name: string;
	email: string;
}

interface Response {
	question: string;
	response: string;
	id: string;
	userId: string;
	type: string;
	dept: string;

	options: string[]?;
	limit: int?;
}

export { User, Response };
