var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserObject_password;
class UserObject {
    constructor(name, password) {
        _UserObject_password.set(this, void 0);
        this.name = name,
            __classPrivateFieldSet(this, _UserObject_password, password, "f");
    }
    get getPassword() {
        return __classPrivateFieldGet(this, _UserObject_password, "f");
    }
    set setPassword(pass) {
        __classPrivateFieldSet(this, _UserObject_password, pass, "f");
    }
}
_UserObject_password = new WeakMap();
const user = new UserObject("bobur", "passwor");
user.setPassword = 'qdqw';
console.log(user.getPassword);
