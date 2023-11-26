import { Actor } from "./Actor";

/**
 * Build Actors from JSON data.
 */
export abstract class ActorFactory {
    /**
     * Retrieve an Actor for use in tests by looking up the JSON user profiles.
     * @param jsonData One of the user profiles from the data folder.
     * @returns An Actor.
     */
    static getUser(jsonData): Actor {
        let actor = new Actor();
        return Object.assign(actor, jsonData); 
    }
}