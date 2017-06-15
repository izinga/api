# IO.Swagger.Api.HubApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdbCommand**](HubApi.md#adbcommand) | **POST** /device/command | run adb  command
[**DeviceShell**](HubApi.md#deviceshell) | **POST** /device/shell | run adb shell command
[**DevicesList**](HubApi.md#deviceslist) | **GET** /devices | list all attached devices to RobusTest
[**FreeDevice**](HubApi.md#freedevice) | **DELETE** /device | free device
[**GetFreeDevice**](HubApi.md#getfreedevice) | **PUT** /device | get free device based on given parameters
[**GetScreenshot**](HubApi.md#getscreenshot) | **POST** /device/screenshot | get screenshot from device
[**UnreserveDevice**](HubApi.md#unreservedevice) | **DELETE** /device/screenshot | unrevrse the device


<a name="adbcommand"></a>
# **AdbCommand**
> InlineResponse2001 AdbCommand (Device5 device = null)

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
    public class AdbCommandExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device5(); // Device5 |  (optional) 

            try
            {
                // run adb  command
                InlineResponse2001 result = apiInstance.AdbCommand(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.AdbCommand: " + e.Message );
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

<a name="deviceshell"></a>
# **DeviceShell**
> InlineResponse200 DeviceShell (Device4 device = null)

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
    public class DeviceShellExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device4(); // Device4 |  (optional) 

            try
            {
                // run adb shell command
                InlineResponse200 result = apiInstance.DeviceShell(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DeviceShell: " + e.Message );
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

<a name="deviceslist"></a>
# **DevicesList**
> HubDevices DevicesList ()

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
    public class DevicesListExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();

            try
            {
                // list all attached devices to RobusTest
                HubDevices result = apiInstance.DevicesList();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.DevicesList: " + e.Message );
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

<a name="freedevice"></a>
# **FreeDevice**
> Device FreeDevice (Device1 device = null)

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
    public class FreeDeviceExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device1(); // Device1 |  (optional) 

            try
            {
                // free device
                Device result = apiInstance.FreeDevice(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.FreeDevice: " + e.Message );
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

<a name="getfreedevice"></a>
# **GetFreeDevice**
> Device GetFreeDevice (Device device = null)

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
    public class GetFreeDeviceExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device(); // Device |  (optional) 

            try
            {
                // get free device based on given parameters
                Device result = apiInstance.GetFreeDevice(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.GetFreeDevice: " + e.Message );
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

<a name="getscreenshot"></a>
# **GetScreenshot**
> System.IO.Stream GetScreenshot (Device2 device = null)

get screenshot from device

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetScreenshotExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device2(); // Device2 |  (optional) 

            try
            {
                // get screenshot from device
                System.IO.Stream result = apiInstance.GetScreenshot(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.GetScreenshot: " + e.Message );
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

**System.IO.Stream**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unreservedevice"></a>
# **UnreserveDevice**
> Device UnreserveDevice (Device3 device = null)

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
    public class UnreserveDeviceExample
    {
        public void main()
        {
            
            var apiInstance = new HubApi();
            var device = new Device3(); // Device3 |  (optional) 

            try
            {
                // unrevrse the device
                Device result = apiInstance.UnreserveDevice(device);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling HubApi.UnreserveDevice: " + e.Message );
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

