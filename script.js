const OUTPUTS = {
  bicycle: {
    label: "Standard bicycle",
    shortLabel: "Bicycle"
  },
  ebike: {
    label: "Electric bicycle",
    shortLabel: "E-bike"
  },
  escooter: {
    label: "Electric scooter",
    shortLabel: "E-scooter"
  },
  lowSpeedPoweredMicromobility: {
    label: "Small e-devices",
    shortLabel: "Small powered devices"
  },
  cargoBike: {
    label: "Cargo bike",
    shortLabel: "Cargo bike"
  },
  bikeshare: {
    label: "Bikeshare",
    shortLabel: "Bikeshare"
  },
  adaptiveMobility: {
    label: "Adaptive mobility options",
    shortLabel: "Adaptive option"
  },
    humanPoweredYouth: {
    label: "Age-appropriate mobility options",
    shortLabel: "Youth mobility"
  }
};

const INTRO_TEXT =
  "Micromobility devices are small, affordable, and flexible ways to get around, such as bikes, e-scooters, and more. Answer a few questions to see what micromobility devices could work well for you.";
const RESULTS_INTRO_TEXT = "Based on your responses, these micromobility options may be a good fit.";
const EXPLORING_RESULTS_TITLE_TEXT = "Explore a variety of micromobility devices.";
const SCORING_DISCLAIMER_TEXT =
  "Suggestions are generated using an additive scoring system based on your responses. Results are informational only, and more than one device type may be appropriate.";
const PRINT_ICON_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 9V4h10v5"/><path d="M7 14H5a2 2 0 0 1-2-2v-1.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5V12a2 2 0 0 1-2 2h-2"/><path d="M7 12h10v8H7z"/><circle cx="17.5" cy="10.5" r=".75" fill="currentColor" stroke="none"/></svg>';
const RECOMMENDATION_IMAGE_ALT_TEXT = {
  bicycle: "Image of a standard bicycle",
  ebike: "Image of an electric bicycle",
  escooter: "Image of an electric scooter",
  lowSpeedPoweredMicromobility: "Image of small powered micromobility devices",
  cargoBike: "Image of a cargo bike",
  adaptiveMobility: "Image of adaptive mobility options",
  bikeshare: "Image of bikeshare bicycles",
  humanPoweredYouth: "Image of age-appropriate youth mobility devices"
};

const DEVICE_CONTENT = {
  bicycle: {
    image: "Bicycle.png",
    cost: "$300-$1,500",
    whyBase: "A standard bicycle is a versatile option for everyday riding.",
    // WHY CONDITIONAL
    // Active text slots under current logic: recreation, transitLinkYes, carryChildrenYes, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "It is especially well suited for recreation and exercise.",
      // Transit link
      transitLinkYes: "Connecting to transit is also convenient with a bicycle.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "With the right add-ons, it can support carrying a child.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Some types of bikes, such as mountain bikes, are a great fit on trails and unpaved paths.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "A standard bicycle is simple, reliable, and low-cost to maintain. It requires more physical effort than e-devices, and may feel less comfortable on longer or hillier trips, but it is also a great source of exercise."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: transitLinkYes, carryChildrenYes, distance10plus, storageOutdoor
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing a bicycle on a bus or train, and look into nearby station bike parking or bike shed options where available. See Next steps for more information.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Since you will carry children, consider add-ons such as a kid seat, a tag-along bike attachment, or a bike trailer. Make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "Investing in a high-quality seat and ensuring your bike fits you well for long distance trips can make your ride more comfortable.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "When storing a bike outdoors, consider a high-quality lock and a safe place for parking.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about bicycles", url: "https://canva.link/nrvd5v2bvwbf99v" },
      { label: "Visit your local bike shop", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Join a bike-friendly event", url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar" }
    ]
  },
  ebike: {
    image: "E-bike.png",
    cost: "$1,000-$6,000",
    whyBase: "An e-bike can make everyday trips easier and less tiring.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, deliveries, recreation, transitLinkYes, carryChildrenYes, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeMixedRoads, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "The electric-assist makes it great for work and deliveries.",
      recreation: "It can also be a comfortable option for recreation or exercise, especially if you want help with hills or longer rides.",
      
      // Transit link
      transitLinkYes: "Connecting to transit is easier with an e-bike.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Some models can also support carrying children or extra cargo.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "It can make longer distances more manageable.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "Because they can keep up with traffic better, e-bikes feel more comofortable on roads without bike lanes",
      routeTrails: "E-bikes are only allowed on some Massachusetts trails, and at limited speeds. Check your local Department of Conservation and Recreation (DCR) regulations to learn more.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Choose e-bikes with batteries and electrical systems certified to Underwriters Laboratories (UL) safety standards.",
      "Since they can look similiar, be careful not to confuse an e-bike with a higher-powered e-moto or e-dirt bike, which are considered Off-Highway Vehicles (OHVs) and must be registered with the Massachusetts Environmental Police.",
      "E-bikes come in three classes. See Next steps to select the best e-bike class for you."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: age14to16, age17to49, age50plus, transport, transitLinkYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "Class 1 e-bikes are suggested for you given your age because of their manageable speed and power. This is based on recommendations made by the Special Commission on Micromobility. Ask your parents for more information, or see Next steps to learn more.",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "Prioritize a model with a high-capacity removable battery, strong brakes, and a mid-drive motor for hills and heavy loads.",
      recreation: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing a device on a bus or train, and look into nearby station bike parking or bike shed options where available. See Next steps for more information.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Since you will carry children, consider add-ons such as a kid seat, a tag-along bike attachment, or a bike trailer. Make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Follow safe charging practices when storing an e-bike indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "When storing an e-bike outdoors, always remove the battery, consider a high-quality lock, and ensure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about e-bikes.", url: "https://canva.link/ez6c09mq8tpfpk4" },
      { label: "Visit a local bike shop.", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Join a bike-friendly event.", url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar" },
      { label: "Check state e-bike incentives.", url: "https://goclean.masscec.com/clean-energy-solutions/electric-bicycles/" }
    ]
  },
  escooter: {
    image: "E-Scooter.png",
    cost: "$500-$2,000",
    whyBase: "An e-scooter is a practical option for quick trips.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, recreation, transitLinkYes, distanceUnder3, routeBikeLanes, routeMixedRoads
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "It is also a great choice when public transit is part of your commute, since most e-scooters can be folded.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "On roads with only a few bike lanes, e-scooters can be a decent choice, but your comfort will depend on the smoothness of the road and how heavy traffic is.",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Storing e-scooters indoors is easy due to their compact size.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Choose e-scooters with batteries and electrical systems certified to Underwriters Laboratories (UL) safety standards."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: none
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing an e-scooter onto a bus or train. See Next steps for more information on micromobility and transit.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "Due to their small wheels, standing position, and lack of suspension, e-scooters perform best on bike lanes and smooth paths.",
      routeMixedRoads: "Due to their small wheels, standing position, and lack of suspension, e-scooters can feel less comfortable on rougher roads or in heavier traffic. Consider a model with suspesion and all-season tires.",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Follow safe charging practices when storing an e-scooter indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about e-scooters", url: "https://canva.link/t5ka95rvio5ijw3" }
    ]
  },
  lowSpeedPoweredMicromobility: {
    image: "low-power-mobility.png",
    cost: "$300-$2,500",
    whyBase: "Small e-devices can be a great fit for short trips because of their affordability, compact size, and fun factor.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, recreation, transitLinkYes, distanceUnder3, routeBikeLanes, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "Using them recreationally can provide a decent, low-impact exercise because they require leg and core strength to maintain balance and maneuverability.",
      // Transit link
      transitLinkYes: "Taking public transit with these devices is seamless because they are portable.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "These devices are best where there are dedicated bike lanes or smooth shared use paths.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "These devices work well on off-road trails or parks if the surfaces are paved and smooth.",
      // Storage
      storageIndoor: "Relatedly, storing small e-devices indoors is easy due to their compact size.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Small e-devices require decent leg and core strength to safely balance and maneuver them.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: none
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "While they are ideal for short commutes, you should already be comfortable navigating busy areas on two wheels before considering a small e-device",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, check Massachusetts Bay Transportation Authority (MBTA) or your local Regional Transit Authority (RTA) rules before bringing these devices onto a bus or train. See Next steps for more information on micromobility and transit. Additionally, while small, these devices can be heavy to carry. Consider a specialized backpack to carry them with.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Check your local park or trail rules before purchasing a small e-device, as some municipalities do not allow them.",
      // Storage
      storageIndoor: "Follow safe charging practices when storing small e-device indoors to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn about small e-devices", url: "https://canva.link/60attcpjzby1bki" }
    ]
  },
  cargoBike: {
    image: "Cargo_bike.png",
    cost: "$1,500-$7,500",
    whyBase: "A cargo bike is a great option when a standard bike may not carry enough.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, deliveries, carryChildrenYes, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeRegularRoads
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "It is especially useful for running errands such as getting groceries, hauling supplies, or carrying larger items.",
      deliveries: "It is great for working and making deliveries, and can support heavy-duty daily use.",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Carrying children with cargo bikes is an excellent and fun option because they are designed to carry people securely.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "A cargo bike's larger size can feel more stable and visible on roads with heavier traffic.",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Ensure the cargo bike style is designed for the weight and type of items you plan to carry.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: carryChildrenYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "Because you plan to work with your micromobility device, consider an electric-assist cargo bike to help you get around easily. Also prioritize a model with a high-capacity removable battery, strong brakes, and a mid-drive motor for hills and heavy loads.",
      recreation: "",
      // Transit link
      transitLinkYes: "Given you use transit during your commute, consider that cargo bikes are heavy and long and may not fit onto trains or station elevators, or may not be allowed on transit at all. If you decide a cargo bike is the right fit for you, consider station parking or nearby bicycle parking sheds. ",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Since you will carry children, make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "Consider an electric cargo bike if you'll mostly travel longer distances.",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Cargo bikes are not ideal to store indoors because of their heavy weight and length. If you plan to store one inside a shed or garage and it has a battery, follow safe charging practices to avoid the risk of thermal runaway and fire. See Next steps for more information on safe charging.",
      storageOutdoor: "If you plan to to store a cargo bike outdoors, always remove the battery (if it has one), consider a high-quality lock and weatherproof tarp, and ensure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about cargo bikes.", url: "https://canva.link/gcyamow1yonirts" },
      { label: "Borrow a cargo bike for free to see if it is a good fit for you.", url: "https://cpp.ebikelibrary.org/" },
      { label: "Visit a local bike shop.", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
    ]
  },
  bikeshare: {
    image: "Bikeshare-v2.png",
    cost: "$0-$120 per year depending on bikeshare membership or discounts",
    whyBase: "Bikeshare could be an excellent option for you if you want the convenience of riding without needing to own or store a device.",
    // WHY CONDITIONAL
    // Active text slots under current logic: transport, transitLinkYes, distanceUnder3, routeBikeLanes, storageOutdoor
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "It works especially well for everyday commuting since bikeshare docks are conveniently located near schools and workplaces.",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Connecting to transit with bikeshare is easy because docks are often located near transit stations.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "Bikeshare is also a great option because you need to store your device outdoors.",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "There are several bikeshare systems in Massachusetts, including Bluebikes, Metro Mobility, ValleyBike Share, CargoB, Minuteman Bikeshare, and Port Bikeshare.",
      "Verify whether a bikeshare system is available near your starting point and destination.",
      "Many bikeshare companies, health insurance providers, universities, employers, or municipalities offer discounted prices. Check your providers to learn more.",
      "If you participate in programs like the Supplemental Nutrition Assistance Program (SNAP) or MassHealth, or have a qualifying income, you are eligible for a $50/year Bluebikes membership.",
      "If you live in the City of Boston and have not had an annual membership recently, you may be eligible for a $60/year Bluebikes membership, or $5/year if you have a qualifying income.",
      "Consider downloading your local bikeshare app and setting it up at home before your trip.",
      "Most bikeshare systems offer a choice between e-bikes and standard bikes.",
      "It is a good idea to bring a helmet with you since most bikeshare systems do not typically provide one.",
      ""
    ],
    // CONSIDER CONDITIONAL
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn about bikeshare", url: "https://canva.link/b11lytyb0ic1dgc" },
      { label: "Check Massachusetts bikeshare programs and discount pricing", url: "https://goclean.masscec.com/homeowners/bike-share-programs/" },
      { label: "Check Bluebikes income-eligible discount", url: "https://bluebikes.com/pricing/income-eligible-program" },
      { label: "Check Bluebikes City of Boston discount", url: "https://www.boston.gov/departments/boston-bikes/discounted-bluebikes" }
    ]
  },
  adaptiveMobility: {
    image: "Adaptive-v3.png",
    cost: "$2,500-$10,000",
    whyBase: "An adapative mobility device is a versatile transportation option.",
    // WHY CONDITIONAL
    // Active text slots under current logic: adaptiveNeedYes, transport, recreation, distanceUnder3, distance3to9, distance10plus, routeBikeLanes, routeRegularRoads, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "They are an excellent choice if you have a disability or need mobility assistance, as they are designed to adapt to different disabilities, comfort levels, and use cases.",
      adaptiveNeedNo: "",
      // Primary use
      transport: "Additionally, many are built with everyday commuting in mind, and some can even carry larger loads.",
      deliveries: "",
      recreation: "Additionally, many are built with a comfortable or reclined seating position, making them a nice choice for casual recreation and exercise.",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Adaptive mobility devices comes in variety of styles. Consider researching recubmenent bikes, tricycles, and hand-powered cycles.",
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: adaptiveNeedYes
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "The best adaptive mobility devices for young people with disabilities are highly adjustable for growth and comfort, have a parking brake to allow for safe rest, and are designed to enable a caregiver to steer or help with balance if needed.",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "Key features to consider for stability, safety, and reduced physical strain are devices with three or four wheels, electric-assist, wide seats with back support, and low step-through frames.",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Consider an electric cargo trike, which are stable, safe, and spacious, if you have a disability and are carrying a child. Make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.", 
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "Adaptive mobility devices are not ideal to store indoors due to their heavy weight and length. If you are storing them inside a shed or garage and they have an electric motor, follow safe charging practices to avoid the risk of thermal runaway and fire.",
      storageOutdoor: "If you are storing an adapative mobility device outdoors, always remove the battery (if it has one), consider a high-quality lock and weatherproof tarp, and ensure it is parked in a safe place.",
      storageNotMajorConcern: ""
    },    
    nextSteps: [
      { label: "Learn more about adaptive mobility options", url: "https://canva.link/nj039whwwsd7466" },
      { label: "Join an accessible cycling event", url: "https://www.mass.gov/accessible-cycling" },
      { label: "Learn more about the Department of Conservation and Recreation's (DCR) Universal Access Program", url: "https://www.mass.gov/orgs/universal-access-program" },
      { label: "Check out DCR's adaptive cycling equipment list", url: "https://www.mass.gov/info-details/adaptive-cycling-equipment" },
      { label: "Try out DCR's power-driven mobility devices", url: "https://www.mass.gov/info-details/dcr-power-driven-mobility-devices" }
    ],
  },
  humanPoweredYouth: {
    image: "youth-mobility.png",
    cost: "$50-$500 depending on device type",
    whyBase: "Age-appropriate mobility options can help younger riders build confidence and skills over time.",
    // WHY CONDITIONAL
    // Active text slots under current logic: recreation, distanceUnder3, routeTrails
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "These options are a great fit for recreation, practice, and everyday neighborhood riding.",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "They are especially well suited for shorter trips.",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Parks, smooth paths, and other lower-stress riding areas are an ideal environment for these options.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Age-appropriate options may include kick scooters, rollerblades, bicycles, or tricycles depending on age, comfort, and coordination.",
      "Choose a device that matches the rider’s confidence level and the kinds of places where they will ride.",
      "Start in parks, backyards, or low-traffic streets, and always use a properly fitted helmet and other protective gear."
    ],
    // CONSIDER CONDITIONAL
    // Active text slots under current logic: age3to13
    considerConditional: {
      // Age
      age3to13: "Children ages 9 to 12 can often ride bicycles and kick scooters confidently, but faster motorized devices are generally not appropriate because balancing, steering, and risk-taking behaviors can make them harder to use safely.",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      transport: "",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    nextSteps: [
      { label: "Learn more about youth mobility options", url: "https://canva.link/60qopm17rsnhlls" },
      { label: "Visit a local bike shop", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "More shops on Pinkbike", url: "https://www.pinkbike.com/directory/list/massachusetts/2/bike-shop/" },
      { label: "More shops on Singletracks", url: "https://www.singletracks.com/bike-shops/region/massachusetts/" },
      { label: "Explore Safe Routes to School resources", url: "https://www.mass.gov/safe-routes-to-school" },
      { label: "Read Consumer Product Safety Commission (CPSC) age-appropriate product guidance", url: "https://www.cpsc.gov/content/2020-Age-Determination-Guidelines" }
    ]
  }
};

