//
//  BrowerImageView.h
//  vectordesign
//
//  Created by Luan on 23/01/2024.
//

#ifndef BrowerImageView_h
#define BrowerImageView_h

#import <React/RCTComponent.h>
#import <UIKit/UIKit.h>

@interface RCTBrowerImageView: UIImageView

@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end

#endif /* BrowerImageView_h */
