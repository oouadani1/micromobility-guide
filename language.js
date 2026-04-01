export const LANG = {

  // GLOBAL UI TEXT
  global: {
    intro:
      "Micromobility devices, such as bikes and e-scooters, are small, affordable, and flexible ways to get around. Answer a few questions to see what micromobility devices could work well for you.",

    resultsIntro:
      "See your suggested micromobility devices below.",

    exploringIntro:
      "Here are all device types, ranked based on your responses.",

    noResults: "No suggestion could be generated.",

    considerationsHeading: "Things to consider",
    nextStepsHeading: "Next steps",
    costLabel: "Typical cost:",

    restart: "Start over",

    validation: {
      selectAnswer: "Please select an answer before continuing.",
      enterAge: "Please enter an age before continuing.",
      ageRange: "Please enter an age between {min} and {max}."
    }
  },

  // DEVICE LABELS
  outputs: {
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
  },

  // RECOMMENDATION CARD CONTENT
  devices: {
    bicycle: {
      cost: "$300-$1,500",
      considerations: [
        "Wear a helmet, use lights and reflectors, and ride predictably."
      ],
      nextSteps: [
        {
          label: "Learn about bicycles",
          url: "/micromobility-hub/device-library/bicycles.html"
        }
      ]
    },

    ebike: {
      cost: "$1,000-$6,000",
      considerations: [
        "E-bike classes vary in speed and features.",
        "Use UL-certified batteries and safe charging practices."
      ],
      nextSteps: [
        {
          label: "Learn about e-bike types and classes",
          url: "/micromobility-hub/device-library/e-bikes.html"
        }
      ]
    },

    escooter: {
      cost: "$500-$2,000",
      considerations: [
        "Ride where permitted and avoid sidewalks.",
        "Smaller wheels can feel less stable on rough roads."
      ],
      nextSteps: [
        {
          label: "Learn about electric scooters",
          url: "/micromobility-hub/device-library/e-scooters.html"
        }
      ]
    },

    cargoBike: {
      cost: "$1,500-$7,500",
      considerations: [
        "Cargo bikes are larger and heavier than standard bikes.",
        "Practice handling and braking before riding in traffic."
      ],
      nextSteps: [
        {
          label: "Learn about cargo bike types",
          url: "/micromobility-hub/device-library/cargo-bikes.html"
        }
      ]
    },

    bikeshare: {
      cost: "$0-$120 per year depending on membership",
      considerations: [
        "Check whether bikeshare is available near your trip.",
        "Follow local bicycling rules."
      ],
      nextSteps: [
        {
          label: "Learn about bikeshare options",
          url: "/micromobility-hub/device-library/bikeshare.html"
        }
      ]
    },

    adaptiveMobility: {
      cost: "$2,500-$10,000",
      extraLabel: "Suggested device types:",
      extraValue: "Tricycles, Recumbent cycles, Handcycles",
      considerations: [
        "Adaptive devices support different mobility needs.",
        "Some require additional storage space."
      ],
      nextSteps: [
        {
          label: "Learn about adaptive mobility options",
          url: "/micromobility-hub/device-library/adaptive-options.html"
        }
      ]
    },

    humanPoweredYouth: {
      cost: "$50-$500 depending on device type",
      considerations: [
        "Choose a device appropriate for age and confidence.",
        "Start in low-traffic environments and use helmets."
      ],
      nextSteps: [
        {
          label: "Learn about youth mobility options",
          url: "/micromobility-hub/device-library/youth-mobility.html"
        }
      ]
    }
  },

  // QUESTIONS
  questions: {
    pathway: {
      label: "Who are you purchasing for?",
      options: [
        "Myself",
        "A child",
        "Myself or for someone with a disability or mobility need",
        "I’m exploring options"
      ]
    },

    primaryUse: {
      label: "How will the rider mostly use the device?",
      options: [
        "Commuting or errands",
        "Deliveries or gig work",
        "Recreation or exercise"
      ]
    }
  },

  // DYNAMIC LINKS
  dynamicLinks: {
    bikeShop: {
      label: "Find a local bike shop",
      url: "https://nbda.com/dealer-finder-member-directory/#!directory/map/tag=Massachusetts"
    },

    ebikeIncentives: {
      label: "Check current Massachusetts e-bike incentives",
      url: "https://goclean.masscec.com/homeowners/electric-bicycles/"
    },

    bikeshare: {
      label: "Check bikeshare coverage and pricing",
      url: "/micromobility-hub/resources/bikeshare.html"
    },

    srts: {
      label: "See Safe Routes to School resources",
      url: "/micromobility-hub/resources/safe-routes-to-school.html"
    },

    report: {
      label: "Read the Special Commission on Micromobility report",
      url: "/micromobility-hub/resources/commission-report.html"
    }
  }

};