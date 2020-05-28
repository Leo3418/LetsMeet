import React from 'react';
import {View} from 'react-native';
import NotificationComponent from "../../components/NotificationComponent/index";
import styles from "../GroupsScreen/styles";
import {Appbar} from "react-native-paper";

/*
 * TODO: determine a notification's model
 *  For now, a notification is represented only by the message,
 *  and no meaningful button action is defined
 */

/*
 * Route parameters:
 * - notifications: the array of notification messages
 */
function NotificationsScreen({route, navigation}) {
  const { notifications } = route.params;

  let components = [];

  for (let i = 0; i < notifications.length; i++) {
    components.push(
      <NotificationComponent
        text={notifications[i]}
        positiveAction={() => console.log("+")}
        negativeAction={() => console.log("-")}
      />
    )
  }

  return (
      <View>
        {
          /*
          * TODO: remove duplicate code copied from GroupsScreen
          *  Is there a way to refactor this into a reusable module?
          */
        }

        <Appbar.Header style={styles.navbar} >
          <Appbar.Content
            title="LetsMeet"
          />
          <Appbar.Action
            icon="dots-vertical"
            color="white"
            size={20}
            onPress={()=> alert("Will eventually take you to the settings screen")}
          />
        </Appbar.Header>

        {components}
      </View>
  );
}

export default NotificationsScreen;
