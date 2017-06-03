# IO.Swagger.Api.HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeviceCommandPost**](HubApi.md#devicecommandpost) | **POST** /device/command | run adb  command
[**DeviceDelete**](HubApi.md#devicedelete) | **DELETE** /device | free device
[**DevicePut**](HubApi.md#deviceput) | **PUT** /device | get free device based on given parameters
[**DeviceReverseDelete**](HubApi.md#devicereversedelete) | **DELETE** /device/reverse | unrevrse the device
[**DeviceReversePut**](HubApi.md#devicereverseput) | **PUT** /device/reverse | reverse a device
[**DeviceShellPost**](HubApi.md#deviceshellpost) | **POST** /device/shell | run adb shell command
[**Devices**](HubApi.md#devices) | **GET** /devices | list all attached devices to RobusTest


<a name="devicecommandpost"></a>
# **DeviceCommandPost**
> InlineResponse2001 DeviceCommandPost (Device5 device = null)

run adb  command

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeviceCommandPostExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device5(); // Device5 |  (optional) 

            try
            {
                // run adb  command
                InlineResponse2001 result = apiInstance.DeviceCommandPost(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceCommandPost: " + e.Message );
            }
        }
    }
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

<a name="devicedelete"></a>
# **DeviceDelete**
> Device DeviceDelete (Device1 device = null)

free device

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeviceDeleteExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device1(); // Device1 |  (optional) 

            try
            {
                // free device
                Device result = apiInstance.DeviceDelete(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceDelete: " + e.Message );
            }
        }
    }
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

<a name="deviceput"></a>
# **DevicePut**
> Device DevicePut (Device device = null)

get free device based on given parameters

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DevicePutExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device(); // Device |  (optional) 

            try
            {
                // get free device based on given parameters
                Device result = apiInstance.DevicePut(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DevicePut: " + e.Message );
            }
        }
    }
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

<a name="devicereversedelete"></a>
# **DeviceReverseDelete**
> Device DeviceReverseDelete (Device3 device = null)

unrevrse the device

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeviceReverseDeleteExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device3(); // Device3 |  (optional) 

            try
            {
                // unrevrse the device
                Device result = apiInstance.DeviceReverseDelete(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceReverseDelete: " + e.Message );
            }
        }
    }
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

<a name="devicereverseput"></a>
# **DeviceReversePut**
> Device DeviceReversePut (Device2 device = null)

reverse a device

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeviceReversePutExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device2(); // Device2 |  (optional) 

            try
            {
                // reverse a device
                Device result = apiInstance.DeviceReversePut(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceReversePut: " + e.Message );
            }
        }
    }
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

<a name="deviceshellpost"></a>
# **DeviceShellPost**
> InlineResponse200 DeviceShellPost (Device4 device = null)

run adb shell command

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeviceShellPostExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device4(); // Device4 |  (optional) 

            try
            {
                // run adb shell command
                InlineResponse200 result = apiInstance.DeviceShellPost(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceShellPost: " + e.Message );
            }
        }
    }
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

<a name="devices"></a>
# **Devices**
> HubDevices Devices ()

list all attached devices to RobusTest

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DevicesExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();

            try
            {
                // list all attached devices to RobusTest
                HubDevices result = apiInstance.Devices();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.Devices: " + e.Message );
            }
        }
    }
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

