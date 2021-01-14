// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var micro_discount_v1_discount_pb = require('../../../micro/discount/v1/discount_pb.js');

function serialize_micro_discount_v1_GetDiscountRequest(arg) {
  if (!(arg instanceof micro_discount_v1_discount_pb.GetDiscountRequest)) {
    throw new Error('Expected argument of type micro.discount.v1.GetDiscountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_discount_v1_GetDiscountRequest(buffer_arg) {
  return micro_discount_v1_discount_pb.GetDiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_discount_v1_GetDiscountResponse(arg) {
  if (!(arg instanceof micro_discount_v1_discount_pb.GetDiscountResponse)) {
    throw new Error('Expected argument of type micro.discount.v1.GetDiscountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_discount_v1_GetDiscountResponse(buffer_arg) {
  return micro_discount_v1_discount_pb.GetDiscountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscountServiceService = exports.DiscountServiceService = {
  getDiscount: {
    path: '/micro.discount.v1.DiscountService/GetDiscount',
    requestStream: false,
    responseStream: false,
    requestType: micro_discount_v1_discount_pb.GetDiscountRequest,
    responseType: micro_discount_v1_discount_pb.GetDiscountResponse,
    requestSerialize: serialize_micro_discount_v1_GetDiscountRequest,
    requestDeserialize: deserialize_micro_discount_v1_GetDiscountRequest,
    responseSerialize: serialize_micro_discount_v1_GetDiscountResponse,
    responseDeserialize: deserialize_micro_discount_v1_GetDiscountResponse,
  },
};

exports.DiscountServiceClient = grpc.makeGenericClientConstructor(DiscountServiceService);
