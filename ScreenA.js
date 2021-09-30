import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default ((props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('ScreenB')}>
                <Text>Move to Screen B</Text>
            </TouchableOpacity>
        </View>
    )
})