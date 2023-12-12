import React from "react";
import { View, Text, Button } from "react-native";
import enTranslations from "./src/locales/en";
import arTranslations from "./src/locales/ar";
import * as Localization from "expo-localization";

const App = () => {
  const [currentLocale, setCurrentLocale] = React.useState(Localization.locale);
  const [translations, setTranslations] = React.useState(
    currentLocale.startsWith("en") ? enTranslations : arTranslations
  );

  const handleLanguageChange = (newLocale) => {
    setCurrentLocale(newLocale);
    setTranslations(
      newLocale.startsWith("en") ? enTranslations : arTranslations
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        margin: 50,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 , marginBottom:30 }}>{translations.welcome}</Text>
      
      {currentLocale.startsWith("en") ? (
        <Button
          title="Switch to Arabic"
          onPress={() => handleLanguageChange("ar")}
        />
      ) : (
        <Button
          title="Switch to English"
          onPress={() => handleLanguageChange("en")}
        />
      )}
      {/* Add more buttons for other languages */}
    </View>
  );
};

export default App;
