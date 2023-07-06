L.mapquest.key = 'YnGcEKhWMTh3o7fBM953y9eC8vtQrz9u';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
    center: [10.805882347905131, 106.69928788719464],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
});

// 2. Add control
map.addControl(L.mapquest.control());
//map.addControl(L.mapquest.control({ position: 'bottomright' }));


// 3. Add icon
L.marker([10.805882347905131, 106.69928788719464], {
    icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
    })
})
.bindPopup('This is TP Ho Chi Minh!')
.addTo(map);