/*
 * RobusTest Api
 *
 * RobusTest Apis
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

type ProjectUpdatePayload struct {

	Active bool `json:"active"`

	BugProject string `json:"bugProject"`

	Users []string `json:"users"`

	Admin []string `json:"admin"`
}