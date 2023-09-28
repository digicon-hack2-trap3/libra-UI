/* tslint:disable */
/* eslint-disable */
/**
 * libra
 * libra API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {number}
     * @memberof Note
     */
    noteId: number;
    /**
     * 
     * @type {number}
     * @memberof Note
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    color: string;
    /**
     * 
     * @type {Date}
     * @memberof Note
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Note interface.
 */
export function instanceOfNote(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "noteId" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function NoteFromJSON(json: any): Note {
    return NoteFromJSONTyped(json, false);
}

export function NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Note {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'noteId': json['note_id'],
        'userId': json['user_id'],
        'title': json['title'],
        'color': json['color'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function NoteToJSON(value?: Note | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'note_id': value.noteId,
        'user_id': value.userId,
        'title': value.title,
        'color': value.color,
        'updated_at': (value.updatedAt.toISOString().substring(0,10)),
    };
}
