=begin comment

RobusTest Api

RobusTest Apis

OpenAPI spec version: 1.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the Swagger Codegen
# Please update the test cases below to test the model.
# Ref: https://github.com/swagger-api/swagger-codegen
#
use Test::More tests => 2;
use Test::Exception;

use lib 'lib';
use strict;
use warnings;


use_ok('WWW::SwaggerClient::Object::JiraProjectUsers');

my $instance = WWW::SwaggerClient::Object::JiraProjectUsers->new();

isa_ok($instance, 'WWW::SwaggerClient::Object::JiraProjectUsers');

