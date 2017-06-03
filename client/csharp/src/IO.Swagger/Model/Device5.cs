/* 
 * RobusTest Hub
 *
 * RobusTest Hub Api [http://mobile.robustest.com:8085 
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

namespace IO.Swagger.Model
{
    /// <summary>
    /// Device5
    /// </summary>
    [DataContract]
    public partial class Device5 :  IEquatable<Device5>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Device5" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Device5() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Device5" /> class.
        /// </summary>
        /// <param name="Device">Device (required).</param>
        /// <param name="Command">Command (required).</param>
        public Device5(string Device = default(string), string Command = default(string))
        {
            // to ensure "Device" is required (not null)
            if (Device == null)
            {
                throw new InvalidDataException("Device is a required property for Device5 and cannot be null");
            }
            else
            {
                this.Device = Device;
            }
            // to ensure "Command" is required (not null)
            if (Command == null)
            {
                throw new InvalidDataException("Command is a required property for Device5 and cannot be null");
            }
            else
            {
                this.Command = Command;
            }
        }
        
        /// <summary>
        /// Gets or Sets Device
        /// </summary>
        [DataMember(Name="device", EmitDefaultValue=false)]
        public string Device { get; set; }
        /// <summary>
        /// Gets or Sets Command
        /// </summary>
        [DataMember(Name="command", EmitDefaultValue=false)]
        public string Command { get; set; }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Device5 {\n");
            sb.Append("  Device: ").Append(Device).Append("\n");
            sb.Append("  Command: ").Append(Command).Append("\n");
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
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            return this.Equals(obj as Device5);
        }

        /// <summary>
        /// Returns true if Device5 instances are equal
        /// </summary>
        /// <param name="other">Instance of Device5 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Device5 other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.Device == other.Device ||
                    this.Device != null &&
                    this.Device.Equals(other.Device)
                ) && 
                (
                    this.Command == other.Command ||
                    this.Command != null &&
                    this.Command.Equals(other.Command)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                if (this.Device != null)
                    hash = hash * 59 + this.Device.GetHashCode();
                if (this.Command != null)
                    hash = hash * 59 + this.Command.GetHashCode();
                return hash;
            }
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        { 
            yield break;
        }
    }

}
