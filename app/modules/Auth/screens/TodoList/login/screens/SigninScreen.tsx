import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
// import {
//   GoogleSignin,
//   statusCodes,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin'

// GoogleSignin.configure({
//   // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '',
//   // iosClientId: '835542925315-g9nrgvc7idr8v76uraehor80ncsmff9k.apps.googleusercontent.com',
//   offlineAccess: false
// })

export default (props: any) => {
  const [state, setState] = useState<any>(null)
  const renderLogo = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          margin: 50,
        }}
      >
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/coredxor/images/main/carot_login.png',
          }}
          resizeMode={'stretch'}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
    )
  }

  const renderEmail = () => {
    return (
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            color: '#7C7C7C',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        >
          {'Email'}
        </Text>
        <TextInput
          value={'redxor@gmail.com'}
          style={{
            color: '#181725',
            fontSize: 18,
            marginVertical: 12,
            height: 22,
            backgroundColor: '#ffffff',
          }}
        />
        <View
          style={{
            height: 1,
            backgroundColor: '#E2E2E2',
          }}
        ></View>
      </View>
    )
  }

  const renderPassword = () => {
    return (
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            color: '#7C7C7C',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        >
          {'Password'}
        </Text>
        <TextInput
          value={'*************'}
          style={{
            color: '#181725',
            fontSize: 18,
            marginTop: 12,
            marginBottom: 8,
            height: 22,
            backgroundColor: '#ffffff',
          }}
        />
        <View
          style={{
            height: 1,
            backgroundColor: '#E2E2E2',
          }}
        ></View>
      </View>
    )
  }

  const _signIn = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   setState({ userInfo });
    // } catch (error: any) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //   } else {
    //     // some other error happened
    //   }
    // }
  }

  const renderButtonLogin = () => {
    return (
        <TouchableOpacity
          onPress={_signIn}
          style={{
            height: 65,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#53B175',
            borderRadius: 20,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              color: '#FFF9FF',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {'LOG IN'}
          </Text>
        </TouchableOpacity>
      // <GoogleSigninButton
      //   size={GoogleSigninButton.Size.Wide}
      //   color={GoogleSigninButton.Color.Dark}
      //   onPress={_signIn}
      // />
    )
  }

  const renderCanSignup = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#181725',
            fontSize: 14,
          }}
        >
          {'Don’t have an account?'}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#53B175',
              fontSize: 14,
            }}
          >
            {' Signup'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}
    >
      <ImageBackground
        source={{
          uri:
            'https://raw.githubusercontent.com/coredxor/images/main/bk_login.png',
        }}
        resizeMode={'stretch'}
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {renderLogo()}
        <Text
          style={{
            color: '#181725',
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          {'Login'}
        </Text>
        <Text
          style={{
            color: '#7C7C7C',
            fontSize: 16,
            marginVertical: 20,
          }}
        >
          {'Enter your emails and password'}
        </Text>
        {renderEmail()}
        {renderPassword()}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
            }}
          ></View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#181725',
                fontSize: 14,
              }}
            >
              {'Forgot Password?'}
            </Text>
          </TouchableOpacity>
        </View>
        {renderButtonLogin()}
        {renderCanSignup()}
      </ImageBackground>
    </View>
  )
}
