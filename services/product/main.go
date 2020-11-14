package main

import (
	"fmt"
	"time"
)

func main() {
	count := 0
	c := time.Tick(5 * time.Second)
	for range c {
		count++
		fmt.Printf("Hello World %d\n", count)
	}
}
