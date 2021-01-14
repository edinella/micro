// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var micro_user_v1_user_pb = require('../../../micro/user/v1/user_pb.js');

function serialize_micro_user_v1_GetUserRequest(arg) {
  if (!(arg instanceof micro_user_v1_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type micro.user.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_user_v1_GetUserRequest(buffer_arg) {
  return micro_user_v1_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_user_v1_GetUserResponse(arg) {
  if (!(arg instanceof micro_user_v1_user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type micro.user.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_user_v1_GetUserResponse(buffer_arg) {
  return micro_user_v1_user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/micro.user.v1.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: micro_user_v1_user_pb.GetUserRequest,
    responseType: micro_user_v1_user_pb.GetUserResponse,
    requestSerialize: serialize_micro_user_v1_GetUserRequest,
    requestDeserialize: deserialize_micro_user_v1_GetUserRequest,
    responseSerialize: serialize_micro_user_v1_GetUserResponse,
    responseDeserialize: deserialize_micro_user_v1_GetUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
