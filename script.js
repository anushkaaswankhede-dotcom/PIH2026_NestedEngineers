
var map = L.map('map').setView([22.9734, 78.6569], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '©️ OpenStreetMap'
}).addTo(map);



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            L.marker([lat, lon]).addTo(map)
                .bindPopup("📍 Your Location")
                .openPopup();

            L.circle([lat, lon], {
                color: 'blue',
                fillOpacity: 0.2,
                radius: 100000
            }).addTo(map);

            map.setView([lat, lon], 7);
        });
    } else {
        alert("Geolocation not supported.");
    }
}



function calculateTrees(co2) {
    return Math.ceil(co2 / 22);
}

function recommendTrees(soil, climate) {

    if (soil === "loamy" && climate === "tropical")
        return "Neem, Peepal, Banyan";

    if (soil === "sandy")
        return "Babul, Date Palm";

    if (soil === "clay")
        return "Arjun, Jamun";

    return "Mixed Native Species";
}



const indiaData = {

"Andhra Pradesh": {
coords:[15.9129,79.7400],
cities:[
{name:"Visakhapatnam",lat:17.6868,lon:83.2185,co2:180000,soil:"sandy",climate:"coastal"},
{name:"Vijayawada",lat:16.5062,lon:80.6480,co2:120000,soil:"loamy",climate:"tropical"},
{name:"Guntur",lat:16.3067,lon:80.4365,co2:90000,soil:"clay",climate:"tropical"}
]},

"Arunachal Pradesh": {
coords:[28.2180,94.7278],
cities:[
{name:"Itanagar",lat:27.0844,lon:93.6053,co2:20000,soil:"loamy",climate:"temperate"},
{name:"Tawang",lat:27.5580,lon:91.8594,co2:15000,soil:"clay",climate:"cold"},
{name:"Ziro",lat:27.5944,lon:93.8384,co2:12000,soil:"loamy",climate:"temperate"}
]},

"Assam": {
coords:[26.2006,92.9376],
cities:[
{name:"Guwahati",lat:26.1445,lon:91.7362,co2:140000,soil:"clay",climate:"humid"},
{name:"Dibrugarh",lat:27.4728,lon:94.9120,co2:60000,soil:"loamy",climate:"humid"},
{name:"Silchar",lat:24.8333,lon:92.7789,co2:50000,soil:"clay",climate:"humid"}
]},

"Bihar": {
coords:[25.0961,85.3131],
cities:[
{name:"Patna",lat:25.5941,lon:85.1376,co2:160000,soil:"clay",climate:"tropical"},
{name:"Gaya",lat:24.7955,lon:85.0002,co2:70000,soil:"loamy",climate:"dry"},
{name:"Bhagalpur",lat:25.2425,lon:86.9842,co2:60000,soil:"clay",climate:"humid"}
]},

"Chhattisgarh": {
coords:[21.2787,81.8661],
cities:[
{name:"Raipur",lat:21.2514,lon:81.6296,co2:130000,soil:"clay",climate:"tropical"},
{name:"Bilaspur",lat:22.0797,lon:82.1409,co2:80000,soil:"loamy",climate:"tropical"},
{name:"Durg",lat:21.1904,lon:81.2849,co2:70000,soil:"clay",climate:"tropical"}
]},

"Goa": {
coords:[15.2993,74.1240],
cities:[
{name:"Panaji",lat:15.4909,lon:73.8278,co2:40000,soil:"sandy",climate:"coastal"},
{name:"Margao",lat:15.2832,lon:73.9862,co2:30000,soil:"sandy",climate:"coastal"},
{name:"Vasco da Gama",lat:15.3860,lon:73.8440,co2:35000,soil:"sandy",climate:"coastal"}
]},

"Gujarat": {
coords:[22.2587,71.1924],
cities:[
{name:"Ahmedabad",lat:23.0225,lon:72.5714,co2:220000,soil:"sandy",climate:"dry"},
{name:"Surat",lat:21.1702,lon:72.8311,co2:180000,soil:"loamy",climate:"humid"},
{name:"Vadodara",lat:22.3072,lon:73.1812,co2:150000,soil:"clay",climate:"dry"}
]},

"Haryana": {
coords:[29.0588,76.0856],
cities:[
{name:"Gurugram",lat:28.4595,lon:77.0266,co2:190000,soil:"loamy",climate:"dry"},
{name:"Faridabad",lat:28.4089,lon:77.3178,co2:150000,soil:"clay",climate:"dry"},
{name:"Panipat",lat:29.3909,lon:76.9635,co2:90000,soil:"loamy",climate:"dry"}
]},

"Himachal Pradesh": {
coords:[31.1048,77.1734],
cities:[
{name:"Shimla",lat:31.1048,lon:77.1734,co2:30000,soil:"loamy",climate:"cold"},
{name:"Manali",lat:32.2432,lon:77.1892,co2:20000,soil:"clay",climate:"cold"},
{name:"Dharamshala",lat:32.2190,lon:76.3234,co2:25000,soil:"loamy",climate:"cold"}
]},

"Jharkhand": {
coords:[23.6102,85.2799],
cities:[
{name:"Ranchi",lat:23.3441,lon:85.3096,co2:110000,soil:"clay",climate:"tropical"},
{name:"Jamshedpur",lat:22.8046,lon:86.2029,co2:150000,soil:"loamy",climate:"tropical"},
{name:"Dhanbad",lat:23.7957,lon:86.4304,co2:140000,soil:"clay",climate:"dry"}
]},

"Karnataka": {
coords:[15.3173,75.7139],
cities:[
{name:"Bengaluru",lat:12.9716,lon:77.5946,co2:400000,soil:"loamy",climate:"tropical"},
{name:"Mysuru",lat:12.2958,lon:76.6394,co2:100000,soil:"clay",climate:"tropical"},
{name:"Mangaluru",lat:12.9141,lon:74.8560,co2:80000,soil:"sandy",climate:"coastal"}
]},

"Kerala": {
coords:[10.8505,76.2711],
cities:[
{name:"Thiruvananthapuram",lat:8.5241,lon:76.9366,co2:90000,soil:"clay",climate:"humid"},
{name:"Kochi",lat:9.9312,lon:76.2673,co2:110000,soil:"loamy",climate:"coastal"},
{name:"Kozhikode",lat:11.2588,lon:75.7804,co2:80000,soil:"sandy",climate:"humid"}
]},

"Madhya Pradesh": {
coords:[22.9734,78.6569],
cities:[
{name:"Bhopal",lat:23.2599,lon:77.4126,co2:140000,soil:"clay",climate:"dry"},
{name:"Indore",lat:22.7196,lon:75.8577,co2:170000,soil:"loamy",climate:"dry"},
{name:"Gwalior",lat:26.2183,lon:78.1828,co2:90000,soil:"clay",climate:"dry"}
]},

"Maharashtra": {
coords:[19.7515,75.7139],
cities:[
{name:"Mumbai",lat:19.0760,lon:72.8777,co2:500000,soil:"clay",climate:"coastal"},
{name:"Pune",lat:18.5204,lon:73.8567,co2:200000,soil:"loamy",climate:"tropical"},
{name:"Nagpur",lat:21.1458,lon:79.0882,co2:150000,soil:"sandy",climate:"dry"}
]},

"Manipur": {
coords:[24.6637,93.9063],
cities:[
{name:"Imphal",lat:24.8170,lon:93.9368,co2:40000,soil:"clay",climate:"humid"},
{name:"Thoubal",lat:24.6385,lon:94.0088,co2:20000,soil:"loamy",climate:"humid"},
{name:"Churachandpur",lat:24.3333,lon:93.6833,co2:15000,soil:"clay",climate:"humid"}
]},

"Meghalaya": {
coords:[25.4670,91.3662],
cities:[
{name:"Shillong",lat:25.5788,lon:91.8933,co2:30000,soil:"loamy",climate:"humid"},
{name:"Tura",lat:25.5198,lon:90.2025,co2:20000,soil:"clay",climate:"humid"},
{name:"Jowai",lat:25.4470,lon:92.2086,co2:15000,soil:"loamy",climate:"humid"}
]},

"Mizoram": {
coords:[23.1645,92.9376],
cities:[
{name:"Aizawl",lat:23.7271,lon:92.7176,co2:25000,soil:"clay",climate:"humid"},
{name:"Lunglei",lat:22.8872,lon:92.7429,co2:15000,soil:"loamy",climate:"humid"},
{name:"Champhai",lat:23.4570,lon:93.3250,co2:12000,soil:"clay",climate:"humid"}
]},

"Nagaland": {
coords:[26.1584,94.5624],
cities:[
{name:"Kohima",lat:25.6747,lon:94.1100,co2:20000,soil:"loamy",climate:"humid"},
{name:"Dimapur",lat:25.9080,lon:93.7269,co2:40000,soil:"clay",climate:"humid"},
{name:"Mokokchung",lat:26.3229,lon:94.5183,co2:15000,soil:"loamy",climate:"humid"}
]},

"Odisha": {
coords:[20.9517,85.0985],
cities:[
{name:"Bhubaneswar",lat:20.2961,lon:85.8245,co2:120000,soil:"clay",climate:"humid"},
{name:"Cuttack",lat:20.4625,lon:85.8830,co2:90000,soil:"loamy",climate:"humid"},
{name:"Rourkela",lat:22.2604,lon:84.8536,co2:100000,soil:"clay",climate:"tropical"}
]},

"Punjab": {
coords:[31.1471,75.3412],
cities:[
{name:"Ludhiana",lat:30.9009,lon:75.8573,co2:160000,soil:"loamy",climate:"dry"},
{name:"Amritsar",lat:31.6340,lon:74.8723,co2:100000,soil:"clay",climate:"dry"},
{name:"Jalandhar",lat:31.3260,lon:75.5762,co2:110000,soil:"loamy",climate:"dry"}
]},

"Rajasthan": {
coords:[27.0238,74.2179],
cities:[
{name:"Jaipur",lat:26.9124,lon:75.7873,co2:180000,soil:"sandy",climate:"dry"},
{name:"Jodhpur",lat:26.2389,lon:73.0243,co2:120000,soil:"sandy",climate:"dry"},
{name:"Udaipur",lat:24.5854,lon:73.7125,co2:80000,soil:"loamy",climate:"dry"}
]},

"Sikkim": {
coords:[27.5330,88.5122],
cities:[
{name:"Gangtok",lat:27.3314,lon:88.6138,co2:15000,soil:"loamy",climate:"cold"},
{name:"Namchi",lat:27.1667,lon:88.3500,co2:10000,soil:"clay",climate:"cold"},
{name:"Mangan",lat:27.5167,lon:88.5333,co2:8000,soil:"loamy",climate:"cold"}
]},

"Telangana": {
coords:[18.1124,79.0193],
cities:[
{name:"Hyderabad",lat:17.3850,lon:78.4867,co2:350000,soil:"loamy",climate:"dry"},
{name:"Warangal",lat:17.9689,lon:79.5941,co2:90000,soil:"clay",climate:"tropical"},
{name:"Nizamabad",lat:18.6725,lon:78.0941,co2:70000,soil:"loamy",climate:"dry"}
]},

"Tripura": {
coords:[23.9408,91.9882],
cities:[
{name:"Agartala",lat:23.8315,lon:91.2868,co2:40000,soil:"clay",climate:"humid"},
{name:"Udaipur",lat:23.5333,lon:91.4833,co2:15000,soil:"loamy",climate:"humid"},
{name:"Dharmanagar",lat:24.3667,lon:92.1667,co2:12000,soil:"clay",climate:"humid"}
]},

"Uttar Pradesh": {
coords:[26.8467,80.9462],
cities:[
{name:"Lucknow",lat:26.8467,lon:80.9462,co2:220000,soil:"clay",climate:"tropical"},
{name:"Kanpur",lat:26.4499,lon:80.3319,co2:210000,soil:"loamy",climate:"dry"},
{name:"Varanasi",lat:25.3176,lon:82.9739,co2:130000,soil:"clay",climate:"humid"}
]},

"Uttarakhand": {
coords:[30.0668,79.0193],
cities:[
{name:"Dehradun",lat:30.3165,lon:78.0322,co2:70000,soil:"loamy",climate:"cold"},
{name:"Haridwar",lat:29.9457,lon:78.1642,co2:60000,soil:"clay",climate:"tropical"},
{name:"Nainital",lat:29.3919,lon:79.4542,co2:30000,soil:"loamy",climate:"cold"}
]},

"West Bengal": {
coords:[22.9868,87.8550],
cities:[
{name:"Kolkata",lat:22.5726,lon:88.3639,co2:300000,soil:"clay",climate:"humid"},
{name:"Siliguri",lat:26.7271,lon:88.3953,co2:90000,soil:"loamy",climate:"humid"},
{name:"Durgapur",lat:23.5204,lon:87.3119,co2:110000,soil:"clay",climate:"dry"}
]}

};
const unionTerritories = [
["Delhi",28.7041,77.1025],
["Jammu & Kashmir",33.7782,76.5762],
["Ladakh",34.1526,77.5770],
["Chandigarh",30.7333,76.7794],
["Puducherry",11.9416,79.8083],
["Andaman & Nicobar Islands",11.7401,92.6586],
["Lakshadweep",10.3280,72.7846],
["Dadra & Nagar Haveli and Daman & Diu",20.1809,73.0169]
];

unionTerritories.forEach(ut=>{
L.marker([ut[1],ut[2]])
.addTo(map)
.bindPopup("Union Territory: "+ut[0]);
});


for (let state in indiaData) {

    let stateInfo = indiaData[state];

    let stateMarker = L.marker(stateInfo.coords)
        .addTo(map)
        .bindPopup(state);

    stateMarker.on('click', function() {
        map.setView(stateInfo.coords, 7);
    });

    stateInfo.cities.forEach(city => {

        let cityMarker = L.circleMarker([city.lat, city.lon], {
            radius: 6,
            color: "red"
        }).addTo(map);

        cityMarker.on('click', function() {

            let treesNeeded = calculateTrees(city.co2);
            let treeTypes = recommendTrees(city.soil, city.climate);

            document.getElementById("cityName").innerText = city.name;
            document.getElementById("co2").innerText = city.co2 + " tons/year";
            document.getElementById("trees").innerText = treesNeeded;
            document.getElementById("treeTypes").innerText = treeTypes;
        });

    });
}
