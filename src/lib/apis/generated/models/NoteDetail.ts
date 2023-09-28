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
 * @interface NoteDetail
 */
export interface NoteDetail {
    /**
     * 
     * @type {number}
     * @memberof NoteDetail
     */
    noteId: number;
    /**
     * 
     * @type {number}
     * @memberof NoteDetail
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof NoteDetail
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDetail
     */
    text: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDetail
     */
    color: string;
    /**
     * 
     * @type {Date}
     * @memberof NoteDetail
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the NoteDetail interface.
 */
export function instanceOfNoteDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "noteId" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function NoteDetailFromJSON(json: any): NoteDetail {
    return NoteDetailFromJSONTyped(json, false);
}

export function NoteDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'noteId': json['note_id'],
        'userId': json['user_id'],
        'title': json['title'],
        'text': json['text'],
        'color': json['color'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function NoteDetailToJSON(value?: NoteDetail | null): any {
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
        'text': value.text,
        'color': value.color,
        'updated_at': (value.updatedAt.toISOString().substring(0,10)),
    };
}
