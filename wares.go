package main

import (
	"log"
	"net/http"
	"time"
)

func LoggingHandler(next http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		t1 := time.Now()
		next.ServeHTTP(w, r)
		t2 := time.Now()
		log.Printf("[%s] %q %v\n", r.Method, r.URL.String(), t2.Sub(t1))
	}

	return http.HandlerFunc(fn)
}



type Assets struct {
	Js  string `json:"bundle.js"`
	Css string `json:"style.css"`
}
