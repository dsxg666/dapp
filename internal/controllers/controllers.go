package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Controller struct{}

func (t Controller) Index(c *gin.Context) {

	c.HTML(http.StatusOK, "main/index.html", nil)
}
