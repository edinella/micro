// package: micro
// file: definitions.proto

import * as jspb from "google-protobuf";

export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getDay(): number;
  setDay(value: number): void;

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

export class UserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasDateOfBirth(): boolean;
  clearDateOfBirth(): void;
  getDateOfBirth(): Date | undefined;
  setDateOfBirth(value?: Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth?: Date.AsObject,
  }
}

export class DiscountRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscountRequest): DiscountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscountRequest;
  static deserializeBinaryFromReader(message: DiscountRequest, reader: jspb.BinaryReader): DiscountRequest;
}

export namespace DiscountRequest {
  export type AsObject = {
    productId: string,
    userId: string,
  }
}

export class Discount extends jspb.Message {
  getPercentage(): number;
  setPercentage(value: number): void;

  getValueInCents(): number;
  setValueInCents(value: number): void;

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

export class ProductListRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListRequest): ProductListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListRequest;
  static deserializeBinaryFromReader(message: ProductListRequest, reader: jspb.BinaryReader): ProductListRequest;
}

export namespace ProductListRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRequest;
  static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
  export type AsObject = {
    productId: string,
    userId: string,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPriceInCents(): number;
  setPriceInCents(value: number): void;

  hasDiscount(): boolean;
  clearDiscount(): void;
  getDiscount(): Discount | undefined;
  setDiscount(value?: Discount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    priceInCents: number,
    discount?: Discount.AsObject,
  }
}

