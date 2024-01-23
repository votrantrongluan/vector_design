
import Foundation
import AVFoundation
import React

@objc(QRScannerModule)
class QRScannerModule: RCTEventEmitter {
  @objc static func requireMainQueueSetup() -> Bool {return true}
  private var hasListeners = false

  override init() {
    super.init()
    // Set up your QR scanner here
  }

  override func supportedEvents() -> [String]! {
    return ["onQRCodeScanned"]
  }

  override func startObserving() {
    hasListeners = true
  }

  override func stopObserving() {
    hasListeners = false
  }

  @objc public func startScanning() {
    print(hasListeners)
    startObserving()
    // Start scanning using AVFoundation
    // When a QR code is scanned, send an event to React Native
    if hasListeners {
      self.sendEvent(withName: "onQRCodeScanned", body: ["qrCode": "scannedQRCodeValue"])
    }
  }


}
