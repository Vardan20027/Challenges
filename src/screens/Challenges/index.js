import React from 'react';
import {Image, SectionList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import moment from 'moment';
import SearchIcon from '../../assets/icons/searchIcon';
import {Sizes} from '../../assets/RootStyle';
import ClockIcon from '../../assets/icons/clockIcon';
import LocatIcon from '../../assets/icons/locatIcon';

function ChallengeScreen(props) {
  const currentDate = moment().format('DD MMM');
  const tomorrow = moment().add(1, 'days').format('DD MMM');
  const {
    container,
    text,
    header,
    date,
    flatContainer,
    flatContent,
    flatImage,
    flatMembers,
    flatTime,
  } = styles();
  const DATA = [
    {
      title: 'Today',
      data: [
        {
          id: 0,
          img: require('../../assets/images/beer.png'),
          membImg: require('../../assets/images/member.jpeg'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '6/13',
          time: '21:35',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 1,
          img: require('../../assets/images/beer&pizzza.jpg'),
          membImg: require('../../assets/images/member2.jpeg'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '12/15',
          time: '14:20',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 2,
          img: require('../../assets/images/when-is-beer-and-pizza-day-celebrated.jpg'),
          membImg: require('../../assets/images/notif_image1.png'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '3/25',
          time: '19:00',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 3,
          img: require('../../assets/images/friends-toasting-with-beer-glasses-in-the-royalty-free-image-1637621142.jpg'),
          membImg: require('../../assets/images/notif_image2.png'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '2/8',
          time: '12:20',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
      ],
    },
    {
      title: 'Tomorrow',
      data: [
        {
          id: 0,
          img: require('../../assets/images/beer.png'),
          membImg: require('../../assets/images/notif_image3.png'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '7/20',
          time: '19:10',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 1,
          img: require('../../assets/images/beer&pizzza.jpg'),
          membImg: require('../../assets/images/notif_image7.png'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '4/12',
          time: '17:35',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 2,
          img: require('../../assets/images/when-is-beer-and-pizza-day-celebrated.jpg'),
          membImg: require('../../assets/images/notif_image.png'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '10/10',
          time: '20:15',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
        {
          id: 3,
          img: require('../../assets/images/beer.png'),
          membImg: require('../../assets/images/member3.jpeg'),
          title: 'Beer Challenge',
          location: '04 Gerhold Lodge',
          members: '5/15',
          time: '19:00',
          description: 'Drink 3 cups of beer & get the special gift!!',
        },
      ],
    },
  ];
  const Item = ({item}) => (
    <>
      <TouchableOpacity style={flatContainer}>
        <View style={flatImage}>
          <Image
            source={item.img}
            style={{
              maxWidth: Sizes.size100,
              maxHeight: Sizes.size100,
              borderRadius: Sizes.size8,
            }}
          />
        </View>
        <View style={flatContent}>
          <Text
            style={{
              fontFamily: 'BaiJamjuree-Bold',
              fontSize: Sizes.size16,
              color: '#2e2e2e',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Sizes.size20,
            }}>
            <View style={{position: 'absolute', left: 0}}>
              <LocatIcon
                iconWidth={Sizes.size18}
                iconHeight={Sizes.size18}
                iconColor1={'#7a7a7a'}
                iconColor2={'#7a7a7a'}
              />
            </View>

            <Text style={flatTime}>{item.location}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Sizes.size35,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{position: 'absolute', left: 0}}>
                <ClockIcon iconWidth={Sizes.size18} iconHeight={Sizes.size18} />
              </View>

              <Text style={flatTime}>{item.time}</Text>
            </View>

            <View style={flatMembers}>
              <Image
                source={item.membImg}
                style={{
                  maxHeight: Sizes.size18,
                  maxWidth: Sizes.size18,
                  borderRadius: Sizes.size4,
                }}
              />
              <Text
                style={{
                  fontFamily: 'BaiJamjuree-Bold',
                  color: '#2e2e2e',
                  marginLeft: Sizes.size5,
                }}>
                {item.members}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={container}>
      <View
        style={{
          flexDirection: 'row',
          height: Sizes.size100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderBottomWidth: Sizes.size3,
            width: Sizes.size250,
            borderColor: '#7a7a7a',
            alignItems: 'center',
            paddingBottom: Sizes.size10,
            marginRight: Sizes.size30,
          }}>
          <Text
            style={{
              fontFamily: 'ArchivoBlack-Regular',
              fontSize: Sizes.size16,
            }}>
            Challenges
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: Sizes.size38,
            height: Sizes.size38,
            borderRadius: Sizes.size19,
            backgroundColor: '#7a7a7a',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: Sizes.size350,
          marginBottom: Sizes.size200,
          alignSelf: 'center',
        }}>
        <SectionList
          sections={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={header}>
              <Text style={text}>{title}</Text>
              <Text style={date}>
                {title === 'Today' ? currentDate : tomorrow}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default ChallengeScreen;
