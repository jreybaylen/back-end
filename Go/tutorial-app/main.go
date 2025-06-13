package main

import (
	"fmt"
	"log"
	"net/http"
	"tutorial-app/fundamentals"
	gogitbook "tutorial-app/go-git-book"
	"tutorial-app/payment"
)

func apiTraining() {
	http.HandleFunc("/create-payment-intent", payment.CreatePayment)

	log.Println("Server is running on port localhost:4242...")
	if error := http.ListenAndServe(":4242", nil); error != nil {
		log.Fatal(error)
	}
}

func main() {
	fmt.Println(gogitbook.Greetings())
	fundamentals.DataTypes()
	fundamentals.Method()
	fundamentals.ArrayMethod()
	fundamentals.MapWithLoopMethod()
	fundamentals.ArrayPerformance()
	fundamentals.RuneMethod()

	apiTraining()
}
