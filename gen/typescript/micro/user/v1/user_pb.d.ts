// package: micro.user.v1
// file: micro/user/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetUserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetUserResponse;

    getFirstName(): string;
    setFirstName(value: string): GetUserResponse;

    getLastName(): string;
    setLastName(value: string): GetUserResponse;


    hasDateOfBirth(): boolean;
    clearDateOfBirth(): void;
    getDateOfBirth(): GetUserResponse.Date | undefined;
    setDateOfBirth(value?: GetUserResponse.Date): GetUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        id: string,
        firstName: string,
        lastName: string,
        dateOfBirth?: GetUserResponse.Date.AsObject,
    }


    export class Date extends jspb.Message { 
        getYear(): number;
        setYear(value: number): Date;

        getMonth(): number;
        setMonth(value: number): Date;

        getDay(): number;
        setDay(value: number): Date;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Date.AsObject;
        static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Date;
        static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
    }

    export namespace Date {
        export type AsObject = {
            year: number,
            month: number,
            day: number,
        }
    }

}
