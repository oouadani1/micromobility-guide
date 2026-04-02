console.log("script.js is loading");

const AIRTABLE_BASE_ID = "appgrJr8eKyFwvOnU";
const AIRTABLE_TABLE_NAME = "Submissions";
const AIRTABLE_PAT = "patsxsWizbVQz9vuw.1bf0b98129af41e7aa85bfeb0c6bfdffcf75778d71b7068b72c2acda0e9bba92";

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
    label: "Adaptive or mobility aid device",
    shortLabel: "Adaptive option"
  },
    humanPoweredYouth: {
    label: "Age-appropriate mobility options",
    shortLabel: "Youth mobility"
  }
};

const INTRO_TEXT =
  "Micromobility devices are small, affordable, and flexible ways to get around, such as bikes, e-scooters, and more. Answer a few questions to see what micromobility devices could work well for you.";
const RESULTS_INTRO_TEXT = "Based on your responses, these micromobility options may be a good fit for you.";
const EXPLORING_RESULTS_TITLE_TEXT = "Explore a variety of micromobility devices.";
const SCORING_DISCLAIMER_TEXT =
  "Suggestions are generated using an additive scoring system based on your responses. Results are informational only, and more than one device type may be appropriate.";
const PRINT_ICON_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 9V4h10v5"/><path d="M7 14H5a2 2 0 0 1-2-2v-1.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5V12a2 2 0 0 1-2 2h-2"/><path d="M7 12h10v8H7z"/><circle cx="17.5" cy="10.5" r=".75" fill="currentColor" stroke="none"/></svg>';

