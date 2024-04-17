import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww'
                    }}
                    style= {styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Coding is Fun</Text>
                    <Text style={styles.cardLabel}>learing app developement</Text>
                    <Text style={styles.cardDescp}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam sapiente obcaecati facere hic rem? Dignissimos adipisci sequi asperiores impedit eius rerum aliquam ullam, necessitatibus veniam ipsum odit doloribus consectetur reiciendis! Consequuntur, fugiat amet.</Text>
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
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            height:1,
            width: 1
        },

    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: 'sherif',

    },
    cardLabel: {
        color: 'black',
        fontSize: 15,
        marginBottom: 4
    },
    cardDescp: {
        color: 'black',
        fontSize: 12
    }
})