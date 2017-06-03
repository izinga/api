# coding: utf-8

"""
    RobusTest Hub

    RobusTest Hub Api [http://mobile.robustest.com:8085 

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from pprint import pformat
from six import iteritems
import re


class InlineResponse2001(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, status=None, msg=None):
        """
        InlineResponse2001 - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'status': 'bool',
            'msg': 'str'
        }

        self.attribute_map = {
            'status': 'status',
            'msg': 'msg'
        }

        self._status = status
        self._msg = msg

    @property
    def status(self):
        """
        Gets the status of this InlineResponse2001.

        :return: The status of this InlineResponse2001.
        :rtype: bool
        """
        return self._status

    @status.setter
    def status(self, status):
        """
        Sets the status of this InlineResponse2001.

        :param status: The status of this InlineResponse2001.
        :type: bool
        """

        self._status = status

    @property
    def msg(self):
        """
        Gets the msg of this InlineResponse2001.
        raw adb command output

        :return: The msg of this InlineResponse2001.
        :rtype: str
        """
        return self._msg

    @msg.setter
    def msg(self, msg):
        """
        Sets the msg of this InlineResponse2001.
        raw adb command output

        :param msg: The msg of this InlineResponse2001.
        :type: str
        """

        self._msg = msg

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        if not isinstance(other, InlineResponse2001):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other
