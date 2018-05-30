import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
export class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
         title="Go to Jane's profile"
         onPress={() =>
           navigate('Profile')
         }
       />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
