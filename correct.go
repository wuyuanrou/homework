package main

import "fmt"

func main() {
	over := make(chan bool)
		go func() {
			for i := 0; i < 10; i++ { //作为函数执行的语句应该在函数体内
				fmt.Println(i)
			    if i == 9 {
				over <- true
			    }
			}
		}()
	<-over
	fmt.Println("over!!!")
}
