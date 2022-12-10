import { StyleSheet } from "react-native";

export const colors = {
  red: '#E74C3C',
  purple: '#8E44AD',
  gray: '#34495E',
  blue: '#2F54EB',
  green: '#4271AE',
  orange: '#FF851B',
  yellow: '#FFC107',
  white: '#FFF',
  black: '#000',
  lightGray: '#A9A9A9',
}

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0C1A26',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 15
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 32,
    //fontFamily: 'Inter-Regular.ttf',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 45,
    padding: 8,
    backgroundColor: '#',
    marginBottom: 12,
    borderRadius: 8,
    borderColor: 'pink',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 8,
    height: 42,
    width: '80%',
    padding: 8,

  },
  textButton: {
    color: '#0C1A26',
    fontSize: 24,
    textAlign: 'center',
  },
  shadows: {
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10
  },
  label: {
    fontSize: 14,
    // fontFamily: 'Inter-Light', 
    marginBottom: 12
  },
  list: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemList: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#fff',
    fontSize: 24
  }
})