import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevents splash screen from hiding automatically

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    const prepareApp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hides the splash screen once fonts are loaded
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
};

export default Layout;
