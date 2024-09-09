import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  // Dummy data (replace with actual data in your implementation)
  const subscriptionDetails = {
    status: "Active",
    type: "Daily",
    startDate: "2024-09-01",
    dailyQuantity: 2,
    nextDelivery: "2024-09-09",
    totalLitersToday: 2,
  };

  const notifications = [
    { id: 1, title: "Your milk will be delivered tomorrow" },
    { id: 2, title: "New promotion available!" },
  ];

  const renderQuickActionButton = (title: string, onPress: () => void) => (
    <TouchableOpacity style={styles.quickActionButton} onPress={onPress}>
      <Text style={styles.quickActionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Subscription Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Subscription</Text>
          <Text style={styles.statusText}>
            Status: {subscriptionDetails.status}
          </Text>
          <Text>Daily Milk: {subscriptionDetails.dailyQuantity} Liters</Text>
          <Text>Next Delivery: {subscriptionDetails.nextDelivery}</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {renderQuickActionButton("Update Subscription", () => {})}
          {renderQuickActionButton("Order Extra Milk", () => {})}
          {renderQuickActionButton("View Invoices", () => {})}
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {notifications.map((notification) => (
            <Text key={notification.id} style={styles.notificationItem}>
              {notification.title}
            </Text>
          ))}
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllButtonText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Promotions Section */}
        <Card style={styles.promotionCard}>
          <Card.Content>
            <Text style={styles.promotionTitle}>Promotions</Text>
            <Text>10% off on Monthly Subscriptions!</Text>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>

        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <View>
            <Text style={styles.userName}>Hello, John</Text>
            <TouchableOpacity>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name="settings" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    padding: 24,
    backgroundColor: "#fff",
    marginBottom: 16,
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statusText: {
    color: "green",
    fontWeight: "900",
    fontSize: 20,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  quickActionButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  quickActionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  notificationItem: {
    marginBottom: 8,
  },
  viewAllButton: {
    alignSelf: "flex-end",
  },
  viewAllButtonText: {
    color: "#007AFF",
  },
  promotionCard: {
    margin: 16,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  applyButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  applyButtonText: {
    color: "#fff",
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewProfileText: {
    color: "#007AFF",
  },
});

export default HomeScreen;
