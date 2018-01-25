# SwaggerClient-php

This PHP package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 
- Build package: io.swagger.codegen.languages.PhpClientCodegen

## Requirements

PHP 5.5 and later

## Installation & Usage
### Composer

To install the bindings via [Composer](http://getcomposer.org/), add the following to `composer.json`:

```
{
  "repositories": [
    {
      "type": "git",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
    require_once('/path/to/SwaggerClient-php/vendor/autoload.php');
```

## Tests

To run the unit tests:

```
composer install
./vendor/bin/phpunit
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TestsuiteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = "project_id_example"; // string | project id

try {
    $apiInstance->testSuitesForProject($project_id);
} catch (Exception $e) {
    echo 'Exception when calling TestsuiteApi->testSuitesForProject: ', $e->getMessage(), PHP_EOL;
}

?>
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestsuiteApi* | [**testSuitesForProject**](docs/Api/TestsuiteApi.md#testsuitesforproject) | **GET** /v3/testsuites | get all test suite for project
*TestsuiteApi* | [**testSuitesForProject_0**](docs/Api/TestsuiteApi.md#testsuitesforproject_0) | **GET** /v3/testsuite | get all test suite for project


## Documentation For Models

 - [Testsuite](docs/Model/Testsuite.md)


## Documentation For Authorization

 All endpoints do not require authorization.


## Author



