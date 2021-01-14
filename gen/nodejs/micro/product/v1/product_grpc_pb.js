// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var micro_product_v1_product_pb = require('../../../micro/product/v1/product_pb.js');

function serialize_micro_product_v1_GetProductListRequest(arg) {
  if (!(arg instanceof micro_product_v1_product_pb.GetProductListRequest)) {
    throw new Error('Expected argument of type micro.product.v1.GetProductListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_product_v1_GetProductListRequest(buffer_arg) {
  return micro_product_v1_product_pb.GetProductListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_product_v1_GetProductListResponse(arg) {
  if (!(arg instanceof micro_product_v1_product_pb.GetProductListResponse)) {
    throw new Error('Expected argument of type micro.product.v1.GetProductListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_product_v1_GetProductListResponse(buffer_arg) {
  return micro_product_v1_product_pb.GetProductListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_product_v1_GetProductRequest(arg) {
  if (!(arg instanceof micro_product_v1_product_pb.GetProductRequest)) {
    throw new Error('Expected argument of type micro.product.v1.GetProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_product_v1_GetProductRequest(buffer_arg) {
  return micro_product_v1_product_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_product_v1_GetProductResponse(arg) {
  if (!(arg instanceof micro_product_v1_product_pb.GetProductResponse)) {
    throw new Error('Expected argument of type micro.product.v1.GetProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_micro_product_v1_GetProductResponse(buffer_arg) {
  return micro_product_v1_product_pb.GetProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/micro.product.v1.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: micro_product_v1_product_pb.GetProductRequest,
    responseType: micro_product_v1_product_pb.GetProductResponse,
    requestSerialize: serialize_micro_product_v1_GetProductRequest,
    requestDeserialize: deserialize_micro_product_v1_GetProductRequest,
    responseSerialize: serialize_micro_product_v1_GetProductResponse,
    responseDeserialize: deserialize_micro_product_v1_GetProductResponse,
  },
  getProductList: {
    path: '/micro.product.v1.ProductService/GetProductList',
    requestStream: false,
    responseStream: true,
    requestType: micro_product_v1_product_pb.GetProductListRequest,
    responseType: micro_product_v1_product_pb.GetProductListResponse,
    requestSerialize: serialize_micro_product_v1_GetProductListRequest,
    requestDeserialize: deserialize_micro_product_v1_GetProductListRequest,
    responseSerialize: serialize_micro_product_v1_GetProductListResponse,
    responseDeserialize: deserialize_micro_product_v1_GetProductListResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
