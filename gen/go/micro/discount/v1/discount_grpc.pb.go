// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package discount

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// DiscountServiceClient is the client API for DiscountService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DiscountServiceClient interface {
	GetDiscount(ctx context.Context, in *GetDiscountRequest, opts ...grpc.CallOption) (*GetDiscountResponse, error)
}

type discountServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDiscountServiceClient(cc grpc.ClientConnInterface) DiscountServiceClient {
	return &discountServiceClient{cc}
}

func (c *discountServiceClient) GetDiscount(ctx context.Context, in *GetDiscountRequest, opts ...grpc.CallOption) (*GetDiscountResponse, error) {
	out := new(GetDiscountResponse)
	err := c.cc.Invoke(ctx, "/micro.discount.v1.DiscountService/GetDiscount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DiscountServiceServer is the server API for DiscountService service.
// All implementations should embed UnimplementedDiscountServiceServer
// for forward compatibility
type DiscountServiceServer interface {
	GetDiscount(context.Context, *GetDiscountRequest) (*GetDiscountResponse, error)
}

// UnimplementedDiscountServiceServer should be embedded to have forward compatible implementations.
type UnimplementedDiscountServiceServer struct {
}

func (UnimplementedDiscountServiceServer) GetDiscount(context.Context, *GetDiscountRequest) (*GetDiscountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDiscount not implemented")
}

// UnsafeDiscountServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DiscountServiceServer will
// result in compilation errors.
type UnsafeDiscountServiceServer interface {
	mustEmbedUnimplementedDiscountServiceServer()
}

func RegisterDiscountServiceServer(s grpc.ServiceRegistrar, srv DiscountServiceServer) {
	s.RegisterService(&DiscountService_ServiceDesc, srv)
}

func _DiscountService_GetDiscount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDiscountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiscountServiceServer).GetDiscount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/micro.discount.v1.DiscountService/GetDiscount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiscountServiceServer).GetDiscount(ctx, req.(*GetDiscountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DiscountService_ServiceDesc is the grpc.ServiceDesc for DiscountService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DiscountService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "micro.discount.v1.DiscountService",
	HandlerType: (*DiscountServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDiscount",
			Handler:    _DiscountService_GetDiscount_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "micro/discount/v1/discount.proto",
}
