interface WebSiteSettings {
	id: number;
	name: string;
	websiteName: string;
	favIconUrl: string;
	contactInformation: {
		email: string;
		phoneNumber: string;
		address: {
			street: string;
			number: string;
			city: string;
			postalCode: string;
			country: string;
		};
	};
}

export interface Artist {
	id: number;
	name: string;
	surname: string;
	artisticName: string;
	about: string;
	contactInformation: {
		id: number;
		email: string;
		phoneNumber: string;
		address: {
			id: number;
			street: string;
			number: string;
			city: string;
			postalCode: string;
			country: string;
		};
	};
}

export interface Serie {
	id: number;
	name: string;
	description: string;
	active: boolean;
	artists: Artist[];
}

export interface Asset {
	id: number;
	name: string;
	description: string;
	type: string;
	comment: string | null;
	url: string;
	active: boolean;
	authors: Artist[];
	series: Serie[];
}

export interface Collection {
	serie: Serie;
	assets: Asset[];
	imageUrl: string;
}

export const websiteSettings: WebSiteSettings = {
	id: 1,
	name: 'Xpose',
	websiteName: 'Aleix Díaz Llabrés',
	favIconUrl: 'http://46.62.130.142:9001/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL2xvZ29zLzE5M2FhZDYwLTUyZmUtNGUzMS1iMWY3LTkxMWY3ZTcyYTQ4My1maXJtYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1ON0NON0hXN1pPVU1QSzlQR0NGSCUyRjIwMjUxMTMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEzMFQxNzI5MTdaJlgtQW16LUV4cGlyZXM9NDMyMDAmWC1BbXotU2VjdXJpdHktVG9rZW49ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhZMk5sYzNOTFpYa2lPaUpPTjBOT04waFhOMXBQVlUxUVN6bFFSME5HU0NJc0ltVjRjQ0k2TVRjMk5EVTFNRGMzTml3aWNHRnlaVzUwSWpvaWJXbHVhVzlZY0c5elpTSjkuUkhucWl5OGtmUk9WbHZRZkpEQXVqcGROSmtkWG1hZzV5UThFUnZaMlVBTzBwWTdvNTluQVBnMHJGV25mQ25hS0JTRThHZ3FJMG00bXprd3c4Q2RCLXcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnZlcnNpb25JZD1udWxsJlgtQW16LVNpZ25hdHVyZT0xZGE4NGY3ZWI5ZGE0NThhOWQ1NjVkN2NiZjY0NjFlNmUxMzgyZjc0OTdhZmU2Yzk2ZjIxNjllZGFhNjMxMDE2',
	contactInformation: {
		email: 'aleixdiazzz@gmail.com',
		phoneNumber: '648007507',
		address: {
			street: 'La Gruta',
			number: '14',
			city: 'Palma De Mallorca',
			postalCode: '07007',
			country: 'Spain'
		},
	}

}

