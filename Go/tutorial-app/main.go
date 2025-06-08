package main

import (
	"log"
	"net/http"
	"tutorial-app/fundamentals"
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
	fundamentals.DataTypes()
	fundamentals.Method()
	fundamentals.ArrayMethod()
	fundamentals.MapWithLoopMethod()
	fundamentals.ArrayPerformance()
	fundamentals.RuneMethod()

	apiTraining()
}
