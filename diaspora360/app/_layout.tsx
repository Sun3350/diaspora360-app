import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Keep splash visible until WebView finishes loading
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={styles.container}
        source={{ uri: "https://diaspora360.org/" }}
        onLoadEnd={() => setIsReady(true)} // hide splash when WebView finishes loading
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