const EXPLORE_REASON_TEXT = {
  bicycle:
    "A standard bicycle is a versatile option for everyday riding, recreation, and many short trips. It can also work well for carrying a child with the right add-ons, for connecting to transit, or for riding on trails and unpaved paths with the right bike type.",
  ebike:
    "An e-bike can make everyday trips easier and less tiring, especially for longer rides, hills, or carrying extra weight. It can also work well for recreation, deliveries, transit connections, and some child-carrying or cargo needs depending on the model.",
  escooter:
    "An e-scooter can be a practical option for quick trips, especially when compact storage and transit connections matter. It tends to work best on smooth routes, bike lanes, and other lower-stress riding environments.",
  lowSpeedPoweredMicromobility:
    "Small e-devices can be a good fit for short trips because they are compact, portable, and easy to store. They tend to work best on smoother routes, bike lanes, and paved park paths, and can also appeal to riders looking for a fun, lightweight option.",
  cargoBike:
    "A cargo bike can be a strong option when a standard bike may not carry enough. It is especially useful for hauling groceries, supplies, children, or heavier everyday loads, and can also support delivery use depending on the setup.",
  bikeshare:
    "Bikeshare can be a strong option if flexibility matters more than ownership. It often works well for short trips, errands, and transit connections, especially in places where bike docks are easy to find.",
  adaptiveMobility:
    "An adaptive mobility device can be a strong option when comfort, stability, or physical support are especially important. Different adaptive designs can work for transportation, recreation, or rider-specific mobility needs depending on the setup.",
  humanPoweredYouth:
    "Age-appropriate mobility options can help younger riders build confidence and skills over time. These options are often a good fit for recreation, practice, and shorter trips in parks, paths, and other lower-stress riding areas."
};

