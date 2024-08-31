import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native'; // Import Link from react-router-native
import Text from './Text'; // Import the custom Text component
import Constants from 'expo-constants';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    padding: 10,
    flexDirection: 'row',
  },
  scrollContainer: {
    flexDirection: 'row', // Ensure the tabs are laid out in a row
  },
  tab: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: 'white',
    marginRight: 15, // Add some margin to space out the tabs
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <Link to="/" component={Pressable}>
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        <Link to="/signin" component={Pressable}>
          <Text style={styles.tab}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
