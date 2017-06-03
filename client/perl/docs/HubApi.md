# WWW::SwaggerClient::HubApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::HubApi;
```

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
> InlineResponse2001 device_command_post(device => $device)

run adb  command

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device5->new(); # Device5 | 

eval { 
    my $result = $api_instance->device_command_post(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_command_post: $@\n";
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

# **device_delete**
> Device device_delete(device => $device)

free device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device1->new(); # Device1 | 

eval { 
    my $result = $api_instance->device_delete(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_delete: $@\n";
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

# **device_put**
> Device device_put(device => $device)

get free device based on given parameters

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device->new(); # Device | 

eval { 
    my $result = $api_instance->device_put(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_put: $@\n";
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

# **device_reverse_delete**
> Device device_reverse_delete(device => $device)

unrevrse the device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device3->new(); # Device3 | 

eval { 
    my $result = $api_instance->device_reverse_delete(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_reverse_delete: $@\n";
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

# **device_reverse_put**
> Device device_reverse_put(device => $device)

reverse a device

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device2->new(); # Device2 | 

eval { 
    my $result = $api_instance->device_reverse_put(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_reverse_put: $@\n";
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_shell_post**
> InlineResponse200 device_shell_post(device => $device)

run adb shell command

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();
my $device = WWW::SwaggerClient::Object::Device4->new(); # Device4 | 

eval { 
    my $result = $api_instance->device_shell_post(device => $device);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->device_shell_post: $@\n";
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

# **devices**
> HubDevices devices()

list all attached devices to RobusTest

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::HubApi;

my $api_instance = WWW::SwaggerClient::HubApi->new();

eval { 
    my $result = $api_instance->devices();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling HubApi->devices: $@\n";
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

