# SwaggerClient::HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_command_post**](HubApi.md#device_command_post) | **POST** /device/command | run adb  command
[**device_delete**](HubApi.md#device_delete) | **DELETE** /device | free device
[**device_put**](HubApi.md#device_put) | **PUT** /device | get free device based on given parameters
[**device_reverse_delete**](HubApi.md#device_reverse_delete) | **DELETE** /device/reverse | unrevrse the device
[**device_reverse_put**](HubApi.md#device_reverse_put) | **PUT** /device/reverse | reverse a device
[**device_shell_post**](HubApi.md#device_shell_post) | **POST** /device/shell | run adb shell command
[**devices**](HubApi.md#devices) | **GET** /devices | list all attached devices to RobusTest


# **device_command_post**
> InlineResponse2001 device_command_post(opts)

run adb  command

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device5.new # Device5 | 
}

begin
  #run adb  command
  result = api_instance.device_command_post(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_command_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device5**](Device5.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **device_delete**
> Device device_delete(opts)

free device

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device1.new # Device1 | 
}

begin
  #free device
  result = api_instance.device_delete(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device1**](Device1.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **device_put**
> Device device_put(opts)

get free device based on given parameters

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device.new # Device | 
}

begin
  #get free device based on given parameters
  result = api_instance.device_put(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device**](Device.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **device_reverse_delete**
> Device device_reverse_delete(opts)

unrevrse the device

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device3.new # Device3 | 
}

begin
  #unrevrse the device
  result = api_instance.device_reverse_delete(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_reverse_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device3**](Device3.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **device_reverse_put**
> Device device_reverse_put(opts)

reverse a device

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device2.new # Device2 | 
}

begin
  #reverse a device
  result = api_instance.device_reverse_put(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_reverse_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device2**](Device2.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **device_shell_post**
> InlineResponse200 device_shell_post(opts)

run adb shell command

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

opts = { 
  device: SwaggerClient::Device4.new # Device4 | 
}

begin
  #run adb shell command
  result = api_instance.device_shell_post(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_shell_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device4**](Device4.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **devices**
> HubDevices devices

list all attached devices to RobusTest

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

begin
  #list all attached devices to RobusTest
  result = api_instance.devices
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->devices: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HubDevices**](HubDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



