const products = [
    {
        id: 1,
        handle: "tall-cactus-pot-buddy",
        title: "Tall Cactus Pot Buddy",
        description: "Add a bit of desert charm to your plants with this tall mini cactus pot buddy!",
        price: 35.00,
        images: {
            "Tall Cactus": "https://i.ibb.co/V0FVWryH/10-1.png",

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
           "Short Cactus": "https://i.ibb.co/qYypvtFK/9-1.png",

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
           "Frog": "https://i.ibb.co/4wM4sssT/1-482a6e2b-b2c4-45a2-b7fd-21a7f6d5f3fb-1.png",

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
           "Mushroom": "https://i.ibb.co/1tmnvm60/4-5c4314b6-c7ad-4c3e-a97b-10c065564acc-1.png",
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
           "Gnome Pot Buddy": "https://i.ibb.co/sd25MMcH/7-1.png"
        },
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
        description: "This stylish and durable 15cm Resin Planter is a great choice for any décor.",
        price: 165.00,
        images: {
            "Midnight Sky": "https://i.ibb.co/tP3NRT3R/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/MkpHnkNr/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/LXjkBctK/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/XvRsSQf/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/tPw392Yp/Picsart-23-07-08-11-46-03-172.png",
            "Canyon Wall": "https://i.ibb.co/Rp42QWf1/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/yFWDsLRf/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/fY8sC5nk/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/M3gF6GG/Aloe-Leafpng.png"
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
            "Midnight Sky": "https://i.ibb.co/x8tn845z/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/dsvjMrrt/Aluminium-Snow.png",
            "Frosted Cube": "https://i.ibb.co/JPL76M2/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/kg2dN9r3/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/N6w0KVdY/Picsart-23-07-25-11-35-33-719.png",
            "Canyon Wall": "https://i.ibb.co/0Rb4MxkF/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/3mdtwL3r/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/SwRrdN9t/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/8nFBvw3M/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/DDYZRRkc/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/tM8XWVgq/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/RVY3NfF/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/8LbPc0xy/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/rR2xhszH/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/zTrh9k7r/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/Z1SZYfFd/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/qYJrdczk/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/pBQxTF6P/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/chtVJDPd/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/hx60MhrV/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/HTpxDyPT/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/twPMgjY6/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/6J1pSsQB/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/Y7SjFd29/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/MDJHgxF2/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/7dHs38RK/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/84gsHCQC/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/VWm2qt1h/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/27bf5Mz7/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/SDK8KHt5/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/JjBb2gwT/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/PGG1Dt6X/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/KRFCyXr/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/vbHR6kS/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/yFNgjJ1M/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/fV2TTDpP/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/9m6753Hv/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/zhPsGjhr/Aluminium-Snow.png",
            "Frosted Cube": "https://i.ibb.co/XrgNZYjP/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/1Yr4V32k/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/NgZrMCHQ/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/ch4R0T8j/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/1jHh9xy/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/jpRYdp6/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/842j044Y/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/spZkhsBH/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/JjDzwLQx/Aluminium-Snow.png",
            "Frosted Cube": "https://i.ibb.co/DfgFfWg9/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/8L691rpt/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/ch0QDV5x/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/YTDy3D1V/Evie-Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/ccv3wzbd/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/3y86mqD3/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/LXpX8QY9/Aloe-leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/60vN7hMq/Amy-Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/vC3798h6/Amy-Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/pjXRb6Qz/Amy-White.png",
            "Dry Gold": "https://i.ibb.co/8pVktjx/Amy-Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/DgPt6Vyj/Amy-Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/23W6YNjW/Amy-Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/vx2CFBr1/Amy-Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/j9wKfJP2/Amy-Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/ycsRxFbJ/Amy-Aoe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/NnFb7g6X/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/d0pbxb0z/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/3yh2ZYfd/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/YrC1w1J/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/chfzrXL3/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/RT7JDL9C/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/VcJCfbHr/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/gLYzXXJr/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/wrYzbxBk/aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/FbNfxKn9/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/Zz8MM8Vs/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/PGB1WVL3/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/tP33w2ZT/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/Zz5qPfMP/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/M3rf7KG/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/BVPD3wx5/MOuntain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/fY090yxX/Aloe-Leaf.png",
            "Aloe Leaf": "https://i.ibb.co/fY090yxX/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/NnFb7g6X/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/d0pbxb0z/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/3yh2ZYfd/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/YrC1w1J/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/chfzrXL3/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/RT7JDL9C/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/VcJCfbHr/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/gLYzXXJr/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/wrYzbxBk/aloe-Leaf.png"
        },
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
        description: "The Nile Fiberglass Planters offer a sleek, modern aesthetic and come with the convenience of being available in 3 sizes",
        price: 1911.66,  // Default price (smallest size)
        prices: {
            "Small H=50cm W=36cm": 1911.66,
            "Medium H=65cm W=36cm": 1989.00,
            "Large H=80cm W=36cm":  2071.88
        },
        images: {
            "Midnight Sky": "https://i.ibb.co/3msZLpn5/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/YFRFvTHC/Alluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/k21t8dG3/Frosted-Snow.png",
            "Dry Gold": "https://i.ibb.co/yxxpYxY/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/CK924j3V/Night-Jewel.png",
            "Canyon Wall": "https://i.ibb.co/PG4bjgpH/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/fGXmDDr5/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/msgD9z8/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/j9TkG02z/Aloe-Leaf.png"
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
        description: "Elevate your outdoor space with the stylish Everest Fiberglass Planters. Perfect for larger plants. For line art options, after placing an order, a sales agent will contact you to discuss color choices. Please specify your preferred top coat color when placing your order",
        price: 3246.50,  
        prices: {
            "Medium H=65cm W=36cm": 3246.50,
            "Large H=80cm W=36cm": 3610.00
        },
        images: {
            "Midnight Sky Plain": "https://i.ibb.co/XMkxNy3/Midnight-Sky.png",
            "Midnight Sky Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Aluminum Snow Plain": "https://i.ibb.co/xK0zcqHz/Aluminum-Snow.png",
            "Aluminum Snow Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Frosted Cube Plain": "https://i.ibb.co/WWRdpJSm/Frosted-Cube-png.png",
            "Frosted Cube Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Dry Gold Plain": "https://i.ibb.co/ymhTMZmW/Dry-Gold.png",
            "Dry Gold Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Night Jewl Plain": "https://i.ibb.co/Y76PBVp4/Picsart-23-07-27-15-07-42-541.png",
            "Night Jewl Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Canyon Wall Plain": "https://i.ibb.co/93CCFLm9/Canyon-wall.png",
            "Canyon Wall Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Mountain Stream Plain": "https://i.ibb.co/jkqwwPsN/Mountain-Stream.png",
            "Mountain Stream Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Nautilus Blue Plain": "https://i.ibb.co/yFXGCNmP/Nautilus-Blue.png",
            "Nautilus Blue Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Aloe Leaf Plain": "https://i.ibb.co/G456hbgV/Aloe-Leaf.png",
            "Aloe Leaf Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp"
        },
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
        description: "Enjoy a modern look outdoors with these stylish fiberglass Victoria planters. For line art options, after placing an order, a sales agent will contact you to discuss color choices. Please specify your preferred top coat color when placing your order",
        price: 3246.50,  
        prices: {
            "Medium H=36cm x W=39.5cm": 1260.00,
            "Large H=43cm W=46.5cm": 1775.00
        },
        images: {
            "Midnight Sky Plain": "https://i.ibb.co/8gDcRfQz/Midnight-Sky.png",
            "Midnight Sky Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Aluminum Snow Plain": "https://i.ibb.co/v4PVQZGt/Aluminum-Snos.png",
            "Aluminum Snow Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Frosted Cube Plain": "https://i.ibb.co/XfBNRgGR/Frosted-Cube.png",
            "Frosted Cube Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Dry Gold Plain": "https://i.ibb.co/bgpn7qmC/Dry-Gold.png",
            "Dry Gold Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Night Jewl Plain": "https://i.ibb.co/p6fbj9JG/Night-Jewel.png",
            "Night Jewl Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Canyon Wall Plain": "https://i.ibb.co/W4XdJ0jZ/Canyon-Wall.png",
            "Canyon Wall Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Mountain Stream Plain": "https://i.ibb.co/ch83gpf1/Mountain-Stream.png",
            "Mountain Stream Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Nautilus Blue Plain": "https://i.ibb.co/7NBGHqnh/Nautilus-Blue.png",
            "Nautilus Blue Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp",
            "Aloe Leaf Plain": "https://i.ibb.co/q3KzrFLL/Aloe-Leaf.png",
            "Aloe Leaf Line Art": "https://i.ibb.co/5hPdRjmQ/Picsart-23-07-06-09-49-16-980.webp"
        },
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
        description: "The Barcelona Ceramic Planter is a one-of-a-kind, modern-style accessory for any decor.",
        price: 698.00,
        images: {
            "Midnight Sky": "https://i.ibb.co/chjdLJ9n/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/k61tB70k/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/dsVdkSh7/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/21432NZ6/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/NdNV5x7j/Screenshot-2023-07-09-094929.png",
            "Canyon Wall": "https://i.ibb.co/PZ8xB9LB/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/Z6Rc5rTS/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/WNVM6kSV/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/nqL0d808/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/MyzT5yt4/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/kVGLwHy6/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/xKpsxWZ7/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/JW2FDq1m/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/NdNV5x7j/Screenshot-2023-07-09-094929.png",
            "Canyon Wall": "https://i.ibb.co/Lh8p58Vh/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/S4c3dvnX/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/7xLVwVB7/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/N6QvJm7X/Aloe-Leaf.png"
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
            "Midnight Sky": "https://i.ibb.co/hFsYWqQQ/Midnight-Sky.png",
            "Aluminum Snow": "https://i.ibb.co/jPdpXF72/Aluminum-Snow.png",
            "Frosted Cube": "https://i.ibb.co/p6mXGxTX/Frosted-Cube.png",
            "Dry Gold": "https://i.ibb.co/Mkb3226J/Dry-Gold.png",
            "Night Jewl": "https://i.ibb.co/NdNV5x7j/Screenshot-2023-07-09-094929.png",
            "Canyon Wall": "https://i.ibb.co/BKwGJ48s/Canyon-Wall.png",
            "Mountain Stream": "https://i.ibb.co/gbRRHpwj/Mountain-Stream.png",
            "Nautilus Blue": "https://i.ibb.co/xKD2TMxZ/Nautilus-Blue.png",
            "Aloe Leaf": "https://i.ibb.co/9kzsDkSz/Aloe-Leaf.png"
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
    },

    {
        id: 23,
        handle: "resin-buddha-candle-holder",
        title: "Resin Buddha Candle Holder",
        description: "This beautiful Resin Buddha Candle Holder is perfect for adding a spiritual touch to your home. With a 19.5cm height and 13cm width.",
        price: 400.00,
        images: {
           "Buddha Candle Holder": "https://i.ibb.co/9992d7P0/Picsart-23-07-26-14-42-19-795-1.png"
        },
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
        description: "Elevate your space with our exquisite Resin Holding Hands Sculpture, an artful representation of connection and support.",
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
        description: "Add a touch of love and elegance to your home with our Heart-Shaped Resin Container.",
        price: 65.00,
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
        description: "This Resin Laughing Buddha statue stands 19.5cm tall and 17.5cm wide, making it perfect for displaying anywhere in your home.",
        price: 400.00,
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
        description: "his beautiful resin Buddha Head stands 23.5cm tall and is 12cm wide, with a stunningly detailed finish.",
        price: 400.00,
        images: {
           "Resin Buddha Head": "https://cdn.shopify.com/s/files/1/0793/4463/2097/files/Picsart_23-07-26_14-38-57-684.png?v=1694974259"
        },
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
        description: "This 7-cm-high, 10-cm-wide Resin Tree Stump Planter is perfect for brightening up indoor and outdoor areas with small plants, succulents, and shrubs.",
        price: 70.00,
        images: {
           "Resin Tree Stump Planter": "https://i.ibb.co/cSNjs0CW/Picsart-23-07-26-15-02-35-640-1.png"
        },
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
        description: "This Resin Excited Groot Mini Planter is a perfect addition to your home or office. It stands 14cm high and measures 15cm wide.",
        price: 200.00,
        images: {
           "Resin Excited Groot Mini Planter": "https://i.ibb.co/T58MrPm/Picsart-23-07-26-15-03-48-184-1.png"
        },
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
        description: "This Resin Excited Groot Mini Planter is a perfect addition to your home or office. It stands 14cm high and measures 15cm wide.",
        price: 200.00,
        images: {
           "Resin Folded Arms Groot Mini Planter": "https://i.ibb.co/wN5BzwkY/Picsart-23-07-26-15-06-17-227-1.png"
        },
        options: [
            {
                name: "Color",
                values: ["Resin Folded Arms Groot Mini Planter"]
            }
        ],
        category: "Mini Planters"
    },
];

export default products;