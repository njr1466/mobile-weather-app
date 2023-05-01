import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#69daf5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  whiteOverlay: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',

  },
  loading: {
    alignContent: "center",
    alignItems: "center"
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 40
  },
  flatList: {
    padding: 10,
    fontSize: 18,
    color: 'gray'
  }
});

export default styles;