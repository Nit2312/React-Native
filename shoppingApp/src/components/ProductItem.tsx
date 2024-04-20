import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const productItem = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: product.imageUrl }}
                    style={styles.image}
                />
            </View>

            <View>
                <View>
                    <Text style={styles.name}>{product.name}</Text>
                </View>
                <View style={[styles.rowContainer, styles.ratingContainer]}>
                    <View>
                        <Text style={styles.rating}>{product.rating}★</Text>
                    </View>
                    <Text style={styles.ratingCount}>
                        ({product.ratingCount.toLocaleString()})
                    </Text>
                </View>
                <View style={[styles.rowContainer, styles.priceContainer]}>
                    <Text style={styles.originalPrice}>
                        ₹{product.originalPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.discountPrice}>
                        ₹{product.discountPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.offerPercentage}>
                        %{product.offerPercentage} off
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        width: 400,
        flexDirection: 'row',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',

        marginRight: 12,
    },
    name: {
        marginBottom: 4,
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
    },
    ratingContainer: {
        marginBottom: 8,
        color: 'black',
    },
    priceContainer: {
        marginBottom: 12,
    },
    rating: {
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
        marginRight: 4,
    },
    ratingText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    ratingCount: {
        color: '#878787',
    },
    originalPrice: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: '600',

        // color: 'rgba(0, 0, 0, 0.5)',
        color: 'black',
        textDecorationLine: 'line-through',
    },
    discountPrice: {
        fontSize: 18,
        marginRight: 4,
        fontWeight: '600',

        color: '#000000',
    },
    offerPercentage: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4bb550',
    },
});

export default productItem

