# swagger-java-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>swagger-java-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/swagger-java-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.HubApi;

import java.io.File;
import java.util.*;

public class HubApiExample {

    public static void main(String[] args) {
        
        HubApi apiInstance = new HubApi();
        Device5 device = new Device5(); // Device5 | 
        try {
            InlineResponse2001 result = apiInstance.deviceCommandPost(device);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling HubApi#deviceCommandPost");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *http://mobile.robustest.com:8085*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HubApi* | [**deviceCommandPost**](docs/HubApi.md#deviceCommandPost) | **POST** /device/command | run adb  command
*HubApi* | [**deviceDelete**](docs/HubApi.md#deviceDelete) | **DELETE** /device | free device
*HubApi* | [**devicePut**](docs/HubApi.md#devicePut) | **PUT** /device | get free device based on given parameters
*HubApi* | [**deviceReverseDelete**](docs/HubApi.md#deviceReverseDelete) | **DELETE** /device/reverse | unrevrse the device
*HubApi* | [**deviceReversePut**](docs/HubApi.md#deviceReversePut) | **PUT** /device/reverse | reverse a device
*HubApi* | [**deviceShellPost**](docs/HubApi.md#deviceShellPost) | **POST** /device/shell | run adb shell command
*HubApi* | [**devices**](docs/HubApi.md#devices) | **GET** /devices | list all attached devices to RobusTest


## Documentation for Models

 - [Device](docs/Device.md)
 - [Device1](docs/Device1.md)
 - [Device2](docs/Device2.md)
 - [Device3](docs/Device3.md)
 - [Device4](docs/Device4.md)
 - [Device5](docs/Device5.md)
 - [Error](docs/Error.md)
 - [HubDevices](docs/HubDevices.md)
 - [HubSession](docs/HubSession.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



