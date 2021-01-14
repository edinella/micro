// package: micro.user.v1
// file: micro/user/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as micro_user_v1_user_pb from "../../../micro/user/v1/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<micro_user_v1_user_pb.GetUserRequest, micro_user_v1_user_pb.GetUserResponse> {
    path: "/micro.user.v1.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<micro_user_v1_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<micro_user_v1_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<micro_user_v1_user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<micro_user_v1_user_pb.GetUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<micro_user_v1_user_pb.GetUserRequest, micro_user_v1_user_pb.GetUserResponse>;
}

export interface IUserServiceClient {
    getUser(request: micro_user_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: micro_user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: micro_user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: micro_user_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: micro_user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: micro_user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: micro_user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}
