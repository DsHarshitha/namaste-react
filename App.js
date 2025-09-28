import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Project - 1 : Food Delivery app plan
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *  - Search 
 *  - Resto Container
 *      - Resto Cards [Food pic, Restaurant name, cuisine, delivery time, rating]
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className = "header">
      <div className = "logo-container">
        <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/047/171/152/non_2x/logo-design-for-restaurant-and-food-company-vector.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

  );
}

const resList = {"restaurants": [
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "10581",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
                                            "locality": "14th Main",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "721",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "21K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 1.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "1.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-29 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹98"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.7",
                                                    "ratingCount": "3.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/pizza-hut-14th-main-hsr-layout-rest10581",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "376708",
                                            "name": "Chinese Wok",
                                            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                                            "locality": "3rd Sector",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Asian",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "61955",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "8.1K+",
                                            "sla": {
                                                "deliveryTime": 34,
                                                "lastMileTravel": 1.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "1.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-29 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹119"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/chinese-wok-3rd-sector-hsr-layout-rest376708",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "524936",
                                            "name": "Theobroma",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/72d575af-a19a-49f1-8545-7e3fe27b17e6_524936.JPG",
                                            "locality": "HSR Layout",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Bakery",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "1040",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "8.1K+",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 1.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "25% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.8",
                                                    "ratingCount": "520"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/theobroma-hsr-layout-rest524936",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "182320",
                                            "name": "Domino's Pizza",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/4a8b844b-e47f-4da0-867a-ba4c9f9102a7_182320.JPG",
                                            "locality": "6th Sector",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Pastas",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "2456",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "8.9K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-6th-sector-hsr-layout-rest182320",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1122081",
                                            "name": "Mealy - Your Everyday Meal",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/05ad69a4-4703-45c2-b7b9-36ad86efbadf_1122081.jpg",
                                            "locality": "BTM Layout",
                                            "areaName": "HSR",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Street Food",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "11705",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "3",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 0.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/mealy-your-everyday-meal-btm-layout-hsr-rest1122081",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "57283",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f2e04fc7-621a-46cd-9d01-cd32736eaac9_57283.jpg",
                                            "locality": "HSR Layout",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "166",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "64K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 1.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-29 06:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹39"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "3.1K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/burger-king-hsr-layout-rest57283",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "350220",
                                            "name": "Starbucks Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/c31fd1e0-e18e-4cc3-8d72-6bbb9b245da3_350220.JPG",
                                            "locality": "HSR Layout",
                                            "areaName": "HSR Layout",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Snacks",
                                                "Desserts",
                                                "Bakery",
                                                "Ice Cream"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "195515",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.4K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹199"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "1.5K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-hsr-layout-rest350220",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "594171",
                                            "name": "BOX8 - Desi Meals",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/7baea20c-c986-4b0b-9b52-b8b2b0f3a23c_594171.jpg",
                                            "locality": "Hongasandra",
                                            "areaName": "Bommanahalli",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Biryani",
                                                "Thalis",
                                                "Home Food"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "10655",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "2.5K+",
                                            "sla": {
                                                "deliveryTime": 15,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-20 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-29 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹109"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-d7d9cdfa-585d-4fcf-9926-42852cc87478"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/bangalore/box8-desi-meals-hongasandra-bommanahalli-rest594171",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },],};

const RestoCard = (props) => {

  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, areaName, deliveryTime, sla } = resData?.info;

  return (
  <div className="res-card" style={{
    backgroundColor: "#dbe1ceeb",
  }}>
  <img className="card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
  <h3>{name}</h3>
  <h4>{cuisines.join(", ")}</h4>
  <h4>{avgRating}</h4>
  <h4>{totalRatingsString} ratings</h4>
  <h4>{areaName}</h4>
  <h4>{deliveryTime} minutes</h4>
  </div>
  );
  };

  // Always use Key in a map, else React wont be able to understand which element to update.
  // also Key should be unique for each element.
  // key={restaurant.info.id} is a good choice.
  // key={index} is a bad choice. [REACT itself do not approve of this]
  // As react gets confused which element to update, it may lead to bugs in your app.

const Body =() => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {resList.restaurants.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};




const AppLayout = () => {
  return (
    <div className = "app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);