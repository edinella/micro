// package: micro.product.v1
// file: micro/product/v1/product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetProductListRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetProductListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductListRequest): GetProductListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductListRequest;
    static deserializeBinaryFromReader(message: GetProductListRequest, reader: jspb.BinaryReader): GetProductListRequest;
}

export namespace GetProductListRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetProductRequest extends jspb.Message { 
    getProductId(): string;
    setProductId(value: string): GetProductRequest;

    getUserId(): string;
    setUserId(value: string): GetProductRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductRequest;
    static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
    export type AsObject = {
        productId: string,
        userId: string,
    }
}

export class GetProductResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetProductResponse;

    getTitle(): string;
    setTitle(value: string): GetProductResponse;

    getDescription(): string;
    setDescription(value: string): GetProductResponse;

    getPriceInCents(): number;
    setPriceInCents(value: number): GetProductResponse;


    hasDiscount(): boolean;
    clearDiscount(): void;
    getDiscount(): GetProductResponse.Discount | undefined;
    setDiscount(value?: GetProductResponse.Discount): GetProductResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductResponse): GetProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductResponse;
    static deserializeBinaryFromReader(message: GetProductResponse, reader: jspb.BinaryReader): GetProductResponse;
}

export namespace GetProductResponse {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        priceInCents: number,
        discount?: GetProductResponse.Discount.AsObject,
    }


    export class Discount extends jspb.Message { 
        getPercentage(): number;
        setPercentage(value: number): Discount;

        getValueInCents(): number;
        setValueInCents(value: number): Discount;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Discount.AsObject;
        static toObject(includeInstance: boolean, msg: Discount): Discount.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Discount, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Discount;
        static deserializeBinaryFromReader(message: Discount, reader: jspb.BinaryReader): Discount;
    }

    export namespace Discount {
        export type AsObject = {
            percentage: number,
            valueInCents: number,
        }
    }

}

export class GetProductListResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetProductListResponse;

    getTitle(): string;
    setTitle(value: string): GetProductListResponse;

    getDescription(): string;
    setDescription(value: string): GetProductListResponse;

    getPriceInCents(): number;
    setPriceInCents(value: number): GetProductListResponse;


    hasDiscount(): boolean;
    clearDiscount(): void;
    getDiscount(): GetProductListResponse.Discount | undefined;
    setDiscount(value?: GetProductListResponse.Discount): GetProductListResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductListResponse): GetProductListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductListResponse;
    static deserializeBinaryFromReader(message: GetProductListResponse, reader: jspb.BinaryReader): GetProductListResponse;
}

export namespace GetProductListResponse {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        priceInCents: number,
        discount?: GetProductListResponse.Discount.AsObject,
    }


    export class Discount extends jspb.Message { 
        getPercentage(): number;
        setPercentage(value: number): Discount;

        getValueInCents(): number;
        setValueInCents(value: number): Discount;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Discount.AsObject;
        static toObject(includeInstance: boolean, msg: Discount): Discount.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Discount, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Discount;
        static deserializeBinaryFromReader(message: Discount, reader: jspb.BinaryReader): Discount;
    }

    export namespace Discount {
        export type AsObject = {
            percentage: number,
            valueInCents: number,
        }
    }

}
