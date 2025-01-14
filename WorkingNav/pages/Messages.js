import React from 'react';
import { StyleSheet, Button, ScrollView, View, Text, TextInput, Image } from 'react-native';
import CoolButton from '../components/CoolButton';
import ImageLoader from "../components/ImageLoader";

function Messages({ route, navigation }) {
    /* 2. Get the param */
    const { image, name, status, description, messages, messageCount, areMatched } = route.params;

    const list = []

    const webpage = []

    for (var i = 0; i < messageCount; i++) {
        list.push(<View style={backgroundStyles.inputView}>
            <Text
            id = "message"
            style={backgroundStyles.TextInput}>{messages[i].text}</Text>
            </View>)
    }

    function checkAreMatched()
    {
        if(areMatched == "true")
        {
            webpage.push(
                <View>
                <Text>{list}</Text>
                <View style={backgroundStyles.inputView}>
                    <TextInput
                    id = "message"
                    style={backgroundStyles.TextInput}
                    placeholder="Insert Message Here"
                    placeholderTextColor="#003f5c"
                    />
                </View>
                </View>
            )
        }
        else
        {
            webpage.push(
                    <View>
                    <Button style={buttonStyles.container} title={"Match"} onPress={({areMatched}) => areMatched = "true"}/>
                    </View>
            )
        }
    }
    
    checkAreMatched();

    return (
        <ScrollView contentContainerStyle={backgroundStyles.container}>
            <View style={titleStyles.title}>
            <Image style={backgroundStyles.image1} source={image} />
            <Text style={subtitles.title}>{name} - {status}</Text>
            <Text style={small.title}>{description}</Text>
            <View>{webpage}</View>
            </ View>
        
        </ScrollView>
       
      );
  }



const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: 10,
    },
    image: {
      marginTop: 5
    },
    text: {
        marginHorizontal: 0,
        marginVertical: 5
    }
    }
  );

const subtitles = StyleSheet.create({
    
        title: { 
          flex: 3, 
          alignItems: 'center', 
          justifyContent: "space-around", 
          color: 'black', 
          fontSize: 48, 
          fontStyle: 'italic', 
          fontWeight: 'bold', 
          backgroundColor: '#A083B6',
          borderWidth: 3,
          borderColor: "thistle",
      }
})

const small = StyleSheet.create({
    
    title: { 
      flex: 3, 
      alignItems: 'center', 
      justifyContent: "space-around", 
      color: 'black', 
      fontSize: 32, 
      fontStyle: 'italic', 
      fontWeight: 'bold', 
      backgroundColor: '#A083B6',
      borderWidth: 3,
      borderColor: "thistle",
  }
})

const button = StyleSheet.create({
    
    but: { 
        position: 'absolute',
        bottom:0,
        left:0,
  }
})



const backgroundStyles = StyleSheet.create(
     {
        container: { flex: 1, alignItems: 'center', backgroundColor: '#9FA8DA'
        },
        image1: {
          flex: 1,
          width: 100,
          height: 125,
          marginTop: 0,
          marginLeft: 0
        },

        inputView: {
            backgroundColor: "#4BCBDF",
            borderRadius: 30,
            width: "70%",
            height: 45,
            marginBottom: 0,
            justifyContent:"space-evenly",
        
            alignItems: "center",
        },
        
        TextInput: {
            width: 300,
            height: "70%",
            flex: 1,
            padding: 5,
            marginLeft: 0,
            textAlign: 'center',
            alignItems: "center",
  },
});

const anotherBackground = StyleSheet.create(
  {
    container: { 
      flex: 4, 
      alignItems: 'center', 
      justifyContent: 'space-evenly', 
      backgroundColor: '#A083B6',
      borderWidth: 3,
      borderColor: "thistle",
    },

 }
);

const titleStyles = StyleSheet.create(
    {
      title: { 
        flex: 3, 
        alignItems: 'center', 
        justifyContent: "space-evenly", 
        color: 'black', 
        fontSize: 64, 
        fontStyle: 'italic', 
        fontWeight: 'bold', 
        backgroundColor: '#A083B6',
        borderWidth: 3,
        borderColor: "thistle",
    }
  }

   
);

export default Messages;