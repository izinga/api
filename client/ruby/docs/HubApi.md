# SwaggerClient::HubApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adb_command**](HubApi.md#adb_command) | **POST** /device/command | run adb  command
[**device_shell**](HubApi.md#device_shell) | **POST** /device/shell | run adb shell command
[**devices_list**](HubApi.md#devices_list) | **GET** /devices | list all attached devices to RobusTest
[**free_device**](HubApi.md#free_device) | **DELETE** /_id | free device
[**get_free_device**](HubApi.md#get_free_device) | **PUT** /_id | get free device based on given parameters
[**reverse_device**](HubApi.md#reverse_device) | **PUT** /device/reverse | reverse a device
[**unreverse_device**](HubApi.md#unreverse_device) | **DELETE** /device/reverse | unrevrse the device


# **adb_command**
> InlineResponse2001 adb_command(opts)

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
  result = api_instance.adb_command(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->adb_command: #{e}"
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



# **device_shell**
> InlineResponse200 device_shell(opts)

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
  result = api_instance.device_shell(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->device_shell: #{e}"
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



# **devices_list**
> HubDevices devices_list

list all attached devices to RobusTest

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::HubApi.new

begin
  #list all attached devices to RobusTest
  result = api_instance.devices_list
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->devices_list: #{e}"
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



# **free_device**
> Device free_device(opts)

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
  result = api_instance.free_device(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->free_device: #{e}"
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



# **get_free_device**
> Device get_free_device(opts)

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
  result = api_instance.get_free_device(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->get_free_device: #{e}"
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



# **reverse_device**
> Device reverse_device(opts)

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
  result = api_instance.reverse_device(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->reverse_device: #{e}"
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



# **unreverse_device**
> Device unreverse_device(opts)

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
  result = api_instance.unreverse_device(opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling HubApi->unreverse_device: #{e}"
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



