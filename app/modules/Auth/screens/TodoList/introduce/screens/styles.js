import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity, } from "react-native";

export default (props) => {
    
    
    const renderSpace = () => {
        return (
            <View 
				style = {{
					height: 450,
				}}>
			</View>
			
        )
    }

    const renderButton = () => {
        return (
            <View 
				style = {{
					height: 65,
					alignSelf: "stretch",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#53B175",
					borderRadius: 20,
					margin: 16,
				}}>
				<Text 
					style = {{
						color: "#FFF9FF",
						fontSize: 18,
						fontWeight: "bold",
					}}>
					{"Get Started"}
				</Text>
			</View>
			
        )
    }

    const renderBody = () => {
        return (
            <View 
				style = {{
					flex: 1,
					alignItems: "center",
				}}>
				<Image
					source = {{uri:"https://raw.githubusercontent.com/coredxor/images/main/crot.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 70,
						height: 70,
					}}
				/>
				<Text 
					style = {{
						color: "#ffffff",
						fontSize: 50,
						fontWeight: "bold",
						margin: 20,
					}}>
					{"Welcome"}
				</Text>
				<Text 
					style = {{
						color: "#FCFCFC",
						fontSize: 15,
						marginBottom: 20,
					}}>
					{"Ger your groceries in as fast as one hour"}
				</Text>
				{renderButton()}
			</View>
			
        )
    }

    return (
        <View 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ImageBackground 
				source={{uri:'https://raw.githubusercontent.com/coredxor/images/main/zzz.png'}} 
				resizeMode = {'stretch'}
				style = {{
					flex: 1,
				}}
				>
				{renderSpace()}
				{renderBody()}
			</ImageBackground>
		</View>
		
    )
}
