//
//  QRScannerModule.m
//  vectordesign
//
//  Created by Luan on 17/01/2024.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(QRScannerModule, RCTEventEmitter)

RCT_EXTERN_METHOD(startScanning)

@end
