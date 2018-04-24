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
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Project
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-20T04:52:57.105+05:30")
public class Project {
  @SerializedName("_id")
  private String id = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("org")
  private String org = null;

  @SerializedName("os")
  private String os = null;

  @SerializedName("icon64")
  private String icon64 = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("url")
  private String url = null;

  @SerializedName("bugProject")
  private String bugProject = null;

  @SerializedName("admin")
  private List<String> admin = null;

  @SerializedName("users")
  private List<String> users = null;

  @SerializedName("test_c")
  private BigDecimal testC = null;

  @SerializedName("active")
  private Boolean active = null;

  @SerializedName("is_universal")
  private Boolean isUniversal = null;

  @SerializedName("last")
  private String last = null;

  @SerializedName("created")
  private String created = null;

  @SerializedName("updated")
  private String updated = null;

  @SerializedName("update_by")
  private String updateBy = null;

  @SerializedName("created_by")
  private String createdBy = null;

  public Project id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Project name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Project org(String org) {
    this.org = org;
    return this;
  }

   /**
   * Get org
   * @return org
  **/
  @ApiModelProperty(value = "")
  public String getOrg() {
    return org;
  }

  public void setOrg(String org) {
    this.org = org;
  }

  public Project os(String os) {
    this.os = os;
    return this;
  }

   /**
   * Get os
   * @return os
  **/
  @ApiModelProperty(value = "")
  public String getOs() {
    return os;
  }

  public void setOs(String os) {
    this.os = os;
  }

  public Project icon64(String icon64) {
    this.icon64 = icon64;
    return this;
  }

   /**
   * Get icon64
   * @return icon64
  **/
  @ApiModelProperty(value = "")
  public String getIcon64() {
    return icon64;
  }

  public void setIcon64(String icon64) {
    this.icon64 = icon64;
  }

  public Project type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Project url(String url) {
    this.url = url;
    return this;
  }

   /**
   * Get url
   * @return url
  **/
  @ApiModelProperty(value = "")
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Project bugProject(String bugProject) {
    this.bugProject = bugProject;
    return this;
  }

   /**
   * Get bugProject
   * @return bugProject
  **/
  @ApiModelProperty(value = "")
  public String getBugProject() {
    return bugProject;
  }

  public void setBugProject(String bugProject) {
    this.bugProject = bugProject;
  }

  public Project admin(List<String> admin) {
    this.admin = admin;
    return this;
  }

  public Project addAdminItem(String adminItem) {
    if (this.admin == null) {
      this.admin = new ArrayList<String>();
    }
    this.admin.add(adminItem);
    return this;
  }

   /**
   * Get admin
   * @return admin
  **/
  @ApiModelProperty(value = "")
  public List<String> getAdmin() {
    return admin;
  }

  public void setAdmin(List<String> admin) {
    this.admin = admin;
  }

  public Project users(List<String> users) {
    this.users = users;
    return this;
  }

  public Project addUsersItem(String usersItem) {
    if (this.users == null) {
      this.users = new ArrayList<String>();
    }
    this.users.add(usersItem);
    return this;
  }

   /**
   * Get users
   * @return users
  **/
  @ApiModelProperty(value = "")
  public List<String> getUsers() {
    return users;
  }

  public void setUsers(List<String> users) {
    this.users = users;
  }

  public Project testC(BigDecimal testC) {
    this.testC = testC;
    return this;
  }

   /**
   * Get testC
   * @return testC
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getTestC() {
    return testC;
  }

  public void setTestC(BigDecimal testC) {
    this.testC = testC;
  }

  public Project active(Boolean active) {
    this.active = active;
    return this;
  }

   /**
   * Get active
   * @return active
  **/
  @ApiModelProperty(value = "")
  public Boolean isActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Project isUniversal(Boolean isUniversal) {
    this.isUniversal = isUniversal;
    return this;
  }

   /**
   * Get isUniversal
   * @return isUniversal
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsUniversal() {
    return isUniversal;
  }

  public void setIsUniversal(Boolean isUniversal) {
    this.isUniversal = isUniversal;
  }

  public Project last(String last) {
    this.last = last;
    return this;
  }

   /**
   * Get last
   * @return last
  **/
  @ApiModelProperty(value = "")
  public String getLast() {
    return last;
  }

  public void setLast(String last) {
    this.last = last;
  }

  public Project created(String created) {
    this.created = created;
    return this;
  }

   /**
   * Get created
   * @return created
  **/
  @ApiModelProperty(value = "")
  public String getCreated() {
    return created;
  }

  public void setCreated(String created) {
    this.created = created;
  }

  public Project updated(String updated) {
    this.updated = updated;
    return this;
  }

   /**
   * Get updated
   * @return updated
  **/
  @ApiModelProperty(value = "")
  public String getUpdated() {
    return updated;
  }

  public void setUpdated(String updated) {
    this.updated = updated;
  }

  public Project updateBy(String updateBy) {
    this.updateBy = updateBy;
    return this;
  }

   /**
   * Get updateBy
   * @return updateBy
  **/
  @ApiModelProperty(value = "")
  public String getUpdateBy() {
    return updateBy;
  }

  public void setUpdateBy(String updateBy) {
    this.updateBy = updateBy;
  }

  public Project createdBy(String createdBy) {
    this.createdBy = createdBy;
    return this;
  }

   /**
   * Get createdBy
   * @return createdBy
  **/
  @ApiModelProperty(value = "")
  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Project project = (Project) o;
    return Objects.equals(this.id, project.id) &&
        Objects.equals(this.name, project.name) &&
        Objects.equals(this.org, project.org) &&
        Objects.equals(this.os, project.os) &&
        Objects.equals(this.icon64, project.icon64) &&
        Objects.equals(this.type, project.type) &&
        Objects.equals(this.url, project.url) &&
        Objects.equals(this.bugProject, project.bugProject) &&
        Objects.equals(this.admin, project.admin) &&
        Objects.equals(this.users, project.users) &&
        Objects.equals(this.testC, project.testC) &&
        Objects.equals(this.active, project.active) &&
        Objects.equals(this.isUniversal, project.isUniversal) &&
        Objects.equals(this.last, project.last) &&
        Objects.equals(this.created, project.created) &&
        Objects.equals(this.updated, project.updated) &&
        Objects.equals(this.updateBy, project.updateBy) &&
        Objects.equals(this.createdBy, project.createdBy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, org, os, icon64, type, url, bugProject, admin, users, testC, active, isUniversal, last, created, updated, updateBy, createdBy);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Project {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    org: ").append(toIndentedString(org)).append("\n");
    sb.append("    os: ").append(toIndentedString(os)).append("\n");
    sb.append("    icon64: ").append(toIndentedString(icon64)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    bugProject: ").append(toIndentedString(bugProject)).append("\n");
    sb.append("    admin: ").append(toIndentedString(admin)).append("\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
    sb.append("    testC: ").append(toIndentedString(testC)).append("\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    isUniversal: ").append(toIndentedString(isUniversal)).append("\n");
    sb.append("    last: ").append(toIndentedString(last)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    updateBy: ").append(toIndentedString(updateBy)).append("\n");
    sb.append("    createdBy: ").append(toIndentedString(createdBy)).append("\n");
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
