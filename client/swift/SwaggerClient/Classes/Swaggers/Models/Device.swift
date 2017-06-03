//
// Device.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class Device: JSONEncodable {
    /** device id */
    public var device: String?
    public var deviceName: String?
    public var platformVersion: String?
    public var reverseKey: String?

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["device"] = self.device
        nillableDictionary["deviceName"] = self.deviceName
        nillableDictionary["platformVersion"] = self.platformVersion
        nillableDictionary["reverseKey"] = self.reverseKey
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