const SCORING_RULES = {
    age: {
    age3to13: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 10
    },
    age14to16: {
      bicycle: 2,
      ebike: 1,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 0
    },
    age17to49: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0,
      humanPoweredYouth: 0
    },
    age50plus: {
      bicycle: 0,
      ebike: 1,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 3,
      bikeshare: 0,
      humanPoweredYouth: 0
    }
  },

  adaptiveNeed: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 0,
      cargoBike: 1,
      adaptiveMobility: 3,
      bikeshare: 0
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  primaryUse: {
    transport: {
      bicycle: 1,
      ebike: 2,
      escooter: 2,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 1,
      adaptiveMobility: 0,
      bikeshare: 2
    },
    deliveries: {
      bicycle: 1,
      ebike: 3,
      escooter: 0,
      cargoBike: 3,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    recreation: {
      bicycle: 3,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 0,
      adaptiveMobility: 2,
      bikeshare: 1
    }
  },

  transitLink: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 2,
      lowSpeedPoweredMicromobility: 1,
      bikeshare: 2
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      lowSpeedPoweredMicromobility: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  carryChildren: {
    yes: {
      bicycle: 1,
      ebike: 1,
      escooter: 0,
      cargoBike: 3,
      adaptiveMobility: 1,
      bikeshare: 0
    },
    no: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  },

  distance: {
    under3: {
      bicycle: 2,
      ebike: 0,
      escooter: 2,
      lowSpeedPoweredMicromobility: 2,
      cargoBike: 1,
      adaptiveMobility: 1,
      bikeshare: 2
    },
    "3to9": {
      bicycle: 1,
      ebike: 2,
      escooter: 1,
      lowSpeedPoweredMicromobility: 0,
      cargoBike: 2,
      adaptiveMobility: 1,
      bikeshare: 1
    },
    "10plus": {
      bicycle: 1,
      ebike: 2,
      escooter: 0,
      cargoBike: 2,
      adaptiveMobility: 1,
      bikeshare: 0
    }
  },

  routeType: {
    bikeLanes: {
      bicycle: 1,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 1,
      adaptiveMobility: 1,
      bikeshare: 1
    },
    mixedRoads: {
      bicycle: 0,
      ebike: 0,
      escooter: -2,
      lowSpeedPoweredMicromobility: -3,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    regularRoads: {
      bicycle: 0,
      ebike: 1,
      escooter: 0,
      lowSpeedPoweredMicromobility: -3,
      cargoBike: 2,
      adaptiveMobility: 0,
      bikeshare: 0
    },
    trails: {
      bicycle: 2,
      ebike: 1,
      escooter: 0,
      lowSpeedPoweredMicromobility: 1,
      cargoBike: 0,
      adaptiveMobility: 1,
      bikeshare: 0
    }
  },

  storage: {
    indoor: {
      bicycle: 1,
      ebike: 1,
      escooter: 1,
      lowSpeedPoweredMicromobility: 2,
      cargoBike: 1,
      adaptiveMobility: -1,
      bikeshare: 0
    },
    outdoor: {
      bicycle: 2,
      ebike: 1,
      escooter: 1,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 2
    },
    notMajorConcern: {
      bicycle: 0,
      ebike: 0,
      escooter: 0,
      cargoBike: 0,
      adaptiveMobility: 0,
      bikeshare: 0
    }
  }
};

function getDeviceContent(recId) {
  return DEVICE_CONTENT[recId] || null;
}

function getWhyBase(recId) {
  return getDeviceContent(recId)?.whyBase || "";
}

const WHY_CONDITIONAL_KEY_MAP = {
  transitLink: ["transitLinkYes"],
  children: ["carryChildrenYes"],
  under3: ["distanceUnder3"],
  longDistance: ["distance3to9", "distance10plus"],
  bikeLanes: ["routeBikeLanes"],
  mixedRoads: ["routeMixedRoads"],
  regularRoads: ["routeRegularRoads"],
  trails: ["routeTrails"],
  storage: ["storageOutdoor"]
};

function getWhyConditional(recId, key) {
  const whyConditional = getDeviceContent(recId)?.whyConditional || {};

  if (whyConditional[key]) {
    return whyConditional[key];
  }

  const mappedKeys = WHY_CONDITIONAL_KEY_MAP[key] || [];
  return mappedKeys.map((mappedKey) => whyConditional[mappedKey] || "").find(Boolean) || "";
}

function getConsiderBase(recId) {
  return [...(getDeviceContent(recId)?.considerBase || [])];
}

const CONSIDER_CONDITIONAL_KEY_MAP = {
  transitLink: ["transitLinkYes"],
  children: ["carryChildrenYes"],
  indoorStorage: ["storageIndoor"],
  outdoorStorage: ["storageOutdoor"],
  age14to16: ["age14to16"],
  adaptiveChild: ["adaptiveNeedYes"],
  youthGuidance: ["age3to13"],
  ohv: ["transport"],
  classes: ["age17to49", "age50plus"],
  childWhyBase: ["adaptiveNeedYes"]
};

function getConsiderConditionalValue(recId, key) {
  const considerConditional = getDeviceContent(recId)?.considerConditional || {};

  if (considerConditional[key]) {
    return considerConditional[key];
  }

  const mappedKeys = CONSIDER_CONDITIONAL_KEY_MAP[key] || [];
  return mappedKeys
    .map((mappedKey) => considerConditional[mappedKey] || "")
    .find(Boolean) || "";
}

function getNextSteps(recId) {
  return [...(getDeviceContent(recId)?.nextSteps || [])];
}

const QUESTIONS = {
  pathway: {
    type: "radio",
    label: "Who are you purchasing for?",
    options: [
      { value: "myself", label: "Myself" },
      { value: "someoneElse", label: "Someone else" },
      { value: "child", label: "A child" },
      { value: "exploring", label: "Explore all device options" }
    ]
  },
  ageInput: {
    type: "number",
    label: "How old is the rider?",
    min: 3,
    max: 100
  },
  adaptiveNeed: {
    type: "radio",
    label: "Does the rider have a mobility disability or mobility need?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]
  },
  primaryUse: {
    type: "radio",
    label: "What will the device mostly be used for?",
    options: [
      { value: "transport", label: "Getting to work, school, or errands" },
      { value: "deliveries", label: "Deliveries or work" },
      { value: "recreation", label: "Recreation or exercise" }
    ]
  },
  transitLink: {
  type: "radio",
  label: "Will this trip include public transit?",
  options: [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" }
  ]
},
  carryChildren: {
    type: "radio",
    label: "Does the rider plan to carry children with the device?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]
  },
  distance: {
    type: "radio",
    label: "What is the rider’s typical trip distance?",
    options: [
      { value: "under3", label: "Under 3 miles" },
      { value: "3to9", label: "3–9 miles" },
      { value: "10plus", label: "10+ miles" }
    ]
  },
  routeType: {
    type: "radio",
    label: "What is your typical route like?",
    options: [
      { value: "bikeLanes", label: "Bike lanes separated from cars" },
      { value: "mixedRoads", label: "Some bike lanes but without separation from cars" },
      { value: "regularRoads", label: "Roads without separation from cars" },
      { value: "trails", label: "Mostly on trails, paths, or in parks" }
    ]
  },
  storage: {
    type: "radio",
    label: "How will this device usually be stored?",
    options: [
      { value: "indoor", label: "It needs to be easy to bring inside" },
      { value: "outdoor", label: "It will usually be stored outside" },
      { value: "notMajorConcern", label: "Storage location is flexible" }
    ]
  }
};

const ROUTE_OPTION_MEDIA = {
  bikeLanes: {
    src: "route-bikeLanes-square.jpg",
    alt: "Photo of a bike lane separated from cars"
  },
  mixedRoads: {
    src: "route-mixedRoads-square.jpg",
    alt: "Photo of a route with a bike lane next to busier traffic"
  },
  regularRoads: {
    src: "route-regularRoads-square.jpg",
    alt: "Photo of a road next to cars without separated bike space"
  },
  trails: {
    src: "route-trails-square.jpg",
    alt: "Photo of a trail or park path for biking"
  }
};

const APP_STATE = {
  currentStep: 0,
  answers: {},
  currentResultIndex: 0,
  currentRecommendations: [],
  currentAllRecommendations: [],
  currentNormalizedAnswers: null,
  currentScores: null,
  currentPathway: null
};

const DEBUG_MODE = false;

function printCurrentResponseScores(answers, scores, sortedRecommendations) {
  if (!DEBUG_MODE) {
    return;
  }

  const deviceOrder = [
    "bicycle",
    "ebike",
    "escooter",
    "lowSpeedPoweredMicromobility",
    "cargoBike",
    "adaptiveMobility",
    "bikeshare",
    "humanPoweredYouth"
  ];

  const pathway = answers.pathway || "myself";
  const questionRows = getPrintableQuestionKeys(APP_STATE.answers || {})
    .map((questionId) => ({
      question: getQuestionLabelForPathway(questionId, pathway),
      answer: getAnswerDisplayValue(questionId, APP_STATE.answers?.[questionId] || "")
    }))
    .filter((row) => row.answer);

  console.groupCollapsed("Current response questions and answers");
  console.table(questionRows);
  console.groupEnd();

  console.groupCollapsed("Current response normalized answers");
  console.table(answers);
  console.groupEnd();

  console.groupCollapsed("Current response scores by device");
  console.table(
    deviceOrder
      .filter((device) => scores[device] !== undefined)
      .map((device) => ({
        device,
        score: scores[device]
      }))
  );
  console.groupEnd();

  console.groupCollapsed("Current sorted recommendations");
  console.table(
    sortedRecommendations.map((rec, index) => ({
      rank: index + 1,
      device: rec.id,
      score: rec.score
    }))
  );
  console.groupEnd();
}

function getSelectedPathway() {
  return APP_STATE.answers.pathway || "myself";
}

function getCurrentSequence() {
  const pathway = getSelectedPathway();
  const visibleKeys = getVisibleQuestionKeys(APP_STATE.answers);

  if (pathway === "myself" || pathway === "someoneElse" || pathway === "exploring") {
    return visibleKeys;
  }

  if (pathway === "child") {
    return visibleKeys.filter((key) => key !== "carryChildren");
  }

  return visibleKeys;
}

function getCurrentQuestionId() {
  const sequence = getCurrentSequence();
  return sequence[APP_STATE.currentStep];
}

function findQuestionIndex(questionId) {
  return getCurrentSequence().indexOf(questionId);
}

function setCurrentStepToQuestion(questionId) {
  const questionIndex = findQuestionIndex(questionId);
  if (questionIndex === -1) return false;

  APP_STATE.currentStep = questionIndex;
  return true;
}

function getAdjacentQuestionId(questionId, direction) {
  const sequence = getCurrentSequence();
  const currentIndex = sequence.indexOf(questionId);
  if (currentIndex === -1) return "";

  return sequence[currentIndex + direction] || "";
}

function mapAgeToBracket(ageValue) {
  const age = Number(ageValue);

  if (!Number.isFinite(age) || age < 3) return "";
  if (age >= 3 && age < 14) return "age3to13";
  if (age >= 14 && age <= 16) return "age14to16";
  if (age >= 50) return "age50plus";
  return "age17to49";
}

function initializeScores() {
  return {
    bicycle: 0,
    ebike: 0,
    escooter: 0,
    lowSpeedPoweredMicromobility: 0,
    cargoBike: 0,
    bikeshare: 0,
    adaptiveMobility: 0,
    humanPoweredYouth: 0
  };
}

function addScores(scores, ruleSet) {
  Object.entries(ruleSet).forEach(([outputId, points]) => {
    if (scores[outputId] !== undefined) {
      scores[outputId] += points;
    }
  });
}

function applyOverrides(scores, answers) {
  const adjusted = { ...scores };

  if (answers.pathway === "exploring") {
    return adjusted;
  }

  if (answers.age === "age3to13") {
    adjusted.bicycle = Number.NEGATIVE_INFINITY;
    adjusted.ebike = Number.NEGATIVE_INFINITY;
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
    adjusted.cargoBike = Number.NEGATIVE_INFINITY;
    adjusted.bikeshare = Number.NEGATIVE_INFINITY;
    adjusted.humanPoweredYouth = 999;

    if (answers.adaptiveNeed === "yes") {
      adjusted.adaptiveMobility = 1000;
      return adjusted;
    }

    adjusted.adaptiveMobility = Number.NEGATIVE_INFINITY;
    return adjusted;
  }

  if (answers.age === "age14to16") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
    adjusted.bikeshare = Number.NEGATIVE_INFINITY;
  }

  if (answers.age === "age50plus") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.carryChildren === "yes") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.routeType === "regularRoads" || answers.routeType === "trails") {
    adjusted.escooter = Number.NEGATIVE_INFINITY;
  }

  if (
    answers.routeType !== "bikeLanes" &&
    answers.routeType !== "trails"
  ) {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.distance !== "under3") {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.storage !== "indoor") {
    adjusted.lowSpeedPoweredMicromobility = Number.NEGATIVE_INFINITY;
  }

  if (answers.storage === "indoor") {
    adjusted.cargoBike -= 1;
  }

  return adjusted;
}

