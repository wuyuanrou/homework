package main

import (
	"bytes"
	"fmt"
	"io"
	"os"
)

type writer interface {
	Write(p []byte)(n int,err error)
}

type Reader interface {
	Read(a []byte)(n int, err error)
}

func main(){
	fp,err:=os.Create("./plan.txt")

	if err!=nil{
		fmt.Println("文件创建失败")
		return
	}
    defer fp.Close()                     //文件创建完毕

	proverb:=[]string{
		"I’m not afraid of difficulties and insist on learning programming",
	}
	var writer bytes.Buffer
	for _, p:=range proverb{
		n,err:=writer.Write([]byte(p))
		if err!= nil{
			fmt.Println(err)
			os.Exit(1)
		}
		if n != len(p){
			fmt.Println("Fail to read data")
			os.Exit(1)
		}
	}

	reader := bytes.NewReader([]byte("I’m not afraid of difficulties and insist on learning programming"))
	ReadStr(reader)
}
func ReadStr(reader io.Reader){
	b:=len("I’m not afraid of difficulties and insist on learning programming")
	a:=make([]byte,b)
	for{
		n,err:=reader.Read(a)
		if err != nil{
			if err==io.EOF{
				break
			}
			fmt.Println(err)
			os.Exit(1)
		}
		fmt.Println(string(a[:n]))
	}
}

