// GENERATED CODE -- DO NOT EDIT!

// package: micro
// file: definitions.proto

import * as definitions_pb from "./definitions_pb";
import * as grpc from "grpc";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: grpc.MethodDefinition<definitions_pb.UserRequest, definitions_pb.User>;
}

export const UserServiceService: IUserServiceService;

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUser(argument: definitions_pb.UserRequest, callback: grpc.requestCallback<definitions_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: definitions_pb.UserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: definitions_pb.UserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.User>): grpc.ClientUnaryCall;
}

interface IDiscountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getDiscount: grpc.MethodDefinition<definitions_pb.DiscountRequest, definitions_pb.Discount>;
}

export const DiscountServiceService: IDiscountServiceService;

export class DiscountServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getDiscount(argument: definitions_pb.DiscountRequest, callback: grpc.requestCallback<definitions_pb.Discount>): grpc.ClientUnaryCall;
  getDiscount(argument: definitions_pb.DiscountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.Discount>): grpc.ClientUnaryCall;
  getDiscount(argument: definitions_pb.DiscountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.Discount>): grpc.ClientUnaryCall;
}

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProduct: grpc.MethodDefinition<definitions_pb.ProductRequest, definitions_pb.Product>;
  getProductList: grpc.MethodDefinition<definitions_pb.ProductListRequest, definitions_pb.Product>;
}

export const ProductServiceService: IProductServiceService;

export class ProductServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProduct(argument: definitions_pb.ProductRequest, callback: grpc.requestCallback<definitions_pb.Product>): grpc.ClientUnaryCall;
  getProduct(argument: definitions_pb.ProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.Product>): grpc.ClientUnaryCall;
  getProduct(argument: definitions_pb.ProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<definitions_pb.Product>): grpc.ClientUnaryCall;
  getProductList(argument: definitions_pb.ProductListRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<definitions_pb.Product>;
  getProductList(argument: definitions_pb.ProductListRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<definitions_pb.Product>;
}
