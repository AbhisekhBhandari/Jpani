/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Image,
} from "react-native";
import * as Font from "expo-font";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Toggle from "@/shared/components/toggle";
import DropDown from "@/shared/components/dropDown";
import Typography from "@/shared/components/typography";
import Counter from "@/shared/components/counter";
import Badge from "@/shared/components/badge";
import Banner from "@/shared/components/banner";
import Tooltip from "@/shared/components/tooltip";
import Button from "./src/shared/components/buttons/button";
import { ButtonIcon } from "@/shared/components/buttons";
import ButtonColumn from "@/shared/components/buttons/buttonColumn";
import ButtonPill from "@/shared/components/buttons/buttonPill";
import Select from "@/shared/components/select";
import CardRadioButton from "@/shared/components/cardRadioButton";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { Email } from "@/shared/assets/icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoutesStack, {
  RootStackParamList,
  UnauthenticatedRoutesStack,
} from "@/shared/routes/stack";
import RoutesTab from "@/shared/routes/tab";
import { Product, Restaurant } from "@/shared/components/cards";
import RestaurantHorizontal from "@/shared/components/cards/restaurantHorizontal";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";
import { updateFont } from "@/shared/constants/fonts";
import { AuthContext } from "@/shared/context/auth-context";
import { supabase } from "@/shared/lib/supabase";
import { Session } from "@supabase/supabase-js";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function PresentComponent({ title, children }: any) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Typography>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        {children}
      </View>
      <Typography></Typography>
    </View>
  );
}

function ScreenComponents() {
  const isDarkMode = useColorScheme() === "dark";
  const [isEnabled, setIsEnabled] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingVertical: 50,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            paddingHorizontal: 24,
            flex: 1,
          }}
        >
          <PresentComponent title="Toggle">
            <Toggle isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
            <Toggle isEnabled={false} setIsEnabled={setIsEnabled} />
          </PresentComponent>

          <PresentComponent title="DropDown">
            <View style={{ justifyContent: "flex-start" }}>
              <DropDown
                onChange={(option) => console.log(option)}
                options={[
                  {
                    id: "1",
                    label: "Opcion 1",
                    value: "1",
                  },
                  {
                    id: "2",
                    label: "Opcion 2",
                    value: "2",
                  },
                ]}
              />
            </View>
          </PresentComponent>
          <PresentComponent title="Counter">
            <Counter />
          </PresentComponent>
          <PresentComponent title="Badge">
            <Badge />
            <Badge type="success" />
            <Badge type="error" />
          </PresentComponent>
          <PresentComponent title="Banner">
            <Banner />
          </PresentComponent>
          <PresentComponent title="Tooltip">
            <Tooltip />
          </PresentComponent>
          <PresentComponent title="Button">
            <Button />
            <Button disabled />
          </PresentComponent>
          <PresentComponent title="Button Outline">
            <Button outline />
            <Button outline disabled />
          </PresentComponent>
          <PresentComponent title="Button Icon">
            <ButtonIcon />
            <ButtonIcon disabled />
            <ButtonIcon outline />
            <ButtonIcon outline disabled />
          </PresentComponent>
          <PresentComponent title="Button Column">
            <View style={{ flex: 1 }}>
              <ButtonColumn />
              <View style={{ height: 10 }} />
              <ButtonColumn disabled />
              <View style={{ height: 10 }} />
              <ButtonColumn outline />
              <View style={{ height: 10 }} />
              <ButtonColumn outline disabled />
            </View>
          </PresentComponent>
          <PresentComponent title="Button Pill">
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ alignSelf: "flex-start" }}>
                  <ButtonPill title="Add" />
                </View>
                <View style={{ alignSelf: "flex-start" }}>
                  <ButtonPill title="Add" disabled />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ButtonPill outline />
                <ButtonPill outline disabled />
              </View>
            </View>
          </PresentComponent>
          <PresentComponent title="Select">
            <View style={{ flex: 1 }}>
              <Select />
              <View style={{ height: 10 }} />
              <Select active />
            </View>
          </PresentComponent>
          <PresentComponent title="Card radio button">
            <View style={{ flex: 1 }}>
              <CardRadioButton />
              <View style={{ height: 10 }} />
              <CardRadioButton active />
            </View>
          </PresentComponent>
          <PresentComponent title="Input">
            <View style={{ flex: 1 }}>
              <Input placeholder="Hi" />
              <View style={{ height: 10 }} />
              <Input
                leftIcon={<Icon icon={Email} />}
                placeholder="Hey there!"
              />
            </View>
          </PresentComponent>
          <PresentComponent title="Product">
            <View style={{ flex: 1 }}>
              <Product />
              <View style={{ height: 10 }} />
              <Product vertical />
            </View>
          </PresentComponent>
          <PresentComponent title="Restaurant">
            <View style={{ flex: 1 }}>
              <Restaurant />
              <View style={{ height: 10 }} />
              <RestaurantHorizontal discount />
            </View>
          </PresentComponent>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {RoutesTab.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  customStyles={{
                    tintColor: focused
                      ? semantic.background.dark
                      : semantic.border.default,
                  }}
                  icon={route.icon}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Typography
                  style={{
                    fontSize: normalize(12),
                    fontWeight: "700",
                    color: focused
                      ? semantic.background.dark
                      : semantic.border.default,
                  }}
                >
                  {route.displayName}
                </Typography>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [authentication_status, setAuthenticationStatus] = useState(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      setAuthenticationStatus(true);
    } else {
      setAuthenticationStatus(false);
    }
  }, [session]);

  // const { navigate } = useNavigation();

  const changeAuthenticationStatus = (navigateTo: string, active: number) => {
    setAuthenticationStatus(!authentication_status);
    // navigate(navigateTo);
  };

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Satoshi-Bold": require("./src/shared/assets/fonts/Satoshi-Bold.otf"),
        "Satoshi-ExtraBold": require("./src/shared/assets/fonts/Satoshi-Black.otf"),
        "Satoshi-Light": require("./src/shared/assets/fonts/Satoshi-Light.otf"),
        "Satoshi-Medium": require("./src/shared/assets/fonts/Satoshi-Medium.otf"),
        "Satoshi-Regular": require("./src/shared/assets/fonts/Satoshi-Regular.otf"),
      });
      updateFont();
      setLoading(true);
    }
    if (!loading) {
      loadFonts().then().catch();
    }
  }, []);

  if (!loading || authentication_status === null) {
    return <View />;
  }

  if (authentication_status === null) {
    return (
      <View>
        <Typography>Loading</Typography>
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{ authentication_status, changeAuthenticationStatus }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            session && authentication_status === true ? "tab" : "login"
          }
          screenOptions={{ headerShown: false }}
        >
          {/* <Stack.Screen name="components" component={ScreenComponents} /> */}
          <Stack.Screen name="tab" component={TabNavigation} />
          {session && authentication_status === true
            ? RoutesStack.map((route) => {
                return (
                  <Stack.Screen
                    key={route.path}
                    name={route.path}
                    component={route.component}
                  />
                );
              })
            : UnauthenticatedRoutesStack.map((route) => {
                return (
                  <Stack.Screen
                    key={route.path}
                    name={route.path}
                    component={route.component}
                  />
                );
              })}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
