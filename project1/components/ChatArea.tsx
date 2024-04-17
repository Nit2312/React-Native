import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ChatArea() {
    const contacts = [
        {
            uid: 1,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://i.pinimg.com/736x/52/c6/65/52c665df0515dd447eb92544374cf543.jpg',
        },
        {
            uid: 2,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoA8GO0BgJoJYBsWgd1QfUGJeeOofB_49zvPw9rHAPA&s',
        },
        {
            uid: 3,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6Wyyn4cZ9Gq3_1IqglJDDwF9qWuNjUtJZcdTHTMeQQ&s',
        },
        {
            uid: 4,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nJNvE6omO5h8_UOe-HvY1_Sdn31Ldjlr2ryH--Bptg&s',
        },
        {
            uid: 5,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hZNEqrJ0spOGTGd87spI0hcRYoqExt2efkTCB4CX4g&s',
        },
        {
            uid: 6,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://image.pngaaa.com/355/81355-middle.png',
        },
        {
            uid: 7,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GLq_voIkw7qBXkzJGzwoe-wKR4rrHxBJA4si1iq1HQ&s',
        },
        {
            uid: 8,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://i.pinimg.com/736x/52/c6/65/52c665df0515dd447eb92544374cf543.jpg',
        },
        {
            uid: 9,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoA8GO0BgJoJYBsWgd1QfUGJeeOofB_49zvPw9rHAPA&s',
           
        },
        {
            uid: 10,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6Wyyn4cZ9Gq3_1IqglJDDwF9qWuNjUtJZcdTHTMeQQ&s',
        },
        {
            uid: 11,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nJNvE6omO5h8_UOe-HvY1_Sdn31Ldjlr2ryH--Bptg&s',
        },
        {
            uid: 12,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hZNEqrJ0spOGTGd87spI0hcRYoqExt2efkTCB4CX4g&s',
        },
        {
            uid: 13,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://image.pngaaa.com/355/81355-middle.png',
        },
        {
            uid: 14,
            name: 'Lion',
            status: 'Lorem ipsum dolor sit amet consectetur?',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GLq_voIkw7qBXkzJGzwoe-wKR4rrHxBJA4si1iq1HQ&s',
        },
    ];
    function openWebsite(WebsiteLink: string) {
        Linking.openURL(WebsiteLink)
    }
    return (
        <View>
            <ScrollView scrollEnabled={true} style={styles.container}>
                {contacts.map(({ uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCards}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.userImages}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text numberOfLines={1}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginTop: 25
    },
    userCards: {
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
    },
    userImages: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 12,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    userChat: {},
    specialLinks: {},

})