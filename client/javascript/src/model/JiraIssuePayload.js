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
    define(['ApiClient', 'model/JiraIssuePayloadAttachements'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JiraIssuePayloadAttachements'));
  } else {
    // Browser globals (root is window)
    if (!root.RobusTestApi) {
      root.RobusTestApi = {};
    }
    root.RobusTestApi.JiraIssuePayload = factory(root.RobusTestApi.ApiClient, root.RobusTestApi.JiraIssuePayloadAttachements);
  }
}(this, function(ApiClient, JiraIssuePayloadAttachements) {
  'use strict';




  /**
   * The JiraIssuePayload model module.
   * @module model/JiraIssuePayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JiraIssuePayload</code>.
   * @alias module:model/JiraIssuePayload
   * @class
   * @param projectKey {String} 
   * @param assingeeName {String} 
   * @param assingeeKey {String} 
   * @param reporterName {String} 
   * @param reporterKey {String} 
   * @param description {String} 
   * @param summary {String} 
   * @param type {String} 
   * @param attachements {Array.<module:model/JiraIssuePayloadAttachements>} 
   */
  var exports = function(projectKey, assingeeName, assingeeKey, reporterName, reporterKey, description, summary, type, attachements) {
    var _this = this;

    _this['projectKey'] = projectKey;
    _this['assingeeName'] = assingeeName;
    _this['assingeeKey'] = assingeeKey;
    _this['reporterName'] = reporterName;
    _this['reporterKey'] = reporterKey;
    _this['description'] = description;
    _this['summary'] = summary;
    _this['type'] = type;
    _this['attachements'] = attachements;
  };

  /**
   * Constructs a <code>JiraIssuePayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JiraIssuePayload} obj Optional instance to populate.
   * @return {module:model/JiraIssuePayload} The populated <code>JiraIssuePayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('projectKey')) {
        obj['projectKey'] = ApiClient.convertToType(data['projectKey'], 'String');
      }
      if (data.hasOwnProperty('assingeeName')) {
        obj['assingeeName'] = ApiClient.convertToType(data['assingeeName'], 'String');
      }
      if (data.hasOwnProperty('assingeeKey')) {
        obj['assingeeKey'] = ApiClient.convertToType(data['assingeeKey'], 'String');
      }
      if (data.hasOwnProperty('reporterName')) {
        obj['reporterName'] = ApiClient.convertToType(data['reporterName'], 'String');
      }
      if (data.hasOwnProperty('reporterKey')) {
        obj['reporterKey'] = ApiClient.convertToType(data['reporterKey'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('attachements')) {
        obj['attachements'] = ApiClient.convertToType(data['attachements'], [JiraIssuePayloadAttachements]);
      }
    }
    return obj;
  }

  /**
   * @member {String} projectKey
   */
  exports.prototype['projectKey'] = undefined;
  /**
   * @member {String} assingeeName
   */
  exports.prototype['assingeeName'] = undefined;
  /**
   * @member {String} assingeeKey
   */
  exports.prototype['assingeeKey'] = undefined;
  /**
   * @member {String} reporterName
   */
  exports.prototype['reporterName'] = undefined;
  /**
   * @member {String} reporterKey
   */
  exports.prototype['reporterKey'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/JiraIssuePayloadAttachements>} attachements
   */
  exports.prototype['attachements'] = undefined;



  return exports;
}));

