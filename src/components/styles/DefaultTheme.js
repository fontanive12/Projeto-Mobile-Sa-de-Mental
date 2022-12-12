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
  backgroundColor: '#68baab'
  
}

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width:'100%'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: colors.white
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
    shadowColor: colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10
  },
  label: {
    fontSize: 14,
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
  },
  card: {
    width: '100%',
    marginTop: 15,
    borderRadius: 16,
    padding: 8,
    height: 55,
    backgroundColor: '#f6f8ee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
titleCard: {
    color: '#000',
    fontSize: 16,
},
subtitleCard: {
    color: '#555',
    fontSize: 13,
},
cardItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
}
})