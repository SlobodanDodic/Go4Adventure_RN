import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CreditCardForm from "./CreditCardForm";
import { TextInput } from "react-native-paper";

const ModalPayment = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CreditCardForm name="Logged User" date="11/22" suffix="3904" />

            <TextInput style={styles.inputs} label="Cardholder Name" />
            <TextInput style={styles.inputs} label="Card Number" />
            <View style={{ display: "flex", flexDirection: "row", width: "77%" }}>
              <TextInput style={styles.inputsRow} label="MM/YY" />
              <TextInput style={[styles.inputsRow, styles.right]} label="CVC" />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Pay</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="credit-card" size={16} color="white" />
        <Text style={styles.textStyle}>Book your trip now!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#131313eb",
    borderRadius: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
    display: "flex",
    flexDirection: "row",
  },
  buttonOpen: {
    backgroundColor: "#0d4969",
  },
  buttonClose: {
    backgroundColor: "transparent",
    marginHorizontal: 20,
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputs: {
    width: "77%",
    borderRadius: 4,
    marginTop: 10,
  },
  inputsRow: {
    width: "49%",
    borderRadius: 4,
    marginTop: 10,
  },
  right: {
    marginLeft: "2%",
  },
});

export default ModalPayment;
