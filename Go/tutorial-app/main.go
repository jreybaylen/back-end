package main

import (
	"log"
	"net/http"
)

func createPaymentIntent(w http.ResponseWriter, req *http.Request) {
	if req.Method != "POST" {
		http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
		return
	}
}

func main() {
	http.HandleFunc("/create-payment-intent", createPaymentIntent)

	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("Hello, World!"))
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("Service is up!"))
	})

	log.Println("Server is running on port 4242")
	if error := http.ListenAndServe(":4242", nil); error != nil {
		log.Fatal(error)
	}
}
