import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'left',
    fontSize: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  fab: {
    position: 'absolute',
    marginBottom: 30,
    marginRight: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#663399',
  },
});

export default styles;