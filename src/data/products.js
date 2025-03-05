const products = [
    {
        id: 1,
        handle: "tall-cactus-pot-buddy",
        title: "Tall Cactus Pot Buddy",
        description: "Add a bit of desert charm to your plants with this tall mini cactus pot buddy!",
        price: 35.00,
        images: {
            "Tall Cactus": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/10.png?v=1727937382",

        },
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
        handle: "short-cactus-pot-buddy",
        title: "Short Cactus Pot Buddy",
        description: "This charming mini cactus in a terracotta pot is the perfect pot buddy to brighten up any plant!",
        price: 35.00,
        images: {
           "Short Cactus": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/9.png?v=1727937010",

        },
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
        description: "Spice up your garden or plant babies with these cute little resin frogs!!",
        price: 20.00,
        images: {
           "Frog": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/1_482a6e2b-b2c4-45a2-b7fd-21a7f6d5f3fb.png?v=1727866345",

        },
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
        description: "Add a touch of whimsy to your garden or indoor plant collection with these charming resin mushrooms!",
        price: 25.00,
        images: {
           "Mushroom": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/4_5c4314b6-c7ad-4c3e-a97b-10c065564acc.png?v=1727866737",
        },
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
        title: "Gnome Pot Buddy",
        description: "Bring a dash of fun and character to your garden or houseplants with these adorable resin gnome pot buddies!",
        price: 50.00,
        images: {
           "Gnome": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/7.png?v=1727935851"
        },
        options: [
            {
                name: "Color",
                values: ["Tall Cactus"]
            }
        ],
        category: "Mini Planters"
    },

    {
        id: 6,
        handle: "emma-15cm-resin-planter",
        title: "Emma 15cm Resin Planter",
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor.",
        price: 165.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky.png?v=1725283540",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_43f8400d-9671-4821-b257-7f75ce1eb905.png?v=1725283540",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_63d93574-a1f5-4f86-9068-71681cc6187b.png?v=1725283540",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold.png?v=1725283540",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-24_20-50-07-883.png?v=1694948440",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall.png?v=1725283540",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream.png?v=1725283540",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue.png?v=1725283540",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeafpng.png?v=1725283540"
        },
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
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor.",
        price: 165.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_3f32e83e-a5aa-49cb-90ee-4d0ab77e892e.png?v=1725283514",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminiumSnow_64230cf6-2c60-4626-be61-b5f058f97700.png?v=1725283514",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_d0e2a083-d769-4142-9d7e-e516e8b32782.png?v=1725283514",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_edb050be-7cd0-44e6-81da-909463eca23f.png?v=1695110402",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-25_11-35-33-719.png?v=1694949664",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_56139348-9673-4dce-8d5b-fa467e771283.png?v=1695110393",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_bba88516-48c1-49d8-a59a-c6b715868799.png?v=1695110443",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_d3213668-f3db-47c3-9784-eb305611acf5.png?v=1695110421",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_136913a6-a97d-4308-b8b2-b6249800350f.png?v=1695110410"
        },
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
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor.",
        price: 165.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_40c7a42c-eab6-46f0-85c0-e18651ed6604.png?v=1695152882",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_75f24986-6d78-4436-a2cb-b0e86b865365.png?v=1695152882",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_779b780e-a341-4472-874b-a1884e2b4518.png?v=1695152882",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_edb050be-7cd0-44e6-81da-909463eca23f.png?v=1695110402",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-25_11-34-35-217.png?v=1694949399",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_651071c2-b070-484f-8eb3-5d768ad178d0.png?v=1695152882",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_e4e5e410-3bfa-4b15-999a-b0c2abf8acce.png?v=1695152882",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_e7f5c913-768d-4abd-850f-fba8cf3930b9.png?v=1695152882",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_c7890df1-5a68-416b-b220-36eabebae373.png?v=1695152882"
        },
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
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor.",
        price: 165.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_327e9dfa-202e-4b44-b0d3-b604d9bdf1f6.png?v=1725283490",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow.png?v=1725283490",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube.png?v=1725283490",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_4b784e57-2e4a-4b17-a176-ef32fa1b2ea7.png?v=1695110131",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-25_11-35-05-776.png?v=1694949021",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_d9150e6d-abf7-42af-9259-e31511280f59.png?v=1725283490",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_737a12a2-71e7-4dd8-8e3b-e941d817183e.png?v=1695110155",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_4aac50f7-34f9-41bf-969a-7bd81c63c5e7.png?v=1725283490",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_5669124c-aa81-4562-ae95-91223ed1500c.png?v=1725283490"
        },
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
        description: "TC Style Resin Planters offer beautiful terracotta style containers with the convenience of a lightweight, durable resin construction.",
        price: 25,  // Default price (smallest size)
        prices: {
            "5cm": 25,
            "6cm": 30,
            "8cm": 50,
            "15cm": 120
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSnow.png?v=1725283646",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/aluminumsnow_5e9ea234-62f0-40ca-8868-511b36bc5169.png?v=1725283646",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_bc6a75b6-c042-43a2-9f11-a83c1c531cf6.png?v=1725283646",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NightJewel_3d2ec644-af06-44ea-ae83-f7b673ac26b0.png?v=1695152451",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_908f19f1-fcad-4647-b7b3-3cbc535e551f.png?v=1695152460",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_9978cad9-d780-43a6-933b-99ab85a508f6.png?v=1695152510",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_072f4b72-62f3-4893-8886-1948b39257ae.png?v=1695152489",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_553242d7-f96b-4b1b-afc6-1514c2a371b1.png?v=1695152482"
        },
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
        description: "This Ruby Resin Planter is perfect for your home garden. Crafted from durable resin, this planter measures 9cm x 11.5cm",
        price: 55.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_8eb906c3-ec17-4914-84d1-a18e918fad0d.png?v=1725283613",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminiumSnow_2e352600-8500-44fe-9237-72498ad9b854.png?v=1725283613",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_d47fe087-354a-4d45-919d-62648abeea10.png?v=1725283613",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_bcab208b-a440-45d8-bc93-7d9d4e7bf34a.png?v=1695111185",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-24_20-42-32-576.png?v=1694951914",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_a69a3a1c-296e-47f8-b467-a15552412266.png?v=1725283613",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_bf7fb93a-f045-4665-a5a8-3382be2ad846.png?v=1695111283",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_f1a7eaf0-c0ad-4a4b-9daf-06c710058eda.png?v=1695111255",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_6038f5f4-1915-47f4-a4e3-5df9de74580e.png?v=1695111240"
        },
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
        description: "The Evie Resin Planter is a lightweight and durable planter with a size of 9cm x 10cm",
        price: 45.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_5cb601e6-3169-4780-8c84-85dc2ba457cf.png?v=1725283564",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminiumSnow.png?v=1725283564",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_50b742ad-7216-4ff1-8688-ed05aa8894ce.png?v=1725283564",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_f711ce09-ec82-4e00-b30a-0943aef1188b.png?v=1725283564",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-24_20-40-56-938.png?v=1694950140",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/EvieCanyonWall.png?v=1725283564",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_37bba010-ce84-446a-aedd-74ef23ba3ca6.png?v=1695110949",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_272628f9-2303-42bc-9627-77c58b64b431.png?v=1695110924",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/Aloeleaf.png?v=1695110904"
        },
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
        description: "The Amy Resin Planter is perfect for displaying your favorite plants. Crafted from a durable resin material, this 7.5cm x 8.5cm",
        price: 40.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyMidnightSky.png?v=1695109568",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyAluminumSnow.png?v=1695109577",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyWhite.png?v=1695109584",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyDryGold.png?v=1695109608",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-24_20-42-52-322.png?v=1694949967",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyCanyonWall.png?v=1695109592",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_8522265f-4b8d-46c8-8956-54520e25f362.png?v=1695109632",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_9839425f-0425-431b-8fce-e95b0bc908dd.png?v=1695109622",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AmyAoeLeaf.png?v=1695109615"
        },
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
        description: "Our Boston Fiberglass Planters are the perfect way to bring life to any indoor or outdoor space.",
        price: 3679.65,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=45cm L110=cm": 3679.65,
            "Medium H=65cm W=45cm L110=cm": 4231.60,
            "Large H=80cm W=45cm L110=cm":  4788.59
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_e71ab6b4-9231-409d-82a7-9f8428ce8a2c.png?v=1695150124",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_433f253b-7ed3-4a1d-bd60-07a721bee0e6.png?v=1695150124",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_655c78c8-3ae8-4b8c-86a0-f99ff3214853.png?v=1695150124",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_18-26-29-988_fbf8b5b9-fd52-4ff2-a68c-24b9627d5d56.png?v=1694964179",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_18772e75-d94f-4900-b4dd-8d127492cbde.png?v=1695150124",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_43f7e8e6-af39-42a1-b20c-6b9633cd4dcb.png?v=1695150124",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_1a626fb4-6e0d-4495-8cbc-2504a80a5c6f.png?v=1695150124",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/aloeLeaf_96d82235-8f22-431b-8945-8fa83a92cc07.png?v=1695150124"
        },
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
        description: "The New Yorker Fiberglass planters are ideal for both indoor and outdoor use. Offered in 3 sizes (50cm, 65cm, and 80cm high",
        price: 2375.75,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=45cm": 2375.75,
            "Medium H=65cm W=45cm": 2469.68,
            "Large H=80cm W=45cm":  2574.94
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_90a472da-23f2-433d-948b-385a9ffdbe0e.png?v=1695151419",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_ebaf5c42-6c62-4ec9-a7c7-345583e481fe.png?v=1695151419",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_73ca727a-1f94-4257-87fb-db00c403b8ba.png?v=1695151419",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_18-25-49-299.png?v=1694963294",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_0d73a2d3-3193-4c78-853d-582b3e7cb0a2.png?v=1695151419",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MOuntainStream_004d5a69-9186-410f-a543-0ec68437efe8.png?v=1695151419",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_cdf54f9c-4b2f-4680-a1b7-823dc2fe789f.png?v=1695151419",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_8cdb5c8e-5dfa-420b-8287-777794b72778.png?v=1695151419"
        },
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
        description: "Lightweight and durable, these Paris Fiberglass Planters are constructed with a high-quality fiberglass material, making them suitable for interior and exterior use",
        price: 3460.65,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=38cm L=100=cm": 3460.65,
            "Medium H=65cm W=38cm L=100=cm": 3680.25,
            "Large H=80cm W=38cm L=100=cm":  3875.24
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_58836d3d-ed3f-45d0-8b09-cb287a3b85da.png?v=1695151986",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_2ba1d616-d321-42a4-a260-79450d703c53.png?v=1695151995",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_5bbbb686-471c-41a5-b45a-6d80418303a2.png?v=1695152039",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_18-26-29-988.png?v=1694962471",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_1a532968-05ee-4c84-b732-d05d98edd697.png?v=1695152024",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_a1d0338e-a1ef-4eb7-961e-929c61e8b5ca.png?v=1695152069",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_71efd9d4-d696-4560-92c2-ab3c2b598f5e.png?v=1695152055",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/aloeLeaf_afccc1f5-6eeb-4615-9687-2b86c5ae1b23.png?v=1695152046"
        },
        options: [
            {
                name: "Color",
                values: ["Midnight Sky", "Aluminum Snow", "Frosted Cube", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"]
            },
            {
                name: "Size",
                values: ["Small H=50cm W=38cm L100=cm", "Medium H=65cm W=38cm L100=cm", "Large H=80cm W=38cm L100=cm"]
            }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 17,
        handle: "nile-fiberglass-planter",
        title: "Nile Fiberglass Planter",
        description: "The Nile Fiberglass Planters offer a sleek, modern aesthetic and come with the convenience of being available in 3 sizes",
        price: 1911.66,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=36cm": 1911.66,
            "Medium H=65cm W=36cm": 1989.00,
            "Large H=80cm W=36cm":  2071.88
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_cfda7824-fa9c-4fc9-9de3-28c1f18bcc73.png?v=1695151756",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AlluminumSnow.png?v=1695151755",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_871fb15f-3b5e-49ee-9c7f-20479a4ca244.png?v=1695151756",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_18-27-06-589.png?v=1694961397",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_1ae65934-640e-4646-9da3-63ddb3872b58.png?v=1695151756",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_b65ff326-87c7-4c70-ba36-4310a2236148.png?v=1695151756",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_974a76cc-ecd4-4385-8b31-a4dad92e45d3.png?v=1695151756",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_9386dc34-f8a7-46bc-8609-a9398d55e58f.png?v=1695151756"
        },
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
        description: "Elevate your outdoor space with the stylish Everest Fiberglass Planters. Perfect for larger plants",
        price: 3246.50,  
        prices: {
            "Medium H=65cm W=36cm": 3246.50,
            "Large H=80cm W=36cm":  3610.00
        },
        images: {
            "Midnight Sky Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_1f8539e1-f0db-4e51-a45d-92759a2b906f.png?v=1695150514",
            "Midnight Sky Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-50-41-622.png?v=1695230553",
            "Aluminum Snow Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_9fdcb2c0-6f75-478d-89b0-975a76fbc635.png?v=1695150514",
            "Aluminum Snow Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Dry Gold Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_c14f5d96-9236-4a8a-84fb-8763388c0743.png?v=1695150514",
            "Dry Gold Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Night Jewl Plain":"https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_15-07-42-541.png?v=1694959511",
            "Night Jewl Line Art":"https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Canyon Wall Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/Canyonwall_9b8aaa11-b58f-4450-b5a6-540f83351124.png?v=1695150514",
            "Canyon Wall Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Mountain Stream Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_1f49d434-8fc6-4568-9ae6-763b07d1b3b5.png?v=1695150514",
            "Mountain Stream Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Nautilus Blue Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_c13d9c5e-f71d-4941-a5be-aaf2d8f30fd2.png?v=1695150514",
            "Nautilus Blue Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/IMG_2328.jpg?v=1690126766",
            "Aloe Leaf Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_771e5ba1-381d-4deb-9b1b-94cd5c3c97b8.png?v=1695150514",
            "Aloe Leaf Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553"
        },
        options: [
            { name: "Color", values: ["Midnight Sky", "Aluminum Snow", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"] },
            { name: "Size", values: ["Medium H=65cm W=36cm", "Large H=80cm W=36cm"] },
            { name: "Line Art", values: ["Plain", "Line Art"] }
        ],
        category: "Fiberglass Planters"
    },
    
    {
        id: 19,
        handle: "victoria-fiberglass-planter",
        title: "Victoria Fiberglass Planter",
        description: "Enjoy a modern look outdoors with these stylish fiberglass Victoria planters.",
        price: 3246.50,  
        prices: {
            "Medium H=36cm x W=39.5cm": 1260.00,
            "Large H=43cm W=46.5cm":  1775.00
        },
        images: {
            "Midnight Sky Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_5c1e3665-8b71-432c-809c-87a52fcbc479.png?v=1695230553",
            "Midnight Sky Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-50-41-622.png?v=1695230553",
            "Aluminum Snow Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnos.png?v=1695230553",
            "Aluminum Snow Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Dry Gold Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_2bd55e44-7e34-42b6-b58c-7550045405c8.png?v=1695230553",
            "Dry Gold Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Night Jewl Plain":"https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-27_18-27-44-642.png?v=1694955609",
            "Night Jewl Line Art":"https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Canyon Wall Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_912fb953-2855-4c96-afca-4740f37c9fe6.png?v=1695230553",
            "Canyon Wall Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Mountain Stream Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_f1fe293e-cbf4-40ab-8d8a-0c50bee73138.png?v=1695230553",
            "Mountain Stream Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553",
            "Nautilus Blue Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_884c135a-e957-412f-adb7-f094ea7f1217.png?v=1695230553",
            "Nautilus Blue Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/IMG_2328.jpg?v=1690126766",
            "Aloe Leaf Plain": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_9be9731b-2e7f-4d4b-9646-255dbe8c3804.png?v=1695230553",
            "Aloe Leaf Line Art": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-06_09-49-16-980.jpg?v=1695230553"
        },
        options: [
            { name: "Color", values: ["Midnight Sky", "Aluminum Snow", "Dry Gold", "Night Jewl", "Canyon Wall", "Mountain Stream", "Nautilus Blue", "Aloe Leaf"] },
            { name: "Size", values: ["Medium H=36cm x W=39.5cm", "Large H=43cm W=46.5cm"] },
            { name: "Line Art", values: ["Plain", "Line Art"] }
        ],
        category: "Fiberglass Planters"
    },

    {
        id: 20,
        handle: "barcelona-ceramic-planter",
        title: "Barcelona Ceramic Planter",
        description: "The Barcelona Ceramic Planter is a one-of-a-kind, modern-style accessory for any decor.",
        price: 698.00,
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_07d69ac7-dd3e-4a72-a303-1c56692c36a0.png?v=1695232044",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_e8decd66-a6ff-40cc-8c64-15b024c553c9.png?v=1695232044",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_5e5d92fb-c197-4207-81ed-4d514725ab71.png?v=1695232044",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_d0670a98-4a2d-4b77-8548-08c7535ff7c4.png?v=1695232044",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Untitled_InstagramPost_Square.png?v=1694973352",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_21293df0-7ef1-4a46-a5bc-aa4c2156f899.png?v=1695232044",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_adf3557f-d283-4424-9825-df122bfc328b.png?v=1695232044",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_cb2716d5-82bc-4978-89a8-382c8b462de3.png?v=1695232044",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_8b3360ba-cc67-4781-a8c2-413c8560ec3f.png?v=1695232044"
        },
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
        description: "A modern planter with the option to add a wooden stand. Available in various sizes and colors.",
        price: 500.00,  // Base price without stand
        prices: {
            "Small": 500.00,
            "Medium": 600.00,
        },
        standPrices: {
            "Small": 352,  // Price for small stand
            "Medium": 412, // Price for medium stand
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_8f5edfa1-f98c-4466-942a-2c941e0584f6.png?v=1695235810",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_c21cb8d3-c856-4e11-9006-be982d235ef4.png?v=1695235959",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_41262553-6980-4083-a69e-cfc5264ba797.png?v=1695236012",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_4f6710dc-ac3d-457a-a333-62c7bcca1ba2.png?v=1695236245",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/CairoMedium.png?v=1694972508",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_a18e8b4a-6b71-48b3-9482-47bfac7c15da.png?v=1695236187",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_150d4ff9-5d4a-4e02-aed5-2e1d03d46f5b.png?v=1695236467",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_cef6ecf8-461a-4703-81e1-9165a40cee4f.png?v=1695236345",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeaf_e2015876-fa24-455f-95c3-2d191293b472.png?v=1695236306",
        },
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
        description: "This Amazon Ceramic Planter offers a large, 36 x 33 cm surface area, perfect for displaying larger plants and flowers in any room.",
        price: 885.00,  // Base price without stand

        standPrices: {
            "With Stand": 412.00,  // Price for small stand
        },
        images: {
            "Midnight Sky": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MidnightSky_69b6b9a9-5f86-47f6-8cd9-314e10180144.png?v=1695230735",
            "Aluminum Snow": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AluminumSnow_84cf61d0-233c-4310-a169-2c5f2d20cff0.png?v=1695230735",
            "Frosted Cube": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/FrostedCube_7b420383-c540-4260-9151-f42ca09057bf.png?v=1695230735",
            "Dry Gold": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/DryGold_21ec032d-ddd8-4cc7-a34e-0b00291af37d.png?v=1695230735",
            "Night Jewl": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Amazon.png?v=1694966046",
            "Canyon Wall": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/CanyonWall_ac40268d-fd56-48f2-9aa4-1b59a532739c.png?v=1695230735",
            "Mountain Stream": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/MountainStream_c5905a42-b239-4ef3-a472-38c2a7504427.png?v=1695230735",
            "Nautilus Blue": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/NautilusBlue_58a27fc7-61ca-45ec-92e0-5f273233bc84.png?v=1695230735",
            "Aloe Leaf": "https://cdn.shopify.com/s/files/1/0793/4463/2097/products/AloeLeafpng_b0653a8d-9544-49e0-9a8c-eea2b22c95be.png?v=1695230735",
        },
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
    }
];

export default products;
