import React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';

class NotificationTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Ionicons
          name={'md-arrow-round-forward'}
          size={47}
          color={'grey'}
        />
      </TouchableOpacity>        
    )
  }
}

const styles = StyleSheet.create({
    trigger: {
      marginRight: 27.5,
      borderRadius: 30,
      width: 60,
      height: 60,
    },
  });
  
  export default withNavigation(NotificationTrigger);