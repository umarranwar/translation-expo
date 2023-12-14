// DetailsScreen.js
import React from "react";
import { useTranslation } from "react-i18next";
import iphone from "../../assets/iphone.jpg";

import { View, Text, Button, Image, TouchableOpacity } from "react-native";

const DetailsScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <View>
          <Image
            style={{
              height: 550,
              width: 440,
              borderRadius: 20,
            }}
            source={iphone}
          />
        </View>
        <View style={{ marginHorizontal: 50, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Sar 5000</Text>
          <Text>{t("desc")}</Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              borderRadius: 50,
              backgroundColor: "#ff974d",
              paddingHorizontal: 20,
              padding: 5,
              marginVertical:20 
            }}
          >
            <Text
              style={{ fontSize: 15, color: "white" }}
              onPress={() => navigation.navigate("Details")}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button title="English" onPress={() => changeLanguage("ar")} />
          <Button title="Arabic" onPress={() => changeLanguage("en")} />
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
