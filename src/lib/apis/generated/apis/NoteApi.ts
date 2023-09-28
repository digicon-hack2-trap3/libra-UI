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


import * as runtime from '../runtime';
import type {
  Note,
  NoteDetail,
  PostNote,
} from '../models/index';
import {
    NoteFromJSON,
    NoteToJSON,
    NoteDetailFromJSON,
    NoteDetailToJSON,
    PostNoteFromJSON,
    PostNoteToJSON,
} from '../models/index';

export interface NoteAuthorIdGetRequest {
    id: number;
}

export interface NoteIdGetRequest {
    id: number;
}

export interface PostNoteRequest {
    postNote: PostNote;
}

/**
 * 
 */
export class NoteApi extends runtime.BaseAPI {

    /**
     * 同じ著者のノート一覧
     */
    async noteAuthorIdGetRaw(requestParameters: NoteAuthorIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Note>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling noteAuthorIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/note/author/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NoteFromJSON));
    }

    /**
     * 同じ著者のノート一覧
     */
    async noteAuthorIdGet(requestParameters: NoteAuthorIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Note>> {
        const response = await this.noteAuthorIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ノートの一覧
     */
    async noteGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Note>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/note`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NoteFromJSON));
    }

    /**
     * ノートの一覧
     */
    async noteGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Note>> {
        const response = await this.noteGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * ノートの内容
     */
    async noteIdGetRaw(requestParameters: NoteIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NoteDetail>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling noteIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/note/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteDetailFromJSON(jsonValue));
    }

    /**
     * ノートの内容
     */
    async noteIdGet(requestParameters: NoteIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NoteDetail> {
        const response = await this.noteIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ノートを投稿
     */
    async postNoteRaw(requestParameters: PostNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.postNote === null || requestParameters.postNote === undefined) {
            throw new runtime.RequiredError('postNote','Required parameter requestParameters.postNote was null or undefined when calling postNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/note`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostNoteToJSON(requestParameters.postNote),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ノートを投稿
     */
    async postNote(requestParameters: PostNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postNoteRaw(requestParameters, initOverrides);
    }

}
