import React from "react";
import AppNavigator from "./app/modules/Auth/navigation/AppNavigator";
// Redux-Persist
import { RootSiblingParent } from "react-native-root-siblings";
// React Native Paper
import { Provider as PaperProvider } from "react-native-paper";
import { Theme } from "./app/utils/Theme.tsx";

const App = () => {
  return (
    <RootSiblingParent>
      <PaperProvider theme={Theme}>
        <AppNavigator />
      </PaperProvider>
    </RootSiblingParent>
  );
};
export default App;
