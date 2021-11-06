package main

import (
	"fmt"
	"sync"
)

var b int
var wg sync.WaitGroup
var mu sync.Mutex

func add(){
	for i:=0;i<50;i++ {
	   mu.Lock()
	   b = b + 1
	   fmt.Println(b)
	   mu.Unlock()
	}
	wg.Done()
}

func main(){
	wg.Add(2)
	go add()
	go add()
	wg.Wait()                 //等待当前子协程数为0
}

