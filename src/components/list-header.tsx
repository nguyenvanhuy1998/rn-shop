import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { CATEGORIES } from "../../assets/categories";

const ListHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerTop}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{
                                uri: "https://placehold.co/40x40.png",
                            }}
                            style={styles.avatarImage}
                        />
                        <Text style={styles.avatarText}>
                            Hello codewithGemini
                        </Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <Link href={"/cart"} asChild style={styles.cartContainer}>
                        <Pressable>
                            {({ pressed }) => (
                                <View>
                                    <FontAwesome
                                        name="shopping-cart"
                                        size={25}
                                        color={"gray"}
                                        style={{}}
                                    />
                                    <View style={styles.badgeContainer}>
                                        <Text style={styles.badgeText}>1</Text>
                                    </View>
                                </View>
                            )}
                        </Pressable>
                    </Link>
                    <TouchableOpacity style={styles.signOutButton}>
                        <FontAwesome name="sign-out" size={25} color={"red"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.heroContainer}>
                <Image
                    source={require("../../assets/images/hero.png")}
                    style={styles.heroImage}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <FlatList
                    data={CATEGORIES}
                    renderItem={({ item }) => (
                        <Link href={`/categories/${item.slug}`} asChild>
                            <Pressable style={styles.category}>
                                <Image
                                    source={{
                                        uri: item.imageUrl,
                                    }}
                                    style={styles.categoryImage}
                                />
                                <Text style={styles.categoryText}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        </Link>
                    )}
                    keyExtractor={(item) => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default ListHeader;

const styles = StyleSheet.create({
    headerContainer: {
        gap: 20,
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        resizeMode: "cover",
    },
    avatarText: {
        fontSize: 16,
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    cartContainer: {
        padding: 10,
    },
    badgeContainer: {
        position: "absolute",
        top: -5,
        right: 10,
        backgroundColor: "#1BC464",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
    },
    signOutButton: {
        padding: 10,
    },
    heroContainer: {
        width: "100%",
        height: 200,
    },
    heroImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 20,
    },
    categoriesContainer: {},
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    category: {
        width: 100,
        alignItems: "center",
        marginBottom: 16,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    categoryText: {},
});
