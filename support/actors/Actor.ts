/**
 * Representation of a user interacting with the system.
 */
export class Actor {
    readonly username: string;
    readonly password: string;

    constructor(username: string = 'test', password: string = 'test') {
        this.username = username;
        this.password = password;
    }
}