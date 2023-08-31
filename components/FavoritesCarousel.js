import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {View, Text, Dimensions, StyleSheet, Platform} from 'react-native';
const ENTRIES = [
  {
    title: 'Grand Turismo',
    subtitle: 'Akılalmaz bir gerçek hikayeye tanıklık etmeye hazır mısınız? Bu ilham verici film;',
    illustration:
      'https://img.tamindir.com/2023/07/476748/gran-turismo-yeni-fragman1.jpg',
  },
  {
    title: 'OppenHeimer',
    subtitle: 'İkinci Dünya Savaşı sırasında atom bombasının geliştirilmesindeki rolünü anlatıyor.',
    illustration:
      'https://i.hbrcdn.com/haber/2023/07/16/oppenheimer-filmi-konusu-nedir-oppenheimer-filmi-16121915_4358_amp.jpg',
  },
  {
    title: 'Meg 2',
    subtitle: '2: Çukur"da bir araştırma ekibi, devasa Meglere ve amansız çevre yağmacılarına karşı mücadele veriyorlar. ',
    illustration: 'https://gucluanadolugazetesicom.teimg.com/crop/1280x720/gucluanadolugazetesi-com/uploads/2023/07/meg-2.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const FavoritesCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        inactiveSlideShift={3}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
      />
    </View>
  );
};

export default FavoritesCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    width: screenWidth - 60,
    height: 178,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
