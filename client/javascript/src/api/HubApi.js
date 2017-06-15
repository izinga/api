/**
 * RobusTest Hub
 * RobusTest Hub Api [http://enterprice.robustest.com:8085 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Device', 'model/Device1', 'model/Device2', 'model/Device3', 'model/Device4', 'model/Device5', 'model/Error', 'model/HubDevices', 'model/InlineResponse200', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Device'), require('../model/Device1'), require('../model/Device2'), require('../model/Device3'), require('../model/Device4'), require('../model/Device5'), require('../model/Error'), require('../model/HubDevices'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.RobusTestHub) {
      root.RobusTestHub = {};
    }
    root.RobusTestHub.HubApi = factory(root.RobusTestHub.ApiClient, root.RobusTestHub.Device, root.RobusTestHub.Device1, root.RobusTestHub.Device2, root.RobusTestHub.Device3, root.RobusTestHub.Device4, root.RobusTestHub.Device5, root.RobusTestHub.Error, root.RobusTestHub.HubDevices, root.RobusTestHub.InlineResponse200, root.RobusTestHub.InlineResponse2001);
  }
}(this, function(ApiClient, Device, Device1, Device2, Device3, Device4, Device5, Error, HubDevices, InlineResponse200, InlineResponse2001) {
  'use strict';

  /**
   * Hub service.
   * @module api/HubApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HubApi. 
   * @alias module:api/HubApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the adbCommand operation.
     * @callback module:api/HubApi~adbCommandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * run adb  command
     * @param {Object} opts Optional parameters
     * @param {module:model/Device5} opts.device 
     * @param {module:api/HubApi~adbCommandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.adbCommand = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/device/command', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceShell operation.
     * @callback module:api/HubApi~deviceShellCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * run adb shell command
     * @param {Object} opts Optional parameters
     * @param {module:model/Device4} opts.device 
     * @param {module:api/HubApi~deviceShellCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.deviceShell = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/device/shell', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesList operation.
     * @callback module:api/HubApi~devicesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HubDevices} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list all attached devices to RobusTest
     * @param {module:api/HubApi~devicesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HubDevices}
     */
    this.devicesList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HubDevices;

      return this.apiClient.callApi(
        '/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the freeDevice operation.
     * @callback module:api/HubApi~freeDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * free device
     * @param {Object} opts Optional parameters
     * @param {module:model/Device1} opts.device 
     * @param {module:api/HubApi~freeDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.freeDevice = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Device;

      return this.apiClient.callApi(
        '/device', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFreeDevice operation.
     * @callback module:api/HubApi~getFreeDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get free device based on given parameters
     * @param {Object} opts Optional parameters
     * @param {module:model/Device} opts.device 
     * @param {module:api/HubApi~getFreeDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.getFreeDevice = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Device;

      return this.apiClient.callApi(
        '/device', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScreenshot operation.
     * @callback module:api/HubApi~getScreenshotCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get screenshot from device
     * @param {Object} opts Optional parameters
     * @param {module:model/Device2} opts.device 
     * @param {module:api/HubApi~getScreenshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.getScreenshot = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;

      return this.apiClient.callApi(
        '/device/screenshot', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unreserveDevice operation.
     * @callback module:api/HubApi~unreserveDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Device} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * unrevrse the device
     * @param {Object} opts Optional parameters
     * @param {module:model/Device3} opts.device 
     * @param {module:api/HubApi~unreserveDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Device}
     */
    this.unreserveDevice = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['device'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Device;

      return this.apiClient.callApi(
        '/device/screenshot', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
