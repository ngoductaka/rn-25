import React from 'react'
import { View, Text, TouchableOpacity, Image, Button, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const App = () => {
    const [image, setImage] = React.useState(null);
    const handleUpload = async (photo) => {
        try {
            const data = new FormData();
            data.append('avatar', {
                name: photo.fileName,
                type: photo.type,
                uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
            });
            console.log('data append', {
                name: photo.fileName,
                type: photo.type,
                uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
            })
            const res = await fetch(`http://192.168.12.104:3000/upload/dnd`, {
                method: 'POST',
                body: data,
              })
            // const { data: res } = await axios.post('http://192.168.12.104:3000/upload/dnd', data)
            console.log(res, 'date image=============');


        } catch (error) {
            console.log(error, 'errors');
        };

    };

    const handleCamera = () => {
        launchCamera({
            mediaType: 'photo',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }, (response) => {
            console.log(response);
            setImage(response?.assets[0])
        });
    }

    const handleLibrary = () => {
        launchImageLibrary({
            mediaType: 'photo',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }, (response) => {
            console.log(response);
            setImage(response?.assets[0])
        });
    }
    console.log(image?.uri ? 'true' : 'false', '===', image?.uri);
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }}>
            <TouchableOpacity onPress={handleCamera}>
                <Text>Open camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLibrary}>
                <Text>Open Library</Text>
            </TouchableOpacity>

            {image ? <Button title="Upload" onPress={() => handleUpload(image)} /> : null}
            {image?.uri ?
                <Image source={{ uri: image.uri }}
                    // style={{ height: 40 }}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"

                />
                : <Text>No ==</Text>}

            {/* <Image
                resizeMode="contain"
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
                style={{ width: 200, height: 200 }}
            /> */}
        </View>

    )
}

export default App;