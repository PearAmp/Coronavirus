import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';
import React from 'react';
import protactData from '../assest/data/protactData';
import covidData from '../assest/data/covidData';


export default function Contentcovid({navigation}) {

    const renderprotactItem = ({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.blockItem}>
              <View>
              <Image style={styles.imageList} source={item.image} />
              </View>
              <View style={{marginTop: 10, marginBottom: 30, paddingHorizontal: 10,}}>
              <Text style={styles.listTextTitle}>{item.title}</Text>
              <Text style={styles.listText}>{item.texttitle}</Text>
              <Text style={styles.listText}>{item.texttitle2}</Text>
            </View>
            </View>
            
          </TouchableOpacity>
        );
      };

      const rendercovidItem = ({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.covidblock}>
              <View>
              <Image style={styles.imagecovid} source={item.image} />
              </View>
              <View style={{marginTop: 10, marginBottom: 30, paddingHorizontal: 10,}}>
              <Text style={styles.listTextTitle}>{item.title}</Text>
              <Text style={styles.listText}>{item.texttitle}</Text>
              <Text style={styles.listText}>{item.texttitle2}</Text>
            </View>
            </View>
            
          </TouchableOpacity>
        );
      };
    
  return (
    
    <ScrollView>
      {/* header */}
      <View style={styles.blockHeader}>
        <View style={styles.Items}>
          <TouchableOpacity>
            <Image
              style={styles.imageIcons}
              source={require('../assest/icons/main-menu.png')}
            />

          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imageIcons}
              source={require('../assest/icons/notification.png')}
            />
          </TouchableOpacity>
        </View>

        {/* content */}
        <View style={styles.contenthead}>
          <View style={styles.itemleft}>
            <Text style={styles.textleft}>Covid-19</Text>
          </View>
          <View style={styles.itemrigth}>
            <Text style={styles.textrigth}>TH</Text>
            <Image
              style={{width: 10, height: 10}}
              source={require('../assest/icons/down.png')}
            />
          </View>
        </View>

        {/* Textcontent */}
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text style={{fontSize: 18, color: '#fff'}}>
            คุณรู้สึกป่วยหรือไม่?
          </Text>
          <Text style={{fontSize: 16, color: '#fff', marginTop: 10}}>
            หากคุณรู้สึกเหนื่อย หอบ แม้ว่าจะไม่ได้ออกแรงกระทำการใดก็ตาม
            มีอาการไข้ อ่อนเพลีย ให้รีบติดต่อเราทันที
          </Text>
        </View>

        {/* Button */}
        <View style={styles.buttonwrap}>
          <TouchableOpacity>
            <View style={styles.phoneblock}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assest/icons/telephone.png')}
              />
              <Text style={styles.textphone}>โทรเลย</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.smsblock}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assest/icons/email.png')}
              />
              <Text style={styles.textphone}>ส่ง sms</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
      {/* items */}
      <View>
        <Image style={{width: 30, height: 30, alignSelf: 'flex-end', marginBottom: 20,}} source={require('../assest/icons/right-arrow.png')} />
      </View>
        {/* itemsList */}
        <View>
            <FlatList 
                data={protactData}
                renderItem={renderprotactItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
        <View>
        <Image style={{width: 30, height: 30, alignSelf: 'flex-end', marginBottom: 20, marginTop: 20,}} source={require('../assest/icons/right-arrow.png')} />
      </View>
        {/* covid */}
        <View>
            <FlatList 
                data={covidData}
                renderItem={rendercovidItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blockHeader: {
    backgroundColor: '#263238',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  Items: {
    marginTop: 45,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageIcons: {
    width: 20,
    height: 20,
  },
  contenthead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textleft: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemrigth: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 8,
  },
  textrigth: {
    fontWeight: 'bold',
    paddingRight: 10,
    color: '#000',
  },
  buttonwrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
  phoneblock: {
    flexDirection: 'row',
    backgroundColor: '#E53935',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  textphone: {
    fontSize: 16,
    color: '#fff',
    paddingLeft: 10,
  },
  smsblock: {
    flexDirection: 'row',
    backgroundColor: '#40C4FF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textphone: {
    fontSize: 16,
    color: '#fff',
    paddingLeft: 10,
  },
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 40,
    
  },
  blockItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 20,
    paddingTop: 10,
  },
  imageList: {
    width: 100,
    height: 100,
  },
  listTextTitle: {
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  listText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  covidblock: {
    backgroundColor: '#fff',
    marginRight: 20,
    borderRadius: 20,
    overflow: 'hidden',


  },
  imagecovid: {
    width: 200,
    height: 120,

  },
});
