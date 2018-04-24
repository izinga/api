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
    define(['ApiClient', 'model/JiraProjectComponent', 'model/JiraProjectUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JiraProjectComponent'), require('./JiraProjectUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.RobusTestApi) {
      root.RobusTestApi = {};
    }
    root.RobusTestApi.JiraProject = factory(root.RobusTestApi.ApiClient, root.RobusTestApi.JiraProjectComponent, root.RobusTestApi.JiraProjectUsers);
  }
}(this, function(ApiClient, JiraProjectComponent, JiraProjectUsers) {
  'use strict';




  /**
   * The JiraProject model module.
   * @module model/JiraProject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JiraProject</code>.
   * @alias module:model/JiraProject
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>JiraProject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JiraProject} obj Optional instance to populate.
   * @return {module:model/JiraProject} The populated <code>JiraProject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [JiraProjectUsers]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('component')) {
        obj['component'] = ApiClient.convertToType(data['component'], [JiraProjectComponent]);
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;
  /**
   * @member {Array.<module:model/JiraProjectUsers>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/JiraProjectComponent>} component
   */
  exports.prototype['component'] = undefined;
  /**
   * @member {String} updated
   */
  exports.prototype['updated'] = undefined;
  /**
   * @member {String} created
   */
  exports.prototype['created'] = undefined;



  return exports;
}));

