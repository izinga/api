# WWW::SwaggerClient::HubApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::HubApi;
```

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adb_command**](HubApi.md#adb_command) | **POST** /device/command | run adb  command
[**device_shell**](HubApi.md#device_shell) | **POST** /device/shell | run adb shell command
[**devices_list**](HubApi.md#devices_list) | **GET** /devices | list all attached devices to RobusTest
[**free_device**](HubApi.md#free_device) | **DELETE** /device | free device
[**get_free_device**](HubApi.md#get_free_device) | **PUT** /device | get free device based on given parameters
[**get_screenshot**](HubApi.md#get_screenshot) | **PUT** /device/screenshot | get screenshot from device
[**unreserve_device**](HubApi.md#unreserve_device) | **DELETE** /device/screenshot | unrevrse the device


# **adb_command**
> InlineResponse2001 adb_command(device => $device)

run adb  command

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device5->new(); # Device5 | 

eval { 
    my $result = $api_instance->adb_command(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->adb_command: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_shell**
> InlineResponse200 device_shell(device => $device)

run adb shell command

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device4->new(); # Device4 | 

eval { 
    my $result = $api_instance->device_shell(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_shell: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list**
> HubDevices devices_list()

list all attached devices to RobusTest

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();

eval { 
    my $result = $api_instance->devices_list();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->devices_list: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **free_device**
> Device free_device(device => $device)

free device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device1->new(); # Device1 | 

eval { 
    my $result = $api_instance->free_device(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->free_device: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_free_device**
> Device get_free_device(device => $device)

get free device based on given parameters

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device->new(); # Device | 

eval { 
    my $result = $api_instance->get_free_device(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->get_free_device: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_screenshot**
> File get_screenshot(device => $device)

get screenshot from device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device2->new(); # Device2 | 

eval { 
    my $result = $api_instance->get_screenshot(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->get_screenshot: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device2**](Device2.md)|  | [optional] 

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unreserve_device**
> Device unreserve_device(device => $device)

unrevrse the device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device3->new(); # Device3 | 

eval { 
    my $result = $api_instance->unreserve_device(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->unreserve_device: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

