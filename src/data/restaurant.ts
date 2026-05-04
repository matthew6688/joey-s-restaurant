export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  note: string;
  items: MenuItem[];
}

export interface RestaurantData {
  key: string;
  name: string;
  cuisine: string;
  menuSourceLabel: string;
  menuSourceUrl: string;
  bookingUrl: string;
  hours: string[];
  heroImage: string;
  sections: MenuSection[];
}

export const restaurantData: RestaurantData = {
  "key": "joeys",
  "name": "Joey's",
  "cuisine": "Clifftop Brisbane dining with breakfast, seafood, pizza, pasta and cocktails",
  "menuSourceLabel": "Official Joey's menus",
  "menuSourceUrl": "https://www.joeys.com.au/menus",
  "bookingUrl": "https://www.joeys.com.au/reservations",
  "hours": [
    "Open daily 6:00am-12:00am",
    "Breakfast daily",
    "Lunch and dinner from noon till late"
  ],
  "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
  "sections": [
    {
      "title": "Breakfast",
      "note": "From the official breakfast PDF.",
      "items": [
        {
          "name": "Avocado on Toast",
          "description": "Crushed avocado, fried kale, tomato, pickled radish, Persian feta, dukkah, balsamic glaze, lemon",
          "price": "$22"
        },
        {
          "name": "Chilli Scramble",
          "description": "Croissant roll, chilli scrambled egg, hollandaise, bacon, fried kale, baby capers",
          "price": "$27.5"
        },
        {
          "name": "Joeys Big Brekkie",
          "description": "Eggs, bacon, roasted tomatoes, mushrooms, chorizo, hash brown, sourdough",
          "price": "$34.5"
        }
      ]
    },
    {
      "title": "Summer Menu",
      "note": "Official summer menu highlights.",
      "items": [
        {
          "name": "Moreton Bay Bug Roll",
          "description": "Sriracha, Marie Rose, lettuce, lemon",
          "price": "$21"
        },
        {
          "name": "Salt & Pepper Calamari",
          "description": "Lemon and garlic mayo",
          "price": "$24"
        },
        {
          "name": "Kingfish Crudo",
          "description": "Blood orange, cucumber, dill oil",
          "price": "$27"
        },
        {
          "name": "Beef Tartare",
          "description": "Black aioli, caper, fried shallots, chives, horseradish, parmesan",
          "price": "$28"
        }
      ]
    },
    {
      "title": "Main & Dolce",
      "note": "Pasta, seafood and dessert.",
      "items": [
        {
          "name": "Spaghetti",
          "description": "Prawn, lemon, chilli, parsley",
          "price": "$38"
        },
        {
          "name": "Coral Coast Barramundi",
          "description": "Braised leek, white wine butter sauce, fish roe",
          "price": "$42"
        },
        {
          "name": "Pork Tomahawk",
          "description": "Davidson plum, port wine sauce",
          "price": "$46"
        },
        {
          "name": "Tiramisu",
          "description": "Mascarpone, dark rum, savoiardi, caffe",
          "price": "$20"
        }
      ]
    }
  ]
};
