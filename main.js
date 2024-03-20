mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

let latitude = 24.226706040543828
let longitude = 79.3101750216748

var map = new mapboxgl.Map({
    container: "map",
    style: `mapbox://styles/mapbox/dark-v11`,
    center: [longitude,latitude],
    zoom: 4
})

map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
)

var img1 = document.querySelector("#tajmahal")
var img2 = document.querySelector("#lotustemple")
var img3 = document.querySelector("#qutabminar")
var img4 = document.querySelector("#goldentemple")

var marker1 = new mapboxgl.Marker({element: img1}).setLngLat([78.04212073756, 27.175202043649882]).addTo(map)
var marker2 = new mapboxgl.Marker({element: img2}).setLngLat([77.25879420878371, 28.553510823508166]).addTo(map)
var marker3 = new mapboxgl.Marker({element: img3}).setLngLat([77.18548840878235, 28.524720464356296]).addTo(map)
var marker4 = new mapboxgl.Marker({element: img4}).setLngLat([74.87708326659694, 31.62094621002026]).addTo(map)