const DEVICE_CONTENT = {
  bicycle: {
    image: "Bicycle.png",
    cost: "$300-$1,500",
    whyBase: "A standard bicycle is a versatile option for everyday riding.",
    // WHY CONDITIONAL
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
      transport: "It can be a good fit for short commutes and running quick errands.",
      deliveries: "",
      recreation: "It is especially well suited for recreation and exercise.",
      // Transit link
      transitLinkYes: "It can also work well for trips that connect to transit.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "With the right add-ons, it can also support carrying a child.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It is a practical option for shorter distances.",
      distance3to9: "It may still work for longer trips, depending on comfort and route conditions.",
      distance10plus: "It may still work for longer trips, depending on comfort and route conditions.",
      // Route type
      routeBikeLanes: "It is especially well suited for bike lanes and shared-use paths.",
      routeMixedRoads: "It can work well on a mix of bike lanes and local roads.",
      routeRegularRoads: "It can feel more stable than smaller devices on roads with vehicle traffic.",
      routeTrails: "Some types, such as mountain bikes, are also a good fit for trails and unpaved paths.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "A standard bicycle is simple, reliable, and low-cost to maintain. It requires more physical effort than e-devices, and may feel less comfortable on longer or hillier trips, but it is also a great source of exercise ."
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
      transitLinkYes: "Check MBTA or your local RTA rules before bringing a device onboard, and look into nearby station bike parking or bike shed options where available.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: `
      <span class="recommendation-extra">
        <span class="recommendation-extra-label">Suggested add-ons:</span>
        <span class="recommendation-extra-value">Kid seat, Tag-along bike attachment, Bike trailer</span>
      </span>
    `,
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
      { label: "Visit your local bike shop", url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts" },
      { label: "Learn more about bicycles", url: "https://canva.link/nrvd5v2bvwbf99v" },
      { label: "Join a bike-friendly event", url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar" }
    ]
  },
  ebike: {
    image: "E-bike.png",
    cost: "$1,000-$6,000",
    whyBase: "An e-bike can make everyday trips easier and less tiring.",
    // WHY CONDITIONAL
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
      transport: "It is especially useful for commuting and running errands.",
      deliveries: "It can be a strong fit for frequent trips or work-related use.",
      recreation: "It can also be a comfortable option for recreational riding.",
      // Transit link
      transitLinkYes: "It may also work well for trips that connect to transit, especially if storage or parking is limited.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "Some models can also support carrying children or extra cargo.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It can still be a good option for short trips, especially if convenience matters.",
      distance3to9: "It can make longer distances more manageable.",
      distance10plus: "It can make longer distances more manageable.",
      // Route type
      routeBikeLanes: "It works well on bike lanes and shared-use paths.",
      routeMixedRoads: "It can also work well on a mix of bike lanes and local roads.",
      routeRegularRoads: "It may feel more comfortable than a smaller device on roads with vehicle traffic.",
      routeTrails: "It can also work well on many paths and trail settings.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Wear a helmet, use front and rear lights, reflectors, and a bell. Ride predictably when sharing bike lanes, paths, or roadways. If you need to use a sidewalk, walk your bike.",
      "Choose e-bikes with UL-certified batteries and electrical systems, and follow safe charging practices if storing indoors to avoid the risk of thermal runaway.",
      "Become familiar with your e-bike's class, speed, and braking performance before riding in traffic or crowded areas."
    ],
    // CONSIDER CONDITIONAL
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "While e-bikes come in three classes, only Class 1 e-bikes are suggested for you given your age because of their manageable speed and power. This is based on recommendations made by the Special Commission on Micromobility. Ask your parents to learn more.",
      // migrated from old classes; duplicated for age-based compatibility
      age17to49: "E-bikes come in three classes. Research the ones that best meet your needs.",
      // migrated from old classes; duplicated for age-based compatibility
      age50plus: "E-bikes come in three classes. Research the ones that best meet your needs.",
      // Adaptive need
      adaptiveNeedYes: "",
      adaptiveNeedNo: "",
      // Primary use
      // migrated from old ohv; preserved in the closest slot with compatibility mapping
      transport: "Since they can look similiar, be careful not to confuse an e-bike with a higher-powered e-moto or e-dirt bike, which are considered Off-Highway Vehicles (OHVs) and must be registered with the Massachusetts Environmental Police.",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "Check MBTA or your local RTA rules before bringing a device onboard, and look into nearby station bike parking or bike shed options where available.",
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
      { label: "Learn more about e-bikes", url: "https://canva.link/ez6c09mq8tpfpk4" }
    ]
  },
  escooter: {
    image: "E-Scooter.png",
    cost: "$500-$2,000",
    whyBase: "An e-scooter can be a convenient option for quick, short trips.",
    // WHY CONDITIONAL
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
      transport: "It can work well for short commutes and first- or last-mile trips.",
      deliveries: "",
      recreation: "It can also be a fun option for casual riding.",
      // Transit link
      transitLinkYes: "It can be especially useful for trips that connect to transit.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It is best suited for shorter distances.",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "It works best where there is dedicated bike space or shared-use paths.",
      routeMixedRoads: "It may work in mixed conditions, but comfort can depend on the route.",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Use a helmet, lights, and a bell to remain visible and alert others when riding in shared spaces.",
      "Ride where scooters are permitted, such as bike lanes or roadways, and avoid sidewalks. If you need to use a sidewalk, walk your e-scooter.",
      "Choose devices with UL-certified batteries and electrical systems, and follow safe charging practices if storing indoors to avoid the risk of thermal runaway."
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
      { label: "more about electric scooters", url: "https://canva.link/t5ka95rvio5ijw3" }
    ]
  },
  lowSpeedPoweredMicromobility: {
    image: "low-power-mobility.png",
    cost: "$500-$2,500",
    whyBase: "Low speed powered micromobility devices can be a niche fit for short trips on smoother, lower-stress routes.",
    // WHY CONDITIONAL
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
      transport: "They may work for short commuting or errand trips when storage and route conditions are favorable.",
      deliveries: "",
      recreation: "They can also be a recreation-oriented option for riders who are already comfortable balancing and maneuvering.",
      // Transit link
      transitLinkYes: "They can be easier to bring inside or combine with transit than larger devices.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "They are best suited to shorter distances.",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "They work best on smoother routes with separation from traffic.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "Some riders may prefer using them in park-like settings away from vehicle traffic.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "These devices are best suited to short trips on smoother, lower-stress routes where the rider is already comfortable with balance and maneuvering.",
      "They are not a strong fit for carrying children, rough pavement, or routes with a lot of vehicle traffic."
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
      { label: "Learn about low speed powered devices (coming soon)", url: "/micromobility-hub/device-library/low-speed-powered-devices.html" }
    ]
  },
  cargoBike: {
    image: "Cargo_bike.png",
    cost: "$1,500-$7,500",
    whyBase: "A cargo bike is a great option when a standard bike may not carry enough.",
    // WHY CONDITIONAL
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
      transport: "It is especially useful for errands such as groceries, hauling supplies, or carrying larger items.",
      deliveries: "It can be a strong fit for deliveries or heavier-duty daily use.",
      recreation: "",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "It is one of the best options for carrying children.",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It can work well for shorter local trips with cargo.",
      distance3to9: "It can also support longer trips, especially in electric versions.",
      distance10plus: "It can also support longer trips, especially in electric versions.",
      // Route type
      routeBikeLanes: "It can work well on bike-friendly routes with enough space.",
      routeMixedRoads: "",
      routeRegularRoads: "Its larger size can feel more stable and visible on roads with vehicle traffic.",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Ensure the cargo bike is designed for the weight and type of items you plan to carry.",
      "Because cargo bikes are longer and heavier than standard bikes, practice handling and braking before riding in traffic."
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
      carryChildrenYes: "When carrying children, make sure they wear properly fitted helmets and are secured in appropriate seats or harnesses.",
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
      { label: "Learn more about cargo bikes", url: "https://canva.link/gcyamow1yonirts" }
    ]
  },
  bikeshare: {
    image: "Bikeshare-v2.png",
    cost: "$0-$120 per year depending on bikeshare membership or discounts",
    whyBase: "Bikeshare can be a practical option if flexibility matters more than ownership.",
    // WHY CONDITIONAL
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
      transport: "It can work especially well for everyday trips near transit, schools, downtowns, and other active areas.",
      deliveries: "",
      recreation: "",
      // Transit link
      transitLinkYes: "It can be especially helpful for first- and last-mile trips that connect to transit.",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It is especially convenient for shorter trips.",
      distance3to9: "",
      distance10plus: "",
      // Route type
      routeBikeLanes: "It works best where bike lanes or shared-use paths are available.",
      routeMixedRoads: "",
      routeRegularRoads: "",
      routeTrails: "",
      // Storage
      storageIndoor: "",
      // migrated from old storage support; current behavior only triggers on outdoor storage
      storageOutdoor: "It can be a good fit when storage is limited or inconvenient.",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "There are a few bikeshare systems in Massachusetts, including Bluebikes, Metro Mobility, ValleyBike Share, CargoB, and Port Bikeshare.",
      "Check whether a bikeshare system is available near your starting point and destination.",
      "Follow local bicycling rules and ride in bike lanes or shared paths when available.",
      "Consider using helmets and reflective gear when riding in low-light conditions."
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
      { label: "Learn about bikeshare options (coming soon)", url: "/micromobility-hub/device-library/bikeshare.html" }
    ]
  },
  adaptiveMobility: {
    image: "Adaptive-v3.png",
    cost: "$2,500-$10,000",
    whyBase: "An adaptive device may be a better fit for riders with different mobility needs.",
    // WHY CONDITIONAL
    whyConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      // migrated from old childWhyBase; used by the existing child-path rationale special case
      adaptiveNeedYes: "An adaptive device may be a better fit for a child with a mobility disability or mobility need. Different device types can support comfort, fit, and confidence depending on how and where the child will ride.",
      adaptiveNeedNo: "",
      // Primary use
      transport: "Many are designed for everyday use, and some can also carry larger loads.",
      deliveries: "",
      recreation: "It can be especially well suited for recreation and exercise.",
      // Transit link
      transitLinkYes: "",
      transitLinkNo: "",
      // Carrying children
      carryChildrenYes: "",
      carryChildrenNo: "",
      // Distance
      distanceUnder3: "It may work well for shorter local trips.",
      distance3to9: "Some options can also support longer rides more comfortably.",
      distance10plus: "Some options can also support longer rides more comfortably.",
      // Route type
      routeBikeLanes: "It can work well on bike-friendly routes and shared-use paths.",
      routeMixedRoads: "",
      routeRegularRoads: "A more stable device may feel more comfortable on regular roads.",
      routeTrails: "It may be especially comfortable on trails and path-based routes.",
      // Storage
      storageIndoor: "",
      storageOutdoor: "",
      storageNotMajorConcern: ""
    },
    considerBase: [
      "Adaptive mobility devices include a range of designs such as tricycles or hand-powered cycles that support different mobility needs.",
      "Consider visibility features such as lights, reflectors, or flags to improve safety on shared paths or roadways.",
      "Some adaptive devices require additional space for storage or transport."
    ],
    // CONSIDER CONDITIONAL
    considerConditional: {
      // Age
      age3to13: "",
      age14to16: "",
      age17to49: "",
      age50plus: "",
      // Adaptive need
      // migrated from old adaptiveChild; preserved in the closest questionnaire-derived slot
      adaptiveNeedYes: "Look for adaptive options that match the child's size, comfort, and supervision needs, and try borrowing equipment first when possible.",
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
      { label: "Learn more about adaptive mobility options (coming soon)", url: "/micromobility-hub/device-library/adaptive-options.html" },
      { label: "Learn more about the Department of Recreations's (DCP) Universal Access Program", url: "https://www.mass.gov/orgs/universal-access-program" },
      { label: "Check out DCR's adaptive cycling equipment list", url: "https://www.mass.gov/info-details/adaptive-cycling-equipment" },
      { label: "Try out DCR's power-driven mobility devices", url: "https://www.mass.gov/info-details/dcr-power-driven-mobility-devices" }
    ],
    extraLabel: "Suggested device types:",
    extraValue: "Tricycles, Recumbent cycles, Handcycles"
  },
  humanPoweredYouth: {
    image: "youth-mobility.png",
    cost: "$50-$500 depending on device type",
    whyBase: "Age-appropriate mobility options can help younger riders build confidence and skills over time.",
    // WHY CONDITIONAL
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
      recreation: "These options are often a good fit for recreation, practice, and everyday neighborhood riding.",
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
      routeTrails: "They can work well in parks, on paths, and in other lower-stress riding environments.",
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
      { label: "Learn more about youth mobility options", url: "https://canva.link/60qopm17rsnhlls" }
    ]
  }
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
      adaptiveMobility: 2,
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
      adaptiveMobility: 3,
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
      adaptiveMobility: 1,
      bikeshare: 0
    },
    outdoor: {
      bicycle: 1,
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

const RATIONALE_PRIORITY = {
  bicycle: [
    "children",
    "transport",
    "recreation",
    "transitLink",
    "bikeLanes",
    "mixedRoads",
    "regularRoads",
    "trails",
    "under3",
    "longDistance",
    "deliveries"
  ],

  ebike: [
    "children",
    "deliveries",
    "transport",
    "transitLink",
    "longDistance",
    "regularRoads",
    "bikeLanes",
    "mixedRoads",
    "under3",
    "trails",
    "recreation"
  ],

  escooter: [
    "under3",
    "transitLink",
    "transport",
    "bikeLanes",
    "mixedRoads",
    "recreation"
  ],

  lowSpeedPoweredMicromobility: [
    "under3",
    "bikeLanes",
    "trails",
    "transitLink",
    "transport",
    "recreation"
  ],

  cargoBike: [
    "children",
    "deliveries",
    "transport",
    "under3",
    "longDistance",
    "bikeLanes",
    "regularRoads"
  ],

  bikeshare: [
    "storage",
    "transitLink",
    "transport",
    "under3",
    "bikeLanes"
  ],

  adaptiveMobility: [
    "transport",
    "recreation",
    "under3",
    "longDistance",
    "bikeLanes",
    "trails",
    "regularRoads"
  ],

  humanPoweredYouth: [
    "recreation",
    "under3",
    "trails"
  ]
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
    label: "How will the rider mostly use the device?",
    options: [
      { value: "transport", label: "Commuting or errands" },
      { value: "deliveries", label: "Deliveries or gig economy work" },
      { value: "recreation", label: "Recreation or exercise" }
    ]
  },
  transitLink: {
  type: "radio",
  label: "Will the rider be using public transit during their trip?",
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
    label: "What will the ride mostly feel like?",
    options: [
      { value: "bikeLanes", label: "Mostly separate from traffic, such as bike lanes" },
      { value: "mixedRoads", label: "A mix of bike lanes and some busier roads" },
      { value: "regularRoads", label: "Mostly riding next to cars, without any separation" },
      { value: "trails", label: "Mostly off-road trails or parks" }
    ]
  },
  storage: {
    type: "radio",
    label: "Which of these matters most when storing the device?",
    options: [
      { value: "indoor", label: "I need something easy to bring inside" },
      { value: "outdoor", label: "It will usually be stored outside" },
      { value: "notMajorConcern", label: "Storage is not a major concern" }
    ]
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

function printDeviceScoreTotals() {
  const deviceOrder = [
    "bicycle",
    "ebike",
    "escooter",
    "lowSpeedPoweredMicromobility",
    "cargoBike",
    "adaptiveMobility",
    "bikeshare"
  ];

  const totals = {
    bicycle: 0,
    ebike: 0,
    escooter: 0,
    lowSpeedPoweredMicromobility: 0,
    cargoBike: 0,
    adaptiveMobility: 0,
    bikeshare: 0
  };

  Object.values(SCORING_RULES).forEach((answerSet) => {
    Object.values(answerSet).forEach((scoreSet) => {
      deviceOrder.forEach((device) => {
        totals[device] += scoreSet[device] ?? 0;
      });
    });
  });

  console.log("Total assigned score by device:");
  console.table(deviceOrder.map((device) => ({
    device,
    totalScore: totals[device]
  })));
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

function enforceLowSpeedPlacement(sortedDevices) {
  const lowSpeedIndex = sortedDevices.findIndex(
    (device) => device.id === "lowSpeedPoweredMicromobility"
  );

  if (lowSpeedIndex === -1 || lowSpeedIndex >= 2) return sortedDevices;

   const topScore = sortedDevices[0]?.score ?? 0;
   const lowSpeedScore = sortedDevices[lowSpeedIndex]?.score ?? 0;

   if (lowSpeedScore >= topScore - 1) return sortedDevices;

  const lowSpeedDevice = sortedDevices.splice(lowSpeedIndex, 1)[0];
  sortedDevices.splice(Math.min(2, sortedDevices.length), 0, lowSpeedDevice);

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
  sortedDevices = enforceLowSpeedPlacement(sortedDevices);

  return sortedDevices;
}

function getTopRecommendations(sortedDevices) {
  return sortedDevices.slice(0, 2);
}

function getRecommendationPriorityMeta(index, score, topScore) {
  if (index === 0) {
    return {
      label: "Top suggestion",
      className: "all-results-tag-top"
    };
  }

  if (index === 1) {
    return {
      label: "Secondary suggestion",
      className: "all-results-tag-top"
    };
  }

  if (score >= topScore - 1) {
    return {
      label: "Strongly suggested",
      className: "all-results-tag-strong"
    };
  }

  if (score >= topScore - 3) {
    return {
      label: "Suggested",
      className: "all-results-tag-suggested"
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
      primaryUse: "How will you mostly use the device?",
      transitLink: "Do you use public transit during your commute?",
      carryChildren: "Do you plan to carry children with the device?",
      distance: "What is your typical trip distance?",
      routeType: "What will your ride mostly feel like?",
      storage: "Which of these matters most when storing your device?"
    };

    return myselfLabels[questionId] || QUESTIONS[questionId]?.label || questionId;
  }

  if (pathway === "someoneElse" || pathway === "exploring") {
    const riderLabels = {
      ageInput: "How old is the rider?",
      adaptiveNeed: "Does the rider have a mobility disability or mobility need?",
      primaryUse: "How will the rider mostly use the device?",
      transitLink: "Will the rider be using public transit during their trip?",
      carryChildren: "Does the rider plan to carry children with the device?",
      distance: "What is the rider's typical trip distance?",
      routeType: "What will the rider's ride mostly feel like?",
      storage: "Which of these matters most when storing the rider's device?"
    };

    return riderLabels[questionId] || QUESTIONS[questionId]?.label || questionId;
  }

  if (pathway === "child") {
    const childLabels = {
      ageInput: "How old is the child?",
      adaptiveNeed: "Does the child have a mobility disability or mobility need?",
      primaryUse: "How will the child mostly use the device?",
      transitLink: "Will the child be using public transit during their trip?",
      distance: "What is the child's typical trip distance?",
      routeType: "What will the child's ride mostly feel like?",
      storage: "Which of these matters most when storing the child's device?"
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

function getAllResultsReason(rec, answers, priority) {
  if (!answers) return "";

  if (priority.label === "Top suggestion") {
    if (rec.id === "bicycle" && answers.transitLink === "yes") {
      return "A standard bicycle rises to the top because it fits everyday trips and can still work well with a transit connection.";
    }

    if (rec.id === "ebike" && (answers.distance === "3to9" || answers.distance === "10plus")) {
      return "An e-bike is a top suggestion because your trip distance points toward added assistance and range.";
    }

    if (rec.id === "cargoBike" && answers.carryChildren === "yes") {
      return "A cargo bike is a top suggestion because carrying children makes extra capacity especially useful.";
    }

    if (rec.id === "adaptiveMobility" && answers.adaptiveNeed === "yes") {
      return "An adaptive option is a top suggestion because you indicated a disability or mobility need.";
    }

    if (rec.id === "humanPoweredYouth") {
      return "These options rise to the top because the selected age points toward age-appropriate nonmotorized devices.";
    }

    return `${rec.label} is a top suggestion because it aligns well with the trip needs and preferences you selected.`;
  }

  if (priority.label === "Secondary suggestion") {
    return `${rec.label} is a secondary suggestion because it matches several of your inputs, but not as strongly as your top result.`;
  }

  if (priority.label === "Strongly suggested") {
    if (rec.id === "bikeshare" && answers.carryChildren === "yes") {
      return "Bikeshare may work for you, but because you will be carrying children, it is less practical than the top suggestions.";
    }

    if (rec.id === "ebike" && answers.age === "age14to16") {
      return "An e-bike is still strongly suggested, but your age means only Class 1 e-bike options are appropriate.";
    }

    return `${rec.label} is strongly suggested because it fits several of your answers, even if it is not one of the top two matches.`;
  }

  if (priority.label === "Suggested") {
    if (rec.id === "lowSpeedPoweredMicromobility") {
      return "These devices may work for you because you selected short trips, indoor storage, and lower-stress routes.";
    }

    if (rec.id === "bikeshare" && answers.transitLink === "yes") {
      return "Bikeshare is suggested because it can support a transit-linked trip, but it may be less convenient than owning a device.";
    }

    return `${rec.label} is suggested because it matches part of your profile, but it is a weaker fit than the higher-ranked options.`;
  }

  if (rec.id === "bikeshare" && answers.carryChildren === "yes") {
    return "Bikeshare is not suggested because carrying children makes shared public bikes a poor fit for your needs.";
  }

  if (rec.id === "lowSpeedPoweredMicromobility") {
    return "These devices are not suggested because they work best only for short indoor-stored trips on smoother, lower-stress routes.";
  }

  if (rec.id === "escooter" && answers.routeType === "regularRoads") {
    return "An e-scooter is not suggested because regular roads with more traffic are a weaker match for this device type.";
  }

  return `${rec.label} is not suggested because other device types better match the needs and constraints you selected.`;
}

function renderAllDeviceResultsPanel(allRecommendations, answers) {
  const visibleRecommendations = allRecommendations.filter((rec) => rec.score > 0);
  if (!visibleRecommendations.length) return "";

  const topScore = visibleRecommendations[0]?.score ?? 0;
  const itemsHtml = visibleRecommendations
    .map((rec, index) => {
      const imageSrc = getAllResultsImage(rec.id, answers);
      const priority = getRecommendationPriorityMeta(index, rec.score, topScore);
      const reason = getAllResultsReason(rec, answers, priority);

      return `
      <li class="all-results-item">
        <div class="all-results-rank">${index + 1}</div>
        ${imageSrc ? `<img src="${imageSrc}" alt="${rec.label}" class="all-results-image">` : ""}
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

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  let considerations = getConsiderBase(rec.id);

  if (rec.id === "cargoBike" && answers.carryChildren === "yes") {
    considerations.push(getConsiderConditionalValue("cargoBike", "children"));
  }

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    considerations = considerations.filter(
      (item) => !item.includes("UL-certified batteries")
    );
  }

  const trimmedConsiderations = [...considerationItems, ...considerations].slice(0, 2);
  const considerationsHtml = trimmedConsiderations
    .map((item) => `<li>${item}</li>`)
    .join("");

  return `
    <article class="print-rec-card">
      <div class="print-rec-header">
        ${imageSrc ? `<img src="${imageSrc}" alt="${rec.label}" class="print-rec-image">` : ""}
        <div class="print-rec-title-wrap">
          <h4 class="print-rec-title">${rec.label}</h4>
          ${imageTag ? `<p class="print-rec-image-tag"><em>${imageTag}</em></p>` : ""}
        </div>
      </div>
      <p class="print-rec-reason"><strong>Why this fits:</strong> ${getRecommendationReason(rec.id, answers, pathway)}</p>
      <p class="print-rec-cost"><strong>Typical cost:</strong> ${content.cost}</p>
      ${considerationsHtml ? `<ul class="print-rec-list">${considerationsHtml}</ul>` : ""}
    </article>
  `;
}

