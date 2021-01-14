// package: micro.discount.v1
// file: micro/discount/v1/discount.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetDiscountRequest extends jspb.Message { 
    getProductId(): string;
    setProductId(value: string): GetDiscountRequest;

    getUserId(): string;
    setUserId(value: string): GetDiscountRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDiscountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDiscountRequest): GetDiscountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDiscountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDiscountRequest;
    static deserializeBinaryFromReader(message: GetDiscountRequest, reader: jspb.BinaryReader): GetDiscountRequest;
}

export namespace GetDiscountRequest {
    export type AsObject = {
        productId: string,
        userId: string,
    }
}

export class GetDiscountResponse extends jspb.Message { 
    getPercentage(): number;
    setPercentage(value: number): GetDiscountResponse;

    getValueInCents(): number;
    setValueInCents(value: number): GetDiscountResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDiscountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDiscountResponse): GetDiscountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDiscountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDiscountResponse;
    static deserializeBinaryFromReader(message: GetDiscountResponse, reader: jspb.BinaryReader): GetDiscountResponse;
}

export namespace GetDiscountResponse {
    export type AsObject = {
        percentage: number,
        valueInCents: number,
    }
}
