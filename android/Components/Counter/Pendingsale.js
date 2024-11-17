import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Collapsible from 'react-native-collapsible';
import Ionicon from 'react-native-vector-icons/FontAwesome';

// Enable LayoutAnimation on Android

const Pendingsale = () => {
  const [flag, setflag] = useState(false);
  const [collapsed, setcollapsed] = useState(true);
  const [activeSections, setActiveSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  //   if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  //     UIManager.setLayoutAnimationEnabledExperimental(true);
  //   }

  // const [data, setData] = useState([
  //   {id: '1', title: 'Section 1', content: 'Content for Section 1'},
  //   {id: '2', title: 'Section 2', content: 'Content for Section 2'},
  //   {id: '3', title: 'Section 3', content: 'Content for Section 3'},
  //   {id: '4', title: 'Section 4', content: 'Content for Section 4'},
  //   {id: '5', title: 'Section 5', content: 'Content for Section 5'},
  //   // Add more sections as needed
  // ]);

  // const toggleCollapsible = sectionId => {

  //   setActiveSections(prevSections => {
  //     if (prevSections.includes(sectionId)) {
  //       return prevSections.filter(id => id !== sectionId);
  //     } else {
  //       return [...prevSections, sectionId];
  //     }
  //   });

  //   // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  //   // if (activeSection === sectionId) {
  //   //   setActiveSection(null); // Collapse the active section if the same section is clicked again
  //   // } else {
  //   //   setActiveSection(sectionId); // Expand the clicked section
  //   // }
  // };

  //   const renderItem = ({item}) => {
  //     const isCollapsed = !activeSections.includes(item.id);
  //    // const isCollapsed = activeSection !== item.id;
  //     return (
  //       <>
  //         <View style={tw`mt-5 h-14   bg-white rounded-md self-center`}>
  //           <Pressable onPress={() => toggleCollapsible(item.id)}>
  //             <View
  //               style={tw`flex flex-row justify-between pl-2 pr-2 items-end `}>
  //               <Text style={tw`text-base text-gray-500 font-mono `}>
  //                 {item.title}
  //               </Text>

  //                <View>
  //                 <Text style={tw`text-base text-gray-500 font-mono `}>
  //                   Just Now
  //                 </Text>
  //                 <Text style={tw`text-base text-blue-600 font-bold`}>
  //                   RS 70.00
  //                 </Text>
  //               </View>

  //             </View>
  //           </Pressable>

  //           <Collapsible collapsed={isCollapsed}>
  //             <View style={tw`w-85 flex-grow bg-white text-base   font-mono mb-5 h-auto `}>

  //               <View
  //                 style={tw`flex border-t-2 mb-3 border-b-2 flex-grow items-center border-gray-300 flex-row w-80 justify-around mt-2 h-auto self-center`}>
  //                 <Text>Pamper Bona PaPa</Text>
  //                 <Text>x 1.0</Text>
  //               </View>
  //               <View
  //                 style={tw`flex border-t-2 mb-3 border-b-2 flex-grow items-center border-gray-300 flex-row w-80 justify-around mt-2 h-auto self-center`}>
  //                 <Text>Pamper Bona PaPa</Text>
  //                 <Text>x 1.0</Text>
  //               </View>

  //               <View
  //                 style={tw`flex border-t-2 mb-3 flex-grow  border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-auto self-center`}>
  //                 {/* <Text>Pamper Bona PaPa</Text> */}
  //                 <Text>{item.content}</Text>
  //               </View>
  //             </View>
  //           </Collapsible>
  //         </View>
  //       </>
  //     );
  //   };

  return (
    <>
      {flag ? (
        <>
          <View style={tw`items-center self-center w-60 h-40 mt-10`}>
            <Text style={tw`text-lg font-semibold text-blue-700`}>
              Pending sale (park) : 0
            </Text>
            <Text style={tw`text-xs font-semibold mt-20`}>No Pending Sale</Text>
          </View>
        </>
      ) : (
        <>
          {/* <View style={tw`flex flex-1`}> */}
          {/* <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> */}
          {/* <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={[tw`flex-grow`]}> */}
          {/* <View style={tw`items-center self-center w-60 mt-5`}>
            <Text style={tw`text-lg font-semibold text-blue-700`}>
              Pending sale (park) : 1
            </Text>
          </View> */}

          <View style={tw`top-10 self-center bg-white mt-2  `}>
            <Pressable onPress={() => setcollapsed(!collapsed)}>
              <View
                style={tw`flex flex-row justify-between pl-2 pr-2 items-end `}>
                <Text style={tw`text-base text-gray-500 font-mono `}>
                  1 item
                </Text>

                <View>
                  <Text style={tw`text-base text-gray-500 font-mono `}>
                    Just Now
                  </Text>
                  <Text style={tw`text-base text-blue-600 font-bold`}>
                    RS 70.00
                  </Text>
                </View>
              </View>
            </Pressable>

            <Collapsible collapsed={collapsed}>
              <View
                style={tw`w-85 bg-white   text-base font-mono mb-5 h-auto `}>
                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>
                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>

                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>
                <View style={tw`flex flex-row justify-around`}>
                  <View style={tw` w-30 rounded-md h-10 items-center justify-center bg-red-400`}>
                    <TouchableOpacity>
                      <Text style={tw`text-white text-center`}>DELETE</Text>
                    </TouchableOpacity>
                  </View>


                  <View style={tw` w-30 rounded-md h-10 items-center justify-center bg-blue-600`}>
                 
                    <TouchableOpacity>
                    <Text style={tw`text-white text-center`}>EDIT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Collapsible>

            {/* <Image
              source={require('../../Images/line.png')}
              style={tw`mt-3 w-85 self-center`}
            /> */}
          </View>

          {/* <View style={tw`mt-5 h-14 bg-white rounded-md self-center`}>
            <TouchableOpacity onPress={() => toggleCollapsible()}>
              <View
                style={tw`flex flex-row justify-between pl-2 pr-2 items-end `}>
                <Text style={tw`text-base text-gray-500 font-mono `}>
                  1 item
                </Text>

                <View>
                  <Text style={tw`text-base text-gray-500 font-mono `}>
                    Just Now
                  </Text>
                  <Text style={tw`text-base text-blue-600 font-bold`}>
                    RS 70.00
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
          {/* <ScrollView
                vertical
                showsVerticalScrollIndicator={true}
                style={[tw`flex-grow`]}> */}
          {/* <View>
            <Collapsible collapsed={isCollapsed}>
              <View
                style={tw`w-85 bg-white overflow-hidden flex-grow  text-base font-mono mb-5 h-auto `}>
                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>
                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>

                <View
                  style={tw`flex border-t-2 mb-3 border-b-2 items-center border-gray-300 flex-row w-80 justify-around mt-2 h-8 self-center`}>
                  <Text>Pamper Bona PaPa</Text>
                  <Text>x 1.0</Text>
                </View>
              </View>
            </Collapsible>
          </View> */}
          {/* </ScrollView> */}

          {/* </View> */}

          {/* </ScrollView> */}
          {/* </View> */}
        </>
      )}
    </>
  );
};

export default Pendingsale;
