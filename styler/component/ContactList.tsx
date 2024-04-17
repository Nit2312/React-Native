import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
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
    }

  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCards}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImages}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 8,
  },
  userCards: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#BB2CD9',
    padding: 4,
    borderRadius: 14
  },
  userImages: {
    height: 80,
    width: 80,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userStatus: {
    fontSize: 18,
  },
})