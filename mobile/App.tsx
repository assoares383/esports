import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native 2022!</Text>
      <Button title="Clique aqui" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 15,
    padding: 10,
    borderRadius: 6,
  },
});
