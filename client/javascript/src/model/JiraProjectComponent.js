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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RobusTestApi) {
      root.RobusTestApi = {};
    }
    root.RobusTestApi.JiraProjectComponent = factory(root.RobusTestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JiraProjectComponent model module.
   * @module model/JiraProjectComponent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JiraProjectComponent</code>.
   * @alias module:model/JiraProjectComponent
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>JiraProjectComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JiraProjectComponent} obj Optional instance to populate.
   * @return {module:model/JiraProjectComponent} The populated <code>JiraProjectComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


