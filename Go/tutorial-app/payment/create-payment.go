package payment

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"net/http"
)

func CreatePayment(writer http.ResponseWriter, request *http.Request) {
	if request.Method != "POST" {
		http.Error(writer, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)

		return
	}

	log.Println("Creating payment intent...")

	var paymentIntent struct {
		ProductID string `json:"product_id"`
		FirstName string `json:"first_name"`
		LastName  string `json:"last_name"`
		Email     string `json:"email"`
		Address   string `json:"address"`
		City      string `json:"city"`
		State     string `json:"state"`
		Zip       string `json:"zip"`
	}

	if err := json.NewDecoder(request.Body).Decode(&paymentIntent); err != nil {
		log.Println("Error decoding payment intent:", err)
		http.Error(writer, err.Error(), http.StatusBadRequest)

		return
	}

	formatPaymentIntent, err := json.MarshalIndent(paymentIntent, "", "  ")

	if err != nil {
		log.Println("Error marshalling payment intent:", err)
		http.Error(writer, err.Error(), http.StatusInternalServerError)

		return
	}

	log.Printf("Payment intent: %+v", string(formatPaymentIntent))

	var buffer bytes.Buffer

	if err := json.NewEncoder(&buffer).Encode(paymentIntent); err != nil {
		log.Println("Error encoding payment intent:", err)
		http.Error(writer, err.Error(), http.StatusInternalServerError)

		return
	}

	writer.Header().Set("Content-Type", "application/json")

	_, err = io.Copy(writer, &buffer)

	if err != nil {
		log.Println("Error io copy:", err)
		http.Error(writer, err.Error(), http.StatusInternalServerError)

		return
	}
}
