package main

import (
	"log"
	"net/http"
	"tutorial-app/payment"
)

func main() {
	http.HandleFunc("/create-payment-intent", payment.CreatePayment)

	log.Println("Server is running on port localhost:4242...")
	if error := http.ListenAndServe(":4242", nil); error != nil {
		log.Fatal(error)
	}
}
