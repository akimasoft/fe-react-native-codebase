import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'app/components';
import { Typography } from 'types';

function Task() {
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <Text size={Typography.captions}>asdsda</Text>
      </View>
    </ScrollView>
  );
}

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