function renderPrintSummary(recommendations, answers, pathway) {
  const rawAnswers = APP_STATE.answers || {};
  const topRecommendationsHtml = recommendations
    .slice(0, 2)
    .map((rec) => renderPrintRecommendationSummary(rec, answers, pathway))
    .join("");

  return `
    <section class="print-summary" aria-hidden="true">
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

function getMatchedSupportKeys(answers) {
  const keys = [];

  if (answers.carryChildren === "yes") {
    keys.push("children");
  }

  if (answers.primaryUse === "transport") {
    keys.push("transport");
  }

  if (answers.primaryUse === "recreation") {
    keys.push("recreation");
  }

  if (answers.primaryUse === "deliveries") {
    keys.push("deliveries");
  }

  if (answers.transitLink === "yes") {
    keys.push("transitLink");
  }

  if (answers.distance === "under3") {
    keys.push("under3");
  }

  if (answers.distance === "3to9" || answers.distance === "10plus") {
    keys.push("longDistance");
  }

  if (answers.routeType === "bikeLanes") {
    keys.push("bikeLanes");
  }

  if (answers.routeType === "mixedRoads") {
    keys.push("mixedRoads");
  }

  if (answers.routeType === "regularRoads") {
    keys.push("regularRoads");
  }

  if (answers.routeType === "trails") {
    keys.push("trails");
  }

  if (answers.storage === "outdoor") {
    keys.push("storage");
  }

  return keys;
}

function getRecommendationReason(recId, answers, pathway) {
  if (!getDeviceContent(recId)) return "";

  if (recId === "adaptiveMobility" && pathway === "child" && answers.adaptiveNeed === "yes") {
    return getWhyConditional("adaptiveMobility", "adaptiveNeedYes");
  }

  const matchedKeys = getMatchedSupportKeys(answers);
  const priorityOrder = RATIONALE_PRIORITY[recId] || [];

  const chosenSupports = priorityOrder
    .filter((key) => matchedKeys.includes(key) && getWhyConditional(recId, key))
    .map((key) => getWhyConditional(recId, key))
    .slice(0, 2);

  return [getWhyBase(recId), ...chosenSupports].join(" ");
}

function getDynamicNextSteps(recId, answers) {
  const links = [];

  if (
    recId === "bicycle" ||
    recId === "ebike" ||
    recId === "cargoBike"
  ) {
    links.push({
      label: "Visit a local bike shop",
      url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts"
    });
  }

  if (recId === "bicycle" || recId === "ebike") {
    links.push({
      label: "Join a bike-friendly event",
      url: "https://www.massbike.org/massachusetts-bike-friendly-events-calendar"
    });
  }

  if (recId === "cargoBike") {
    links.push({
      label: "Borrow a cargo bike first to see if it is for you",
      url: "https://cpp.ebikelibrary.org/"
    });
  }

  if (recId === "humanPoweredYouth") {
    links.push({
      label: "Visit a local bike shop",
      url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts"
    });

    links.push({
      label: "Explore Safe Routes to School resources",
      url: "https://www.mass.gov/safe-routes-to-school"
    });

    links.push({
      label: "Read CPSC age-appropriate product guidance",
      url: "https://www.cpsc.gov/content/2020-Age-Determination-Guidelines"
    });
  }

  if (recId === "ebike") {
    links.push({
      label: "Check state e-bike incentives",
      url: "https://goclean.masscec.com/clean-energy-solutions/electric-bicycles/"
    });
  }

  if (recId === "bikeshare") {
    links.push({
      label: "Check Massachusetts bikeshare programs and discount pricing",
      url: "https://goclean.masscec.com/homeowners/bike-share-programs/"
    });
  }

  return links;
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

function getResultCardConsiderationItems(recId, answers, content) {
  const items = [];

  if (answers.transitLink === "yes" && (recId === "bicycle" || recId === "ebike")) {
    items.push(getConsiderConditionalValue(recId, "transitLink"));
  }

  if (recId === "ebike") {
    items.push(getConsiderConditionalValue(recId, "ohv"));

    items.push(
      answers.age === "age14to16"
        ? getConsiderConditionalValue(recId, "age14to16")
        : getConsiderConditionalValue(recId, "classes")
    );
  }

  if (recId === "bicycle" && answers.carryChildren === "yes") {
    items.push(getConsiderConditionalValue(recId, "children"));
  }

  if (content.extraLabel && content.extraValue) {
    items.push(`
      <span class="recommendation-extra">
        <span class="recommendation-extra-label">${content.extraLabel}</span>
        <span class="recommendation-extra-value">${content.extraValue}</span>
      </span>
    `);
  }

  if (recId === "adaptiveMobility" && answers.pathway === "child" && answers.adaptiveNeed === "yes") {
    items.push(getConsiderConditionalValue(recId, "adaptiveChild"));
  }

  if (recId === "humanPoweredYouth" && answers.age === "age3to13") {
    items.push(getConsiderConditionalValue(recId, "youthGuidance"));
  }

  return items.filter(Boolean);
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

function renderSingleRecommendationCard(rec, answers, pathway) {
  const content = getDeviceContent(rec.id);
  const considerationItems = getResultCardConsiderationItems(rec.id, answers, content);
  const rationaleHeading = pathway === "exploring" ? "Why consider it" : "Why this fits";
  let considerations = getConsiderBase(rec.id);

  if (rec.id === "cargoBike" && answers.carryChildren === "yes") {
    considerations.push(getConsiderConditionalValue(rec.id, "children"));
  }

  if (answers.storage !== "indoor" && (rec.id === "ebike" || rec.id === "escooter")) {
    considerations = considerations.filter(
      (item) => !item.includes("UL-certified batteries")
    );
  }

  const maxConsiderations = considerationItems.length >= 3 ? 3 : 4;
  const remainingBaseConsiderations = Math.max(
    0,
    maxConsiderations - considerationItems.length
  );

  considerations = considerations.slice(0, remainingBaseConsiderations);

  const considerationsHtml = [...considerationItems, ...considerations]
    .map((item) => `<li class="guidance-item">${item}</li>`)
    .join("");

  const nextSteps = [...getNextSteps(rec.id), ...getDynamicNextSteps(rec.id, answers)]
    .filter((step, index, allSteps) =>
      allSteps.findIndex((candidate) => candidate.url === step.url) === index
    )
    .slice(0, 4);

  const nextStepsHtml = nextSteps
    .map(
      (step) => `
        <li class="next-step-item">
          <a href="${step.url}" target="_blank" rel="noopener noreferrer">${step.label}</a>
        </li>
      `
    )
    .join("");

  const imageSrc = getRecommendationImage(rec.id, answers, content);
  const imageTag = getRecommendationImageTag(rec.id, answers);

  return `
    <div class="recommendation-card">
      <h2 class="recommendation-title">${rec.label}</h2>

      ${imageSrc ? `<img src="${imageSrc}" alt="${rec.label}" class="device-image">` : ""}
      ${imageTag ? `<p class="recommendation-image-tag">${imageTag}</p>` : ""}

      <h4 class="guidance-heading">${rationaleHeading}</h4>
      <p class="recommendation-reason">
        ${getRecommendationReason(rec.id, answers, pathway)}
      </p>

      <div class="guidance">
        <h4 class="guidance-heading">Things to consider</h4>
        <ul class="guidance-list">${considerationsHtml}</ul>

        <p class="device-cost">
          <span class="device-cost-label">Typical cost:</span>
          <span class="device-cost-value">${content.cost}</span>
        </p>
      </div>

      <div class="next-steps">
        <h4 class="guidance-heading">Next steps</h4>
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

  renderRecommendations(
    recommendations,
    allRecommendations,
    normalizedAnswers,
    scores,
    normalizedAnswers.pathway
  );

  const payload = buildAirtablePayload(normalizedAnswers, recommendations, allRecommendations);
  console.log("Payload:", payload);
  sendToAirtable(payload);
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

function renderQuestion() {
  const formStep = document.getElementById("formStep");
  const progress = document.getElementById("progress");
  const result = document.getElementById("result");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const intro = document.getElementById("introText");
  const heroTitle = document.getElementById("heroTitle");

  if (!formStep || !progress || !backBtn || !nextBtn) return;

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
    formStep.innerHTML = `
      <div class="question-block">
        <p class="question-label">${renderedLabel}</p>
        <div class="option-grid option-grid-${Math.min(renderedOptions.length, 4)}">
          ${renderedOptions.map((option) => `
            <label class="option-card">
              <input
                type="radio"
                name="${questionId}"
                value="${option.value}"
                ${savedValue === option.value ? "checked" : ""}
              >
              <span class="option-card-text">${option.label}</span>
            </label>
          `).join("")}
        </div>
        <div id="stepError" class="error-message hidden" style="margin-top: 8px;"></div>
      </div>
    `;

    const radioInputs = formStep.querySelectorAll(`input[name="${questionId}"]`);
    radioInputs.forEach((input) => {
      input.addEventListener("change", () => {
        advanceFromCurrentRadioQuestion(input.value);
      });
    });

    const optionCards = formStep.querySelectorAll(".option-card");
    optionCards.forEach((card) => {
      const input = card.querySelector(`input[name="${questionId}"]`);
      if (!input) return;

      card.addEventListener("click", () => {
        if (input.checked && APP_STATE.answers[questionId] === input.value) {
          advanceFromCurrentRadioQuestion(input.value);
        }
      });
    });
  }

 if (question.type === "number") {
  formStep.innerHTML = `
    <div class="question-block">
      <p class="question-label">${renderedLabel}</p>
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
  nextBtn.classList.toggle("hidden", question.type !== "number");
  backBtn.innerHTML = "&#8249;";
  nextBtn.innerHTML = "&#8250;";

  const formNav = document.getElementById("formNav");
  if (formNav) {
    const bothNavButtonsHidden =
      backBtn.classList.contains("hidden") &&
      nextBtn.classList.contains("hidden");
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

async function sendToAirtable(payload) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AIRTABLE_PAT}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        records: [
          {
            fields: payload
          }
        ]
      })
    });

    const data = await response.json();

    console.log("Airtable response status:", response.status);
    console.log("Airtable response data:", data);

    if (!response.ok) {
      console.error("Airtable error:", data);
      return;
    }

    console.log("Airtable success:", data);
  } catch (error) {
    console.error("Network/Airtable error:", error);
  }
}

function buildAirtablePayload(normalizedAnswers, recommendations, allRecommendations = recommendations) {
  return {
    timestamp: new Date().toISOString(),
    pathway: normalizedAnswers.pathway,
    ageInput: String(normalizedAnswers.ageInput || ""),
    age: normalizedAnswers.age,
    adaptiveNeed: normalizedAnswers.adaptiveNeed,
    primaryUse: normalizedAnswers.primaryUse,
    transitLink: normalizedAnswers.transitLink || "",
    carryChildren: normalizedAnswers.carryChildren,
    distance: normalizedAnswers.distance,
    routeType: normalizedAnswers.routeType,
    storage: normalizedAnswers.storage,
    primaryRecommendation: recommendations[0]?.id || "",
    secondaryRecommendation: recommendations[1]?.id || "",
    allRecommendations: allRecommendations.map((rec) => rec.id).join(", "),
    screenWidth: String(window.innerWidth),
    deviceType: window.innerWidth <= 768 ? "mobile" : "desktop"
  };
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
  printDeviceScoreTotals();

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
