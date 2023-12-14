// // // import React from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   Image,
// // //   Button,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ScrollView,
// // // } from "react-native";

// // // // import * as Localization from "expo-localization";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import Animated from "react-native-reanimated";

// // // const HomeScreen = ({ navigation }) => {

// // //   // const scrollY = new Animated.Value(0);
// // //   // const HEADER_HEIGHT = 70;

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={[styles.header, { height: 200 }]}>
// // //         <TouchableOpacity style={styles.iconBg}>
// // //           <Ionicons name="location-outline" size={45} color="#ed9b42" />
// // //         </TouchableOpacity>
// // //         <View>
// // //           <Image
// // //             style={styles.logo}
// // //             source={require("../../assets/logo.png")}
// // //           />
// // //         </View>
// // //         <TouchableOpacity style={styles.iconBg}>
// // //           <Ionicons name="person-outline" size={40} color="#ed9b42" />
// // //         </TouchableOpacity>
// // //       </View>
// // {
// //   /* <ScrollView>
// //   {images.map((image) => (
// //     <View
// //       key={image.id}
// //       style={{
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexDirection: "column",
// //         width: "100%",
// //       }}
// //     >
// //       <View style={{ flex: 1 }}>
// //         <Image
// //           style={{
// //             height: 550,
// //             width: 440,
// //             borderRadius: 20,
// //           }}
// //           source={image.uri}
// //         />
// //       </View>
// //       <View style={{ margin: 20 }}>
// //         <Text style={{ fontWeight: "bold" }}>{image.price}</Text>
// //         <Text>{image.desc}</Text>
// //         <TouchableOpacity
// //           style={{
// //             alignSelf: "center",
// //             borderRadius: 50,
// //             backgroundColor: "orange",
// //             paddingHorizontal: 20,
// //             padding: 5,
// //           }}
// //         >
// //           <Text style={{ fontSize: 15, color: "white" }}>Add to Cart</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   ))}
// // </ScrollView>; */
// // }
// // //       {/* <View style={styles.card}>
// // //         <Text style={{ fontSize: 30, marginBottom: 30 }}>
// // //           {translations.welcome}
// // //         </Text>

// // //         {currentLocale.startsWith("en") ? (
// // //           <Button
// // //             title="Switch to Arabic"
// // //             onPress={() => handleLanguageChange("ar")}
// // //           />
// // //         ) : (
// // //           <Button
// // //             title="Switch to English"
// // //             onPress={() => handleLanguageChange("en")}
// // //           />
// // //         )}
// // //       </View> */}
// // //     </View>
// // //   );
// // // };

// // // const images = [
// // //   {
// // //     id: 1,
// // //     uri: require("../../assets/iphone.jpg"),
// // //     price: "SAR 5000",
// // //     desc: { enTranslations },
// // //   },
// // //   {
// // //     id: 1,
// // //     uri: require("../../assets/iphone.jpg"),
// // //     price: "SAR 5000",
// // //     desc: { enTranslations },
// // //   },
// // //   {
// // //     id: 1,
// // //     uri: require("../../assets/iphone.jpg"),
// // //     price: "SAR 5000",
// // //     desc: { enTranslations },
// // //   },
// // //   {
// // //     id: 1,
// // //     uri: require("../../assets/iphone.jpg"),
// // //     price: "SAR 5000",
// // //     desc: { enTranslations },
// // //   },
// // // ];

// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import * as Localization from "expo-localization";
// import i18n from "../../i18n";

// import {
//   View,
//   Text,
//   Button,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import iphone from "../../assets/iphone.jpg";

// const HomeScreen = ({ navigation }) => {
//   const [isEnglish, setIsEnglish] = useState("en");
//   const { t } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setIsEnglish(lng);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={[styles.header, { height: 150 }]}>
//         <TouchableOpacity style={styles.iconBg}>
//           <Ionicons name="location-outline" size={45} color="#ed9b42" />
//         </TouchableOpacity>
//         <View>
//           <Image
//             style={styles.logo}
//             source={require("../../assets/logo.png")}
//           />
//         </View>
//         <TouchableOpacity style={styles.iconBg}>
//           <Ionicons name="person-outline" size={40} color="#ed9b42" />
//         </TouchableOpacity>
//       </View>
//       <View style={{ marginTop: 85, marginLeft: 100 }}>
//         {isEnglish !== "en" ? (
//           <TouchableOpacity onPress={() => changeLanguage("en")}>
//             <Text style={{ color: "white" }}>Arabic</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity onPress={() => changeLanguage("ar")}>
//             <Text style={{ color: "white" }}>English</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           width: "100%",
//         }}
//       >
//         <View>
//           <Image
//             style={{
//               height: 550,
//               width: 440,
//               borderRadius: 20,
//             }}
//             source={iphone}
//           />
//         </View>
//         <View style={{ marginHorizontal: 50, marginTop: 20 }}>
//           <Text style={{ fontWeight: "bold" }}>Sar 5000</Text>
//           <Text>{t("desc")}</Text>
//           <TouchableOpacity
//             style={{
//               alignSelf: "center",
//               borderRadius: 50,
//               backgroundColor: "#ff974d",
//               paddingHorizontal: 20,
//               padding: 5,
//               marginTop:20
//             }}
//           >
//             <Text
//               style={{ fontSize: 15, color: "white" }}
//               onPress={() => navigation.navigate("Details")}
//             >
//               Add to Cart
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   card: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 20,
//   },
//   header: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     width: "100%",
//     backgroundColor: "#ff974d",
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   iconBg: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     width: 60,
//     height: 60,
//     margin: 20,
//     borderRadius: 100,
//     marginTop: 70,
//   },
//   logo: {
//     width: 200,
//     height: 60,
//     marginTop: 40,
//   },
// });





import React, { useState, useRef } from 'react';
import { View, ScrollView, Animated, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = 200; // Height of the collapsible header
  const scrollThreshold = headerHeight - 50; // Threshold for header collapsing

  const headerHeightAnim = scrollY.interpolate({
    inputRange: [0, scrollThreshold],
    outputRange: [headerHeight, 50],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Content before collapsible header */}
        <View style={{ height: 2000, backgroundColor:'purple' }}>
          <Text>Scrollable Content</Text>
        </View>
        <View style={{ height: 2000 }}>
          <Text>Scrollable Content</Text>
        </View><View style={{ height: 2000 }}>
          <Text>Scrollable Content</Text>
        </View>
      </ScrollView>

      {/* Collapsible Header */}
      <Animated.View style={[styles.header, { height: headerHeightAnim }]}>
        <Text style={styles.headerText}>Header Content</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
