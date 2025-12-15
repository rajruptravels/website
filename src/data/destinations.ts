/* =========================================================
    Destination Types
========================================================= */

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
}

export interface OptionalAddon {
    name: string;
    extra_night: number;
    price: string;
    description: string;
}

export interface Destination {
    id: string;
    name: string;
    type: "national" | "international" | "west-bengal";
    image: string; // Updated to be used with Vite imports
    price: string;
    duration: number; // Storing as number of nights, consistent with data
    rating: number;
    reviews: number;
    description: string;
    highlights: string[];
    featured?: boolean;
    gallery?: string[];
    itinerary?: ItineraryDay[];
    inclusions?: string[];
    exclusions?: string[];
    optional_addon?: OptionalAddon;
}

/* =========================================================
    Image Imports (Vite Safe - Assuming an assets directory structure)
    NOTE: In a real environment, replace this with actual import logic.
          For this response, I am creating placeholder imports to match the requested format.
========================================================= */

// Placeholder imports for demonstration, assuming path aliasing "@/assets/destinations/"
// You need to ensure these files exist at the corresponding paths in your project structure.

import sikkimImg from "@/assets/destinations/sikkim.jpg";
import thailandImg from "@/assets/destinations/thailand.jpg";
import unseenDarjeelingImg from "@/assets/destinations/unseen-darjeeling.jpg";
import offbeatNorthBengalImg from "@/assets/destinations/offbeat-north-bengal-hills.jpeg";
import darjeelingImg from "@/assets/destinations/darjelling.jpg";
import amazingThailandImg from "@/assets/destinations/amazing-thailand-tour.jpeg";
import sriLankaImg from "@/assets/destinations/srilanka.jpeg";
import rajasthanImg from "@/assets/destinations/rajasthan.jpeg";
import puriImg from "@/assets/destinations/puri.jpg";

/* =========================================================
    Destination Data
========================================================= */

