import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Layout, TopNav, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ route, navigation }) {
  const { isDarkmode } = useTheme();
  const { penyakit } = route.params;

  if (!penyakit) {
    return (
      <Layout>
        <Text
          style={[styles.noDataText, { color: isDarkmode ? "#bbb" : "#333" }]}
        >
          Data Penyakit Tidak Ditemukan
        </Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <TopNav
        middleContent="Detail Penyakit"
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
            {penyakit.nama}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#ddd" : "#555" }]}>
            Deskripsi:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ccc" : "#777" }]}
          >
            {penyakit.deskripsi}
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ccc" : "#777" }]}
          >
            {penyakit.harga}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#ddd" : "#555" }]}>
            Efek Samping:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ccc" : "#777" }]}
          >
            {penyakit.efekSamping || "Tidak ada"}
          </Text>
          <Text style={[styles.label, { color: isDarkmode ? "#ddd" : "#555" }]}>
            Dosis:
          </Text>
          <Text
            style={[styles.content, { color: isDarkmode ? "#ccc" : "#777" }]}
          >
            {penyakit.dosis || "Sesuai petunjuk dokter"}
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
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Poppins",
  },
});
