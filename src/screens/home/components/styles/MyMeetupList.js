import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '0.25rem',
    paddingVertical: '0.25rem',
  },
  contentContainer: {
    flex: 1,
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '0.15rem',
    backgroundColor: '$redColor',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '0.2rem',
    left: '0.25rem',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '0.25rem',
  },
  meetupCardMetaName: {
    fontSize: 15,
  },
  meetupCardMetaDate: {
    fontSize: 13,
  },
});

export default styles;