const destinationsData: Destination[] = [
    {
        id: "sikkim",
        name: "Sikkim",
        type: "national",
        image: sikkimImg,
        price: "₹15,000",
        duration: 7,
        rating: 4.7,
        reviews: 289,
        featured: true,
        description:
            "Explore the serene beauty of East and North Sikkim including Aritar, Zuluk, Nathang Valley, Gangtok, Lachen, Lachung, and Gurudongmar Lake with full food and transport facilities.",
        highlights: [
            "Aritar",
            "Zuluk",
            "Nathang Valley",
            "Gangtok",
            "Lachen",
            "Lachung",
            "Gurudongmar Lake"
        ],
        gallery: ["/public/sikkim-lake.jpg"],
        itinerary: [
            { "day": 1, "title": "Arrival at NJP - Transfer to Aritar", "description": "Pick up from NJP and transfer to Aritar. Enjoy the beauty of Lampokhri Lake. Night stay at Aritar." },
            { "day": 2, "title": "Aritar to Zuluk/Padamchen", "description": "After breakfast, check out and make permits at Rongli Bazaar. Visit Zuluk, Zig-Zag Road View Point, Thambi View Point, Nathang Valley, Old Baba Mandir, Tukla Valley, Elephanta Lake, Chhangu Lake (subject to permission). Night stay at Zuluk." },
            { "day": 3, "title": "Explore Zuluk - Nathang Valley", "description": "After breakfast, visit Zuluk sightseeing points again and proceed to Silary Gaon. Night stay at Nathang Valley." },
            { "day": 4, "title": "Nathang Valley to Gangtok", "description": "Visit Tsomgo Lake and New Baba Mandir. Later transfer to Gangtok. Evening free at MG Marg. Night stay at Gangtok." },
            { "day": 5, "title": "Gangtok to Lachen", "description": "After breakfast, check out and transfer to Lachen. Night stay at Lachen." },
            { "day": 6, "title": "Lachen to Lachung via Yumthang", "description": "Early morning visit Yumthang Valley. After lunch, transfer to Lachung. Night stay at Lachung." },
            { "day": 7, "title": "Gurudongmar Lake - Return to Gangtok", "description": "Early morning visit Gurudongmar Lake. After lunch, transfer to Gangtok. Night stay at Gangtok." },
            // Note: The original data has 8 days total, but the duration is 7. I will keep the itinerary as is for data fidelity, assuming duration is 7 nights.
            { "day": 8, "title": "Departure", "description": "After breakfast, check out and transfer to NJP. Tour ends with farewell." }
        ],
        inclusions: [
            "Accommodation in all places",
            "Breakfast, lunch, evening snacks, and dinner",
            "Two big cars (Tata Sumo or Bolero)",
            "Daily personal car services",
            "All sightseeing",
            "Driver's food and accommodation",
            "Food from first day lunch to last day breakfast",
            "24x7 travel assistance during the tour"
        ],
        exclusions: [
            "Flights/Train",
            "Documentation and permit charges",
            "Travel insurance",
            "Personal expenses"
        ]
    },

    {
        id: "bangkok",
        name: "Bangkok",
        type: "international",
        image: thailandImg,
        price: "₹49,999",
        duration: 6,
        rating: 4.6,
        reviews: 198,
        featured: true,
        description:
            "Fly from Kolkata to Bangkok and experience the vibrant culture of Thailand with Pattaya, Coral Island, Alcazar Show, Chao Phraya Cruise, and Safari World. Includes flights, visa, hotel stays, meals, and guided tours.",
        highlights: [
            "Pattaya City Tour",
            "Alcazar Show",
            "Coral Island Tour with Indian Lunch",
            "Walking Street, Pattaya",
            "Bangkok City & Shopping",
            "Chao Phraya River Cruise",
            "Safari World & Marine Park"
        ],
        gallery: ["/public/thailand.jpg"],
        itinerary: [
            {
                "day": 1,
                "title": "Kolkata to Pattaya",
                "description": "Report at Kolkata Airport (08:45 am). Fly from Kolkata (11:55) to Bangkok (16:05). After immigration, transfer to Pattaya and check into hotel. Overnight stay at Pattaya."
            },
            {
                "day": 2,
                "title": "Pattaya City Tour & Alcazar Show",
                "description": "After breakfast, enjoy Pattaya city tour. Afternoon visit Alcazar Show. Overnight stay at Pattaya."
            },
            {
                "day": 3,
                "title": "Coral Island Tour",
                "description": "Morning Coral Island tour with Indian lunch. Evening free for leisure at Pattaya Beach and Walking Street. Overnight stay at Pattaya."
            },
            {
                "day": 4,
                "title": "Transfer to Bangkok & River Cruise",
                "description": "Check out from Pattaya and transfer to Bangkok. Free time for shopping. Evening enjoy Chao Phraya River Cruise with buffet dinner. Overnight stay at Bangkok."
            },
            {
                "day": 5,
                "title": "Safari World & Marine Park",
                "description": "Full day excursion to Safari World including Safari Park and Marine Park with buffet lunch. Evening free for shopping. Overnight stay at Bangkok."
            },
            {
                "day": 6,
                "title": "Departure from Bangkok to Kolkata",
                "description": "Early morning check out (03:00 am) and proceed to Bangkok Airport. Fly (06:30) to Kolkata (07:45). Tour ends."
            }
        ],
        inclusions: [
            "Return airfare (CCU – BKK – CCU) by Bhutan Airlines (Economy Class)",
            "Thai tourist visa (normal, no charge)",
            "Airport transfers by AC van",
            "3 nights accommodation at Sunbeam Pattaya (4 Star) or similar",
            "2 nights accommodation at Bangkok Palace (4 Star) or similar",
            "5 continental buffet breakfasts",
            "4 buffet dinners at Indian restaurant",
            "Coral Island tour with Indian buffet lunch",
            "Alcazar Show at Pattaya",
            "Chao Phraya River Cruise with welcome drinks, entertainment & buffet dinner",
            "Full day Safari World excursion with buffet lunch",
            "Medical and baggage insurance"
        ],
        exclusions: [
            "Applicable GST",
            "Applicable TCS",
            "Anything not mentioned in inclusions",
            "Cost incurred due to natural calamity, political disturbance, pandemic or unforeseen events"
        ]
    },

    {
        id: "unseen-darjeeling",
        name: "Unseen Darjeeling",
        type: "west-bengal",
        image: unseenDarjeelingImg,
        price: "₹11,999",
        duration: 6,
        rating: 4.7,
        reviews: 156,
        featured: true,
        description:
            "A refreshing 6-day trip covering Rishop, Sittong, and Darjeeling with scenic viewpoints, monasteries, tea gardens, and homestay experiences in the serene hills of North Bengal.",
        highlights: [
            "Rishop",
            "Sittong",
            "Darjeeling",
            "Tiger Hill Sunrise",
            "Kalimpong & Teesta Bazar",
            "Takdah & Tinchuley"
        ],
        gallery: ["/public/north-bengal.jpg"],
        itinerary: [
            {
                "day": 1,
                "title": "Malbazar to Rishop",
                "description": "Pick up from Malbazar and transfer to Rishop. Enroute visit Damdim Monastery, Loop Bridge, Lolegaon, Lava and more. Enjoy the scenic hills. Overnight stay at Rishop."
            },
            {
                "day": 2,
                "title": "Rishop to Sittong",
                "description": "Transfer from Rishop to Sittong. Enroute visit Hanuman Chawk, Kalimpong, Teesta Bazar etc. Evening free to enjoy the hills. Overnight stay at Sittong."
            },
            {
                "day": 3,
                "title": "Sittong Excursion",
                "description": "Full day excursion covering Ahaldara and nearby attractions. Overnight stay at Sittong."
            },
            {
                "day": 4,
                "title": "Sittong to Darjeeling",
                "description": "After breakfast transfer to Darjeeling via Takdah, Tinchuley and enroute sightseeing. Overnight stay at Darjeeling."
            },
            {
                "day": 5,
                "title": "Darjeeling Sightseeing",
                "description": "Early morning visit Tiger Hill, Batasia Loop, and Ghoom Monastery. After breakfast, explore 7 points of Darjeeling. Overnight stay at Darjeeling."
            },
            {
                "day": 6,
                "title": "Darjeeling to NJP / Siliguri",
                "description": "After breakfast, transfer to New Jalpaiguri via Lepchajagat, Simana View Point, Mirik and Dudhia. Drop at NJP/Siliguri. Tour ends."
            }
        ],
        inclusions: [
            "Personal non-AC car services (Innova)",
            "Accommodation in homestays at scenic locations",
            "Non-AC rooms with attached bathrooms",
            "Full food (breakfast, lunch, snacks, dinner)",
            "Meals from Day 1 lunch to Day 6 breakfast",
            "All sightseeing as per itinerary",
            "GST and fuel charges",
            "Driver's remuneration",
            "Driver’s food and accommodation",
            "24x7 travel assistance during the tour"
        ],
        exclusions: [
            "Flights/Train tickets",
            "Personal expenses",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ]
    },

    {
        id: "offbeat-north-bengal-hills",
        name: "Offbeat North Bengal Hills",
        type: "west-bengal",
        image: offbeatNorthBengalImg,
        price: "₹11,999",
        duration: 5,
        rating: 4.8,
        reviews: 142,
        featured: true,
        description:
            "An offbeat North Bengal journey covering Sittong, Ahaldara, Takdah, Tinchuley, and Kurseong. Enjoy scenic hill views, village life, tea gardens, and homestays with full meals and private car service.",
        highlights: [
            "Sittong",
            "Ahaldara",
            "Takdah & Tinchuley",
            "Baro Mangwa",
            "Peshok",
            "Kurseong"
        ],
        gallery: ["/public/offbeat-darjeeling.jpg"],
        itinerary: [
            {
                "day": 1,
                "title": "NJP/Siliguri to Sittong",
                "description": "Pick up from NJP/Siliguri and transfer to Sittong. Evening free to enjoy the beauty of the hills. Overnight stay at Sittong."
            },
            {
                "day": 2,
                "title": "Sittong Excursion",
                "description": "Full day excursion in the hills covering Ahaldara and surrounding viewpoints. Overnight stay at Sittong."
            },
            {
                "day": 3,
                "title": "Sittong to Takdah/Tinchuley",
                "description": "After breakfast, transfer to Takdah/Tinchuley via Baro Mangwa and Peshok. Overnight stay at Takdah/Tinchuley."
            },
            {
                "day": 4,
                "title": "Takdah/Tinchuley to Kurseong",
                "description": "After breakfast, transfer to Kurseong. Explore tea gardens and offbeat local sites. Overnight stay at Kurseong."
            },
            {
                "day": 5,
                "title": "Kurseong to NJP/Siliguri",
                "description": "After breakfast, enjoy local sightseeing in Kurseong and transfer to NJP/Siliguri. Tour ends."
            }
        ],
        inclusions: [
            "Personal non-AC car services (5 days)",
            "Accommodation in homestays at scenic locations",
            "Non-AC rooms with attached bathrooms",
            "Welcome drinks on arrival",
            "Full food (breakfast, lunch, snacks, dinner)",
            "Meals from Day 1 lunch to Day 5 breakfast",
            "All sightseeing as per itinerary",
            "GST and fuel charges",
            "Driver's remuneration",
            "Driver’s food and accommodation",
            "24x7 travel assistance during the tour"
        ],
        exclusions: [
            "Flights/Train tickets",
            "Personal expenses",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ],
        optional_addon: {
            name: "Kalimpong-Delo Extension",
            extra_night: 1,
            price: "₹14,999",
            description: "Add Kalimpong-Delo to the itinerary with 1 additional night stay and sightseeing."
        }
    },

    {
        id: "darjeeling",
        name: "Darjeeling",
        type: "west-bengal",
        image: darjeelingImg,
        price: "₹11,999",
        duration: 4,
        rating: 4.8,
        reviews: 121,
        featured: true,
        description:
            "A 3-night, 4-day offbeat Darjeeling tour covering Sittong, Mangpoo, Lepchajagat, Mirik, Pashupati, Ahaldara, Latpanchore, Tinchuley, Takdah, Lamahatta, Sevok, Kalijhora and more. Experience local homestays, scenic viewpoints, and authentic North Bengal hospitality.",
        highlights: [
            "Sittong",
            "Mangpoo",
            "Lepchajagat",
            "Mirik",
            "Pashupati Market",
            "Ahaldara",
            "Latpanchore",
            "Tinchuley"
        ],
        gallery: ["/public/unseen-darjeeling.jpg"],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival NJP/Siliguri – Transfer to Sittong",
                "description": "Pick up from NJP/Siliguri and transfer to Sittong. Evening free to enjoy the scenic hills. Overnight stay at Sittong."
            },
            {
                "day": 2,
                "title": "Sittong Excursion – Ahaldara, Mangpoo, Latpanchore",
                "description": "Full-day sightseeing covering Ahaldara, Mangpoo, and Latpanchore. Overnight stay at Sittong."
            },
            {
                "day": 3,
                "title": "Takdah, Tinchuley & Lamahatta Tour",
                "description": "After breakfast, explore Takdah, Tinchuley, and Lamahatta with tea garden views and hilltop monasteries. Overnight stay at homestay."
            },
            {
                "day": 4,
                "title": "Mirik, Pashupati & Departure",
                "description": "Morning sightseeing at Lepchajagat, Mirik, Pashupati Market, Sevok, and Kalijhora. After sightseeing, transfer back to NJP/Siliguri. Tour ends."
            }
        ],
        inclusions: [
            "Personal non-AC car services (4 days)",
            "Accommodation in homestays at scenic locations",
            "Non-AC rooms with attached bathrooms",
            "Welcome drinks on arrival",
            "Full food (breakfast, lunch, snacks, dinner)",
            "Meals from Day 1 lunch to Day 4 breakfast",
            "All sightseeing as per itinerary",
            "GST and fuel charges",
            "Driver’s remuneration",
            "Driver’s food and accommodation",
            "24x7 travel assistance during the tour"
        ],
        exclusions: [
            "Flights/Train tickets",
            "Personal expenses",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ]
        // Note: I did not include the 'meals' and 'booking_procedure' objects as they are not part of the `Destination` interface.
    },

    {
        id: "amazing-thailand",
        name: "Amazing Thailand",
        type: "international",
        image: amazingThailandImg,
        price: "₹40,000",
        duration: 9,
        rating: 4.9,
        reviews: 231,
        featured: true,
        description:
            "A complete 9-day Thailand experience covering Phuket, Krabi, Pattaya, and Bangkok with island tours, cultural shows, river cruises, and adventure activities. Includes hotels, transfers, sightseeing, and Indian meals.",
        highlights: [
            "Phuket Island Stay",
            "Phi Phi Island Tour",
            "Krabi 4 Island Tour",
            "Pattaya Alcazar Show",
            "Coral Island Tour with Indian Lunch",
            "Bangkok City Tour",
            "Chao Phraya River Cruise",
            "Safari World & Marine Park"
        ],
        gallery: [
            "/public/phuket.jpg",
            "/public/krabi.jpg",
            "/public/pattaya.jpg",
            "/public/bangkok.jpg"
        ],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Phuket",
                "description": "Pickup from Phuket Airport and transfer to Phuket hotel by private transfer. Overnight stay at Phuket."
            },
            {
                "day": 2,
                "title": "Phi Phi Island Tour",
                "description": "Breakfast at hotel. Full-day Phi Phi Island tour with lunch by big boat (National Park fee excluded). SIC basis. Overnight stay at Phuket."
            },
            {
                "day": 3,
                "title": "Phuket to Krabi",
                "description": "Breakfast at hotel. Check out and transfer to Krabi hotel by private transfer. Overnight stay at Krabi."
            },
            {
                "day": 4,
                "title": "Krabi 4 Island Tour",
                "description": "Breakfast at hotel. Full-day 4 Island tour with picnic lunch by long tail boat (National Park fee excluded). SIC basis. Overnight stay at Krabi."
            },
            {
                "day": 5,
                "title": "Krabi to Pattaya via Bangkok",
                "description": "Breakfast at hotel. Transfer to Krabi Airport by private transfer. Flight to Bangkok. Pickup from Bangkok Airport and transfer to Pattaya hotel. Evening enjoy Alcazar Show (Normal Seat). Overnight stay at Pattaya."
            },
            {
                "day": 6,
                "title": "Coral Island Tour",
                "description": "Breakfast at hotel. Coral Island round tour with speed boat and Indian buffet lunch. SIC basis. Overnight stay at Pattaya."
            },
            {
                "day": 7,
                "title": "Pattaya to Bangkok + City Tour",
                "description": "Breakfast at hotel. Check out and transfer to Bangkok via en-route half-day city tour covering Golden Buddha, Mini Reclining Buddha, and Gems Gallery. Evening enjoy Chao Phraya River Cruise with dinner. Overnight stay at Bangkok."
            },
            {
                "day": 8,
                "title": "Safari World & Marine Park",
                "description": "Breakfast at hotel. Full-day Safari World with Marine Park including buffet lunch. SIC basis. (Closed on Monday). Overnight stay at Bangkok."
            },
            {
                "day": 9,
                "title": "Departure from Bangkok",
                "description": "Breakfast at hotel. Check out and transfer to Bangkok Airport by private transfer. Tour ends."
            }
        ],
        inclusions: [
            "Accommodation: 2N Phuket + 2N Krabi + 2N Pattaya + 2N Bangkok",
            "Meal Plan: Breakfast + Dinner",
            "Indian Dinners with transfers (2 in Phuket, 2 in Krabi, 2 in Pattaya, 1 in Bangkok, 1 at Bangkok Cruise)",
            "Tours with lunch: Phi Phi Island, Krabi 4 Island, Coral Island, Safari World",
            "Private transfers: Phuket Airport → Phuket Hotel → Krabi Hotel → Krabi Airport, Bangkok Airport → Pattaya Hotel → Bangkok Hotel → Bangkok Airport",
            "All SIC tours as per itinerary",
            "Chao Phraya River Cruise with Dinner",
            "Alcazar Show (Normal Seat)",
            "Safari World & Marine Park"
        ],
        exclusions: [
            "Airfare (Domestic/International)",
            "National Park fees (Phi Phi & Krabi tours)",
            "Personal expenses",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ]
        // Note: 'meal_plan', 'hotel_category', and 'contact' objects are not included as they are not part of the `Destination` interface.
    },

    {
        id: "srilanka",
        name: "Sri Lanka",
        type: "international",
        image: sriLankaImg,
        price: "₹75,000",
        duration: 8,
        rating: 4.9,
        reviews: 187,
        featured: true,
        description:
            "A 7-night, 8-day Sri Lanka experience covering Kandy, Nuwara Eliya, Ella, Mirissa, Bentota, and Colombo. Includes whale watching, tea plantations, Madu River boating, turtle hatchery visit, Colombo city tour, and private coach transfers.",
        highlights: [
            "Kandy City Tour & Temple of Tooth Relic",
            "Dambulla Cave Temple & Sigiriya Rock",
            "Nuwara Eliya Tea Plantations & Gregory Lake",
            "Ella – 9 Arch Bridge",
            "Mirissa Whale Watching"
        ],
        gallery: [
            "/public/kandy.jpg",
            "/public/ella.jpg",
            "/public/mirissa.jpg",
            "/public/bentota.jpg",
            "/public/colombo.jpg"
        ],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Colombo – Transfer to Kandy",
                "description": "Arrive at Colombo Airport and transfer to Kandy. Overnight stay at Kandy."
            },
            {
                "day": 2,
                "title": "Excursion to Dambulla & Sigiriya + Kandy City Tour",
                "description": "Visit Dambulla Cave Temple and Sigiriya Rock Fortress. Later enjoy Kandy city tour including Temple of Tooth Relic and View Point. Overnight stay at Kandy."
            },
            {
                "day": 3,
                "title": "Kandy → Nuwara Eliya → Ella",
                "description": "Drive to Nuwara Eliya, visit tea plantations, processing plant, and Gregory Lake. Later transfer to Ella. Overnight stay at Ella."
            },
            {
                "day": 4,
                "title": "Ella – 9 Arch Bridge → Mirissa",
                "description": "Morning visit to iconic 9 Arch Bridge (nearest accessible point). Transfer to Mirissa. Overnight stay at Mirissa."
            },
            {
                "day": 5,
                "title": "Mirissa Whale Watching → Galle & Hikkaduwa → Bentota",
                "description": "Early morning whale watching tour by boat. Later visit Galle Fort and Hikkaduwa beach. Transfer to Bentota. Overnight stay at Bentota."
            },
            {
                "day": 6,
                "title": "Bentota – Madu River & Turtle Hatchery → Colombo",
                "description": "Morning boating on Madu River and visit Turtle Hatchery. Later transfer to Colombo. Evening free for beach activities. Overnight stay at Colombo."
            },
            {
                "day": 7,
                "title": "Colombo City Tour & Shopping",
                "description": "Half-day city tour covering Gangaramaya Temple, Independence Square, Galle Face Green, and more. Free time for shopping. Overnight stay at Colombo."
            },
            {
                "day": 8,
                "title": "Departure from Colombo",
                "description": "Breakfast at hotel. Transfer to Colombo Airport for departure."
            }
        ],
        inclusions: [
            "Travel assistance",
            "Sri Lanka Tourist Visa charges",
            "Airport–Hotel–Airport transfers and sightseeing by chauffeur-driven coach",
            "Dambulla & Sigiriya excursion",
            "Kandy city tour including Temple of Tooth Relic & View Point",
            "Nuwara Eliya visit with tea plantation & Gregory Lake",
            "Ella – 9 Arch Bridge visit",
            "Blue Whale Watching tour at Mirissa (seasonal, Oct–Mar)",
            "Visit to Galle Fort & Hikkaduwa beach",
            "Madu River boating experience",
            "Turtle Hatchery visit at Bentota",
            "Colombo half-day city tour",
            "Shopping time at Colombo",
            "Applicable GST & TCS"
        ],
        exclusions: [
            "Airfare (International)",
            "Medical & baggage insurance",
            "Meals & beverages not mentioned",
            "Expenses of personal nature",
            "Cost due to natural calamity, political unrest, pandemic, or unforeseen reasons"
        ]
        // Note: 'meal_plan', 'hotel_category', 'accommodation', and 'contact' objects are not included as they are not part of the `Destination` interface.
    },

    {
        id: "rajasthan",
        name: "Rajasthan",
        type: "national",
        image: rajasthanImg,
        price: "₹30,000",
        duration: 13,
        rating: 4.7,
        reviews: 264,
        featured: true,
        description:
            "A 13-day immersive Rajasthan tour covering Jaipur, Pushkar, Ajmer, Udaipur, Mount Abu, Jodhpur, Jaisalmer, and Bikaner. Includes forts, palaces, desert camping, camel rides, and cultural experiences with Bengali home-style meals throughout the journey.",
        highlights: [
            "Jaipur City Palace & Amber Fort",
            "Ajmer Sharif Dargah",
            "Pushkar & Savitri Hill",
            "Chittorgarh Fort",
            "Udaipur",
            "Mount Abu",
            "Jodhpur",
            "Jaisalmer",
            "Bikaner"
        ],
        gallery: [
            "/public/jaipur.jpg",
            "/public/pushkar.jpg",
            "/public/udaipur.jpg",
            "/public/mountabu.jpg",
            "/public/jodhpur.jpg",
            "/public/jaisalmer.jpg",
            "/public/bikaner.jpg"
        ],
        itinerary: [
            {
                "day": 1,
                "title": "Arrival in Jaipur",
                "description": "Reach Jaipur and transfer to hotel. Overnight stay at Jaipur."
            },
            {
                "day": 2,
                "title": "Jaipur Local Sightseeing",
                "description": "Full-day sightseeing including Jaipur Palace, Jantar Mantar, Amber Fort, and more. Overnight stay at Jaipur."
            },
            {
                "day": 3,
                "title": "Jaipur → Ajmer Sharif → Pushkar",
                "description": "Travel to Pushkar via Ajmer Sharif. Afternoon visit Savitri Hill (own expense). Overnight stay at Pushkar."
            },
            {
                "day": 4,
                "title": "Pushkar → Chittorgarh → Udaipur",
                "description": "Transfer to Udaipur with enroute sightseeing at Chittorgarh Fort. Overnight stay at Udaipur."
            },
            {
                "day": 5,
                "title": "Udaipur Local Sightseeing",
                "description": "Visit Udaipur City Palace, Lake Pichola, and other attractions. Overnight stay at Udaipur."
            },
            {
                "day": 6,
                "title": "Udaipur → Mount Abu",
                "description": "Travel to Mount Abu. Evening free for leisure. Overnight stay at Mount Abu."
            },
            {
                "day": 7,
                "title": "Mount Abu Local Sightseeing",
                "description": "Half-day sightseeing including Nakki Lake and Dilwara Temples. Afternoon free for individual activities. Overnight stay at Mount Abu."
            },
            {
                "day": 8,
                "title": "Mount Abu → Jodhpur",
                "description": "Transfer to Jodhpur. Afternoon sightseeing including Mehrangarh Fort and Clock Tower market. Overnight stay at Jodhpur."
            },
            {
                "day": 9,
                "title": "Jodhpur → Jaisalmer",
                "description": "Travel to Jaisalmer. Evening free for leisure. Overnight stay at Jaisalmer."
            },
            {
                "day": 10,
                "title": "Jaisalmer City & Desert Camp",
                "description": "Morning sightseeing – Sonar Kella, Gadisar Lake. Afternoon transfer to Sam Sand Dunes for camel ride and cultural program (own expense). Overnight stay in desert tent."
            },
            {
                "day": 11,
                "title": "Jaisalmer → Bikaner",
                "description": "Transfer to Bikaner with enroute sightseeing. Overnight stay at Bikaner."
            },
            {
                "day": 12,
                "title": "Bikaner Local Sightseeing",
                "description": "Explore Junagarh Fort and local markets. Evening free for shopping. Overnight stay at Bikaner."
            },
            {
                "day": 13,
                "title": "Departure",
                "description": "Check-out and depart with wonderful memories of Rajasthan."
            }
        ],
        inclusions: [
            "All AC transportation (Bus/Coach/Car)",
            "Hotel accommodations (convertible to AC on extra payment)",
            "All meals – breakfast, lunch, snacks, dinner (non-veg Bengali food)",
            "Full-time Tour Manager",
            "Travel assistance & first aid"
        ],
        exclusions: [
            "Train / Flight tickets",
            "Personal expenses",
            "Savitri Hill cable car (Pushkar)",
            "Sam Sand Dunes camel ride & cultural program",
            "Any cost due to natural calamity or unforeseen reasons"
        ]
        // Note: 'meal_plan', 'hotel_category', and 'contact' objects are not included as they are not part of the `Destination` interface.
    },

    {
        id: "odisha",
        name: "Odisha",
        type: "national",
        image: puriImg,
        price: "₹10,999",
        duration: 7,
        rating: 4.6,
        reviews: 189,
        featured: true,
        description:
            "A 7-day Odisha journey covering Puri, Konark, Nandankanan, Dhauli Hills, and Chilka Lake. The tour includes Jagannath Temple darshan, sea bath, cultural exploration, and Bengali home-style meals along the way.",
        highlights: [
            "Jagannath Temple Darshan",
            "Konark Sun Temple",
            "Nandankanan Zoo",
            "Dhauli Hills & Shanti Stupa",
            "Chilka Lake"
        ],
        gallery: [
            "/public/puri.jpg",
            "/public/konark.jpg",
            "/public/nandankanan.jpg",
            "/public/dhauli.jpg",
            "/public/chilka.jpg"
        ],
        itinerary: [
            {
                "day": 1,
                "title": "Start of Journey",
                "description": "Board the train from nearest station (NMZ/NJP/KNE/MLDT). Overnight train journey."
            },
            {
                "day": 2,
                "title": "Arrival at Puri",
                "description": "Arrive in Puri and transfer to hotel. Afternoon local sightseeing. Overnight stay at Puri."
            },
            {
                "day": 3,
                "title": "Konark & Nandankanan Excursion",
                "description": "Full-day sightseeing covering Konark Sun Temple, Nandankanan Zoo, Dhauli Hills and nearby attractions. Overnight stay at Puri."
            },
            {
                "day": 4,
                "title": "Puri Temple & Chilka Lake",
                "description": "Morning sea bath and darshan at Jagannath Temple. Afternoon visit to Chilka Lake (optional). Overnight stay at Puri."
            },
            {
                "day": 5,
                "title": "Free & Leisure Day",
                "description": "Enjoy the beach, local markets, or relax at the hotel. Overnight stay at Puri."
            },
            {
                "day": 6,
                "title": "Departure from Puri",
                "description": "Check out from hotel after breakfast. Transfer to station and board train for return journey. Overnight train journey."
            },
            {
                "day": 7,
                "title": "Return Home",
                "description": "Reach home station (NMZ/NJP/KNE/MLDT) with sweet memories of Puri."
            }
        ],
        inclusions: [
            "Up & Down 3AC Class Train Fare",
            "Transportation as per itinerary",
            "All Accommodation (Family-wise rooms)",
            "All Meals (Breakfast, Lunch & Dinner)",
            "Full-time Tour Manager (24x7)",
            "Travel Assistance & First Aid"
        ],
        exclusions: [
            "Porter charges",
            "Any extra transport not in itinerary",
            "Train food",
            "Entry fees at monuments/parks",
            "Camera charges",
            "Guide charges",
            "Anything not mentioned in inclusions"
        ]
        // Note: 'meal_plan', 'hotel_category', and 'contact' objects are not included as they are not part of the `Destination` interface.
    }
];

export default destinationsData;