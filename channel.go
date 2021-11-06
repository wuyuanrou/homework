package main

import "fmt"

func a(send int, channel chan int){
	for send<50000{
		send++
		channel<-send
	}
	close(channel)
}
func main() {
	var channel = make(chan int, 49999)
	go a(0,channel)
	for send:=range channel{
		fmt.Println(send)
	}
}