/* 
 * RobusTest Hub
 *
 * RobusTest Hub Api [http://mobile.robustest.com:8085 
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type ModelError struct {

	Code int32 `json:"code,omitempty"`

	Msg string `json:"msg,omitempty"`

	Fields string `json:"fields,omitempty"`
}
