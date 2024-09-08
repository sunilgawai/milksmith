import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button, RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data (replace with actual data in your implementation)
const mockInvoices = [
  {
    id: "1",
    issueDate: "2024-09-01",
    totalAmount: 500,
    status: "Unpaid",
    dueDate: "2024-09-15",
  },
  {
    id: "2",
    issueDate: "2024-08-15",
    totalAmount: 450,
    status: "Paid",
    dueDate: "2024-08-30",
  },
  {
    id: "3",
    issueDate: "2024-08-01",
    totalAmount: 550,
    status: "Overdue",
    dueDate: "2024-08-15",
  },
];

// 1. Invoice List Screen
const InvoiceListScreen = ({ navigation }) => {
  const renderInvoiceItem = ({ item }) => (
    <SafeAreaView>
    <Card style={styles.invoiceItem}>
      <Card.Content>
        <Text>Invoice Date: {item.issueDate}</Text>
        <Text>Total Amount: ₹{item.totalAmount}</Text>
        <Text
          style={{
            color:
              item.status === "Paid"
                ? "green"
                : item.status === "Overdue"
                ? "red"
                : "orange",
          }}
        >
          Status: {item.status}
        </Text>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("InvoiceDetail", { invoice: item })
          }
          style={styles.buttonSpacing}
        >
          View Details
        </Button>
        {item.status === "Unpaid" && (
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Payment", { invoice: item })}
            style={styles.buttonSpacing}
          >
            Pay Now
          </Button>
        )}
      </Card.Content>
    </Card>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoices</Text>
      <FlatList
        data={mockInvoices}
        renderItem={renderInvoiceItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// 2. Invoice Detail Screen
const InvoiceDetailScreen = ({ route, navigation }) => {
  const { invoice } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Invoice Details</Text>
      <Card style={styles.detailCard}>
        <Card.Content>
          <Text>Invoice Date: {invoice.issueDate}</Text>
          <Text>Subscription Price: ₹{invoice.totalAmount * 0.8}</Text>
          <Text>Extra Milk Orders: ₹{invoice.totalAmount * 0.2}</Text>
          <Text>Discounts: ₹0</Text>
          <Text>Total Amount: ₹{invoice.totalAmount}</Text>
          <Text>Due Date: {invoice.dueDate}</Text>
          {invoice.status === "Unpaid" && (
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Payment", { invoice })}
              style={styles.buttonSpacing}
            >
              Pay Now
            </Button>
          )}
          {invoice.status !== "Unpaid" && (
            <Text style={{ color: "green", marginTop: 10 }}>Already Paid</Text>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

// 3. Payment Screen
const PaymentScreen = ({ route, navigation }) => {
  const { invoice } = route.params;
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigation.replace("PaymentSuccess");
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Card style={styles.paymentCard}>
        <Card.Content>
          <Text>Invoice ID: {invoice.id}</Text>
          <Text>Total Amount: ₹{invoice.totalAmount}</Text>
          <Text style={styles.sectionTitle}>Select Payment Method:</Text>
          <RadioButton.Group
            onValueChange={(value) => setPaymentMethod(value)}
            value={paymentMethod}
          >
            <View style={styles.radioButton}>
              <RadioButton value="Credit Card" />
              <Text>Credit Card</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="UPI" />
              <Text>UPI</Text>
            </View>
          </RadioButton.Group>
          <Button
            mode="contained"
            onPress={handlePayment}
            style={styles.buttonSpacing}
          >
            Pay Now
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

// 4. Payment Success Screen
const PaymentSuccessScreen = () => {
  return (
    <View style={[styles.container, styles.centerContent]}>
      <Text style={[styles.title, { color: "green" }]}>
        Payment Successful!
      </Text>
      <Text>Your payment has been processed. Thank you!</Text>
      <Button
        mode="contained"
        onPress={() => router.replace("/")}
        style={styles.buttonSpacing}
      >
        Back to Dashboard
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  invoiceItem: {
    marginBottom: 16,
  },
  detailCard: {
    marginBottom: 16,
  },
  paymentCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonSpacing: {
    marginTop: 16,
  },
});

export {
  InvoiceListScreen,
  InvoiceDetailScreen,
  PaymentScreen,
  PaymentSuccessScreen,
};

export default InvoiceListScreen;