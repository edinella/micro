// package: micro.product.v1
// file: micro/product/v1/product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as micro_product_v1_product_pb from "../../../micro/product/v1/product_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProduct: IProductServiceService_IGetProduct;
    getProductList: IProductServiceService_IGetProductList;
}

interface IProductServiceService_IGetProduct extends grpc.MethodDefinition<micro_product_v1_product_pb.GetProductRequest, micro_product_v1_product_pb.GetProductResponse> {
    path: "/micro.product.v1.ProductService/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<micro_product_v1_product_pb.GetProductRequest>;
    requestDeserialize: grpc.deserialize<micro_product_v1_product_pb.GetProductRequest>;
    responseSerialize: grpc.serialize<micro_product_v1_product_pb.GetProductResponse>;
    responseDeserialize: grpc.deserialize<micro_product_v1_product_pb.GetProductResponse>;
}
interface IProductServiceService_IGetProductList extends grpc.MethodDefinition<micro_product_v1_product_pb.GetProductListRequest, micro_product_v1_product_pb.GetProductListResponse> {
    path: "/micro.product.v1.ProductService/GetProductList";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<micro_product_v1_product_pb.GetProductListRequest>;
    requestDeserialize: grpc.deserialize<micro_product_v1_product_pb.GetProductListRequest>;
    responseSerialize: grpc.serialize<micro_product_v1_product_pb.GetProductListResponse>;
    responseDeserialize: grpc.deserialize<micro_product_v1_product_pb.GetProductListResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    getProduct: grpc.handleUnaryCall<micro_product_v1_product_pb.GetProductRequest, micro_product_v1_product_pb.GetProductResponse>;
    getProductList: grpc.handleServerStreamingCall<micro_product_v1_product_pb.GetProductListRequest, micro_product_v1_product_pb.GetProductListResponse>;
}

export interface IProductServiceClient {
    getProduct(request: micro_product_v1_product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: micro_product_v1_product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: micro_product_v1_product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProductList(request: micro_product_v1_product_pb.GetProductListRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<micro_product_v1_product_pb.GetProductListResponse>;
    getProductList(request: micro_product_v1_product_pb.GetProductListRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<micro_product_v1_product_pb.GetProductListResponse>;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getProduct(request: micro_product_v1_product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: micro_product_v1_product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: micro_product_v1_product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_product_v1_product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProductList(request: micro_product_v1_product_pb.GetProductListRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<micro_product_v1_product_pb.GetProductListResponse>;
    public getProductList(request: micro_product_v1_product_pb.GetProductListRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<micro_product_v1_product_pb.GetProductListResponse>;
}
