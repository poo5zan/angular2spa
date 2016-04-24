// mobile

export interface Mobile{
	id:string;
	model:string;
	name:string;
	commonName?:string;
	uniqueName:string;
	brand:string;
	network: Network;
	launch: Launch;
	body: Body;
	display: Display;
	platform:Platform;
	memory : Memory;
	camera: Camera;
	sound: Sound;
	communication: Communication;
	features: Features;
	battery: Battery;
	miscellaneous: Miscellaneous;
}

export interface Network{
	technology:string;
}

export interface Launch{
	announced:string;
	status:string;
}
export interface Body{
	dimensions:Dimension[];
	weights: Weight[];
	sim: string;
}
export interface Dimension{
	length: number;
	breadth:number;
	height:number;
	unit:string;
}
export interface Weight{
	value: number;
	unit:string;
}
export interface Display{
	type:string;
	sizes: DisplaySize[];
	screenToBodyRatio: number;
	resolutions:Resolution[];
	ppiPixelDensity:number;
	multitouch:MultiTouch;
}
export interface DisplaySize{
	value: number;
	unit: string;
}
export interface Resolution{
	length: number;
	breadth: number;
	unit: string;
}
export interface MultiTouch{
	value:boolean;
	numberOfFingers: number;
}
export interface Platform{
	os:string;
	chipset:string;
	cpu:string;
	gpu:string;
}
export interface Memory{
	cardSlot:string;
	internal:string;
}
export interface Camera{
	primary:string;
	features:string;
	video:string;
	secondary:string;
}
export interface Sound{
	alertTypes:string;
	loudSpeaker:string;
	ThreePtFivemmJack:string; 
}
export interface Communication{
	wlan:string;
	bluetooth:string;
	gps:string;
	nfc:string;
	radio:string;
	usb:string;
}

export interface Features{
	sensors:string;
	messaging:string;
	browser:string;
	java:string;
}
export interface Battery{
	type:string;
}
export interface Miscellaneous{
	colors:string;
	sarEu: string;
	priceGroup:string;
}