export const collections: Collection[] = [
	{
		"serie": {
			"id": 1,
			"name": "Into The Mist",
			"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
			"active": true,
			"artists": [
				{
					"id": 1,
					"name": "Aleix",
					"surname": "Díaz Llabrés",
					"artisticName": "",
					"about": "",
					"contactInformation": {
						"id": 1,
						"email": "aleixdiaz2001@gmail.com",
						"phoneNumber": "648007507",
						"address": {
							"id": 1,
							"street": "La gruta",
							"number": "14",
							"city": "Palma de Mallorca",
							"postalCode": "07007",
							"country": "Spain"
						}
					}
				}
			]
		},
		"assets": [
			{
				"id": 7,
				"name": "Aldiaz 080 (FP4) 26.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/1.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 8,
				"name": "Aldiaz 080 (FP4) 21.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/2.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 10,
				"name": "Aldiaz 080 (FP4) 22.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/3.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 11,
				"name": "Aldiaz 080 (FP4) 25.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/4.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 12,
				"name": "Aldiaz 080 (FP4) 16.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/5.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 13,
				"name": "Aldiaz 080 (FP4) 17.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/intoTheMist/6.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 1,
						"name": "Into The Mist",
						"description": "In a wave of desperation I found you. Or you found me. I embraced you, felt your warmth, smelt your sweet sweet scent. Ever so capturing and frightening I guess I lost focus again. Just lost enough for you to come again and haunt me, tie me, keep me hidden. I relapsed. I came to you again. The rush of feeling you coursing through my veins once more made me feel right back at home. I hate you.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			}
		],
		"imageUrl": "/src/media/collections/intoTheMist/1.jpg"
	},
	{
		"serie": {
			"id": 3,
			"name": "The Unforgiving",
			"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
			"active": true,
			"artists": [
				{
					"id": 1,
					"name": "Aleix",
					"surname": "Díaz Llabrés",
					"artisticName": "",
					"about": "",
					"contactInformation": {
						"id": 1,
						"email": "aleixdiaz2001@gmail.com",
						"phoneNumber": "648007507",
						"address": {
							"id": 1,
							"street": "La gruta",
							"number": "14",
							"city": "Palma de Mallorca",
							"postalCode": "07007",
							"country": "Spain"
						}
					}
				}
			]
		},
		"assets": [
			{
				"id": 14,
				"name": "Aldiaz 064 (Rollei Infrared) 9.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/1.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 16,
				"name": "Aldiaz 064 (Rollei Infrared) 3.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/2.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 17,
				"name": "Aldiaz 064 (Rollei Infrared) 8.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/3.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 18,
				"name": "Aldiaz 059 (Ilford Hp5+) 1.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/4.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 20,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 10.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/5.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 22,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 7.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/6.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 23,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 18.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/7.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 24,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 23.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/8.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 25,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 1.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/9.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 26,
				"name": "Aldiaz 064 (Rollei Infrared) 17.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/10.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 27,
				"name": "Aldiaz 064 (Rollei Infrared) 12.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/11.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 28,
				"name": "Aldiaz 064 (Rollei Infrared) 11.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/12.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 29,
				"name": "Aldiaz (Kodak TMax 400) 26.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/13.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 30,
				"name": "Aldiaz 013 (Kodak TMAX 400) - 13.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/14.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 31,
				"name": "Aldiaz 013 (Kodak TMAX 400) - 14.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/15.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 32,
				"name": "Aldiaz 021 (Ilford HP5+) - 30.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/16.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 33,
				"name": "ALDIAZ 115 (rollei paul 600)_24.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/17.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 34,
				"name": "aleixDiaz29-08(DELTA 400)_28.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/18.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 35,
				"name": "Aldiaz 092 (Hp5+) 5.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/19.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 36,
				"name": "Aldiaz 085 (Hp5+) 11.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/20.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 37,
				"name": "Aldiaz 085 (Hp5+) 12.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/21.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 38,
				"name": "Aldiaz 022 (Rollei RPX 100) 9.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/22.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 39,
				"name": "Aldiaz 022 (Rollei RPX 100) 8.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/23.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 43,
				"name": "Aldiaz 022 (Rollei RPX 100) 12.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/24.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 46,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 32.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/25.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 47,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 15.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/26.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 48,
				"name": "Aldiaz 043 (Rolleir Infrared 400) 30.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/27.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 49,
				"name": "ALDIAZ 113 (ROLLEI PAUL)  38.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/28.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 51,
				"name": "Aldiaz 066 (Tmax 400 ) 34.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/29.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 52,
				"name": "ALDIAZ 114 (ilphord 3200)_38.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theUnforgiving/30.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 3,
						"name": "The Unforgiving",
						"description": "un·for·giv·ing (adjective)  Not willing or able to forgive.",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			}
		],
		"imageUrl": "/src/media/collections/theUnforgiving/1.jpg"
	},
	{
		"serie": {
			"id": 4,
			"name": "Unnamed",
			"description": "",
			"active": true,
			"artists": [
				{
					"id": 1,
					"name": "Aleix",
					"surname": "Díaz Llabrés",
					"artisticName": "",
					"about": "",
					"contactInformation": {
						"id": 1,
						"email": "aleixdiaz2001@gmail.com",
						"phoneNumber": "648007507",
						"address": {
							"id": 1,
							"street": "La gruta",
							"number": "14",
							"city": "Palma de Mallorca",
							"postalCode": "07007",
							"country": "Spain"
						}
					}
				}
			]
		},
		"assets": [
			{
				"id": 53,
				"name": "ALDIAZ 123 (foma400)_2.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/unnamed/1.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 4,
						"name": "Unnamed",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 54,
				"name": "ALDIAZ 123 (foma400)_3.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/unnamed/2.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 4,
						"name": "Unnamed",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 55,
				"name": "ALDIAZ 123 (foma400)_1.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/unnamed/3.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 4,
						"name": "Unnamed",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			}
		],
		"imageUrl": "/src/media/collections/unnamed/1.jpg"
	},
	{
		"serie": {
			"id": 5,
			"name": "The Stills",
			"description": "",
			"active": true,
			"artists": [
				{
					"id": 1,
					"name": "Aleix",
					"surname": "Díaz Llabrés",
					"artisticName": "",
					"about": "",
					"contactInformation": {
						"id": 1,
						"email": "aleixdiaz2001@gmail.com",
						"phoneNumber": "648007507",
						"address": {
							"id": 1,
							"street": "La gruta",
							"number": "14",
							"city": "Palma de Mallorca",
							"postalCode": "07007",
							"country": "Spain"
						}
					}
				}
			]
		},
		"assets": [
			{
				"id": 74,
				"name": "ALDIAZ 119 (KODAK PORTRA 400)_10-10.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/1.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 75,
				"name": "ALDIAZ 119 (KODAK PORTRA 400)_9-9.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/2.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 76,
				"name": "ALDIAZ 119 (KODAK PORTRA 400)_7-7.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/3.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 77,
				"name": "ALDIAZ 119 (KODAK PORTRA 400)_6-6.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/4.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 78,
				"name": "ALDIAZ 125 (KODAK GOLD)_5.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/5.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 79,
				"name": "ALDIAZ 125 (KODAK GOLD)_6.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/6.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 80,
				"name": "R1-06113-0006.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/7.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 81,
				"name": "Aldiaz 058 (Kodak Portra 400) 4.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/8.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 82,
				"name": "ALDIAZ 119 (KODAK PORTRA 400)_2-2.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/9.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			},
			{
				"id": 83,
				"name": "Aldiaz 058 (Kodak Portra 400) 1.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/theStills/10.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 5,
						"name": "The Stills",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			}
		],
		"imageUrl": "/src/media/collections/theStills/1.jpg"
	},
	{
		"serie": {
			"id": 6,
			"name": "Velvet Nostalgia",
			"description": "",
			"active": true,
			"artists": [
				{
					"id": 1,
					"name": "Aleix",
					"surname": "Díaz Llabrés",
					"artisticName": "",
					"about": "",
					"contactInformation": {
						"id": 1,
						"email": "aleixdiaz2001@gmail.com",
						"phoneNumber": "648007507",
						"address": {
							"id": 1,
							"street": "La gruta",
							"number": "14",
							"city": "Palma de Mallorca",
							"postalCode": "07007",
							"country": "Spain"
						}
					}
				}
			]
		},
		"assets": [
			{
				"id": 84,
				"name": "DSCF0672.jpg",
				"description": "",
				"type": "",
				"comment": null,
				"url": "/src/media/collections/velvetNostalgia/1.jpg",
				"active": false,
				"authors": [],
				"series": [
					{
						"id": 6,
						"name": "Velvet Nostalgia",
						"description": "",
						"active": true,
						"artists": [
							{
								"id": 1,
								"name": "Aleix",
								"surname": "Díaz Llabrés",
								"artisticName": "",
								"about": "",
								"contactInformation": {
									"id": 1,
									"email": "aleixdiaz2001@gmail.com",
									"phoneNumber": "648007507",
									"address": {
										"id": 1,
										"street": "La gruta",
										"number": "14",
										"city": "Palma de Mallorca",
										"postalCode": "07007",
										"country": "Spain"
									}
								}
							}
						]
					}
				]
			}
		],
		"imageUrl": "/src/media/collections/velvetNostalgia/1.jpg"
	}
];