function enforceCargoBikePlacement(sortedDevices, answers) {
  if (answers.carryChildren !== "yes") return sortedDevices;

  const cargoIndex = sortedDevices.findIndex((d) => d.id === "cargoBike");

  if (cargoIndex === -1 || cargoIndex <= 1) return sortedDevices;

  const cargo = sortedDevices.splice(cargoIndex, 1)[0];
  sortedDevices.splice(1, 0, cargo);

  return sortedDevices;
}

function enforceAdaptiveMobilityPlacement(sortedDevices, answers) {
  if (answers.adaptiveNeed !== "yes") return sortedDevices;

  const adaptiveIndex = sortedDevices.findIndex((d) => d.id === "adaptiveMobility");

  if (adaptiveIndex === -1) return sortedDevices;

  const adaptive = sortedDevices.splice(adaptiveIndex, 1)[0];
  sortedDevices.unshift(adaptive);

  return sortedDevices;
}

function normalizeAnswers(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";

  return {
    pathway,
    ageInput: rawAnswers.ageInput || "",
    age: mapAgeToBracket(rawAnswers.ageInput),
    adaptiveNeed:
      pathway === "myself" || pathway === "someoneElse" || pathway === "child"
        ? (rawAnswers.adaptiveNeed || "no")
        : "no",
    primaryUse: rawAnswers.primaryUse || "",
    transitLink: rawAnswers.transitLink || "",
    carryChildren: pathway === "myself" || pathway === "someoneElse" || pathway === "exploring"
      ? (rawAnswers.carryChildren || "")
      : "no",
    distance: rawAnswers.distance || "",
    routeType: rawAnswers.routeType || "",
    storage: rawAnswers.storage || ""
  };
}

function calculateScores(answers) {
  const scores = initializeScores();

  Object.keys(answers).forEach((questionKey) => {
    const answerId = answers[questionKey];
    const questionRules = SCORING_RULES[questionKey];

    if (questionRules && questionRules[answerId]) {
      addScores(scores, questionRules[answerId]);
    }
  });

  return applyOverrides(scores, answers);
}

function getSortedRecommendations(scores, answers) {
  let sortedDevices = Object.entries(scores)
    .filter(([, score]) => Number.isFinite(score))
    .map(([id, score]) => ({
      id,
      label: OUTPUTS[id].label,
      score
    }))
    .sort((a, b) => b.score - a.score);

  sortedDevices = enforceCargoBikePlacement(sortedDevices, answers);
  sortedDevices = enforceAdaptiveMobilityPlacement(sortedDevices, answers);

  return sortedDevices;
}

function getTopRecommendations(sortedDevices) {
  return sortedDevices.slice(0, 2);
}

function getRecommendationPriorityMeta(index, score, topScore) {
  if (score >= topScore - 1) {
    return {
      label: "Also suggested",
      className: "all-results-tag-strong"
    };
  }

  return {
    label: "Not suggested",
    className: "all-results-tag-not"
  };
}

function getAllResultsImage(recId, answers) {
  const content = getDeviceContent(recId);
  if (!content) return "";

  return getRecommendationImage(recId, answers, content);
}

function getQuestionLabelForPathway(questionId, pathway) {
  if (pathway === "myself") {
    const myselfLabels = {
      ageInput: "How old are you?",
      adaptiveNeed: "Do you have a mobility disability or mobility need?",
      primaryUse: "What will you mostly use the device for?",
      transitLink: "Will your trip include public transit?",
      carryChildren: "Do you plan to carry children with the device?",
      distance: "What is your typical trip distance?",
      routeType: "What kind of route will your trip mostly be?",
      storage: "How will your device usually be stored?"
    };

    return myselfLabels[questionId] || QUESTIONS[questionId]?.label || questionId;
  }

  if (pathway === "someoneElse" || pathway === "exploring") {
    const riderLabels = {
      ageInput: "How old is the rider?",
      adaptiveNeed: "Does the rider have a mobility disability or mobility need?",
      primaryUse: "What will the rider mostly use the device for?",
      transitLink: "Will the rider's trip include public transit?",
      carryChildren: "Does the rider plan to carry children with the device?",
      distance: "What is the rider's typical trip distance?",
      routeType: "What kind of route will the rider's trip mostly be?",
      storage: "How will the rider's device usually be stored?"
    };

    return riderLabels[questionId] || QUESTIONS[questionId]?.label || questionId;
  }

  if (pathway === "child") {
    const childLabels = {
      ageInput: "How old is the child?",
      adaptiveNeed: "Does the child have a mobility disability or mobility need?",
      primaryUse: "What will the child mostly use the device for?",
      transitLink: "Will the child's trip include public transit?",
      distance: "What is the child's typical trip distance?",
      routeType: "What kind of route will the child's trip mostly be?",
      storage: "How will the child's device usually be stored?"
    };

    return childLabels[questionId] || QUESTIONS[questionId]?.label || questionId;
  }

  return QUESTIONS[questionId]?.label || questionId;
}

function getAnswerDisplayValue(questionId, value) {
  if (value === undefined || value === null || value === "") return "";

  if (questionId === "ageInput") {
    return String(value);
  }

  const options = QUESTIONS[questionId]?.options || [];
  return options.find((option) => option.value === value)?.label || String(value);
}

function getPrintableQuestionKeys(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";
  const visibleKeys = getVisibleQuestionKeys(rawAnswers);

  if (pathway === "child") {
    return visibleKeys.filter((key) => key !== "carryChildren");
  }

  return visibleKeys;
}

function renderPrintInputsSummary(rawAnswers) {
  const pathway = rawAnswers.pathway || "myself";
  const itemsHtml = getPrintableQuestionKeys(rawAnswers)
    .map((questionId) => {
      const label = getQuestionLabelForPathway(questionId, pathway);
      const value = getAnswerDisplayValue(questionId, rawAnswers[questionId]);

      if (!value) return "";

      return `
        <div class="print-input-item">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `;
    })
    .join("");

  return `
    <section class="print-section">
      <h3 class="print-section-heading">Your responses</h3>
      <dl class="print-input-list">${itemsHtml}</dl>
    </section>
  `;
}

function getAllResultsPositiveFactor(recId, answers) {
  if (!answers) return "";

  switch (recId) {
    case "bicycle":
      if (answers.transitLink === "yes") {
        return "it can still work reasonably well with a transit-linked trip";
      }
      if (answers.carryChildren === "yes") {
        return "it can support carrying children with the right add-ons";
      }
      if (answers.primaryUse === "recreation" || answers.routeType === "trails") {
        return "it fits well with the kind of riding you described";
      }
      if (answers.distance === "under3" || answers.distance === "3to9") {
        return "it is a versatile fit for everyday riding and shorter trips";
      }
      return "it is a versatile fit for everyday riding";

    case "ebike":
      if (answers.distance === "10plus" || answers.distance === "3to9") {
        return "the electric assist is a strong match for your trip distance";
      }
      if (answers.routeType === "regularRoads") {
        return "it can handle longer or more demanding road riding better than lighter devices";
      }
      if (answers.carryChildren === "yes") {
        return "some models can support carrying children or extra cargo";
      }
      if (answers.transitLink === "yes") {
        return "it can still support a transit-linked trip if needed";
      }
      return "it reduces physical effort on everyday trips";

    case "escooter":
      if (answers.transitLink === "yes") {
        return "its foldable size can work well with a transit connection";
      }
      if (answers.distance === "under3" && answers.routeType === "bikeLanes") {
        return "your shorter trip and lower-stress route are a good match for it";
      }
      if (answers.storage === "indoor") {
        return "its compact size makes indoor storage easier";
      }
      return "it can be practical for short trips on smoother routes";

    case "lowSpeedPoweredMicromobility":
      if (answers.distance === "under3" && answers.storage === "indoor") {
        return "your short trip and indoor storage needs line up well with these compact devices";
      }
      if (answers.routeType === "bikeLanes" || answers.routeType === "trails") {
        return "these devices work best on the kind of lower-stress route you selected";
      }
      if (answers.transitLink === "yes") {
        return "their portability can help if transit is part of the trip";
      }
      return "their compact size can make short trips feel simple and flexible";

    case "cargoBike":
      if (answers.carryChildren === "yes") {
        return "its added carrying capacity matches your need to bring children";
      }
      if (answers.primaryUse === "deliveries") {
        return "its larger capacity is well suited to deliveries or heavier loads";
      }
      if (answers.primaryUse === "transport") {
        return "it can handle errands, groceries, and everyday hauling better than most devices";
      }
      return "it offers much more carrying capacity than a standard bike";

    case "bikeshare":
      if (answers.storage === "outdoor") {
        return "you do not need to store it yourself outdoors";
      }
      if (answers.transitLink === "yes") {
        return "it can work well for transit connections and one-way trips";
      }
      if (answers.primaryUse === "transport") {
        return "it can be useful for everyday trips without committing to ownership";
      }
      return "it can be useful if flexibility matters more than ownership";

    case "adaptiveMobility":
      if (answers.adaptiveNeed === "yes") {
        return "it is better suited to support mobility needs than most other device types";
      }
      if (answers.primaryUse === "recreation") {
        return "it can offer a more stable and comfortable riding position";
      }
      if (answers.primaryUse === "transport") {
        return "it can be a stable transportation option with the right setup";
      }
      return "it can offer added stability and comfort compared with standard two-wheel devices";

    case "humanPoweredYouth":
      if (answers.distance === "under3") {
        return "your age and shorter trip distance point toward age-appropriate nonmotorized options";
      }
      return "your age points toward age-appropriate nonmotorized options";

    default:
      return "it matches part of the trip profile you described";
  }
}

