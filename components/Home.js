import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react'

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Corona Virus</Text>
        </View>

        {/* image */}
        <View style={styles.Imagewrap}>
          <Image
            style={styles.images}
            source={require('../assest/images/social.png')}
          />
        </View>
        {/* content */}
        <View style={{marginTop: 50}}>
          <Text style={styles.textTitle}>สวมหน้ากาก</Text>
          <Text style={styles.textContent}>
           
            หน้าที่ของหน้ากากอนามัย
            คือปกป้องผู้สวมใส่ให้ปลอดภัยจากการสัมผัสละอองฝอยของน้ำมูกน้ำลาย
            ซึ่งอาจมีเชื้อ และเพื่อป้องกันไม่ให้ผู้ป่วยที่สวมใส่แพร่เชื้อออกไป
            แต่ในขณะเดียวกันหากใส่หน้ากากอนามัยไม่ถูกวิธีก็อาจเป็นสาเหตุให้มีโอกาสเกิดการติดเชื้อมากขึ้น
            และไม่ป้องกันการแพร่เชื้อเท่าที่ควร
          </Text>
        </View>

        {/* items */}
        <View style={styles.Items}>
            <View style={{width: 40, borderRadius: 40, backgroundColor: '#37474F', marginRight: 10}} />
            <View style={{borderColor: '#CFD8DC', borderWidth: 5, width: 10, borderRadius: 50, marginRight: 10}} />
            <View style={{borderColor: '#CFD8DC', borderWidth: 5, width: 10, borderRadius: 50,}} />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.buttonwrap} onPress={() => navigation.navigate('Next')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>เริ่มต้นการใช้งาน</Text>
            </View>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
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
    height: 300,
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