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
package WWW::SwaggerClient::Object::Project;

require 5.6.0;
use strict;
use warnings;
use utf8;
use JSON qw(decode_json);
use Data::Dumper;
use Module::Runtime qw(use_module);
use Log::Any qw($log);
use Date::Parse;
use DateTime;

use WWW::SwaggerClient::Object::Number;

use base ("Class::Accessor", "Class::Data::Inheritable");


#
#
#
# NOTE: This class is auto generated by the swagger code generator program. Do not edit the class manually.
# REF: https://github.com/swagger-api/swagger-codegen
#

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
__PACKAGE__->mk_classdata('attribute_map' => {});
__PACKAGE__->mk_classdata('swagger_types' => {});
__PACKAGE__->mk_classdata('method_documentation' => {}); 
__PACKAGE__->mk_classdata('class_documentation' => {});

# new object
sub new { 
    my ($class, %args) = @_; 

	my $self = bless {}, $class;
	
	foreach my $attribute (keys %{$class->attribute_map}) {
		my $args_key = $class->attribute_map->{$attribute};
		$self->$attribute( $args{ $args_key } );
	}
	
	return $self;
}  

# return perl hash
sub to_hash {
    return decode_json(JSON->new->convert_blessed->encode( shift ));
}

# used by JSON for serialization
sub TO_JSON { 
    my $self = shift;
    my $_data = {};
    foreach my $_key (keys %{$self->attribute_map}) {
        if (defined $self->{$_key}) {
            $_data->{$self->attribute_map->{$_key}} = $self->{$_key};
        }
    }
    return $_data;
}

# from Perl hashref
sub from_hash {
    my ($self, $hash) = @_;

    # loop through attributes and use swagger_types to deserialize the data
    while ( my ($_key, $_type) = each %{$self->swagger_types} ) {
    	my $_json_attribute = $self->attribute_map->{$_key}; 
        if ($_type =~ /^array\[/i) { # array
            my $_subclass = substr($_type, 6, -1);
            my @_array = ();
            foreach my $_element (@{$hash->{$_json_attribute}}) {
                push @_array, $self->_deserialize($_subclass, $_element);
            }
            $self->{$_key} = \@_array;
        } elsif (exists $hash->{$_json_attribute}) { #hash(model), primitive, datetime
            $self->{$_key} = $self->_deserialize($_type, $hash->{$_json_attribute});
        } else {
        	$log->debugf("Warning: %s (%s) does not exist in input hash\n", $_key, $_json_attribute);
        }
    }
  
    return $self;
}

# deserialize non-array data
sub _deserialize {
    my ($self, $type, $data) = @_;
    $log->debugf("deserializing %s with %s",Dumper($data), $type);
        
    if ($type eq 'DateTime') {
        return DateTime->from_epoch(epoch => str2time($data));
    } elsif ( grep( /^$type$/, ('int', 'double', 'string', 'boolean'))) {
        return $data;
    } else { # hash(model)
        my $_instance = eval "WWW::SwaggerClient::Object::$type->new()";
        return $_instance->from_hash($data);
    }
}



__PACKAGE__->class_documentation({description => '',
                                  class => 'Project',
                                  required => [], # TODO
}                                 );

__PACKAGE__->method_documentation({
    '_id' => {
    	datatype => 'string',
    	base_name => '_id',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'name' => {
    	datatype => 'string',
    	base_name => 'name',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'org' => {
    	datatype => 'string',
    	base_name => 'org',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'os' => {
    	datatype => 'string',
    	base_name => 'os',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'icon64' => {
    	datatype => 'string',
    	base_name => 'icon64',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'type' => {
    	datatype => 'string',
    	base_name => 'type',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'url' => {
    	datatype => 'string',
    	base_name => 'url',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'bug_project' => {
    	datatype => 'string',
    	base_name => 'bugProject',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'admin' => {
    	datatype => 'ARRAY[string]',
    	base_name => 'admin',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'users' => {
    	datatype => 'ARRAY[string]',
    	base_name => 'users',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'test_c' => {
    	datatype => 'Number',
    	base_name => 'test_c',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'active' => {
    	datatype => 'boolean',
    	base_name => 'active',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'is_universal' => {
    	datatype => 'boolean',
    	base_name => 'is_universal',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'last' => {
    	datatype => 'string',
    	base_name => 'last',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'created' => {
    	datatype => 'string',
    	base_name => 'created',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'updated' => {
    	datatype => 'string',
    	base_name => 'updated',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'update_by' => {
    	datatype => 'string',
    	base_name => 'update_by',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'created_by' => {
    	datatype => 'string',
    	base_name => 'created_by',
    	description => '',
    	format => '',
    	read_only => '',
    		},
});

__PACKAGE__->swagger_types( {
    '_id' => 'string',
    'name' => 'string',
    'org' => 'string',
    'os' => 'string',
    'icon64' => 'string',
    'type' => 'string',
    'url' => 'string',
    'bug_project' => 'string',
    'admin' => 'ARRAY[string]',
    'users' => 'ARRAY[string]',
    'test_c' => 'Number',
    'active' => 'boolean',
    'is_universal' => 'boolean',
    'last' => 'string',
    'created' => 'string',
    'updated' => 'string',
    'update_by' => 'string',
    'created_by' => 'string'
} );

__PACKAGE__->attribute_map( {
    '_id' => '_id',
    'name' => 'name',
    'org' => 'org',
    'os' => 'os',
    'icon64' => 'icon64',
    'type' => 'type',
    'url' => 'url',
    'bug_project' => 'bugProject',
    'admin' => 'admin',
    'users' => 'users',
    'test_c' => 'test_c',
    'active' => 'active',
    'is_universal' => 'is_universal',
    'last' => 'last',
    'created' => 'created',
    'updated' => 'updated',
    'update_by' => 'update_by',
    'created_by' => 'created_by'
} );

__PACKAGE__->mk_accessors(keys %{__PACKAGE__->attribute_map});


1;
