package routers

import (
	"github.com/dsxg666/dapp/internal/controllers"
	"github.com/gin-gonic/gin"
)

func RouterInit(r *gin.Engine) {
	router := r.Group("/")
	{
		// GET
		router.GET("/", controllers.Controller{}.Index)

		// POST
	}
}