function getAllResultsCautionFactor(recId, answers) {
  if (!answers) return "";

  switch (recId) {
    case "bicycle":
      if (answers.distance === "10plus") {
        return "longer distances may take more effort without electric assist";
      }
      if (answers.routeType === "regularRoads") {
        return "roads without separation from cars may feel more demanding than lower-stress routes";
      }
      if (answers.storage === "outdoor") {
        return "outdoor storage means theft protection and weather exposure matter more";
      }
      return "it relies more on physical effort than electric options";

    case "ebike":
      if (answers.age === "age14to16") {
        return "your age narrows the appropriate options to Class 1 models";
      }
      if (answers.transitLink === "yes") {
        return "its weight can make transit connections less convenient than smaller foldable devices";
      }
      if (answers.storage === "indoor") {
        return "indoor charging and battery safety need more planning";
      }
      return "it costs more and needs more upkeep than a standard bicycle";

    case "escooter":
      if (answers.routeType === "regularRoads" || answers.routeType === "mixedRoads") {
        return "it is less comfortable on rougher roads or around heavier traffic";
      }
      if (answers.distance === "10plus") {
        return "it is less ideal for longer trips where comfort and range matter more";
      }
      if (answers.carryChildren === "yes") {
        return "it is not designed for carrying children";
      }
      return "its small wheels and standing position limit comfort on rougher surfaces";

    case "lowSpeedPoweredMicromobility":
      if (answers.routeType !== "bikeLanes" && answers.routeType !== "trails") {
        return "these devices work best on smoother, lower-stress routes";
      }
      if (answers.distance === "3to9" || answers.distance === "10plus") {
        return "they are usually a weaker fit once trips get longer";
      }
      if (answers.storage !== "indoor") {
        return "they make the most sense when they can be brought inside easily";
      }
      return "they are usually less versatile than bikes for everyday travel";

    case "cargoBike":
      if (answers.transitLink === "yes") {
        return "its heavier and bulkier size makes transit connections harder";
      }
      if (answers.storage === "indoor") {
        return "its larger size can make indoor storage harder";
      }
      if (answers.distance === "10plus") {
        return "longer trips are usually easier on an electric cargo model than a non-assisted one";
      }
      return "its size and weight make it more cumbersome than simpler devices";

    case "bikeshare":
      if (answers.adaptiveNeed === "yes") {
        return "shared bikes are less adaptable for mobility support needs";
      }
      if (answers.carryChildren === "yes") {
        return "shared public bikes are not a practical choice for carrying children";
      }
      if (answers.distance === "10plus") {
        return "it may be less convenient if you need longer trips on a regular basis";
      }
      return "it depends on station availability and may be less reliable than owning a device";

    case "adaptiveMobility":
      if (answers.storage === "indoor") {
        return "some models can be larger and harder to store inside";
      }
      if (answers.transitLink === "yes") {
        return "size and weight vary a lot, so some models are harder to combine with transit";
      }
      if (answers.adaptiveNeed !== "yes") {
        return "it can be more specialized and expensive than you may need";
      }
      return "the best option depends heavily on the rider's specific support needs";

    case "humanPoweredYouth":
      if (answers.distance === "10plus" || answers.transitLink === "yes") {
        return "longer trips or transit-linked trips may push beyond what these simpler devices do best";
      }
      return "they offer less speed and range than larger motorized options";

    default:
      return "it is a less direct fit than some of the higher-ranked options";
  }
}

function getAllResultsReason(rec, answers, priority) {
  if (!answers) return "";

  const positive = getAllResultsPositiveFactor(rec.id, answers);
  const caution = getAllResultsCautionFactor(rec.id, answers);

  return `${rec.label} could work because ${positive}, but ${caution}.`;
}

