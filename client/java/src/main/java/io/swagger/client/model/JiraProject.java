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
import io.swagger.client.model.JiraProjectComponent;
import io.swagger.client.model.JiraProjectUsers;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * JiraProject
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-20T04:52:57.105+05:30")
public class JiraProject {
  @SerializedName("_id")
  private String id = null;

  @SerializedName("source")
  private String source = null;

  @SerializedName("key")
  private String key = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("desc")
  private String desc = null;

  @SerializedName("users")
  private List<JiraProjectUsers> users = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("component")
  private List<JiraProjectComponent> component = null;

  @SerializedName("updated")
  private String updated = null;

  @SerializedName("created")
  private String created = null;

  public JiraProject id(String id) {
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

  public JiraProject source(String source) {
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @ApiModelProperty(value = "")
  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }

  public JiraProject key(String key) {
    this.key = key;
    return this;
  }

   /**
   * Get key
   * @return key
  **/
  @ApiModelProperty(value = "")
  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public JiraProject id(String id) {
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

  public JiraProject name(String name) {
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

  public JiraProject desc(String desc) {
    this.desc = desc;
    return this;
  }

   /**
   * Get desc
   * @return desc
  **/
  @ApiModelProperty(value = "")
  public String getDesc() {
    return desc;
  }

  public void setDesc(String desc) {
    this.desc = desc;
  }

  public JiraProject users(List<JiraProjectUsers> users) {
    this.users = users;
    return this;
  }

  public JiraProject addUsersItem(JiraProjectUsers usersItem) {
    if (this.users == null) {
      this.users = new ArrayList<JiraProjectUsers>();
    }
    this.users.add(usersItem);
    return this;
  }

   /**
   * Get users
   * @return users
  **/
  @ApiModelProperty(value = "")
  public List<JiraProjectUsers> getUsers() {
    return users;
  }

  public void setUsers(List<JiraProjectUsers> users) {
    this.users = users;
  }

  public JiraProject type(String type) {
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

  public JiraProject component(List<JiraProjectComponent> component) {
    this.component = component;
    return this;
  }

  public JiraProject addComponentItem(JiraProjectComponent componentItem) {
    if (this.component == null) {
      this.component = new ArrayList<JiraProjectComponent>();
    }
    this.component.add(componentItem);
    return this;
  }

   /**
   * Get component
   * @return component
  **/
  @ApiModelProperty(value = "")
  public List<JiraProjectComponent> getComponent() {
    return component;
  }

  public void setComponent(List<JiraProjectComponent> component) {
    this.component = component;
  }

  public JiraProject updated(String updated) {
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

  public JiraProject created(String created) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    JiraProject jiraProject = (JiraProject) o;
    return Objects.equals(this.id, jiraProject.id) &&
        Objects.equals(this.source, jiraProject.source) &&
        Objects.equals(this.key, jiraProject.key) &&
        Objects.equals(this.id, jiraProject.id) &&
        Objects.equals(this.name, jiraProject.name) &&
        Objects.equals(this.desc, jiraProject.desc) &&
        Objects.equals(this.users, jiraProject.users) &&
        Objects.equals(this.type, jiraProject.type) &&
        Objects.equals(this.component, jiraProject.component) &&
        Objects.equals(this.updated, jiraProject.updated) &&
        Objects.equals(this.created, jiraProject.created);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, source, key, id, name, desc, users, type, component, updated, created);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class JiraProject {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    desc: ").append(toIndentedString(desc)).append("\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    component: ").append(toIndentedString(component)).append("\n");
    sb.append("    updated: ").append(toIndentedString(updated)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
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

