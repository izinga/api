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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/JiraConfig', 'model/JiraConfigPayload', 'model/JiraIssuePayload', 'model/JiraIssuePayloadAttachements', 'model/JiraIssueResponse', 'model/JiraProject', 'model/JiraProjectComponent', 'model/JiraProjectUsers', 'model/Project', 'model/ProjectUpdatePayload', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/JiraConfig'), require('./model/JiraConfigPayload'), require('./model/JiraIssuePayload'), require('./model/JiraIssuePayloadAttachements'), require('./model/JiraIssueResponse'), require('./model/JiraProject'), require('./model/JiraProjectComponent'), require('./model/JiraProjectUsers'), require('./model/Project'), require('./model/ProjectUpdatePayload'), require('./api/DefaultApi'));
  }
}(function(ApiClient, JiraConfig, JiraConfigPayload, JiraIssuePayload, JiraIssuePayloadAttachements, JiraIssueResponse, JiraProject, JiraProjectComponent, JiraProjectUsers, Project, ProjectUpdatePayload, DefaultApi) {
  'use strict';

  /**
   * RobusTest_Apis.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RobusTestApi = require('index'); // See note below*.
   * var xxxSvc = new RobusTestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RobusTestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RobusTestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RobusTestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The JiraConfig model constructor.
     * @property {module:model/JiraConfig}
     */
    JiraConfig: JiraConfig,
    /**
     * The JiraConfigPayload model constructor.
     * @property {module:model/JiraConfigPayload}
     */
    JiraConfigPayload: JiraConfigPayload,
    /**
     * The JiraIssuePayload model constructor.
     * @property {module:model/JiraIssuePayload}
     */
    JiraIssuePayload: JiraIssuePayload,
    /**
     * The JiraIssuePayloadAttachements model constructor.
     * @property {module:model/JiraIssuePayloadAttachements}
     */
    JiraIssuePayloadAttachements: JiraIssuePayloadAttachements,
    /**
     * The JiraIssueResponse model constructor.
     * @property {module:model/JiraIssueResponse}
     */
    JiraIssueResponse: JiraIssueResponse,
    /**
     * The JiraProject model constructor.
     * @property {module:model/JiraProject}
     */
    JiraProject: JiraProject,
    /**
     * The JiraProjectComponent model constructor.
     * @property {module:model/JiraProjectComponent}
     */
    JiraProjectComponent: JiraProjectComponent,
    /**
     * The JiraProjectUsers model constructor.
     * @property {module:model/JiraProjectUsers}
     */
    JiraProjectUsers: JiraProjectUsers,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectUpdatePayload model constructor.
     * @property {module:model/ProjectUpdatePayload}
     */
    ProjectUpdatePayload: ProjectUpdatePayload,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
