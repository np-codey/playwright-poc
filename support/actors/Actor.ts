/**
 * Representation of a user interacting with the system.
 */
export class Actor {
    readonly username: string;
    readonly password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}