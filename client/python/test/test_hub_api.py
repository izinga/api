# coding: utf-8

"""
    RobusTest Hub

    RobusTest Hub Api [http://mobile.robustest.com:8085 

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import os
import sys
import unittest

import swagger_client
from swagger_client.rest import ApiException
from swagger_client.apis.hub_api import HubApi


class TestHubApi(unittest.TestCase):
    """ HubApi unit test stubs """

    def setUp(self):
        self.api = swagger_client.apis.hub_api.HubApi()

    def tearDown(self):
        pass

    def test_device_command_post(self):
        """
        Test case for device_command_post

        run adb  command
        """
        pass

    def test_device_delete(self):
        """
        Test case for device_delete

        free device
        """
        pass

    def test_device_put(self):
        """
        Test case for device_put

        get free device based on given parameters
        """
        pass

    def test_device_reverse_delete(self):
        """
        Test case for device_reverse_delete

        unrevrse the device
        """
        pass

    def test_device_reverse_put(self):
        """
        Test case for device_reverse_put

        reverse a device
        """
        pass

    def test_device_shell_post(self):
        """
        Test case for device_shell_post

        run adb shell command
        """
        pass

    def test_devices(self):
        """
        Test case for devices

        list all attached devices to RobusTest
        """
        pass


if __name__ == '__main__':
    unittest.main()
