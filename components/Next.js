import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Next({ navigation }) {
  return (
    <ScrollView>
        <View style={styles.container}>
          <View style={styles.Itemsicons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assest/icons/left.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assest/icons/right.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Corona Virus</Text>
          </View>
          {/* image */}
          <View style={styles.Imagewrap}>
            <Image
              style={styles.images}
              source={require('../assest/images/wash.png')}
            />
          </View>

          {/* content */}
          <View style={{marginTop: 50}}>
            <Text style={styles.textTitle}>ล้างมือและฆ่าเชื้อ</Text>
            <Text style={styles.textContent}>
              มือ เป็นแหล่งแพร่เชื้อโรคต่างๆ ได้ เมื่อใช้มือหยิบจับอาหาร
              หรือสิ่ง ของต่างๆ และมือสามารถนำเชื้อโรคไปปนเปื้อนสิ่งของรอบๆ ตัว
              ทำให้ผู้อื่นได้รับเชื้อโรคไปด้วย การล้างมือให้สะอาดอย่างถูกวิธี
              จึงเป็นวิธีที่มีความสำคัญ เพื่อป้องกัน ไม่ใช้เชื้อโรคต่างๆ
              เข้าสู่ร่างกาย
            </Text>
          </View>

          {/* items */}
        <View style={styles.Items}>
            <View style={{borderColor: '#CFD8DC', borderWidth: 5, width: 10, borderRadius: 50, marginRight: 10}} />
            <View style={{width: 40, borderRadius: 40, backgroundColor: '#37474F', marginRight: 10}} />
            <View style={{borderColor: '#CFD8DC', borderWidth: 5, width: 10, borderRadius: 50,}} />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.buttonwrap} onPress={() => navigation.navigate('Last')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>ถัดไป</Text>
            </View>
        </TouchableOpacity>
       
        </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  Itemsicons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#37474F',
  },
  Imagewrap: {
    marginTop: 50,
  },
  images: {
    width: '100%',
    height: 600,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: '#37474F',
  },
  textContent: {
    fontSize: 16,
    textAlign: 'center',
    color: '#37474F',
    marginTop: 20,
  },
  Items: {
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  buttonwrap: {
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#37474F',
    width: 200,
    paddingVertical: 10,
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ECEFF1'
  },
});
