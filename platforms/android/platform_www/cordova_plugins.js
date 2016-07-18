cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-parking-detector/www/ParkingDetector.js",
        "id": "cordova-plugin-parking-detector.ParkingDetector",
        "clobbers": [
            "parkingDetector"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-parking-detector": "0.0.1"
};
// BOTTOM OF METADATA
});