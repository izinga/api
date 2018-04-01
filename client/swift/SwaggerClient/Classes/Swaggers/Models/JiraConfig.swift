//
// JiraConfig.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


public class JiraConfig: JSONEncodable {
    public var id: String?
    public var source: String?
    public var type: String?
    public var url: String?
    public var name: String?
    public var user: String?
    public var password: String?
    public var createdBy: String?
    public var updated: String?
    public var created: String?

    public init() {}

    // MARK: JSONEncodable
    func encodeToJSON() -> AnyObject {
        var nillableDictionary = [String:AnyObject?]()
        nillableDictionary["_id"] = self.id
        nillableDictionary["source"] = self.source
        nillableDictionary["type"] = self.type
        nillableDictionary["url"] = self.url
        nillableDictionary["name"] = self.name
        nillableDictionary["user"] = self.user
        nillableDictionary["password"] = self.password
        nillableDictionary["createdBy"] = self.createdBy
        nillableDictionary["updated"] = self.updated
        nillableDictionary["created"] = self.created
        let dictionary: [String:AnyObject] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
