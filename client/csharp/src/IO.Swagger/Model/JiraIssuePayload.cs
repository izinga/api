/* 
 * RobusTest Api
 *
 * RobusTest Apis
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// JiraIssuePayload
    /// </summary>
    [DataContract]
    public partial class JiraIssuePayload :  IEquatable<JiraIssuePayload>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="JiraIssuePayload" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected JiraIssuePayload() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="JiraIssuePayload" /> class.
        /// </summary>
        /// <param name="ProjectKey">ProjectKey (required).</param>
        /// <param name="AssingeeName">AssingeeName (required).</param>
        /// <param name="AssingeeKey">AssingeeKey (required).</param>
        /// <param name="ReporterName">ReporterName (required).</param>
        /// <param name="ReporterKey">ReporterKey (required).</param>
        /// <param name="Description">Description (required).</param>
        /// <param name="Summary">Summary (required).</param>
        /// <param name="Type">Type (required).</param>
        /// <param name="Attachements">Attachements (required).</param>
        public JiraIssuePayload(string ProjectKey = default(string), string AssingeeName = default(string), string AssingeeKey = default(string), string ReporterName = default(string), string ReporterKey = default(string), string Description = default(string), string Summary = default(string), string Type = default(string), List<JiraIssuePayloadAttachements> Attachements = default(List<JiraIssuePayloadAttachements>))
        {
            // to ensure "ProjectKey" is required (not null)
            if (ProjectKey == null)
            {
                throw new InvalidDataException("ProjectKey is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.ProjectKey = ProjectKey;
            }
            // to ensure "AssingeeName" is required (not null)
            if (AssingeeName == null)
            {
                throw new InvalidDataException("AssingeeName is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.AssingeeName = AssingeeName;
            }
            // to ensure "AssingeeKey" is required (not null)
            if (AssingeeKey == null)
            {
                throw new InvalidDataException("AssingeeKey is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.AssingeeKey = AssingeeKey;
            }
            // to ensure "ReporterName" is required (not null)
            if (ReporterName == null)
            {
                throw new InvalidDataException("ReporterName is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.ReporterName = ReporterName;
            }
            // to ensure "ReporterKey" is required (not null)
            if (ReporterKey == null)
            {
                throw new InvalidDataException("ReporterKey is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.ReporterKey = ReporterKey;
            }
            // to ensure "Description" is required (not null)
            if (Description == null)
            {
                throw new InvalidDataException("Description is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.Description = Description;
            }
            // to ensure "Summary" is required (not null)
            if (Summary == null)
            {
                throw new InvalidDataException("Summary is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.Summary = Summary;
            }
            // to ensure "Type" is required (not null)
            if (Type == null)
            {
                throw new InvalidDataException("Type is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.Type = Type;
            }
            // to ensure "Attachements" is required (not null)
            if (Attachements == null)
            {
                throw new InvalidDataException("Attachements is a required property for JiraIssuePayload and cannot be null");
            }
            else
            {
                this.Attachements = Attachements;
            }
        }
        
        /// <summary>
        /// Gets or Sets ProjectKey
        /// </summary>
        [DataMember(Name="projectKey", EmitDefaultValue=false)]
        public string ProjectKey { get; set; }

        /// <summary>
        /// Gets or Sets AssingeeName
        /// </summary>
        [DataMember(Name="assingeeName", EmitDefaultValue=false)]
        public string AssingeeName { get; set; }

        /// <summary>
        /// Gets or Sets AssingeeKey
        /// </summary>
        [DataMember(Name="assingeeKey", EmitDefaultValue=false)]
        public string AssingeeKey { get; set; }

        /// <summary>
        /// Gets or Sets ReporterName
        /// </summary>
        [DataMember(Name="reporterName", EmitDefaultValue=false)]
        public string ReporterName { get; set; }

        /// <summary>
        /// Gets or Sets ReporterKey
        /// </summary>
        [DataMember(Name="reporterKey", EmitDefaultValue=false)]
        public string ReporterKey { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Summary
        /// </summary>
        [DataMember(Name="summary", EmitDefaultValue=false)]
        public string Summary { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public string Type { get; set; }

        /// <summary>
        /// Gets or Sets Attachements
        /// </summary>
        [DataMember(Name="attachements", EmitDefaultValue=false)]
        public List<JiraIssuePayloadAttachements> Attachements { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class JiraIssuePayload {\n");
            sb.Append("  ProjectKey: ").Append(ProjectKey).Append("\n");
            sb.Append("  AssingeeName: ").Append(AssingeeName).Append("\n");
            sb.Append("  AssingeeKey: ").Append(AssingeeKey).Append("\n");
            sb.Append("  ReporterName: ").Append(ReporterName).Append("\n");
            sb.Append("  ReporterKey: ").Append(ReporterKey).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Summary: ").Append(Summary).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Attachements: ").Append(Attachements).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as JiraIssuePayload);
        }

        /// <summary>
        /// Returns true if JiraIssuePayload instances are equal
        /// </summary>
        /// <param name="input">Instance of JiraIssuePayload to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(JiraIssuePayload input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ProjectKey == input.ProjectKey ||
                    (this.ProjectKey != null &&
                    this.ProjectKey.Equals(input.ProjectKey))
                ) && 
                (
                    this.AssingeeName == input.AssingeeName ||
                    (this.AssingeeName != null &&
                    this.AssingeeName.Equals(input.AssingeeName))
                ) && 
                (
                    this.AssingeeKey == input.AssingeeKey ||
                    (this.AssingeeKey != null &&
                    this.AssingeeKey.Equals(input.AssingeeKey))
                ) && 
                (
                    this.ReporterName == input.ReporterName ||
                    (this.ReporterName != null &&
                    this.ReporterName.Equals(input.ReporterName))
                ) && 
                (
                    this.ReporterKey == input.ReporterKey ||
                    (this.ReporterKey != null &&
                    this.ReporterKey.Equals(input.ReporterKey))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Summary == input.Summary ||
                    (this.Summary != null &&
                    this.Summary.Equals(input.Summary))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Attachements == input.Attachements ||
                    this.Attachements != null &&
                    this.Attachements.SequenceEqual(input.Attachements)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ProjectKey != null)
                    hashCode = hashCode * 59 + this.ProjectKey.GetHashCode();
                if (this.AssingeeName != null)
                    hashCode = hashCode * 59 + this.AssingeeName.GetHashCode();
                if (this.AssingeeKey != null)
                    hashCode = hashCode * 59 + this.AssingeeKey.GetHashCode();
                if (this.ReporterName != null)
                    hashCode = hashCode * 59 + this.ReporterName.GetHashCode();
                if (this.ReporterKey != null)
                    hashCode = hashCode * 59 + this.ReporterKey.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Summary != null)
                    hashCode = hashCode * 59 + this.Summary.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Attachements != null)
                    hashCode = hashCode * 59 + this.Attachements.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}