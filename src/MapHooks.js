import React, { useEffect, useRef, useState } from 'react';
import {
    PermissionsAndroid,
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import axios from 'axios';

let TOKEN = 'pk.eyJ1Ijoic2FsaW1zZWEiLCJhIjoiY2tscTM2aGx5MThxOTJ3bTJldnJneDNhMSJ9.gMOFzrAV4V8t09_hZWYX-g';
MapboxGL.setAccessToken(TOKEN);
const App = () => {
    const mapBoxRef = useRef(null);
    const [isGranted, setIsGranted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [lokSaya, setLokSaya] = useState([106.80960106545932, -6.533799545409752]);
    
    const [isLokAwal, setIsLokAwal] = useState(false);
    const [lokAwal, setLokAwal] = useState([106.80960106545932, -6.533799545409752]);
    const [teksLokAwal, setTeksLokAwal] = useState(false);
    const [namaLokAwal, setNamaLokAwal] = useState('');

    const [isLokTujuan, setIsLokTujuan] = useState(false);
    const [lokTujuan, setLokTujuan] = useState([106.80024559462458, -6.5305088365218324]);
    const [teksLokTujuan, setTeksLokTujuan] = useState(false);
    const [namaLokTujuan, setNamaLokTujuan] = useState('');

    const [titikCenter, setTitikCenter] = useState([106.80024559462458, -6.5305088365218324]);
    const [zoomCam, setZoomCam] = useState(10);
    const [resultDistance, setResultDistance] = useState({
        weight: 0,
        duration: 0,
        distance: 0,
    });
    
    const [route, setRoute] = useState({
        route: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [[106.795819,-6.527219],[106.795821,-6.527276],[106.795764,-6.527284],[106.795781,-6.527351],[106.795782,-6.527356],[106.795783,-6.527363],[106.796189,-6.527384],[106.796456,-6.527399],[106.796725,-6.52741],[106.796734,-6.527679],[106.796745,-6.527969],[106.796754,-6.528244],[106.796766,-6.528513],[106.796785,-6.528886],[106.79678,-6.529109],[106.796773,-6.529153],[106.796752,-6.529297],[106.796711,-6.529572],[106.7967,-6.529593],[106.796682,-6.529602],[106.796626,-6.529614],[106.796387,-6.529625],[106.796369,-6.529629],[106.796358,-6.529637],[106.796353,-6.529649],[106.796347,-6.52967],[106.796347,-6.529775],[106.796356,-6.530047],[106.796362,-6.530254],[106.796364,-6.530315],[106.796372,-6.530591],[106.796357,-6.530825],[106.796388,-6.53093],[106.796653,-6.530886],[106.796736,-6.53086],[106.797066,-6.530814],[106.797464,-6.530736],[106.79761,-6.530704],[106.79773,-6.530691],[106.797894,-6.53069],[106.79934,-6.530712],[106.800113,-6.53074],[106.800291,-6.530734],[106.800427,-6.53074],[106.800425,-6.530507]],
                    }
                },
            ],
        },
    })


    useEffect(async () => {
        const isGranted = await MapboxGL.requestAndroidLocationPermissions();
        setIsGranted(isGranted);
        setTitikCenter(FUNCKorCen([lokAwal, lokTujuan]));
    }, [])

    const FUNCKorCen = (coord) => {
        var result = coord.reduce(function (x,y) {
            return [x[0] + y[0]/coord.length, x[1] + y[1]/coord.length] 
        }, [0, 0])
        return result;
    }
    const FUNCZoomCam = (distance) => {
        console.log(distance)
        if (distance >= 78271.484) {
            setZoomCam(8)
            console.log('0')
            return;
        }
        if (distance >= 39135.742) {
            setZoomCam(9)
            console.log('1')
            return;
        }
        if (distance >= 19567.871) {
            setZoomCam(10)
            console.log('2')
            return;
        }
        if (distance >= 9783.936) {
            setZoomCam(11)
            console.log('3')
            return;
        }
        if (distance >= 4891.968) {
            setZoomCam(12)
            console.log('4')
            return;
        }
        if (distance >= 2445.984) {
            setZoomCam(13)
            console.log('5')
            return;
        }
        if (distance >= 1222.992) {
            setZoomCam(14)
            console.log('6')
            return;
        }
        if (distance >= 611.496) {
            setZoomCam(15)
            console.log('7')
            return;
        }
        if (distance >= 305.748) {
            setZoomCam(16)
            console.log('8')
            return;
        }
        if (distance >= 152.874) {
            setZoomCam(17)
            console.log('9')
            return;
        }
        if (distance >= 76.437) {
            setZoomCam(18)
            console.log('10')
            return;
        }
        if (distance >= 38.218) {
            setZoomCam(19)
            console.log('11')
            return;
        }
        if (distance >= 19.109) {
            setZoomCam(20)
            console.log('12')
            return;
        }
        if (distance >= 9.555) {
            setZoomCam(20)
            console.log('13')
            return;
        }
        if (distance >= 4.777) {
            setZoomCam(14)
            console.log('14')
            return;
        }
        if (distance >= 2.389) {
            setZoomCam(15)
            console.log('15')
            return;
        }
        if (distance >= 1.194) {
            setZoomCam(16)
            console.log('16')
            return;
        }
        if (distance >= 0.597) {
            setZoomCam(17)
            console.log('17')
            return;
        }
        if (distance >= 0.299) {
            setZoomCam(18)
            console.log('18')
            return;
        }
        if (distance >= 0.149) {
            setZoomCam(19)
            console.log('19')
            return;
        }
        if (distance >= 0.075) {
            setZoomCam(20)
            console.log('20')
            return;
        }
        if (distance >= 0.037) {
            setZoomCam(21)
            console.log('21')
            return;
        }
        if (distance >= 0.019) {
            setZoomCam(22)
            console.log('22')
            return;
        }
        
    }

    const onTextLokAwal = (lokasi) => {
        setNamaLokAwal(lokasi)
        if (lokasi !== '') {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lokasi}.json?country=id&access_token=${TOKEN}`).then(res => {
                let data = res.data;
                setTeksLokAwal(data.features)
            })
        } else {
            setTeksLokAwal(false)
        }
    }

    const btnLokAwal = (x, y, name) => {
        setLokAwal([x, y])
        setTitikCenter([x, y]);
        setTeksLokAwal(false)
        setIsLoading(true)
        setNamaLokAwal(name)
        setZoomCam(11)
        setIsLokAwal(true)
    }

    const onTextLokTujuan = (lokasi) => {
        setNamaLokTujuan(lokasi)
        if (lokasi !== '') {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lokasi}.json?country=id&access_token=${TOKEN}`).then(res => {
                let data = res.data;
                setTeksLokTujuan(data.features)
            })
        } else {
            setTeksLokTujuan(false)
        }
    }

    const btnLokTujuan = (x, y, name) => {
        setLokTujuan([x, y])
        setTitikCenter([x, y]);
        setTeksLokTujuan(false)
        setNamaLokTujuan(name)
        setZoomCam(11)
        setIsLokTujuan(true)
    }

    const btnDirection = () => {
        axios.get(`https://api.mapbox.com/directions/v5/mapbox/cycling/${lokAwal};${lokTujuan}?annotations=maxspeed&overview=full&geometries=geojson&access_token=${TOKEN}`).then(res => {
            let data = res.data;
            setRoute({
                route: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: data.routes[0].geometry.coordinates,
                        }
                    },
                ],
            },
            });
            setIsLoading(false);
            setTitikCenter(FUNCKorCen([lokAwal, lokTujuan]));
            FUNCZoomCam(data.routes[0].distance);
            setResultDistance({
                weight: data.routes[0].weight,
                duration: data.routes[0].duration,
                distance: data.routes[0].distance,
            });
        })
    }

    
    const renderDirections = () => {
		return (
			<>
				<MapboxGL.UserLocation
                    renderMode="normal"
                    visible={false}
                    onUpdate={location => {
                        const currentCoords = [
                            location.coords.longitude,
                            location.coords.latitude,
                        ];
                        setLokSaya(currentCoords)
                    }}
                />
                
                {
                    isLokAwal ?
                         <MapboxGL.PointAnnotation
                                selected={true}
                                key="key1"
                                id="id1"
                                coordinate={lokAwal}
                            >
                                <View style={{ width: 20, height: 20, backgroundColor: 'blue', borderRadius:100 }}/>
                                <MapboxGL.Callout title={namaLokAwal} />
                        </MapboxGL.PointAnnotation>
                        : null
                }
                {
                    isLokTujuan ?
                         <MapboxGL.PointAnnotation
                                selected={true}
                                key="key2"
                                id="id2"
                                coordinate={lokTujuan}
                            >
                                <View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius:100 }}/>
                                <MapboxGL.Callout title={namaLokTujuan} />
                        </MapboxGL.PointAnnotation>
                        : null
                }
                {
                    !isLoading ?
                        <>
                            <MapboxGL.ShapeSource
                                id="line1"
                                shape={route.route}
                            >
                                <MapboxGL.LineLayer
                                    id="linelayer1"
                                    style={{
                                        lineColor: '#000',
                                        lineWidth: 5,
                                        lineCap: 'round',
                                    }}
                                />
                            </MapboxGL.ShapeSource>
                        </>
                        : null
                    
                }
                
               
			</>
		);
	}

    return (
        isGranted ?
            <>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{backgroundColor:'#000', padding:20}}>
                        <Text style={{ fontSize: 20, fontWeight:'600', color: '#FFF' }}>MAPS Direction</Text>
                    </View>
                    <ScrollView>
                        <View style={{ flex: 1, paddingHorizontal:15, marginTop:30}}>
                            <Text style={{ fontSize: 15, color: '#000' }}>Lokasi Awal</Text>
                            <View style={{alignItems:'center'}}>
                                <TextInput
                                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#000', paddingVertical: 10, fontSize: 16, color: '#000' }}
                                    placeholder={'Masukan Lokasi Awal'} 
                                    placeholderTextColor={'#000'}
                                    onChangeText={(e) => onTextLokAwal(e)}
                                    value={namaLokAwal}
                                />
                            </View>

                            {
                                teksLokAwal ?
                                    <>
                                        <Text style={{ fontSize: 13, color: '#000', top:5 }}>Result Pencarian :</Text>
                                        <View style={{backgroundColor: '#EEE', marginTop:10 }}>
                                            {
                                                teksLokAwal.length !== 0 ?
                                                    teksLokAwal.map((v, i) => {
                                                        return (
                                                            <TouchableOpacity onPress={() => btnLokAwal(v.center[0], v.center[1], v.place_name)} key={i} style={{borderBottomColor:'#9c9a9a', borderBottomWidth:0.5, padding:10}}>
                                                                <Text style={{ fontSize: 15, color: '#000' }}>{v.place_name}</Text>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                    : <Text style={{padding:5}}>data tidak ada :(</Text>
                                            }
                                        </View>
                                    </>
                                    : null
                            }
                            

                            <View style={{height:20}}/>
                            <Text style={{ fontSize: 15, color: '#000' }}>Lokasi Tujuan</Text>
                            <View style={{alignItems:'center'}}>
                                <TextInput 
                                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#000', paddingVertical: 10, fontSize: 16, color: '#000' }}
                                    placeholder={'Masukan Lokasi Tujuan'} 
                                    placeholderTextColor={'#000'}
                                    onChangeText={(e) => onTextLokTujuan(e)}
                                    value={namaLokTujuan}
                                />
                            </View>
                            {
                                teksLokTujuan ?
                                    <ScrollView style={{maxHeight:150, backgroundColor: '#EEE', marginTop:10 }}>
                                        {
                                            teksLokTujuan.length !== 0 ?
                                                teksLokTujuan.map((v, i) => {
                                                    return (
                                                        <TouchableOpacity onPress={() => btnLokTujuan(v.center[0], v.center[1], v.place_name)} key={i} style={{borderBottomColor:'#000', borderBottomWidth:1, padding:10}}>
                                                            <Text style={{ fontSize: 15, color: '#000' }}>{v.place_name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                                : <Text>data tidak ada</Text>
                                        }
                                    </ScrollView>
                                    : null
                            }
                            <View style={{ height: 30 }} />
                            <TouchableOpacity onPress={() => btnDirection()} style={{ backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', paddingVertical: Platform.OS === 'ios' ? 20 : 15 }}>
                                <Text style={{color:'#FFF', fontSize:15, marginLeft: 10}}>CARI LOKASI</Text>
                            </TouchableOpacity>
                            <View style={{ height: 30 }} />

                            <View style={{flex:1}}>
                                <MapboxGL.MapView
                                    styleURL={MapboxGL.StyleURL.Street}
                                    ref={mapBoxRef}
                                    zoomEnabled={true}
                                    style={{ flex: 1, height:500 }}
                                >
                                    {renderDirections()}
                                    <MapboxGL.Camera
                                        zoomLevel={zoomCam}
                                        centerCoordinate={titikCenter}
                                    />
                                </MapboxGL.MapView>
                            </View>
                            <View style={{ height: 30 }} />
                            <Text style={{ fontSize: 15, color: '#000' }}>Result :</Text>
                            <View style={{ height: 10 }} />
                            <View style={{flex:1, backgroundColor:'#ffc10782', padding:10}}>
                                <Text style={{ fontSize: 13, color: '#000' }}>weight : {resultDistance.weight}</Text>
                                <Text style={{ fontSize: 13, color: '#000' }}>duration : {resultDistance.duration}</Text>
                                <Text style={{ fontSize: 13, color: '#000' }}>distance : {resultDistance.distance}</Text>
                            </View>

                            <View style={{ height: 30 }} />

                        </View>
                    </ScrollView>

                </View>
            </>
        : null
    );
};

const styles = StyleSheet.create({
    annotationContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
    },
    page: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    container: {
        height: 500,
        width: 500,
        backgroundColor: 'tomato',
    },
    map: {
        flex: 1,
    },
});

export default App;
