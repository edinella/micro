// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var definitions_pb = require('./definitions_pb.js');

function serialize_micro_Discount(arg) {
  if (!(arg instanceof definitions_pb.Discount)) {
    throw new Error('Expected argument of type micro.Discount');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_Discount(buffer_arg) {
  return definitions_pb.Discount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_DiscountRequest(arg) {
  if (!(arg instanceof definitions_pb.DiscountRequest)) {
    throw new Error('Expected argument of type micro.DiscountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_DiscountRequest(buffer_arg) {
  return definitions_pb.DiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_Product(arg) {
  if (!(arg instanceof definitions_pb.Product)) {
    throw new Error('Expected argument of type micro.Product');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_Product(buffer_arg) {
  return definitions_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_ProductListRequest(arg) {
  if (!(arg instanceof definitions_pb.ProductListRequest)) {
    throw new Error('Expected argument of type micro.ProductListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_ProductListRequest(buffer_arg) {
  return definitions_pb.ProductListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_ProductRequest(arg) {
  if (!(arg instanceof definitions_pb.ProductRequest)) {
    throw new Error('Expected argument of type micro.ProductRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_ProductRequest(buffer_arg) {
  return definitions_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_User(arg) {
  if (!(arg instanceof definitions_pb.User)) {
    throw new Error('Expected argument of type micro.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_User(buffer_arg) {
  return definitions_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_micro_UserRequest(arg) {
  if (!(arg instanceof definitions_pb.UserRequest)) {
    throw new Error('Expected argument of type micro.UserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_micro_UserRequest(buffer_arg) {
  return definitions_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/micro.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: definitions_pb.UserRequest,
    responseType: definitions_pb.User,
    requestSerialize: serialize_micro_UserRequest,
    requestDeserialize: deserialize_micro_UserRequest,
    responseSerialize: serialize_micro_User,
    responseDeserialize: deserialize_micro_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
var DiscountServiceService = exports.DiscountServiceService = {
  getDiscount: {
    path: '/micro.DiscountService/GetDiscount',
    requestStream: false,
    responseStream: false,
    requestType: definitions_pb.DiscountRequest,
    responseType: definitions_pb.Discount,
    requestSerialize: serialize_micro_DiscountRequest,
    requestDeserialize: deserialize_micro_DiscountRequest,
    responseSerialize: serialize_micro_Discount,
    responseDeserialize: deserialize_micro_Discount,
  },
};

exports.DiscountServiceClient = grpc.makeGenericClientConstructor(DiscountServiceService);
var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/micro.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: definitions_pb.ProductRequest,
    responseType: definitions_pb.Product,
    requestSerialize: serialize_micro_ProductRequest,
    requestDeserialize: deserialize_micro_ProductRequest,
    responseSerialize: serialize_micro_Product,
    responseDeserialize: deserialize_micro_Product,
  },
  getProductList: {
    path: '/micro.ProductService/GetProductList',
    requestStream: false,
    responseStream: true,
    requestType: definitions_pb.ProductListRequest,
    responseType: definitions_pb.Product,
    requestSerialize: serialize_micro_ProductListRequest,
    requestDeserialize: deserialize_micro_ProductListRequest,
    responseSerialize: serialize_micro_Product,
    responseDeserialize: deserialize_micro_Product,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
