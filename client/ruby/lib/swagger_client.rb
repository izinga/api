=begin
#RobusTest Hub

#RobusTest Hub Api [http://mobile.robustest.com:8085 

OpenAPI spec version: 1.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end

# Common files
require 'swagger_client/api_client'
require 'swagger_client/api_error'
require 'swagger_client/version'
require 'swagger_client/configuration'

# Models
require 'swagger_client/models/device'
require 'swagger_client/models/device_1'
require 'swagger_client/models/device_2'
require 'swagger_client/models/device_3'
require 'swagger_client/models/device_4'
require 'swagger_client/models/device_5'
require 'swagger_client/models/error'
require 'swagger_client/models/hub_devices'
require 'swagger_client/models/hub_session'
require 'swagger_client/models/inline_response_200'
require 'swagger_client/models/inline_response_200_1'

# APIs
require 'swagger_client/api/hub_api'

module SwaggerClient
  class << self
    # Customize default settings for the SDK using block.
    #   SwaggerClient.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
