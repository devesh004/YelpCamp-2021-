mapboxgl.accessToken = mapToken;
const allCampground = JSON.parse(campground);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: allCampground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


//OUR MARKER
new mapboxgl.Marker()
    .setLngLat(allCampground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${allCampground.title}</h3><p>${allCampground.location}</p>`
            )
    )
    .addTo(map)


