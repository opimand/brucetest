import React, { useState} from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps";


  export const SimpleMap = () => {
    const [coords, setCoords] = useState([46.484207, 30.731689])
    const [query, setQuery] = useState<string>('')
    const [map, setMap ] = useState({
      geocode(query: string){}
    })

    function onKeyPress(e: React.KeyboardEvent) {
      if( e.key === 'Enter' ){
         if(map) {
           const geoCode: any = map.geocode(query)
           geoCode.then(
             function (res: any) {
               const firstGeoObject = res.geoObjects.get(0)
               const coords = firstGeoObject.geometry.getCoordinates()

               if (firstGeoObject) {
                 setCoords(coords)

               }
             },
             function (err: any) {
               console.log(err)
             }
           )
         }
        }
    }
    function isLoadApi(ymap: any) {
      setMap(ymap)

    }
    function handleChange(event: { target: HTMLInputElement; }) {
      setQuery( event.target.value );
    }

    return (
      <>
        <label htmlFor="input" > Поиск
        <input
          className="input"
          placeholder="Нажмите на Enter ⏎"
          type="text"
          onKeyPress={onKeyPress}
          onChange={(e) => handleChange(e)} />
        </label>
        <YMaps
          enterprise
          query={{
            load: "package.full",
            apikey: process.env.REACT_APP_YMAP,
            lang: "ru_RU"
          }}
        >
          <Map
            panto={coords}
            options={{ mapAutoFocus: true }}
            state={{center: coords, zoom: 9} } style={{width: "100%", height: "400px"}}
            onLoad={(load) => isLoadApi(load)}>
            <Placemark geometry={coords} properties={{hintContent: coords }}/>
          </Map>
        </YMaps>
      </>
    )
}