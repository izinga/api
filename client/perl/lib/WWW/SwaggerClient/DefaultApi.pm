=begin comment

RobusTest Api

RobusTest Apis

OpenAPI spec version: 1.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
package WWW::SwaggerClient::DefaultApi;

require 5.6.0;
use strict;
use warnings;
use utf8; 
use Exporter;
use Carp qw( croak );
use Log::Any qw($log);

use WWW::SwaggerClient::ApiClient;

use base "Class::Data::Inheritable";

__PACKAGE__->mk_classdata('method_documentation' => {});

sub new {
    my $class = shift;
    my $api_client;

    if ($_[0] && ref $_[0] && ref $_[0] eq 'WWW::SwaggerClient::ApiClient' ) {
        $api_client = $_[0];
    } else {
        $api_client = WWW::SwaggerClient::ApiClient->new(@_);
    }

    bless { api_client => $api_client }, $class;

}


#
# bug
#
# get list for all supported bug trakers
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'bug' } = { 
    	summary => 'get list for all supported bug trakers',
        params => $params,
        returns => 'ARRAY[string]',
        };
}
# @return ARRAY[string]
#
sub bug {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/trackerlist';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[string]', $response);
    return $_response_object;
}

#
# jira
#
# get all jira config
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira' } = { 
    	summary => 'get all jira config',
        params => $params,
        returns => 'ARRAY[JiraConfig]',
        };
}
# @return ARRAY[JiraConfig]
#
sub jira {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[JiraConfig]', $response);
    return $_response_object;
}

#
# jira_0
#
# get all jira project
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira_0' } = { 
    	summary => 'get all jira project',
        params => $params,
        returns => 'ARRAY[JiraProject]',
        };
}
# @return ARRAY[JiraProject]
#
sub jira_0 {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/projects';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[JiraProject]', $response);
    return $_response_object;
}

#
# jira_1
#
# get all jira project for given config
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira_1' } = { 
    	summary => 'get all jira project for given config',
        params => $params,
        returns => 'ARRAY[JiraProject]',
        };
}
# @return ARRAY[JiraProject]
#
sub jira_1 {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/config/{congfig_id}/projects';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[JiraProject]', $response);
    return $_response_object;
}

#
# jira_2
#
# get a jira project  details
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira_2' } = { 
    	summary => 'get a jira project  details',
        params => $params,
        returns => 'JiraProject',
        };
}
# @return JiraProject
#
sub jira_2 {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/projects/{jira_project_id}';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('JiraProject', $response);
    return $_response_object;
}

#
# jira_config
#
# create a jira config
# 
# @param JiraConfigPayload $body  (required)
{
    my $params = {
    'body' => {
        data_type => 'JiraConfigPayload',
        description => '',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'jira_config' } = { 
    	summary => 'create a jira config',
        params => $params,
        returns => 'ARRAY[string]',
        };
}
# @return ARRAY[string]
#
sub jira_config {
    my ($self, %args) = @_;

    # verify the required parameter 'body' is set
    unless (exists $args{'body'}) {
      croak("Missing the required parameter 'body' when calling jira_config");
    }

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira';

    my $_method = 'POST';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # body params
    if ( exists $args{'body'}) {
        $_body_data = $args{'body'};
    }

    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[string]', $response);
    return $_response_object;
}

#
# jira_config_0
#
# update a jira config
# 
# @param JiraConfigPayload $payload  (required)
{
    my $params = {
    'payload' => {
        data_type => 'JiraConfigPayload',
        description => '',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'jira_config_0' } = { 
    	summary => 'update a jira config',
        params => $params,
        returns => 'JiraConfig',
        };
}
# @return JiraConfig
#
sub jira_config_0 {
    my ($self, %args) = @_;

    # verify the required parameter 'payload' is set
    unless (exists $args{'payload'}) {
      croak("Missing the required parameter 'payload' when calling jira_config_0");
    }

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/{jira_config_id}';

    my $_method = 'PUT';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # body params
    if ( exists $args{'payload'}) {
        $_body_data = $args{'payload'};
    }

    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('JiraConfig', $response);
    return $_response_object;
}

#
# jira_config_1
#
# delete jira config and all associated jira project
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira_config_1' } = { 
    	summary => 'delete jira config and all associated jira project',
        params => $params,
        returns => 'string',
        };
}
# @return string
#
sub jira_config_1 {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/{jira_config_id}';

    my $_method = 'DELETE';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('string', $response);
    return $_response_object;
}

#
# jira_config_2
#
# update all projects for a jira config
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'jira_config_2' } = { 
    	summary => 'update all projects for a jira config',
        params => $params,
        returns => 'ARRAY[string]',
        };
}
# @return ARRAY[string]
#
sub jira_config_2 {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/v3/bug/config/jira/{jira_config_id}';

    my $_method = 'PATCH';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('ARRAY[string]', $response);
    return $_response_object;
}

#
# jira_issue
#
# create a jira issue
# 
# @param JiraIssuePayload $body  (required)
{
    my $params = {
    'body' => {
        data_type => 'JiraIssuePayload',
        description => '',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'jira_issue' } = { 
    	summary => 'create a jira issue',
        params => $params,
        returns => 'JiraIssueResponse',
        };
}
# @return JiraIssueResponse
#
sub jira_issue {
    my ($self, %args) = @_;

    # verify the required parameter 'body' is set
    unless (exists $args{'body'}) {
      croak("Missing the required parameter 'body' when calling jira_issue");
    }

    # parse inputs
    my $_resource_path = '/v3/bug/jira/{jira_project_id}/create';

    my $_method = 'POST';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # body params
    if ( exists $args{'body'}) {
        $_body_data = $args{'body'};
    }

    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('JiraIssueResponse', $response);
    return $_response_object;
}

#
# neuron
#
# get devices status, in progress, allready added
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'neuron' } = { 
    	summary => 'get devices status, in progress, allready added',
        params => $params,
        returns => 'DeviceStatus',
        };
}
# @return DeviceStatus
#
sub neuron {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/node_ip:8080/v2/status';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('DeviceStatus', $response);
    return $_response_object;
}

#
# project
#
# Update Project
# 
# @param ProjectUpdatePayload $body  (required)
{
    my $params = {
    'body' => {
        data_type => 'ProjectUpdatePayload',
        description => '',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'project' } = { 
    	summary => 'Update Project',
        params => $params,
        returns => 'Project',
        };
}
# @return Project
#
sub project {
    my ($self, %args) = @_;

    # verify the required parameter 'body' is set
    unless (exists $args{'body'}) {
      croak("Missing the required parameter 'body' when calling project");
    }

    # parse inputs
    my $_resource_path = '/v3/project/{project_id}';

    my $_method = 'PUT';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type('application/json');

    my $_body_data;
    # body params
    if ( exists $args{'body'}) {
        $_body_data = $args{'body'};
    }

    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('Project', $response);
    return $_response_object;
}

1;