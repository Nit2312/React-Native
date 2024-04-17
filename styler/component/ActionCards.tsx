import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(WebsiteLink: string) {
        Linking.openURL(WebsiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweQm8xRJPiSSsPolxg4_L9aNtWS8ffZx81A&usqp=CAU',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut asperiores velit, et ad aperiam rerum rem animi voluptatum modi porro, facere, vel molestias quibusdam eaque pariatur itaque nemo! Sit molestiae placeat deleniti dolorem?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, labore. Quidem perferendis magni corporis possimus distinctio minima aspernatur iure reprehenderit.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://en.wikipedia.org/wiki/India')}
                    >
                        <Text style={styles.specialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.youtube.com/')}
                    >
                        <Text style={styles.specialLinks}>Youtube</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        // flex: 1,
        // alignSelf: 'center'
    },
    card: {
        width: 350,
        height: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 10
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        padding: 8
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 8,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    specialLinks: {
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 10
    }
})

