////
////  RCTBrowserViewManafer.m
////  vectordesign
////
////  Created by Luan on 23/01/2024.
////
//
//#import <Foundation/Foundation.h>

#import "RCTBrowerViewManager.h"
#import "RCTBrowerImageView.h"

@implementation RCTBrowerViewManager

RCTBrowerImageView *wrapper;

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

RCT_EXPORT_MODULE(RCTBrowserViewManager)

- (UIView *)view
{
  UIImage* image = [UIImage imageNamed: @"Google"];
  wrapper = [[RCTBrowerImageView alloc] initWithImage:image];

  UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onPressNative)];
  
  [wrapper setUserInteractionEnabled:true];
  [wrapper addGestureRecognizer:tap];
  wrapper.alpha = 0.9;
  
  return wrapper;
}

- (void) onPressNative
{
  // do something
  NSLog(@"single Tap on imageView");

  wrapper.onPress(@{
    @"message": @"Hello"
  });
  
  // Create Alert and set the delegate to listen events
//  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Today's Entry Complete"
//                                                  message:@"Press OK to submit your data!"
//                                                 delegate:self
//                                        cancelButtonTitle:nil
//                                        otherButtonTitles:@"OK", nil];
//
//  // Set the tag to alert unique among the other alerts.
//  // So that you can find out later, which alert we are handling
//  alert.tag = 100;
//
//  [alert show];
  
  [UIView transitionWithView:wrapper
                    duration:1.4
                     options:UIViewAnimationOptionTransitionFlipFromTop
                  animations:^{
                      //  Set the new image
                      //  Since its done in animation block, the change will be animated
                      // imageView.image = newImage;
                      wrapper.alpha = 1.0 - wrapper.alpha;
                  } completion:^(BOOL finished) {
                      //  Do whatever when the animation is finished
                  }];
}

@end

