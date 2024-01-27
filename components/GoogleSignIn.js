import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider, Button, Icon } from "react-native-magnus";

const theme = {
  colors: {
    google: "#4285F4",
  }
}

export default function GoogleSignInButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        mt="md"
        py="lg"
        rounded="sm"
        bg="google"
        block 
        color="white"
        prefix={
          <Icon fontSize="lg" mr="md" name="google" color="white" />
      }>Sign-in with Google</Button>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("GoogleSignInButton", () => GoogleSignInButton);
