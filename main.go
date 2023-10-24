package main

import (
	"github.com/dsxg666/dapp/internal/routers"
	"github.com/gin-gonic/gin"
)

func main() {
	// gin.SetMode("release")
	r := gin.Default()
	r.Static("/static", "./static")
	r.LoadHTMLGlob("templates/**/*")
	routers.RouterInit(r)
	r.Run(":4321")
}
