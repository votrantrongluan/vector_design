//
//  CustomMethods.m
//  vectordesign
//
//  Created by Luan on 17/01/2024.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CustomMethods, NSObject)

RCT_EXTERN_METHOD(MyMethod : (NSString *) param)

@end
