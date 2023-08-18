import React, { useRef, useState } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    Image, 
    View,
    TouchableHighlight,
} from 'react-native';

const SideBar = () => {
    const drawer = useRef(null);

    const [drawerPosition, setDrawerPosition] = useState('left');

    const [menulist, setmenuList] = useState([
        { id: 1, list: "Home" },
        { id: 2, list: "About" },
        { id: 3, list: "Services" },
        { id: 4, list: "Our work" },
        { id: 5, list: "Review" },
        { id: 6, list: "Portfolio" },
        { id: 7, list: "Contact" },
    ])

    const navigationView = () => (
        <View >
            <TouchableHighlight style={{marginTop: 50}}>
                <Button 
                    title="Close drawer"
                    onPress={() => drawer.current.closeDrawer()}
                />
            </TouchableHighlight>
            <View>
                {menulist?.map((items) => {
                    return(
                        <>
                        <TouchableHighlight>
                            <Text key={items?.id}>{items?.list}</Text>
                        </TouchableHighlight>
                        </>
                    )
                })}
            </View>

        </View>
    );
    return (
        <DrawerLayoutAndroid drawerBackgroundColor="white"
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>

            <Button
                title="Open drawer"
                onPress={() => drawer.current.openDrawer()}
            />
           
        </DrawerLayoutAndroid>
    );

    // return (
    //     <>
    //         <View>
    //             <View style={{position: "absolute", left: "0"}}>
    //                 {menulist?.map((menuItems,index) => {
    //                     return (
    //                         <>
    //                             <Text key={menuItems.id}>{menuItems?.key}</Text>
    //                         </>
    //                     )
    //                 })}
    //             </View>
    //         </View>
    //     </>
    // )
}



export default SideBar