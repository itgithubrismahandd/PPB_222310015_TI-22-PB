import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


class MyProfile extends Component {
    constructor(props){
        super(props);
        viewProfile = {
            nama: "Risma Handayani",
            kelas: "TI-22-PB",
            npm: 222310015,
            kesibukan: "Belajar di perguruan tinggi IBI Kesatuan",
            alamat: "Kp. Sari Gading"
        }
    }

    render() {
        return (
            <View>
                <Text>My Profile</Text>
                <Text>Nama : {viewProfile.nama} </Text>
                <Text>Kelas : {viewProfile.kelas}</Text>
                <Text>NPM : {viewProfile.npm}</Text>
                <Text>Kesibukan : {viewProfile.kesibukan}</Text>
                <Text>Alamat : {viewProfile.alamat}</Text>
            </View>    
        );
    }
}

const styles = StyleSheet.create({});

export default MyProfile;
