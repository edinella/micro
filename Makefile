all: install gen-all

gen-all: gen-user gen-discount gen-product

gen-user:
	docker run -v `pwd`:/defs namely/protoc-all -f ./definitions.proto --lint -l node --with-typescript -o services/user/gen

gen-discount:
	docker run -v `pwd`:/defs namely/protoc-all -f ./definitions.proto --lint -l node -o services/discount/gen

gen-product:
	docker run -v `pwd`:/defs namely/protoc-all -f ./definitions.proto --lint -l go -o services/product/gen --go-source-relative

install: clean
	docker image inspect namely/protoc-all > /dev/null || docker pull namely/protoc-all

clean:
	rm -rf ./services/{user,discount,product}/gen
