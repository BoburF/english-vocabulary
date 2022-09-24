class UserObject{
    name : string;
    #password : string;
    constructor(name: string, password: string) {
        this.name = name,
        this.#password = password
    }

    get getPassword():string{
        return this.#password
    }

    set setPassword(pass:string){
        this.#password = pass
    }
}

const user = new UserObject("bobur", "passwor")
user.setPassword = 'qdqw'
console.log(user.getPassword);