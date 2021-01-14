// package: micro.discount.v1
// file: micro/discount/v1/discount.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as micro_discount_v1_discount_pb from "../../../micro/discount/v1/discount_pb";

interface IDiscountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDiscount: IDiscountServiceService_IGetDiscount;
}

interface IDiscountServiceService_IGetDiscount extends grpc.MethodDefinition<micro_discount_v1_discount_pb.GetDiscountRequest, micro_discount_v1_discount_pb.GetDiscountResponse> {
    path: "/micro.discount.v1.DiscountService/GetDiscount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<micro_discount_v1_discount_pb.GetDiscountRequest>;
    requestDeserialize: grpc.deserialize<micro_discount_v1_discount_pb.GetDiscountRequest>;
    responseSerialize: grpc.serialize<micro_discount_v1_discount_pb.GetDiscountResponse>;
    responseDeserialize: grpc.deserialize<micro_discount_v1_discount_pb.GetDiscountResponse>;
}

export const DiscountServiceService: IDiscountServiceService;

export interface IDiscountServiceServer extends grpc.UntypedServiceImplementation {
    getDiscount: grpc.handleUnaryCall<micro_discount_v1_discount_pb.GetDiscountRequest, micro_discount_v1_discount_pb.GetDiscountResponse>;
}

export interface IDiscountServiceClient {
    getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
    getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
    getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
}

export class DiscountServiceClient extends grpc.Client implements IDiscountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
    public getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
    public getDiscount(request: micro_discount_v1_discount_pb.GetDiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_discount_v1_discount_pb.GetDiscountResponse) => void): grpc.ClientUnaryCall;
}
