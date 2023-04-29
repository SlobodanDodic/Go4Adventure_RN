import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#0d4969" },
        headerTintColor: "#e6e6e6",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home Screen",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Account",
          headerTitle: "My Account",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          tabBarLabel: "Groups",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="users" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};
