=begin


Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for SwaggerClient::TestsuiteApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'TestsuiteApi' do
  before do
    # run before each test
    @instance = SwaggerClient::TestsuiteApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TestsuiteApi' do
    it 'should create an instance of TestsuiteApi' do
      expect(@instance).to be_instance_of(SwaggerClient::TestsuiteApi)
    end
  end

  # unit tests for test_suites_for_project
  # get all test suite for project
  # return all test suite for given project
  # @param project_id project id
  # @param [Hash] opts the optional parameters
  # @return [Testsuite]
  describe 'test_suites_for_project test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end