function renderAllDeviceResultsPanel(allRecommendations, answers) {
  const panelRecommendations = allRecommendations
    .filter((rec) => rec.score > 0)
    .slice(2);
  if (!panelRecommendations.length) return "";

  const topPanelScore = panelRecommendations[0]?.score ?? 0;
  const itemsHtml = panelRecommendations
    .map((rec, index) => {
      const imageSrc = getAllResultsImage(rec.id, answers);
      const priority = getRecommendationPriorityMeta(index, rec.score, topPanelScore);
      const reason = formatTextForPathway(getAllResultsReason(rec, answers, priority), answers.pathway);

      return `
      <li class="all-results-item">
        <div class="all-results-rank">${index + 1}</div>
        ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="all-results-image">` : ""}
        <div class="all-results-copy">
          <p class="all-results-device">${rec.label}</p>
          <p class="all-results-tag ${priority.className}">${priority.label}</p>
          <p class="all-results-reason"><em>${reason}</em></p>
        </div>
      </li>
    `;
    })
    .join("");

  return `
    <details class="all-results-panel">
      <summary>See all device types</summary>
      <ul class="all-results-list">${itemsHtml}</ul>
    </details>
  `;
}

function renderPrintRecommendationSummary(rec, answers, pathway) {
  const content = getDeviceContent(rec.id);
  if (!content) return "";
  const printRationaleHeading =
    pathway === "exploring"
      ? "Why consider it"
      : pathway === "myself"
        ? "Why this fits for you"
        : "Why this fits";

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  let considerations = getConsiderBase(rec.id);

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    considerations = considerations.filter(
      (item) => !item.includes("UL-certified batteries")
    );
  }

  const orderedConsiderations = [...considerations, ...considerationItems];
  const considerationsHtml = orderedConsiderations
    .slice(0, 3)
    .map((item) => `<li>${formatTextForPathway(item, pathway)}</li>`)
    .join("");
  const printReason = getRecommendationReason(rec.id, answers, pathway);

  return `
    <article class="print-rec-card">
      <div class="print-rec-header">
        ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="print-rec-image">` : ""}
        <div class="print-rec-title-wrap">
          <h4 class="print-rec-title">${rec.label}</h4>
          ${imageTag ? `<p class="print-rec-image-tag"><em>${imageTag}</em></p>` : ""}
        </div>
      </div>
      <p class="print-rec-reason"><strong>${printRationaleHeading}:</strong> ${printReason}</p>
      <p class="print-rec-cost"><strong>Typical cost:</strong> ${content.cost}</p>
      ${considerationsHtml ? `<ul class="print-rec-list">${considerationsHtml}</ul>` : ""}
    </article>
  `;
}

function getPrintDensityClass(recommendations, rawAnswers, answers, pathway) {
  const topRecommendations = recommendations.slice(0, 2);
  const answerTextLength = getPrintableQuestionKeys(rawAnswers)
    .map((questionId) => {
      const label = getQuestionLabelForPathway(questionId, pathway);
      const value = getAnswerDisplayValue(questionId, rawAnswers[questionId]);
      return `${label} ${value}`.trim();
    })
    .join(" ")
    .length;

  const recommendationTextLength = topRecommendations.reduce((total, rec) => {
    const content = getDeviceContent(rec.id);
    if (!content) return total;

    const reason = getRecommendationReason(rec.id, answers, pathway);
    const considerations = [
      ...getConsiderBase(rec.id),
      ...getResultCardConsiderationItems(rec.id, answers, content)
    ]
      .slice(0, 3)
      .join(" ");

    return total + reason.length + considerations.length + content.cost.length + rec.label.length;
  }, 0);

  const totalLength = answerTextLength + recommendationTextLength;

  if (totalLength > 2100) return "print-density-tight";
  if (totalLength > 1500) return "print-density-compact";
  return "print-density-default";
}

function renderPrintSummary(recommendations, answers, pathway) {
  const rawAnswers = APP_STATE.answers || {};
  const densityClass = getPrintDensityClass(recommendations, rawAnswers, answers, pathway);
  const topRecommendationsHtml = recommendations
    .slice(0, 2)
    .map((rec) => renderPrintRecommendationSummary(rec, answers, pathway))
    .join("");

  return `
    <section class="print-summary ${densityClass}" aria-hidden="true">
      <div class="print-header">
        <h2 class="print-title">Micromobility Buyer's Guide</h2>
        <img src="lab-logo-black.png" alt="The Lab at MassDOT logo" class="print-logo">
      </div>
      ${renderPrintInputsSummary(rawAnswers)}
      <section class="print-section">
        <h3 class="print-section-heading">${pathway === "exploring" ? "Selected micromobility device" : "See micromobility options"}</h3>
        <div class="print-rec-grid">${topRecommendationsHtml}</div>
      </section>
  `;
}

function formatTextForPathway(text, pathway) {
  if (!text) {
    return text;
  }

  if (pathway === "child") {
    return text
      .replace(/if you have a disability or need mobility assistance/gi, "if a child has a disability or needs mobility assistance")
      .replace(/if you have a disability and are carrying a child/gi, "if the child has a disability and is carrying a child")
      .replace(/Check your local DCR regulations/gi, "Check local DCR regulations")
      .replace(/Because you plan to/gi, "Because the child plans to")
      .replace(/Because you use/gi, "Because the child uses")
      .replace(/Because you need/gi, "Because the child needs")
      .replace(/Because you have/gi, "Because the child has")
      .replace(/Given you use/gi, "Given the child uses")
      .replace(/Since you will/gi, "Since the child will")
      .replace(/Since you plan to/gi, "Since the child plans to")
      .replace(/If you plan to/gi, "If the child plans to")
      .replace(/If you are/gi, "If the child is")
      .replace(/If you use/gi, "If the child uses")
      .replace(/If you live/gi, "If the child lives")
      .replace(/You will/gi, "the child will")
      .replace(/You are/gi, "the child is")
      .replace(/You use/gi, "the child uses")
      .replace(/You need/gi, "the child needs")
      .replace(/You have/gi, "the child has")
      .replace(/You plan to/gi, "the child plans to")
      .replace(/You should/gi, "the child should")
      .replace(/For you/gi, "for the child")
      .replace(/your bike fits you well/gi, "the bike fits the child well")
      .replace(/your bike fits you/gi, "the bike fits the child")
      .replace(/\byour\b/gi, "the child's")
      .replace(/\byou\b/gi, "the child");
  }

  if (pathway === "exploring") {
    return text
      .replace(/Since you will carry children/gi, "If carrying children is a priority")
      .replace(/Since you plan to carry children/gi, "If carrying children is a priority")
      .replace(/Since you are carrying children/gi, "If carrying children is a priority")
      .replace(/With the right add-ons, it can support carrying a child\./gi, "With the right add-ons, it can support carrying a child if needed.")
      .replace(/Some models can also support carrying children or extra cargo\./gi, "Some models can also support carrying children or extra cargo if needed.")
      .replace(/Carrying children with cargo bikes is an excellent and fun option because they are designed to carry people securely\./gi, "Cargo bikes can be a strong option for carrying children because they are designed to carry people securely.");
  }

  if (pathway !== "someoneElse") {
    return text;
  }

  return text
    .replace(/Check the rider's local DCR regulations/gi, "Check local DCR regulations")
    .replace(/ensuring the rider's bike fits the rider well/gi, "ensuring a good-fitting bicycle")
    .replace(/ensuring the rider's bike fits the rider/gi, "ensuring a good-fitting bicycle")
    .replace(/Since the rider will carry children/gi, "If carrying children is a priority")
    .replace(/Since the rider plans to carry children/gi, "If carrying children is a priority")
    .replace(/Since the rider carries children/gi, "If carrying children is a priority")
    .replace(/Since you will carry children/gi, "If carrying children is a priority")
    .replace(/Since you plan to carry children/gi, "If carrying children is a priority")
    .replace(/\b[Bb]ecause you plan to\b/g, "Because the rider plans to")
    .replace(/\b[Bb]ecause you use\b/g, "Because the rider uses")
    .replace(/\b[Bb]ecause you need\b/g, "Because the rider needs")
    .replace(/\b[Bb]ecause you have\b/g, "Because the rider has")
    .replace(/\b[Gg]iven you use\b/g, "Given the rider uses")
    .replace(/\b[Ss]ince you will\b/g, "Since the rider will")
    .replace(/\b[Ii]f you plan to\b/g, "If the rider plans to")
    .replace(/\b[Ii]f you are\b/g, "If the rider is")
    .replace(/\b[Ii]f you use\b/g, "If the rider uses")
    .replace(/\b[Ii]f you live\b/g, "If the rider lives")
    .replace(/\b[Yy]ou will\b/g, "the rider will")
    .replace(/\b[Yy]ou are\b/g, "the rider is")
    .replace(/\b[Yy]ou use\b/g, "the rider uses")
    .replace(/\b[Yy]ou need\b/g, "the rider needs")
    .replace(/\b[Yy]ou have\b/g, "the rider has")
    .replace(/\b[Yy]ou plan to\b/g, "the rider plans to")
    .replace(/\b[Yy]ou should\b/g, "the rider should")
    .replace(/\b[Ff]or you\b/g, "for the rider")
    .replace(/\b[Yy]our\b/g, "the rider's")
    .replace(/\b[Yy]ou\b/g, "the rider");
}

function shouldIncludeExploreConditionalSlot(recId, slot) {
  if (slot.startsWith("age")) return false;
  if (slot === "adaptiveNeedNo") return false;
  if (slot === "transitLinkNo") return false;
  if (slot === "carryChildrenNo") return false;
  if (slot === "storageNotMajorConcern") return false;

  if (recId === "lowSpeedPoweredMicromobility" && slot === "transitLinkYes") return false;
  if (recId === "cargoBike" && (slot === "deliveries" || slot === "transitLinkYes")) return false;

  if (recId !== "adaptiveMobility" && slot === "adaptiveNeedYes") {
    return false;
  }

  return true;
}

function getRecommendationReason(recId, answers, pathway) {
  const content = getDeviceContent(recId);
  if (!content) return "";

  if (pathway === "exploring") {
    return EXPLORE_REASON_TEXT[recId] || formatTextForPathway(getWhyBase(recId), pathway);
  }

  const orderedWhyConditionals =
    Object.entries(content.whyConditional || {})
      .filter(([slot, text]) => {
        const matchedSlots = new Set(getMatchedConsiderationSlots(answers));
        if (!text || !matchedSlots.has(slot)) return false;

        if (recId === "adaptiveMobility" && slot === "adaptiveNeedYes") {
          return pathway === "child" && answers.adaptiveNeed === "yes";
        }

        return true;
      })
      .map(([, text]) => text);

  const formattedParts = [getWhyBase(recId), ...orderedWhyConditionals]
    .filter(Boolean)
    .map((text) => formatTextForPathway(text, pathway));

  return formattedParts.join(" ");
}

function shouldSuggestFoldable(answers) {
  return (
    answers.carryChildren !== "yes" &&
    answers.primaryUse === "transport" &&
    (answers.transitLink === "yes" || answers.storage === "indoor")
  );
}

function getRecommendationImage(recId, answers, content) {
  const foldableSuggested = shouldSuggestFoldable(answers);

  if (foldableSuggested && recId === "bicycle") {
    return "foldable-bike-v2.png";
  }

  if (foldableSuggested && recId === "ebike") {
    return "foldable-ebike-v2.png";
  }

  return content.image;
}

function getRecommendationImageAlt(recId, answers) {
  const foldableSuggested = shouldSuggestFoldable(answers);

  if (foldableSuggested && recId === "bicycle") {
    return "Image of a foldable bicycle";
  }

  if (foldableSuggested && recId === "ebike") {
    return "Image of a foldable electric bicycle";
  }

  return RECOMMENDATION_IMAGE_ALT_TEXT[recId] || OUTPUTS[recId]?.label || "";
}

function getMatchedConsiderationSlots(answers) {
  const slots = [];

  if (answers.age) {
    slots.push(answers.age);
  }

  if (answers.adaptiveNeed === "yes") {
    slots.push("adaptiveNeedYes");
  } else if (answers.adaptiveNeed === "no") {
    slots.push("adaptiveNeedNo");
  }

  if (answers.primaryUse === "transport") {
    slots.push("transport");
  } else if (answers.primaryUse === "deliveries") {
    slots.push("deliveries");
  } else if (answers.primaryUse === "recreation") {
    slots.push("recreation");
  }

  if (answers.transitLink === "yes") {
    slots.push("transitLinkYes");
  } else if (answers.transitLink === "no") {
    slots.push("transitLinkNo");
  }

  if (answers.carryChildren === "yes") {
    slots.push("carryChildrenYes");
  } else if (answers.carryChildren === "no") {
    slots.push("carryChildrenNo");
  }

  if (answers.distance === "under3") {
    slots.push("distanceUnder3");
  } else if (answers.distance === "3to9") {
    slots.push("distance3to9");
  } else if (answers.distance === "10plus") {
    slots.push("distance10plus");
  }

  if (answers.routeType === "bikeLanes") {
    slots.push("routeBikeLanes");
  } else if (answers.routeType === "mixedRoads") {
    slots.push("routeMixedRoads");
  } else if (answers.routeType === "regularRoads") {
    slots.push("routeRegularRoads");
  } else if (answers.routeType === "trails") {
    slots.push("routeTrails");
  }

  if (answers.storage === "indoor") {
    slots.push("storageIndoor");
  } else if (answers.storage === "outdoor") {
    slots.push("storageOutdoor");
  } else if (answers.storage === "notMajorConcern") {
    slots.push("storageNotMajorConcern");
  }

  return slots;
}

function getResultCardConsiderationItems(recId, answers, content) {
  const items =
    answers.pathway === "exploring"
      ? Object.entries(content.considerConditional || {})
          .filter(([slot, text]) => text && shouldIncludeExploreConditionalSlot(recId, slot))
          .map(([, text]) => text)
      : Object.entries(content.considerConditional || {})
          .filter(([slot, text]) => {
            const matchedSlots = new Set(getMatchedConsiderationSlots(answers));
            if (!text || !matchedSlots.has(slot)) return false;

            if (recId === "adaptiveMobility" && slot === "adaptiveNeedYes") {
              return answers.pathway === "child" && answers.adaptiveNeed === "yes";
            }

            return true;
          })
          .map(([, text]) => text);

  if (content.extraLabel && content.extraValue) {
    items.push(`
      <span class="recommendation-extra">
        <span class="recommendation-extra-label">${content.extraLabel}</span>
        <span class="recommendation-extra-value">${content.extraValue}</span>
      </span>
    `);
  }

  if (answers.pathway === "exploring" && recId === "escooter") {
    const bikeLaneText = "Due to their small wheels, standing position, and lack of suspension, e-scooters perform best on bike lanes and smooth paths.";
    const mixedRoadText = "Due to their small wheels, standing position, and lack of suspension, e-scooters can feel less comfortable on rougher roads or in heavier traffic. Consider a model with suspesion and all-season tires.";
    const bikeLaneIndex = items.indexOf(bikeLaneText);
    const mixedRoadIndex = items.indexOf(mixedRoadText);

    if (bikeLaneIndex !== -1 && mixedRoadIndex !== -1) {
      items.splice(
        Math.min(bikeLaneIndex, mixedRoadIndex),
        2,
        "Due to their small wheels, standing position, and lack of suspension, e-scooters perform best on bike lanes and smooth paths, and can feel less comfortable on rougher roads or in heavier traffic. Consider a model with suspesion and all-season tires."
      );
    }
  }

  return items.filter(Boolean).filter((item, index, allItems) => allItems.indexOf(item) === index);
}

function getRecommendationImageTag(recId, answers) {
  const foldableSuggested = shouldSuggestFoldable(answers);

  if (foldableSuggested && recId === "bicycle") {
    return "Suggested type: Foldable bike";
  }

  if (foldableSuggested && recId === "ebike") {
    return "Suggested type: Foldable e-bike";
  }

  return "";
}

function getConditionalNextSteps(recId, answers) {
  const steps = [];

  if (answers.transitLink === "yes") {
    steps.push({
      label: "Check MBTA micromobility policies",
      url: "https://www.mbta.com/bikes"
    });
    if (recId !== "bikeshare") {
      steps.push({
        label: "Learn how to safely park your micromobility device at an MBTA station",
        url: "https://bc.mbta.com/riding_the_t/bikes/register/Default.asp"
      });
    }
  }

  if (
    answers.storage === "indoor" &&
    (recId === "ebike" || recId === "escooter" || recId === "lowSpeedPoweredMicromobility" || recId === "cargoBike" || recId === "adaptiveMobility")
  ) {
    steps.push({
      label: "Learn how to safely charge your micromobility battery and avoid fires",
      url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center"
    });
  }

  return steps;
}

function renderSingleRecommendationCard(rec, answers, pathway) {
  const content = getDeviceContent(rec.id);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  const rationaleHeading =
    pathway === "exploring"
      ? "Why consider it"
      : pathway === "myself"
        ? "Why this fits for you"
        : "Why this fits";
  const considerations = getConsiderBase(rec.id);

  let filteredBaseConsiderations = [...considerations];

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    filteredBaseConsiderations = filteredBaseConsiderations.filter(
      (item) => !item.includes("UL-certified batteries")
    );
  }

  const orderedConsiderations = [
    ...filteredBaseConsiderations,
    ...considerationItems,
  ].filter(Boolean);

  const considerationGroups = [];

  orderedConsiderations.forEach((item) => {
    const isBluebikesDiscountDetail =
      item === "If you participate in programs like SNAP or MassHealth, or have a qualifying income, you are eligible for a $50/year Bluebikes membership." ||
      item === "If you live in the City of Boston and have not had an annual membership recently., you may be eligible for a $60/year Bluebikes membership, or $5/year if you have a qualifying income.";

    const lastGroup = considerationGroups[considerationGroups.length - 1];
    const canNestUnderPrevious =
      rec.id === "bikeshare" &&
      isBluebikesDiscountDetail &&
      lastGroup &&
      lastGroup.item === "Many bikeshare companies, health insurance providers, universities, employers, or municipalities offer discounts. Check your providers to learn more.";

    if (canNestUnderPrevious) {
      lastGroup.children.push(item);
      return;
    }

    considerationGroups.push({ item, children: [] });
  });

  const considerationsHtml = considerationGroups
    .map(({ item, children }) => {
      const childrenHtml = children.length
        ? `
          <ul class="recommendation-sublist">
            ${children.map((child) => `<li class="recommendation-subitem">${formatTextForPathway(child, pathway)}</li>`).join("")}
          </ul>
        `
        : "";

      return `<li class="guidance-item">${formatTextForPathway(item, pathway)}${childrenHtml}</li>`;
    })
    .join("");

  const nextSteps = [...getNextSteps(rec.id), ...getConditionalNextSteps(rec.id, answers)]
    .filter((step, index, allSteps) =>
      allSteps.findIndex((candidate) => candidate.url === step.url) === index
    )
    .slice(0, 8);

  const nextStepGroups = [];

  nextSteps.forEach((step) => {
    const isAdditionalShopLink =
      step.label === "More shops on Pinkbike" ||
      step.label === "More shops on Singletracks";

    const lastGroup = nextStepGroups[nextStepGroups.length - 1];
    const canNestUnderPrevious =
      isAdditionalShopLink &&
      lastGroup &&
      /Visit (your|a) local bike shop\.?$/i.test(lastGroup.step.label);

    if (canNestUnderPrevious) {
      lastGroup.children.push(step);
      return;
    }

    nextStepGroups.push({ step, children: [] });
  });

  const nextStepsHtml = nextStepGroups
    .map(({ step, children }) => {
      const childrenHtml = children.length
        ? `
          <ul class="next-step-sublist">
            ${children
              .map(
                (child) => `
                  <li class="next-step-subitem">
                    <a href="${child.url}" target="_blank" rel="noopener noreferrer">${formatTextForPathway(child.label, pathway)}</a>
                  </li>
                `
              )
              .join("")}
          </ul>
        `
        : "";

      return `
        <li class="next-step-item">
          <a href="${step.url}" target="_blank" rel="noopener noreferrer">${formatTextForPathway(step.label, pathway)}</a>
          ${childrenHtml}
        </li>
      `;
    })
    .join("");

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);

  return `
    <div class="recommendation-card">
      <h2 class="recommendation-title">${rec.label}</h2>

      ${imageSrc ? `<img src="${imageSrc}" alt="${getRecommendationImageAlt(rec.id, answers)}" class="device-image">` : ""}
      ${imageTag ? `<p class="recommendation-image-tag">${imageTag}</p>` : ""}

      <h3 class="guidance-heading">${rationaleHeading}</h3>
      <p class="recommendation-reason">
        ${getRecommendationReason(rec.id, answers, pathway)}
      </p>

      <div class="guidance">
        <h3 class="guidance-heading">Things to consider</h3>
        <ul class="guidance-list">${considerationsHtml}</ul>

        <p class="device-cost">
          <span class="device-cost-label">Typical cost:</span>
          <span class="device-cost-value">${content.cost}</span>
        </p>
      </div>

      <div class="next-steps">
        <h3 class="guidance-heading">Next steps</h3>
        <ul class="next-steps-list">${nextStepsHtml}</ul>
      </div>
    </div>
  `;
}

function resetAppState() {
  APP_STATE.currentStep = 0;
  APP_STATE.currentResultIndex = 0;
  APP_STATE.currentRecommendations = [];
  APP_STATE.currentAllRecommendations = [];
  APP_STATE.currentNormalizedAnswers = null;
  APP_STATE.currentScores = null;
  APP_STATE.currentPathway = null;
  APP_STATE.answers = {};
}

function resetIntroState() {
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");

  if (intro) {
    intro.textContent = INTRO_TEXT;
    intro.classList.remove("hidden");
    intro.classList.remove("results-state");
  }

  if (heroTitle) {
    heroTitle.classList.remove("hidden");
  }
}

function renderRecommendations(recommendations, allRecommendations, answers, scores, pathway) {
  const result = document.getElementById("result");
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");
  const formStep = document.getElementById("formStep");
  const formNav = document.getElementById("formNav");
  const progress = document.getElementById("progress");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  setAppViewMode("results");

  if (intro) {
    intro.classList.add("hidden");
    intro.classList.remove("results-state");
  }

  if (heroTitle) {
    heroTitle.classList.add("hidden");
  }

  if (!result) return;

  if (formStep) formStep.innerHTML = "";
  if (formNav) formNav.classList.add("hidden");
  if (backBtn) backBtn.classList.add("hidden");
  if (nextBtn) nextBtn.classList.add("hidden");
  if (progress) progress.textContent = "";

  if (!recommendations.length) {
    result.classList.remove("hidden");
    result.innerHTML = "<strong>No recommendations available.</strong>";
    return;
  }

  APP_STATE.currentRecommendations = recommendations;
  APP_STATE.currentAllRecommendations = allRecommendations;
  APP_STATE.currentNormalizedAnswers = answers;
  APP_STATE.currentScores = scores;
  APP_STATE.currentPathway = pathway;
  APP_STATE.currentResultIndex = 0;

  renderCurrentRecommendationPage();
}

function renderCurrentRecommendationPage() {
  const result = document.getElementById("result");
  if (!result) return;

  const recommendations = APP_STATE.currentRecommendations || [];
  const allRecommendations = APP_STATE.currentAllRecommendations || [];
  const answers = APP_STATE.currentNormalizedAnswers;
  const pathway = APP_STATE.currentPathway;
  const index = APP_STATE.currentResultIndex;

  if (!recommendations.length || !answers) return;

  const rec = recommendations[index];
  const cardHtml = renderSingleRecommendationCard(rec, answers, pathway);
  const allResultsPanelHtml =
    pathway === "exploring" ? "" : renderAllDeviceResultsPanel(allRecommendations, answers);
  const printSummaryHtml = renderPrintSummary(
    recommendations,
    answers,
    pathway
  );

  const showPrev = index > 0;
  const showNext = index < recommendations.length - 1;

  const resultsIntroText =
    pathway === "exploring"
      ? EXPLORING_RESULTS_TITLE_TEXT
      : RESULTS_INTRO_TEXT;

  result.classList.remove("hidden");
  result.innerHTML = `
    <p class="results-intro-heading">${resultsIntroText}</p>

    <div class="results-toolbar">
      <div class="results-pager">
        <button
          id="resultPrevBtn"
          type="button"
          class="results-arrow-btn ${showPrev ? "" : "hidden"}"
          aria-label="Previous recommendation"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <p class="results-counter">${index + 1} of ${recommendations.length}</p>
        <button
          id="resultNextBtn"
          type="button"
          class="results-arrow-btn ${showNext ? "" : "hidden"}"
          aria-label="Next recommendation"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
      </div>

      <button
        type="button"
        class="results-restart-btn results-restart-btn-desktop"
        data-role="restart-results"
      >
        Start over
      </button>

      <button
        type="button"
        class="results-print-btn results-print-btn-desktop"
        data-role="print-results"
        aria-label="Print results"
      >
        ${PRINT_ICON_SVG}
      </button>
    </div>

    ${cardHtml}

    <div class="results-actions-mobile">
      <button
        type="button"
        class="results-restart-btn results-restart-btn-mobile"
        data-role="restart-results"
      >
        Start over
      </button>

      <button
        type="button"
        class="results-print-btn results-print-btn-mobile"
        data-role="print-results"
        aria-label="Print results"
      >
        ${PRINT_ICON_SVG}
      </button>
    </div>

    <p class="recommendation-disclaimer results-disclaimer">
      ${SCORING_DISCLAIMER_TEXT}
    </p>

    ${allResultsPanelHtml}
    ${printSummaryHtml}
  `;

  const prevBtn = document.getElementById("resultPrevBtn");
  const nextBtn = document.getElementById("resultNextBtn");
  const restartBtns = document.querySelectorAll('[data-role="restart-results"]');
  const printBtns = document.querySelectorAll('[data-role="print-results"]');
  const cardEl = result.querySelector(".recommendation-card");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (APP_STATE.currentResultIndex > 0) {
        APP_STATE.currentResultIndex -= 1;
        renderCurrentRecommendationPage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (APP_STATE.currentResultIndex < recommendations.length - 1) {
        APP_STATE.currentResultIndex += 1;
        renderCurrentRecommendationPage();
      }
    });
  }

  restartBtns.forEach((restartBtn) => {
    restartBtn.addEventListener("click", () => {
      resetAppState();
      resetIntroState();
      renderQuestion();
    });
  });

  printBtns.forEach((printBtn) => {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  });

  bindMobileRecommendationSwipe(cardEl, recommendations.length);
}

