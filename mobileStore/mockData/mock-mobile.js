// mock-mobile.ts
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MobilesMock;
    return {
        setters:[],
        execute: function() {
            exports_1("MobilesMock", MobilesMock = [
                {
                    id: "1",
                    name: "Samsung Galaxy J5 (2016)",
                    model: "m3",
                    commonName: "Samsung J ",
                    uniqueName: "Sj5-2016",
                    brand: "Samsung",
                    network: {
                        technology: "GSM / HSPA / LTE"
                    },
                    launch: {
                        announced: "2016, March",
                        status: "Coming Soon, Exp. release 2016, April"
                    },
                    body: {
                        dimensions: [{
                                length: 145.8,
                                breadth: 72.3,
                                height: 8.1,
                                unit: "mm"
                            },
                            {
                                length: 5.74,
                                breadth: 2.85,
                                height: 0.32,
                                unit: "in"
                            }],
                        weights: [{
                                value: 159,
                                unit: "g"
                            },
                            {
                                value: 5.61,
                                unit: "oz"
                            }],
                        sim: "Single SIM (Micro-SIM) or Dual SIM(Micro-SIM,dual stand-by)"
                    },
                    display: {
                        type: "Super AMOLED capacitive touchscreen, 16M colors",
                        sizes: [{
                                unit: "inches",
                                value: 5.2
                            }],
                        screenToBodyRatio: 70.7,
                        resolutions: [
                            {
                                length: 720,
                                breadth: 1280,
                                unit: "pixels"
                            }],
                        ppiPixelDensity: 282,
                        multitouch: {
                            value: true,
                            numberOfFingers: 5
                        }
                    },
                    platform: {
                        os: "Android OS, v5.1 (Lollipop)",
                        chipset: "Qualcomm MSM8916 Snapdragon 410",
                        cpu: "Quad-core 1.2 Ghz Cortex-A53",
                        gpu: "Adreno 306"
                    },
                    memory: {
                        cardSlot: "microSD, up to 128 GB (dedicated Slot)",
                        internal: "16 GB, 2 GB RAM"
                    },
                    camera: {
                        primary: "13 MP, f/1.9, 28mm, autofocus,LED Flash",
                        features: "Geo-tagging, touch focus, face detection",
                        video: "1080p@30fps",
                        secondary: "5 MP, f/1.9, LED flash"
                    },
                    sound: {
                        alertTypes: "Vibration, MP3, WAV ringtones",
                        loudSpeaker: "Yes",
                        ThreePtFivemmJack: "Yes"
                    },
                    communication: {
                        wlan: "Wi-Fi 802.11 b/g/n, Wi-Fi Direct, hotspot",
                        bluetooth: "v4.1, A2DP",
                        gps: "Yes, with A-GPS, GLONASS/BDS (market dependent)",
                        nfc: "Yes (market dependant)",
                        radio: "FM radio, RDS, recording",
                        usb: "microUSD v2.0"
                    },
                    features: {
                        sensors: "Accelerometer,proximity",
                        messaging: "SMS(threaded view), MMS, Email, Push Mail, IM",
                        browser: "HTML5",
                        java: "No"
                    },
                    battery: {
                        type: "Removable Li-Ion 3100 mAh battery"
                    },
                    miscellaneous: {
                        colors: "White, Black",
                        sarEu: "0.45 w",
                        priceGroup: "4"
                    }
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-mobile.js.map