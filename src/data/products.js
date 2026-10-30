const products = [
    {
        id: 1,
        handle: "tall-cactus-pot-buddy",
        title: "Tall Cactus Pot Buddy",
        description: "Add a bit of desert charm to your plants with this tall cactus pot buddy! Standing 5 cm tall and 3 cm wide, this cactus comes in a terracotta pot and features a hand-painted flower that comes in different colors at various times of the year.\n\n🌸A fun and vibrant accent for your indoor or outdoor plant pots, bringing a touch of color and personality all year round!",
        price: 35.00,
        images: {
            "Tall Cactus": "https://i.ibb.co/V0FVWryH/10-1.png",

        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Tall Cactus"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 2,
        handle: "mini-cactus-pot-buddy",
        title: "Mini Cactus Pot Buddy🌵",
        description: "This charming mini cactus in a terracotta pot is the perfect pot buddy to brighten up any plant! Standing 4 cm tall and 3 cm wide, it features a hand-painted flower that comes in different colors at various times of the year.\n\n 🌸A cute and colorful addition to your plant collection, perfect for adding a seasonal touch!",
        price: 35.00,
        images: {
           "Short Cactus": "https://i.ibb.co/qYypvtFK/9-1.png",

        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Short Cactus"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 3,
        handle: "frog-pot-buddy",
        title: "Frog Pot Buddy",
        description: "Spice up your garden or plant babies with these cute little resin frogs! Perfect for popping into your plant pots with their handy wire that sticks right into the soil. They're tiny but mighty—each frog is only 2 cm tall and 3.5 cm long, making them the perfect low-maintenance garden companion.\n\n 🌿Give your plants a lil' frog friend today! 😍",
        price: 20.00,
        images: {
           "Frog": "https://i.ibb.co/4wM4sssT/1-482a6e2b-b2c4-45a2-b7fd-21a7f6d5f3fb-1.png",

        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Frog"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 4,
        handle: "mushroom-pot-buddy",
        title: "Mushroon Pot Buddy",
        description: "Add a touch of whimsy to your garden or indoor plant collection with these charming resin toadstools! Standing at 3.5 cm tall and 2 cm wide, they're the perfect playful accent for any plant pot. Simply stick the wire into the soil and watch your plants take on a magical, fairy-tale vibe.\n\n ✨Brighten up your greenery with these adorable toadstools! 🌿",
        price: 25.00,
        images: {
           "Mushroom": "https://i.ibb.co/1tmnvm60/4-5c4314b6-c7ad-4c3e-a97b-10c065564acc-1.png",
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Mushroom"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 5,
        handle: "gnome-pot-buddy",
        title: "Gnome Pot Buddies - Assorted Colors 🧙‍♂️",
        description: "Bring a dash of fun and character to your garden or houseplants with these adorable resin gnome pot buddies! Standing at 4 cm tall and 2 cm wide, these cheerful little gnomes come in a variety of bright colors. Perfect for adding a quirky touch to your pots—simply stick the wire into the soil, and let these gnomes guard your greenery!\n\n 🌿Choose your favorite color or collect them all for a vibrant gnome family in your plant collection! 🌈",
        price: 50.00,
        images: {
           "Gnome Pot Buddy": "https://i.ibb.co/sd25MMcH/7-1.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Gnome Pot Buddy"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 6,
        handle: "emma-15cm-resin-planter",
        title: "Emma 15cm Resin Planter",
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor. Featuring a unique modern design and high-quality resin construction, it makes an attractive addition to any home. This planter is UV and weather-resistant, offering long-lasting use for all your planting needs.",
        price: 235.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464203/Emma_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464194/Emma_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464194/Emma_Aluminum_Snow.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464197/Emma_Dry_Gold.webp",
            "Night Jewl": "https://i.ibb.co/tPw392Yp/Picsart-23-07-08-11-46-03-172.png",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464196/Emma_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464204/Emma_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464206/Emma_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464193/Emma_Aloe_Leafpng.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 7,
        handle: "casey-15cm-resin-planter",
        title: "Casey 15cm Resin Planter",
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor. Featuring a unique modern design and high-quality resin construction, it makes an attractive addition to any home. This planter is UV and weather-resistant, offering long-lasting use for all your planting needs.",
        price: 235.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464187/Casey_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464180/Casey_Aluminium_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464184/Casey_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464183/Casey_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464191/Casey_Night_Jewl.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464182/Casey_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464189/Casey_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464190/Casey_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464179/Casey_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 8,
        handle: "tina-15cm-resin-planter",
        title: "Tina 15cm Resin Planter",
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor. Featuring a unique modern design and high-quality resin construction, it makes an attractive addition to any home. This planter is UV and weather-resistant, offering long-lasting use for all your planting needs.",
        price: 235.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464775/Tina_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464761/Tina_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464769/Tina_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464767/Tina_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464783/Tina_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464764/Tina_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464777/Tina_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464780/Tina_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464758/Tina_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 9,
        handle: "anna-15cm-resin-planter",
        title: "Anna 15cm Resin Planter",
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor. Featuring a unique modern design and high-quality resin construction, it makes an attractive addition to any home. This planter is UV and weather-resistant, offering long-lasting use for all your planting needs.",
        price: 235.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464052/Anna_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464047/Anna_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464050/Anna_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464049/Anna_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464056/Anna_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464048/Anna_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464053/Anna_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464054/Anna_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464046/Anna_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 10,
        handle: "tc-style-resin-planter",
        title: "TC Style Resin Planter's",
        description: "TC Style Resin Planters offer beautiful terracotta style containers with the convenience of a lightweight, durable resin construction. Available in 15cm, 8cm, 6cm, and 5cm sizes to suit any size planting requirements.",
        price: 25,  // Default price (smallest size)
        prices: {
            "5cm": 16.35,
            "6cm": 19.60,
            "8cm": 25,
            "15cm": 75
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464698/TC_Range_6_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464686/TC_Range_6_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464693/TC_Range_6_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464690/TC_Range_6_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464706/TC_Range_6_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464688/TC_Range_6_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464700/TC_Range_6_Mountain_Steream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464703/TC_Range_6_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464683/TC_Range_6_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["5cm", "6cm", "8cm", "15cm"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 11,
        handle: "ruby-resin-planter",
        title: "Ruby Resin Planter",
        description: "This Ruby Resin Planter is perfect for your home garden. Crafted from durable resin, this planter measures 9cm x 11.5cm and is designed to stand the test of time. With a modern design, this planter is sure to become the focal point of your home garden.",
        price: 54.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464619/Ruby_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464606/Ruby_Aluminium_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464614/Ruby_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464611/Ruby_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464627/Ruby_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464609/Ruby_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464621/Ruby_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464624/Ruby_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464603/Ruby_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 12,
        handle: "evie-resin-planter",
        title: "Evie Resin Planter",
        description: "The Evie Resin Planter is a lightweight and durable planter with a size of 9cm x 10cm. Its resin material makes it resistant to UV radiation, water and wear, making it suitable for both indoor and outdoor use.",
        price: 43.00,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464305/Evie_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464296/Evie_Aluminium_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464301/Evie_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464299/Evie_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464310/Evie_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464297/Evie_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464307/Evie_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464308/Evie_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464293/Evie_Aloe_leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 13,
        handle: "amy-resin-planter",
        title: "Amy Resin Planter",
        description: "The Amy Resin Planter is perfect for displaying your favorite plants. Crafted from a durable resin material, this 7.5cm x 8.5cm planter is designed to hold plants while providing an aesthetically pleasing look. A great addition to any indoor or outdoor garden.",
        price: 32.50,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464003/Amy_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464000/Amy_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464006/Amy_White.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464002/Amy_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464005/Amy_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464001/Amy_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464004/Amy_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464005/Amy_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464001/Amy_Aoe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Resin Planters"
    },

    {
        id: 14,
        handle: "boston-fiberglass-planter",
        title: "Boston Fiberglass Planter",
        description: "Our Boston Fiberglass Planters are the perfect way to bring life to any indoor or outdoor space. Available in three sizes, these rectangle shaped planters are made from highly durable and weather-resistant fiberglass. With this planter, you can be certain that your plants will be safe and stylish at the same time.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 3679.65,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=45cm L110=cm": 3384.35,
            "Medium H=65cm W=45cm L110=cm": 4237.50,
            "Large H=80cm W=45cm L110=cm":  5316.65
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464078/Boston_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464072/Boston_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464076/Boston_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464075/Boston_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464082/Boston_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464073/Boston_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464079/Boston_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464080/Boston_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464072/Boston_aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small H=50cm W=45cm L110=cm", "Medium H=65cm W=45cm L110=cm", "Large H=80cm W=45cm L110=cm"]
            }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 15,
        handle: "new-yorker-fiberglass-planter",
        title: "New Yorker Fiberglass Planter",
        description: "The New Yorker Fiberglass planters are ideal for both indoor and outdoor use. Offered in 3 sizes (50cm, 65cm, and 80cm high), these planters are lightweight and durable, crafted from all-weather fiberglass to withstand various weather conditions. With their modern design, these planters are perfect for any design aesthetic.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 2375.75,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=45cm": 2254.35,
            "Medium H=65cm W=45cm": 2593.35,
            "Large H=80cm W=45cm":  2932.50
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464534/New_Yorker_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464522/New_Yorker_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464530/New_Yorker_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464527/New_Yorker_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464541/New_Yorker_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464525/New_Yorker_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464536/New_Yorker_MOuntain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464539/New_Yorker_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464520/New_Yorker_Aloe_Leaf.webp"
        },
        allImages: [
            "https://i.ibb.co/jkXxFpdB/New-yorker.png",
        ],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small H=50cm W=45cm", "Medium H=65cm W=45cm", "Large H=80cm W=45cm"]
            }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 16,
        handle: "paris-fiberglass-planter",
        title: "Paris Fiberglass Planter",
        description: "Lightweight and durable, these Paris Fiberglass Planters are constructed with a high-quality fiberglass material, making them suitable for interior and exterior use. Their sleek, contemporary design will serve as a stylish accent to any space. The planters are available in 3 sizes.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 3460.65,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=38cm L=100=cm": 3050.00,
            "Medium H=65cm W=38cm L=100=cm": 3815.75,
            "Large H=80cm W=38cm L=100=cm":  4805.50 
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464587/Paris_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464575/Paris_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464582/Paris_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464580/Paris_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464596/Paris_Night_Jewel2.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464577/Paris_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464589/Paris_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464591/Paris_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464572/Paris_aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small H=50cm W=38cm L=100=cm", "Medium H=65cm W=38cm L=100=cm", "Large H=80cm W=38cm L=100=cm"]
            }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 17,
        handle: "nile-fiberglass-planter",
        title: "Nile Fiberglass Planter",
        description: "The Nile Fiberglass Planters offer a sleek, modern aesthetic and come with the convenience of being available in 3 sizes. The fiberglass material ensures the planters are strong and durable, and they're also lightweight. Create your own outdoor oasis with these stylish and timeless planters.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 1911.66,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=36cm": 2034.00,
            "Medium H=65cm W=36cm": 2254.35,
            "Large H=80cm W=36cm": 2474.50
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464559/Nile_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464544/Nile_Alluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464554/Nile_Frosted_Snow.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464552/Nile_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464566/Nile_Night_Jewel.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464549/Nile_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464561/Nile_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464564/Nile_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464546/Nile_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small H=50cm W=36cm", "Medium H=65cm W=36cm", "Large H=80cm W=36cm"]
            }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 18,
        handle: "everest-fiberglass-planter",
        title: "Everest Fiberglass Planter",
        description: "Elevate your outdoor space with the stylish Everest Fiberglass Planters. Perfect for larger plants, these lightweight planters come in two sizes: large (H=75cm, W=73cm) and small (H=60cm, W=73cm). Whether you're looking for a subtle accent or an eye-catching focal point, Everest planters will make any greenery and patio design stand out.\n\nFor line art options, after placing an order, a sales agent will contact you to discuss color choices. Please specify your preferred top coat color when placing your order.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 3246.50,  
        prices: {
            "Medium H=65cm W=36cm": 3926.75,
            "Large H=80cm W=36cm": 4350.50
        },
        images: {
            "Midnight Sky Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464266/Everest_Midnight_Sky.webp",
            "Midnight Sky Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Aluminum Snow Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464257/Everest_Aluminum_Snow.webp",
            "Aluminum Snow Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Frosted Cube Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464263/Everest_Frosted_Cube._png.webp",
            "Frosted Cube Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Dry Gold Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464261/Everest_Dry_Gold.webp",
            "Dry Gold Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Night Jewl Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Night Jewl Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Canyon Wall Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464259/Everest_Canyon_wall.webp",
            "Canyon Wall Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Mountain Stream Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464268/Everest_Mountain_Stream.webp",
            "Mountain Stream Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Nautilus Blue Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464270/Everest_Nautilus_Blue.webp",
            "Nautilus Blue Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Aloe Leaf Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464255/Everest_Aloe_Leaf.webp",
            "Aloe Leaf Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp"
        },
        allImages: [],
        options: [
            { name: "Color", values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"] },
            { name: "Size", values: ["Medium H=65cm W=36cm", "Large H=80cm W=36cm"] },
            { name: "Line Art", values: ["Plain", "Line Art"] }
        ],
        category: "Fiberglass Planters"
    },
    {
        id: 19,
        handle: "victoria-fiberglass-planter",
        title: "Victoria Fiberglass Planter",
        description: "Enjoy a modern look outdoors with these stylish fiberglass Victoria planters. Choose between the Large Victoria, measuring 43cm high by 46.5cm wide, or the Medium Victoria, measuring 36cm high by 39.5cm wide. These sleek planters will provide an elegant touch to your home's exterior.\n\nFor line art options, after placing an order, a sales agent will contact you to discuss color choices. Please specify your preferred top coat color when placing your order.\n\nAll our Fiberglass Planters come with liners and watering systems (liner reservoirs) for easy maintenance and plant care.",
        price: 3246.50,  
        prices: {
            "Medium H=36cm x W=39.5cm": 1495.00,
            "Large H=43cm W=46.5cm": 2141.35
        },
        images: {
            "Midnight Sky Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464809/Victoria_Midnight_Sky.webp",
            "Midnight Sky Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Aluminum Snow Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464795/Victoria_Aluminum_Snos.webp",
            "Aluminum Snow Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Frosted Cube Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464803/Victoria_Frosted_Cube.webp",
            "Frosted Cube Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Dry Gold Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464800/Victoria_Dry_Gold.webp",
            "Dry Gold Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Night Jewl Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464817/Victoria_Night_Jewel.webp",
            "Night Jewl Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Canyon Wall Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464797/Victoria_Canyon_Wall.webp",
            "Canyon Wall Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Mountain Stream Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464811/Victoria_Mountain_Stream.webp",
            "Mountain Stream Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Nautilus Blue Plain": "https://i.ibb.co/7NBGHqnh/Nautilus-Blue.png",
            "Nautilus Blue Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp",
            "Aloe Leaf Plain": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464791/Victoria_Aloe_Leaf.webp",
            "Aloe Leaf Line Art": "https://res.cloudinary.com/eunzhgad/image/upload/v1791804743/Picsart-23-07-06-09-49-16-980.webp"
        },
        allImages: [],
        options: [
            { name: "Color", values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"] },
            { name: "Size", values: ["Medium H=36cm x W=39.5cm", "Large H=43cm W=46.5cm"] },
            { name: "Line Art", values: ["Plain", "Line Art"] }
        ],
        category: "Fiberglass Planters"
    },
    

    {
        id: 20,
        handle: "barcelona-ceramic-planter",
        title: "Barcelona Ceramic Planter",
        description: "The Barcelona Ceramic Planter is a one-of-a-kind, modern-style accessory for any decor. A unique-looking planter with a height of 12.5cm and a width of 34cm, it provides an eye-catching, vibrant look that adds a unique statement to any room.",
        price: 788.75,
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464063/Barcelona_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464058/Barcelona_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464061/Barcelona_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464060/Barcelona_Dry_Gold.webp",
            "Night Jewl": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464067/Barcelona_Night_J.webp",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464059/Barcelona_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464065/Barcelona_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464066/Barcelona_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464057/Barcelona_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Ceramic Planters"
    },

    {
        id: 21,
        handle: "cairo-ceramic-planter",
        title: "Cairo Ceramic Planter",
        description: "Cairo Ceramic Planters are the perfect addition to any indoor or outdoor garden. These planters are available in two sizes and come with or without wooden stands. Durable ceramic construction and a range of sizes ensure that you can find the perfect planter for any gardening occasion.",
        price: 500.00,  // Base price without stand
        prices: {
            "Small": 536.75,
            "Medium": 615.85,
        },
        standPrices: {
            "Small": 397,  // Price for small stand
            "Medium": 465, // Price for medium stand
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464093/Cairo_Medium_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464087/Cairo_Medium_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464091/Cairo_Medium_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464089/Cairo_Medium_Dry_Gold.webp",
            "Night Jewl": "https://i.ibb.co/NdNV5x7j/Screenshot-2023-07-09-094929.png",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464088/Cairo_Medium_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464094/Cairo_Medium_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464095/Cairo_Medium_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791464086/Cairo_Medium_Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl",  "Canyon Wall",  "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small", "Medium"]
            },
            {
                name: "Wooden Stand",
                values: ["No Stand", "With Stand"] // Simplified option
            }
        ],
        category: "Ceramic Planters"
    },

    {
        id: 22,
        handle: "amazon-ceramic-planter",
        title: "Amazon Ceramic Planter",
        description: "This Amazon Ceramic Planter offers a large, 36 x 33 cm surface area, perfect for displaying larger plants and flowers in any room. Available with or without a wooden stand to easily elevate your plants and match your home decor.",
        price: 1075.00,  // Base price without stand

        standPrices: {
            "With Stand": 465.00,  // Price for large stand
        },
        images: {
            "Midnight Sky": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463970/Amazon_Midnight_Sky.webp",
            "Aluminum Snow": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463969/Amazon_Aluminum_Snow.webp",
            "Frosted Cube": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463970/Amazon_Frosted_Cube.webp",
            "Dry Gold": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463970/Amazon_Dry_Gold.webp",
            "Night Jewl": "https://i.ibb.co/NdNV5x7j/Screenshot-2023-07-09-094929.png",
            "Canyon Wall": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463970/Amazon_Canyon_Wall.webp",
            "Mountain Stream": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463971/Amazon_Mountain_Stream.webp",
            "Nautilus Blue": "https://res.cloudinary.com/eunzhgad/image/upload/v1791463971/Amazon_Nautilus_Blue.webp",
            "Aloe Leaf": "https://res.cloudinary.com/eunzhgad/image/upload/v1791462806/Aloe_Leaf.webp"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl",  "Canyon Wall",  "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            
            {
                name: "Wooden Stand",
                values: ["No Stand", "With Stand"] // Simplified option
            }
        ],
        category: "Ceramic Planters"
    },

    {
        id: 23,
        handle: "resin-buddha-candle-holder",
        title: "Resin Buddha Candle Holder",
        description: "This beautiful Resin Buddha Candle Holder is perfect for adding a spiritual touch to your home. With a 19.5cm height and 13cm width, this holder is the perfect size to fit any decoration. Crafted from high-quality resin, it is sure to last for years to come.",
        price: 325.00,
        images: {
           "Buddha Candle Holder": "https://i.ibb.co/9992d7P0/Picsart-23-07-26-14-42-19-795-1.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Buddha Candle Holder"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 24,
        handle: "holding-hands",
        title: "Holding Hands",
        description: "Elevate your space with our exquisite Resin Holding Hands Sculpture, an artful representation of connection and support. This captivating piece features two hands gently cupped together, forming a serene and inviting cradle.\n\nAvailable in a spectrum of stunning colors from our store's collection, this versatile sculpture can seamlessly blend into any decor style, making it a perfect addition to your home or office.",
        price: 195.00,
        images: {
            "Midnight Sky": "https://i.ibb.co/sdZdxvS6/Midnight-Sky-Hands2.png",
            "Aluminum Snow": "https://i.ibb.co/8DxSy21Q/Aluminum-Snow-Hands2.png",
            "Frosted Cube": "https://i.ibb.co/kVP4KC7M/Frosted-Cube-Hands2.png",
            "Dry Gold": "https://i.ibb.co/8gWjmmZK/Dry-Gold-Hands2.png",
            "Night Jewl": "https://i.ibb.co/3mf52rv7/Night-Jewel-Hands2.png",
            "Canyon Wall": "https://i.ibb.co/jFbRCzr/Terra-Cotta-Hands2.png",
            "Mountain Stream": "https://i.ibb.co/BV2WNPmF/Mountain-Stream-Hands2.png",
            "Nautilus Blue": "https://i.ibb.co/nsXR4sDK/Nautilus-Blue-Hands2.png",
            "Aloe Leaf": "https://i.ibb.co/14RSkvY/Aloe-Leaf-Hands2.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 25,
        handle: "resin-heart-container",
        title: "Resin Heart Container",
        description: "Add a touch of love and elegance to your home with our Heart-Shaped Resin Container. This beautifully crafted piece is more than just a container—it's a symbol of affection and style. Whether you're looking to plant your favorite small succulents or store cherished jewelry, this versatile container meets your needs with grace.",
        price: 58.00,
        images: {
            "Midnight Sky": "https://i.ibb.co/1tpWRzxY/Midnight-Sky-Heart.png",
            "Aluminum Snow": "https://i.ibb.co/4ZSXZXWY/Aluminum-Snow-Heart.png",
            "Frosted Cube": "https://i.ibb.co/23gQsnJW/Frosted-Cube-heart.png",
            "Dry Gold": "https://i.ibb.co/8Dxfrmnn/Dry-Gold-heart.png",
            "Night Jewl": "https://i.ibb.co/CpPnJgtp/Night-Jewel-Heart.png",
            "Canyon Wall": "https://i.ibb.co/DD7Z37DR/canyon-wall-heart.png",
            "Mountain Stream": "https://i.ibb.co/JwT8sZRW/Mountain-Stream-Heart.png",
            "Nautilus Blue": "https://i.ibb.co/Xrz9vy1D/Nautilus-Blue-Heart.png",
            "Aloe Leaf": "https://i.ibb.co/ccJJZ4rt/Aloe-Leaf-heart.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 26,
        handle: "resin-laughing-buddha",
        title: "Resin Laughing Buddha",
        description: "This Resin Laughing Buddha statue stands 19.5cm tall and 17.5cm wide, making it perfect for displaying anywhere in your home. Its detailed features and friendly expression will be sure to delight family and friends.",
        price: 240.00,
        images: {
            "Midnight Sky": "https://i.ibb.co/JjdryqpW/Picsart-23-07-26-14-36-27-735.png",
            "Aluminum Snow": "https://i.ibb.co/sJqwPf21/Aluminium-Snow.png",
            "Frosted Cube": "https://i.ibb.co/1JPp2Kww/Frosted-Cube.jpg",
            "Dry Gold": "https://i.ibb.co/ynTS1WR0/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/99tWmDNK/Night-Jewl.png",
            "Canyon Wall": "https://i.ibb.co/xt55tjdb/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/nMcN1q9c/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/4Z4bR92t/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/R4CjkTbJ/Aloe-Leaf.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 27,
        handle: "resin-buddha-head",
        title: "Resin Buddha Head",
        description: "This beautiful resin Buddha Head stands 23.5cm tall and is 12cm wide, with a stunningly detailed finish. Crafted with exquisite care, it is the perfect addition to any home - bringing peace and tranquility to your interior space.",
        price: 325.00,
        images: {
           "Resin Buddha Head": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-26_14-38-57-684.png?v=1694974259"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Resin Buddha Head"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 28,
        handle: "resin-tree-stump-planter",
        title: "Resin Tree Stump Planter",
        description: "This 7-cm-high, 10-cm-wide Resin Tree Stump Planter is perfect for brightening up indoor and outdoor areas with small plants, succulents, and shrubs. Crafted from weather-resistant resin, it's designed to last for years with minimal care.",
        price: 65.00,
        images: {
           "Resin Tree Stump Planter": "https://i.ibb.co/cSNjs0CW/Picsart-23-07-26-15-02-35-640-1.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Resin Tree Stump Planter"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 29,
        handle: "resin-excited-groot-mini-planter",
        title: "Resin Excited Groot Mini Planter",
        description: "This Resin Excited Groot Mini Planter is a perfect addition to your home or office. It stands 14cm high and measures 15cm wide, making it a great feature piece that won't take up too much space. With the groot-shaped design, you can add a splash of life to any room.",
        price: 220.00,
        images: {
           "Resin Excited Groot Mini Planter": "https://i.ibb.co/T58MrPm/Picsart-23-07-26-15-03-48-184-1.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Resin Excited Groot Mini Planter"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 30,
        handle: "resin-folded-arms-groot-mini-planter",
        title: "Resin Folded Arms Groot Mini Planter",
        description: "This Resin Folded Arms Groot Mini Planter is the perfect size for your indoor plants. At 14cm high and 11cm wide, it's small enough to fit on a windowsill or desk, but large enough to make an impression. Made of durable resin, this stylish planter is designed to last.",
        price: 220.00,
        images: {
           "Resin Folded Arms Groot Mini Planter": "https://i.ibb.co/wN5BzwkY/Picsart-23-07-26-15-06-17-227-1.png"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Resin Folded Arms Groot Mini Planter"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 31,
        handle: "polypropylene-liner",
        title: "Polypropylene Liner",
        description: "Our Self-Watering Plant Liners take the guesswork out of plant care, keeping your plants healthy with minimal effort. Offered in 4 sizes (25cm round, 29cm square stacker, 32cm round, and 40cm round), these liners turn a compatible planter into a low-maintenance home for thriving plants. Simply fill the reservoir and enjoy 2 to 3 weeks of worry-free watering.\n\nHow it works: water is added through the fill pipe and collects in the reservoir at the base. Capillary stones in the soil deck absorb only what they can hold, so roots draw moisture as they need it and never sit in soggy soil. This helps prevent root rot, disease and early plant loss. The cap gauge shows the water level, so you always know when it's time to top up.\n\nSetup is as easy as 1, 2, 3: insert the sealing plug and soil deck into the bottom of the pot, add the capillary stones and fill pipe, then plant your plant. The fill pipe also makes adding liquid fertiliser quick and mess-free.\n\nPlease choose the size that matches your planter.",
        price: 325.00 ,  // Default price (smallest size)
        prices: {
            "25cm round": 325.00,
            "32cm round": 395.00,
            "40cm round": 475.00,
            "29cm square": 325.00
        },
        images: {
            "Black": "https://res.cloudinary.com/eunzhgad/image/upload/v1793346717/1.webp",
        },
        allImages: [
            "https://res.cloudinary.com/eunzhgad/image/upload/v1793346717/2.webp",
            "https://res.cloudinary.com/eunzhgad/image/upload/v1793346718/photo1.webp",
        ],
        options: [
            {
                name: "Color",
                values: ["Black"]
            },
            {
                name: "Size",
                values: ["25cm round", "32cm round", "40cm round", "29cm square"]
            }
        ],
        category: "Accessories"
    },
];

export default products;