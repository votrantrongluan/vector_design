////
////  BrowserViewManager.m
////  vectordesign
////
////  Created by Luan on 23/01/2024.
////
//
//#import <Foundation/Foundation.h>

//#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RCTBrowserViewManager : RCTViewManager
@end

@implementation RCTBrowserViewManager

RCT_EXPORT_MODULE(RCTBrowserViewManager)

- (UIView *)view
{
  return [[UIView alloc] init];
}

@end