function bindMobileRecommendationSwipe(cardEl, totalRecommendations) {
  if (!cardEl || window.innerWidth > 768 || totalRecommendations < 2) return;

  let touchStartX = 0;
  let touchStartY = 0;

  cardEl.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  cardEl.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) {
      APP_STATE.currentResultIndex =
        (APP_STATE.currentResultIndex + 1) % totalRecommendations;
      renderCurrentRecommendationPage();
      return;
    }

    APP_STATE.currentResultIndex =
      (APP_STATE.currentResultIndex - 1 + totalRecommendations) % totalRecommendations;
    renderCurrentRecommendationPage();
  }, { passive: true });
}

function submitCurrentAnswers() {
  const normalizedAnswers = normalizeAnswers(APP_STATE.answers);
  const scores = calculateScores(normalizedAnswers);
  const allRecommendations = getSortedRecommendations(scores, normalizedAnswers);
  const recommendations =
    normalizedAnswers.pathway === "exploring"
      ? allRecommendations
      : getTopRecommendations(allRecommendations);

  printCurrentResponseScores(normalizedAnswers, scores, allRecommendations);

  renderRecommendations(
    recommendations,
    allRecommendations,
    normalizedAnswers,
    scores,
    normalizedAnswers.pathway
  );
}

function advanceFromCurrentRadioQuestion(selectedValue) {
  clearStepError();

  const questionId = getCurrentQuestionId();
  APP_STATE.answers[questionId] = selectedValue;

  setTimeout(() => {
    const nextQuestionId = getAdjacentQuestionId(questionId, 1);

    if (nextQuestionId) {
      setCurrentStepToQuestion(nextQuestionId);
      renderQuestion();
      return;
    }

    submitCurrentAnswers();
  }, 120);
}

