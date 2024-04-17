import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Status() {
    const contacts = [
        {
            uid: 1,
            name: 'Lion',
            status: 'The king',
            imageUrl: 'https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg',
        },
        {
            uid: 2,
            name: 'Tiger',
            status: 'The Strongest',
            imageUrl: 'https://economictimes.indiatimes.com/thumb/msid-93218197,width-1200,height-900,resizemode-4,imgsize-156160/night-mode-off-5.jpg?from=mdr',
        },
        {
            uid: 3,
            name: 'Lion',
            status: 'The king',
            imageUrl: 'https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg',
        },
        {
            uid: 4,
            name: 'Tiger',
            status: 'The Strongest',
            imageUrl: 'https://economictimes.indiatimes.com/thumb/msid-93218197,width-1200,height-900,resizemode-4,imgsize-156160/night-mode-off-5.jpg?from=mdr',
        },
        {
            uid: 5,
            name: 'Lion',
            status: 'The king',
            imageUrl: 'https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg',
        },
        {
            uid: 6,
            name: 'Tiger',
            status: 'The Strongest',
            imageUrl: 'https://economictimes.indiatimes.com/thumb/msid-93218197,width-1200,height-900,resizemode-4,imgsize-156160/night-mode-off-5.jpg?from=mdr',
        },
        {
            uid: 7,
            name: 'Lion',
            status: 'The king',
            imageUrl: 'https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg',
        },
        {
            uid: 8,
            name: 'Tiger',
            status: 'The Strongest',
            imageUrl: 'https://economictimes.indiatimes.com/thumb/msid-93218197,width-1200,height-900,resizemode-4,imgsize-156160/night-mode-off-5.jpg?from=mdr',
        },

    ];
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container}>
                {contacts.map(({ uid, name, imageUrl }) => (
                    <View key={uid} style={styles.userCards}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.userImages}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    userCards:{
        marginHorizontal: 12,
    },
    userImages:{
        height: 65,
        width: 65,
        borderRadius: 50,
    },
    userName:{
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        color: 'black'
    },
})
