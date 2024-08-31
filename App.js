import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import RepositoryList from './src/RepositoryList';
import AppBar from './src/AppBar';
import SignIn from './src/SignIn'; // Import the SignIn component
import theme from './src/theme'; // Import the theme

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundWhite, // Ensure correct background color from the theme
  },
});
