/*
 * RobusTest Api
 * RobusTest Apis
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.JiraIssuePayloadAttachements;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * JiraIssuePayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-20T04:52:57.105+05:30")
public class JiraIssuePayload {
  @SerializedName("projectKey")
  private String projectKey = null;

  @SerializedName("assingeeName")
  private String assingeeName = null;

  @SerializedName("assingeeKey")
  private String assingeeKey = null;

  @SerializedName("reporterName")
  private String reporterName = null;

  @SerializedName("reporterKey")
  private String reporterKey = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("summary")
  private String summary = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("attachements")
  private List<JiraIssuePayloadAttachements> attachements = new ArrayList<JiraIssuePayloadAttachements>();

  public JiraIssuePayload projectKey(String projectKey) {
    this.projectKey = projectKey;
    return this;
  }

   /**
   * Get projectKey
   * @return projectKey
  **/
  @ApiModelProperty(required = true, value = "")
  public String getProjectKey() {
    return projectKey;
  }

  public void setProjectKey(String projectKey) {
    this.projectKey = projectKey;
  }

  public JiraIssuePayload assingeeName(String assingeeName) {
    this.assingeeName = assingeeName;
    return this;
  }

   /**
   * Get assingeeName
   * @return assingeeName
  **/
  @ApiModelProperty(required = true, value = "")
  public String getAssingeeName() {
    return assingeeName;
  }

  public void setAssingeeName(String assingeeName) {
    this.assingeeName = assingeeName;
  }

  public JiraIssuePayload assingeeKey(String assingeeKey) {
    this.assingeeKey = assingeeKey;
    return this;
  }

   /**
   * Get assingeeKey
   * @return assingeeKey
  **/
  @ApiModelProperty(required = true, value = "")
  public String getAssingeeKey() {
    return assingeeKey;
  }

  public void setAssingeeKey(String assingeeKey) {
    this.assingeeKey = assingeeKey;
  }

  public JiraIssuePayload reporterName(String reporterName) {
    this.reporterName = reporterName;
    return this;
  }

   /**
   * Get reporterName
   * @return reporterName
  **/
  @ApiModelProperty(required = true, value = "")
  public String getReporterName() {
    return reporterName;
  }

  public void setReporterName(String reporterName) {
    this.reporterName = reporterName;
  }

  public JiraIssuePayload reporterKey(String reporterKey) {
    this.reporterKey = reporterKey;
    return this;
  }

   /**
   * Get reporterKey
   * @return reporterKey
  **/
  @ApiModelProperty(required = true, value = "")
  public String getReporterKey() {
    return reporterKey;
  }

  public void setReporterKey(String reporterKey) {
    this.reporterKey = reporterKey;
  }

  public JiraIssuePayload description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(required = true, value = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public JiraIssuePayload summary(String summary) {
    this.summary = summary;
    return this;
  }

   /**
   * Get summary
   * @return summary
  **/
  @ApiModelProperty(required = true, value = "")
  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public JiraIssuePayload type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(required = true, value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public JiraIssuePayload attachements(List<JiraIssuePayloadAttachements> attachements) {
    this.attachements = attachements;
    return this;
  }

  public JiraIssuePayload addAttachementsItem(JiraIssuePayloadAttachements attachementsItem) {
    this.attachements.add(attachementsItem);
    return this;
  }

   /**
   * Get attachements
   * @return attachements
  **/
  @ApiModelProperty(required = true, value = "")
  public List<JiraIssuePayloadAttachements> getAttachements() {
    return attachements;
  }

  public void setAttachements(List<JiraIssuePayloadAttachements> attachements) {
    this.attachements = attachements;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JiraIssuePayload jiraIssuePayload = (JiraIssuePayload) o;
    return Objects.equals(this.projectKey, jiraIssuePayload.projectKey) &&
        Objects.equals(this.assingeeName, jiraIssuePayload.assingeeName) &&
        Objects.equals(this.assingeeKey, jiraIssuePayload.assingeeKey) &&
        Objects.equals(this.reporterName, jiraIssuePayload.reporterName) &&
        Objects.equals(this.reporterKey, jiraIssuePayload.reporterKey) &&
        Objects.equals(this.description, jiraIssuePayload.description) &&
        Objects.equals(this.summary, jiraIssuePayload.summary) &&
        Objects.equals(this.type, jiraIssuePayload.type) &&
        Objects.equals(this.attachements, jiraIssuePayload.attachements);
  }

  @Override
  public int hashCode() {
    return Objects.hash(projectKey, assingeeName, assingeeKey, reporterName, reporterKey, description, summary, type, attachements);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JiraIssuePayload {\n");
    
    sb.append("    projectKey: ").append(toIndentedString(projectKey)).append("\n");
    sb.append("    assingeeName: ").append(toIndentedString(assingeeName)).append("\n");
    sb.append("    assingeeKey: ").append(toIndentedString(assingeeKey)).append("\n");
    sb.append("    reporterName: ").append(toIndentedString(reporterName)).append("\n");
    sb.append("    reporterKey: ").append(toIndentedString(reporterKey)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    summary: ").append(toIndentedString(summary)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    attachements: ").append(toIndentedString(attachements)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

