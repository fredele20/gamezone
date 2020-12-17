import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Card from '../shared/card'
import { globalStyles, images } from '../styles/global'

export default function Reviews({ navigation }) {

  const rating = navigation.getParam('rating')

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.ratings}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  ratings: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})