function getRenderedQuestionLabel(questionId) {
  return getQuestionLabelForPathway(questionId, getSelectedPathway());
}

function getRenderedQuestionOptions(questionId) {
  const question = QUESTIONS[questionId];
  if (!question?.options) return [];

  const pathway = getSelectedPathway();
  const options = question.options.map((option) => ({ ...option }));

  if (questionId !== "primaryUse" || pathway !== "child") {
    return options;
  }

  const childAge = Number(APP_STATE.answers.ageInput);
  const showDeliveryOption = Number.isFinite(childAge) && childAge >= 18;

  return options
    .filter((option) => showDeliveryOption || option.value !== "deliveries")
    .map((option) =>
      option.value === "transport"
        ? { ...option, label: "School, commuting, or errands" }
        : option
    );
}

function setAppViewMode(mode) {
  document.body.classList.toggle("question-flow-active", mode === "question");
  document.body.classList.toggle("results-view-active", mode === "results");
}

function renderQuestion() {
  const formStep = document.getElementById("formStep");
  const progress = document.getElementById("progress");
  const result = document.getElementById("result");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");

  if (!formStep || !progress || !backBtn || !nextBtn) return;

  setAppViewMode("question");

  if (intro) {
    intro.classList.toggle("hidden", APP_STATE.currentStep > 0);
  }

  if (heroTitle) {
    heroTitle.classList.toggle("hidden", APP_STATE.currentStep > 0);
  }

  result.classList.add("hidden");
  result.innerHTML = "";

  const sequence = getCurrentSequence();
  const questionId = getCurrentQuestionId();
  const question = QUESTIONS[questionId];
  const renderedOptions = getRenderedQuestionOptions(questionId);
  const renderedLabel = getRenderedQuestionLabel(questionId);
  const savedValue = APP_STATE.answers[questionId] || "";

progress.textContent = "";

  if (question.type === "radio") {
    const usesRouteImages = questionId === "routeType";
    formStep.innerHTML = `
      <div class="question-block">
        <fieldset class="question-fieldset">
          <legend class="question-label">${renderedLabel}</legend>
          <div class="option-grid option-grid-${Math.min(renderedOptions.length, 4)}">
            ${renderedOptions.map((option) => `
              <label class="option-card ${usesRouteImages ? "option-card--with-image" : ""}">
                <input
                  type="radio"
                  name="${questionId}"
                  value="${option.value}"
                  ${savedValue === option.value ? "checked" : ""}
                >
                ${usesRouteImages ? `
                  <span class="option-card-media">
                    <img
                      src="${ROUTE_OPTION_MEDIA[option.value].src}"
                      alt="${ROUTE_OPTION_MEDIA[option.value].alt}"
                      class="option-card-image"
                    >
                  </span>
                ` : ""}
                <span class="option-card-text">${option.label}</span>
              </label>
            `).join("")}
          </div>
          <div id="stepError" class="error-message hidden" style="margin-top: 8px;"></div>
        </fieldset>
      </div>
    `;

    let pointerSelectionInProgress = false;

    const radioInputs = formStep.querySelectorAll(`input[name="${questionId}"]`);
    radioInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (pointerSelectionInProgress) {
          pointerSelectionInProgress = false;
          advanceFromCurrentRadioQuestion(input.value);
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        if (!input.checked) return;

        event.preventDefault();
        advanceFromCurrentRadioQuestion(input.value);
      });
    });

    const optionCards = formStep.querySelectorAll(".option-card");
    optionCards.forEach((card) => {
      const input = card.querySelector(`input[name="${questionId}"]`);
      if (!input) return;

      const markPointerSelection = () => {
        pointerSelectionInProgress = true;
      };

      card.addEventListener("pointerdown", markPointerSelection);
      card.addEventListener("mousedown", markPointerSelection);
      card.addEventListener("touchstart", markPointerSelection, { passive: true });

      card.addEventListener("click", () => {
        if (input.checked && APP_STATE.answers[questionId] === input.value) {
          pointerSelectionInProgress = false;
          advanceFromCurrentRadioQuestion(input.value);
        }
      });
    });
  }

 if (question.type === "number") {
  formStep.innerHTML = `
    <div class="question-block">
      <label for="${questionId}" class="question-label">${renderedLabel}</label>
      <input
        id="${questionId}"
        type="number"
        min="${question.min}"
        max="${question.max}"
        step="1"
        value="${savedValue}"
        placeholder="Enter age"
        style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #d0d0d0; font-size: 15px; box-sizing: border-box;"
      />
      <div id="stepError" class="error-message hidden" style="margin-top: 8px;"></div>
    </div>
  `;

  const numberInput = document.getElementById(questionId);
  if (numberInput) {
    numberInput.focus();

    numberInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    });
  }
}

  backBtn.classList.toggle("hidden", APP_STATE.currentStep === 0);
  nextBtn.classList.toggle("hidden", question.type !== "number" && question.type !== "radio");
  backBtn.innerHTML = "&#8249;";
  nextBtn.innerHTML = "&#8250;";

  const formNav = document.getElementById("formNav");
  if (formNav) {
    const nextOnlyVisible =
      backBtn.classList.contains("hidden") &&
      !nextBtn.classList.contains("hidden");
    const bothNavButtonsHidden =
      backBtn.classList.contains("hidden") &&
      nextBtn.classList.contains("hidden");
    formNav.classList.toggle("form-nav--next-only", nextOnlyVisible);
    formNav.classList.toggle("hidden", bothNavButtonsHidden);
  }
}

function showStepError(message) {
  const errorEl = document.getElementById("stepError");
  if (!errorEl) return;

  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}

function clearStepError() {
  const errorEl = document.getElementById("stepError");
  if (!errorEl) return;

  errorEl.textContent = "";
  errorEl.classList.add("hidden");
}

function saveCurrentStepValue() {
  const questionId = getCurrentQuestionId();
  const question = QUESTIONS[questionId];

  if (!question) return { valid: false, message: "Question not found." };

  if (question.type === "radio") {
    const selected = document.querySelector(`input[name="${questionId}"]:checked`);
    if (!selected) {
      return { valid: false, message: "Please select an answer before continuing." };
    }

    APP_STATE.answers[questionId] = selected.value;

    if (questionId === "pathway") {
      APP_STATE.currentStep = 0;
    }

    return { valid: true };
  }

  if (question.type === "number") {
    const input = document.getElementById(questionId);
    const rawValue = input?.value?.trim() || "";
    const age = Number(rawValue);

    if (rawValue === "" || !Number.isInteger(age)) {
      return { valid: false, message: "Please enter an age before continuing." };
    }

    if (age < question.min || age > question.max) {
      return { valid: false, message: `Please enter an age between ${question.min} and ${question.max}.` };
    }

    APP_STATE.answers[questionId] = rawValue;
    return { valid: true };
  }

  return { valid: false, message: "Unsupported question type." };
}

function handleNext() {
  clearStepError();

  const currentQuestionId = getCurrentQuestionId();
  const validation = saveCurrentStepValue();

  if (!validation.valid) {
    showStepError(validation.message);
    return;
  }

  const nextQuestionId = getAdjacentQuestionId(currentQuestionId, 1);

  if (nextQuestionId) {
    setCurrentStepToQuestion(nextQuestionId);
    renderQuestion();
    return;
  }

  submitCurrentAnswers();
}

function handleBack() {
  clearStepError();

  const result = document.getElementById("result");
  if (result && !result.classList.contains("hidden")) {
    renderQuestion();
    return;
  }

  const currentQuestionId = getCurrentQuestionId();
  const previousQuestionId = getAdjacentQuestionId(currentQuestionId, -1);

  if (previousQuestionId) {
    setCurrentStepToQuestion(previousQuestionId);
    renderQuestion();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  if (backBtn) {
    backBtn.addEventListener("click", handleBack);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", handleNext);
  }

  renderQuestion();
});

function getVisibleQuestionKeys(answers) {
  if (answers.pathway === "exploring") {
    return ["pathway"];
  }

  const keys = [
    "pathway",
    "ageInput"
  ];

  if (
    answers.pathway === "myself" ||
    answers.pathway === "someoneElse" ||
    answers.pathway === "child"
  ) {
    keys.push("adaptiveNeed");
  }

  keys.push("primaryUse");

  if (answers.primaryUse === "transport") {
    keys.push("transitLink");
  }

  keys.push(
    "carryChildren",
    "distance",
    "routeType",
    "storage"
  );

  return keys;
}
