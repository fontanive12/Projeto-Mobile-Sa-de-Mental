import React from 'react';
import { View } from 'react-native';
// import Toast from 'react-native-toast-message';
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const messages = {
    success,
    error,
    info
}

    function success(title: string, text: string) {
        Toast.show({
            type: 'success',
            text1: title,
            text2: text,
        });
        console.log('sucess');
    }

    function error(title: string, text: string) {
        Toast.show({
            type: 'error',
            text1: title,
            text2: text,
            position: 'top',
        });
        console.log('error');
    }

    function info(title: string, text: string) {
        Toast.show({
            type: 'info',
            text1: title,
            text2: text,
            position: 'top',
        });
        console.log('info ')
    }
