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

// INSTRUCTIONS: Copy the collections array from collections.astro (lines 70-2236)
// and paste it here, replacing this comment.
// It should start with: export const collections: Collection[] = [
// and end with: ];

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
				"url": "https://minio.xpose.es/assets/2c9fd94f-1737-48a9-887e-47bd0d36fba0-Aldiaz 080 (FP4) 26.jpg",
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
				"url": "https://minio.xpose.es/assets/4264e5e9-89d7-435f-a109-71b5a67faef0-Aldiaz 080 (FP4) 21.jpg",
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
				"url": "https://minio.xpose.es/assets/a532c640-7c56-4e97-9cbe-18a9993bce83-Aldiaz 080 (FP4) 22.jpg",
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
				"url": "https://minio.xpose.es/assets/c2015fa9-8eba-49a6-a1e5-72cffbead6d0-Aldiaz 080 (FP4) 25.jpg",
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
				"url": "https://minio.xpose.es/assets/ccca593a-62e7-4a33-9b2c-f673a838471a-Aldiaz 080 (FP4) 16.jpg",
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
				"url": "https://minio.xpose.es/assets/e6afe0b4-e225-4d91-b386-cdf55e255a5b-Aldiaz 080 (FP4) 17.jpg",
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
		"imageUrl": "https://minio.xpose.es/assets/2c9fd94f-1737-48a9-887e-47bd0d36fba0-Aldiaz 080 (FP4) 26.jpg"
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
				"url": "https://minio.xpose.es/assets/a31c610c-64fc-4ab3-8d7c-5747289308c7-Aldiaz 064 (Rollei Infrared) 9.jpg",
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
				"url": "https://minio.xpose.es/assets/fdebbaf5-4f94-4101-bb73-eb8b3c12f51e-Aldiaz 064 (Rollei Infrared) 3.jpg",
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
				"url": "https://minio.xpose.es/assets/82f656e3-f436-46ae-a078-96865071f7eb-Aldiaz 064 (Rollei Infrared) 8.jpg",
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
				"url": "https://minio.xpose.es/assets/6ecb6127-1441-4bd9-a8be-c5dfc4940615-Aldiaz 059 (Ilford Hp5+) 1.jpg",
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
				"url": "https://minio.xpose.es/assets/8ac82454-52bd-4b69-b986-b389ac051725-Aldiaz 043 (Rolleir Infrared 400) 10.jpg",
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
				"url": "https://minio.xpose.es/assets/44cfd463-1745-4f23-952c-a8fb9cbb605d-Aldiaz 043 (Rolleir Infrared 400) 7.jpg",
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
				"url": "https://minio.xpose.es/assets/51562b21-4ae8-40c1-b81c-11fba604228e-Aldiaz 043 (Rolleir Infrared 400) 18.jpg",
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
				"url": "https://minio.xpose.es/assets/6de0754a-45e1-4d5a-a5e7-26648630f6bd-Aldiaz 043 (Rolleir Infrared 400) 23.jpg",
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
				"url": "https://minio.xpose.es/assets/7ce8348e-073e-4cb8-a01b-96f0db5d0c8c-Aldiaz 043 (Rolleir Infrared 400) 1.jpg",
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
				"url": "https://minio.xpose.es/assets/97371e3f-44ae-4cae-8880-7ef76b2623c4-Aldiaz 064 (Rollei Infrared) 17.jpg",
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
				"url": "https://minio.xpose.es/assets/b1ea01f3-b2d3-4950-8732-7683b8aef8d5-Aldiaz 064 (Rollei Infrared) 12.jpg",
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
				"url": "https://minio.xpose.es/assets/47515121-b98a-42f5-a766-6738c84c914e-Aldiaz 064 (Rollei Infrared) 11.jpg",
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
				"url": "https://minio.xpose.es/assets/773d437b-c886-433f-b283-db0dab6e0d5a-Aldiaz (Kodak TMax 400) 26.jpg",
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
				"url": "https://minio.xpose.es/assets/0a197b55-a122-436a-8099-12a5268bff85-Aldiaz 013 (Kodak TMAX 400) - 13.jpg",
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
				"url": "https://minio.xpose.es/assets/f4143e68-3e53-445a-beb0-8845c0f8b2e9-Aldiaz 013 (Kodak TMAX 400) - 14.jpg",
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
				"url": "https://minio.xpose.es/assets/5732c33f-5bf8-4345-af6c-fb8ff1c2e103-Aldiaz 021 (Ilford HP5+) - 30.jpg",
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
				"url": "https://minio.xpose.es/assets/18b3d3ac-3f44-432c-8d59-90006887776e-ALDIAZ 115 (rollei paul 600)_24.jpg",
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
				"url": "https://minio.xpose.es/assets/e289de04-3434-4231-9461-5c08d87604fa-aleixDiaz29-08(DELTA 400)_28.jpg",
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
				"url": "https://minio.xpose.es/assets/53e3a2df-5850-4a46-80b6-5dc710ce5a62-Aldiaz 092 (Hp5+) 5.jpg",
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
				"url": "https://minio.xpose.es/assets/63c51038-dc4e-4edb-85ad-7263bfdb8af7-Aldiaz 085 (Hp5+) 11.jpg",
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
				"url": "https://minio.xpose.es/assets/1c1be940-444c-4fbc-af75-8728c916ee68-Aldiaz 085 (Hp5+) 12.jpg",
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
				"url": "https://minio.xpose.es/assets/62ca1589-5d31-42e6-87f0-6c7150c88278-Aldiaz 022 (Rollei RPX 100) 9.jpg",
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
				"url": "https://minio.xpose.es/assets/9820963d-25dc-4023-b083-3ddd40318c91-Aldiaz 022 (Rollei RPX 100) 8.jpg",
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
				"url": "https://minio.xpose.es/assets/773e04c1-942e-48a2-afb2-51ad2666ba75-Aldiaz 022 (Rollei RPX 100) 12.jpg",
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
				"url": "https://minio.xpose.es/assets/9a39853d-5331-4f29-9647-f07d4167cb1a-Aldiaz 043 (Rolleir Infrared 400) 32.jpg",
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
				"url": "https://minio.xpose.es/assets/7d9e76ef-f52d-458e-b359-fb4468be5118-Aldiaz 043 (Rolleir Infrared 400) 15.jpg",
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
				"url": "https://minio.xpose.es/assets/923f467e-ff38-4ff0-adb0-763b2221aca4-Aldiaz 043 (Rolleir Infrared 400) 30.jpg",
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
				"url": "https://minio.xpose.es/assets/e68be042-f416-4d1d-ac5d-4a575cb1f7d7-ALDIAZ 113 (ROLLEI PAUL)  38.jpg",
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
				"url": "https://minio.xpose.es/assets/bdb24932-f5f1-4b8b-84be-f76a508fd58c-Aldiaz 066 (Tmax 400 ) 34.jpg",
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
				"url": "https://minio.xpose.es/assets/cc2391d4-f74a-446c-8b39-fae5d97666de-ALDIAZ 114 (ilphord 3200)_38.jpg",
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
		"imageUrl": "https://minio.xpose.es/assets/a31c610c-64fc-4ab3-8d7c-5747289308c7-Aldiaz 064 (Rollei Infrared) 9.jpg"
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
				"url": "https://minio.xpose.es/assets/0b45f3cd-af01-45d8-b857-3de2d78d5bee-ALDIAZ 123 (foma400)_2.jpg",
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
				"url": "https://minio.xpose.es/assets/ff27fd0b-d28c-4373-97aa-4ccfe6443232-ALDIAZ 123 (foma400)_3.jpg",
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
				"url": "https://minio.xpose.es/assets/7cebec74-ebc0-4295-bcc1-03e37c45e2d5-ALDIAZ 123 (foma400)_1.jpg",
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
		"imageUrl": "https://minio.xpose.es/assets/0b45f3cd-af01-45d8-b857-3de2d78d5bee-ALDIAZ 123 (foma400)_2.jpg"
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
				"url": "https://minio.xpose.es/assets/ad496e80-b73c-4910-93e9-a6fb10e3c8f4-ALDIAZ 119 (KODAK PORTRA 400)_10-10.jpg",
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
				"url": "https://minio.xpose.es/assets/76cee382-c3fe-44a2-80ab-0a428cb51e97-ALDIAZ 119 (KODAK PORTRA 400)_9-9.jpg",
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
				"url": "https://minio.xpose.es/assets/2cd99393-89c8-41ab-baa9-59472031b8db-ALDIAZ 119 (KODAK PORTRA 400)_7-7.jpg",
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
				"url": "https://minio.xpose.es/assets/8268f1ab-40f9-43ca-824f-e3e47847cc96-ALDIAZ 119 (KODAK PORTRA 400)_6-6.jpg",
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
				"url": "https://minio.xpose.es/assets/89e44053-767b-49c6-bfe4-75717a6a29e4-ALDIAZ 125 (KODAK GOLD)_5.jpg",
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
				"url": "https://minio.xpose.es/assets/9da4505a-9185-4dba-9e73-ead643d04eb6-ALDIAZ 125 (KODAK GOLD)_6.jpg",
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
				"url": "https://minio.xpose.es/assets/ced3e7b8-54ba-492a-aedb-64fd63da24c5-R1-06113-0006.jpg",
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
				"url": "https://minio.xpose.es/assets/68a7138c-e90f-49a5-8b5e-305d5b5acf43-Aldiaz 058 (Kodak Portra 400) 4.jpg",
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
				"url": "https://minio.xpose.es/assets/753e298b-db57-43da-8f4a-97afa422c1d5-ALDIAZ 119 (KODAK PORTRA 400)_2-2.jpg",
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
				"url": "https://minio.xpose.es/assets/7d37169c-252b-4f40-8ffb-f603f869d326-Aldiaz 058 (Kodak Portra 400) 1.jpg",
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
		"imageUrl": "https://minio.xpose.es/assets/ad496e80-b73c-4910-93e9-a6fb10e3c8f4-ALDIAZ 119 (KODAK PORTRA 400)_10-10.jpg"
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
				"url": "https://minio.xpose.es/assets/a033e38c-f4a7-4f0f-adb3-c78bda2a62ec-DSCF0672.jpg",
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
		"imageUrl": "https://minio.xpose.es/assets/a033e38c-f4a7-4f0f-adb3-c78bda2a62ec-DSCF0672.jpg"
	}
];
