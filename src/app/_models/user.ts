export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    api_token?: string;
};

export class login {
	email:string;
	password:string;
}

export class Signup {
	name:string;
	email:string;
	password:string;
	c_password:string;
}