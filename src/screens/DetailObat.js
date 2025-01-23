import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Layout, TopNav, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ route, navigation }) {
  const { isDarkmode } = useTheme(); // Pastikan ini berada di sini dan `useTheme` diimport dengan benar
  const { obat } = route.params;

  return (
    <Layout>
      <TopNav
        middleContent="Detail Obat"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={24}
            color={isDarkmode ? "#fff" : "#000"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: isDarkmode ? "#121212" : "#f8f9fa" },
        ]}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: isDarkmode ? "#1e1e1e" : "#fff" },
          ]}
        >
          <Text style={[styles.title, { color: isDarkmode ? "#fff" : "#333" }]}>
            {obat.nama}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#bbb" : "#555" }]}>
            Deskripsi:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ddd" : "#777" }]}
          >
            {obat.deskripsi}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#bbb" : "#555" }]}>
            Harga:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ddd" : "#777" }]}
          >
            {obat.harga}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#bbb" : "#555" }]}>
            Efek Samping:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ddd" : "#777" }]}
          >
            {obat.efekSamping || "Tidak ada"}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#bbb" : "#555" }]}>
            Dosis:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ddd" : "#777" }]}
          >
            {obat.dosis || "Sesuai petunjuk dokter"}
          </Text>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Poppins",
  },
  content: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    textAlign: "justify",
    fontFamily: "Poppins",
  },
});