//
//  CustomMethods.swift
//  vectordesign
//
//  Created by Luan on 17/01/2024.
//

import Foundation

@objc(CustomMethods) class CustomMethods: NSObject {
  @objc static func requireMainQueueSetup() -> Bool {return true}
  
  @objc public func MyMethod (_ param: String) {
    print(param)
    
    RNEventEmitter.emitter.sendEvent(withName: "onReady", body: [param])
  }
}
