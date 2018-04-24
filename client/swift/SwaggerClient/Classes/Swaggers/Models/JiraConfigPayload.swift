//
// JiraConfigPayload.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class JiraConfigPayload: JSONEncodable {
    public var url: String?
    public var name: String?
    public var user: String?
    public var password: String?

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["url"] = self.url
        nillableDictionary["name"] = self.name
        nillableDictionary["user"] = self.user
        nillableDictionary["password"] = self.password
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}