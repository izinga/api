/**
 * RobusTest Api
 * RobusTest Apis
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeviceStatus', 'model/JiraConfig', 'model/JiraConfigPayload', 'model/JiraIssuePayload', 'model/JiraIssueResponse', 'model/JiraProject', 'model/Project', 'model/ProjectUpdatePayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceStatus'), require('../model/JiraConfig'), require('../model/JiraConfigPayload'), require('../model/JiraIssuePayload'), require('../model/JiraIssueResponse'), require('../model/JiraProject'), require('../model/Project'), require('../model/ProjectUpdatePayload'));
  } else {
    // Browser globals (root is window)
    if (!root.RobusTestApi) {
      root.RobusTestApi = {};
    }
    root.RobusTestApi.DefaultApi = factory(root.RobusTestApi.ApiClient, root.RobusTestApi.DeviceStatus, root.RobusTestApi.JiraConfig, root.RobusTestApi.JiraConfigPayload, root.RobusTestApi.JiraIssuePayload, root.RobusTestApi.JiraIssueResponse, root.RobusTestApi.JiraProject, root.RobusTestApi.Project, root.RobusTestApi.ProjectUpdatePayload);
  }
}(this, function(ApiClient, DeviceStatus, JiraConfig, JiraConfigPayload, JiraIssuePayload, JiraIssueResponse, JiraProject, Project, ProjectUpdatePayload) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the bug operation.
     * @callback module:api/DefaultApi~bugCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get list for all supported bug trakers
     * get list for all supported bug trakers
     * @param {module:api/DefaultApi~bugCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.bug = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/admin/v3/bug/trackerlist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jira operation.
     * @callback module:api/DefaultApi~jiraCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JiraConfig>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all jira config
     * get all jira config
     * @param {module:api/DefaultApi~jiraCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JiraConfig>}
     */
    this.jira = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [JiraConfig];

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jiraConfig operation.
     * @callback module:api/DefaultApi~jiraConfigCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a jira config
     * create a jira config
     * @param {module:model/JiraConfigPayload} body 
     * @param {module:api/DefaultApi~jiraConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.jiraConfig = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jiraConfig");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jiraConfig_0 operation.
     * @callback module:api/DefaultApi~jiraConfig_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/JiraConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update a jira config
     * update a jira config
     * @param {module:model/JiraConfigPayload} payload 
     * @param {module:api/DefaultApi~jiraConfig_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JiraConfig}
     */
    this.jiraConfig_0 = function(payload, callback) {
      var postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling jiraConfig_0");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JiraConfig;

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/{jira_config_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jiraConfig_1 operation.
     * @callback module:api/DefaultApi~jiraConfig_1Callback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete jira config and all associated jira project
     * update all projects for a jira config
     * @param {module:api/DefaultApi~jiraConfig_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.jiraConfig_1 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/{jira_config_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jiraConfig_2 operation.
     * @callback module:api/DefaultApi~jiraConfig_2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update all projects for a jira config
     * update all projects for a jira config
     * @param {module:api/DefaultApi~jiraConfig_2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.jiraConfig_2 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/{jira_config_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jiraIssue operation.
     * @callback module:api/DefaultApi~jiraIssueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JiraIssueResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a jira issue
     * create a jira issue
     * @param {module:model/JiraIssuePayload} body 
     * @param {module:api/DefaultApi~jiraIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JiraIssueResponse}
     */
    this.jiraIssue = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jiraIssue");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JiraIssueResponse;

      return this.apiClient.callApi(
        '/v3/bug/jira/{jira_project_id}/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jira_0 operation.
     * @callback module:api/DefaultApi~jira_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JiraProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all jira project
     * get all jira project
     * @param {module:api/DefaultApi~jira_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JiraProject>}
     */
    this.jira_0 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [JiraProject];

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/projects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jira_1 operation.
     * @callback module:api/DefaultApi~jira_1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/JiraProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all jira project for given config
     * get all jira project for given config
     * @param {module:api/DefaultApi~jira_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/JiraProject>}
     */
    this.jira_1 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [JiraProject];

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/config/{congfig_id}/projects', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jira_2 operation.
     * @callback module:api/DefaultApi~jira_2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/JiraProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a jira project  details
     * get a jira project details
     * @param {module:api/DefaultApi~jira_2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JiraProject}
     */
    this.jira_2 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JiraProject;

      return this.apiClient.callApi(
        '/admin/v3/bug/config/jira/projects/{jira_project_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the neuron operation.
     * @callback module:api/DefaultApi~neuronCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get devices status, in progress, allready added
     * get devices status, in progress, allready added
     * @param {module:api/DefaultApi~neuronCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceStatus}
     */
    this.neuron = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeviceStatus;

      return this.apiClient.callApi(
        '/node_ip:8080/v2/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the project operation.
     * @callback module:api/DefaultApi~projectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Project
     * Update Project from user interface
     * @param {module:model/ProjectUpdatePayload} body 
     * @param {module:api/DefaultApi~projectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    this.project = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling project");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Project;

      return this.apiClient.callApi(
        '/v3/project/{project_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
