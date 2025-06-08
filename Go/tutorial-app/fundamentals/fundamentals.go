package fundamentals

import (
	"errors"
	"fmt"
	"time"
)

func RuneMethod() {
	resume := []rune("résumé")

	fmt.Printf("Lenght of the string %v is %v\n", string(resume), len(resume))

	for i, v := range resume {
		fmt.Printf("Index: %v, Value: %v \n", i, v)
	}

	fmt.Println()
}

func timeLoop(slice []int, n int) time.Duration {
	var t = time.Now()

	for len(slice) < n {
		slice = append(slice, 1)
	}

	return time.Since(t)
}

func ArrayPerformance() {
	var n int = 1000000
	var sliceInt = []int{}
	var sliceIntMake = make([]int, 0, n)

	fmt.Println("Time duration is ", timeLoop(sliceInt, n))
	fmt.Println("Time duration is ", timeLoop(sliceIntMake, n))
	fmt.Println()
}

func MapWithLoopMethod() {
	users := map[string]uint8{"JohnDoe": 30, "FooBar": 32}

	fmt.Println()

	for name, age := range users {
		fmt.Printf("Name: %v, Age: %v\n", name, age)
	}

	fmt.Println()
}

func ArrayMethod() {
	var intArray []int = []int{1, 2, 3, 4}

	fmt.Println([...]int{3, 3, 3, 3})
	fmt.Println(intArray)
	fmt.Printf("Length of an array: %v\n", len(intArray))

	var arraySlice = append(intArray, 7)

	fmt.Printf("New slice: %v\n", arraySlice)
	fmt.Printf("Length of an array: %v\n", len(arraySlice))

	var intArray2 []int = []int{8, 9}
	var arraySlice2 = append(intArray, intArray2...)

	fmt.Printf("New slice: %v\n", arraySlice2)
	fmt.Printf("Length of an array: %v\n", len(arraySlice2))
}

func privateMethod(message string) (string, error) {
	if message != "" {
		return message, nil
	}

	return "", errors.New(message)
}

func Method() {
	message, _ := privateMethod("Hello World!")

	fmt.Println(message)

	_, err := privateMethod("")

	if err != nil {
		fmt.Printf("No message string provided: %v\n", err)
	}

	fmt.Println()
}

func DataTypes() {
	var intNum int = 1231231231231323132
	var int16Num int16 = 1231
	var int32Num int32 = 1231231231
	var int64Num int64 = 1231231231231323132
	var float32Num float32 = float32(132123.2222)
	var float64Num float64 = float64(132123.2222222222)
	var stringName = "John DOe"
	var result = intNum / int(int16Num)
	var remainder = intNum % int(int16Num)

	fmt.Println()
	fmt.Println(intNum)
	fmt.Println(int16Num)
	fmt.Println(int32Num)
	fmt.Println(int64Num)
	fmt.Println(float32Num)
	fmt.Println(float64Num)
	fmt.Println(stringName)
	fmt.Printf("%v / %v is equal to %v with remainder of %v\n", intNum, int16Num, result, remainder)
}
