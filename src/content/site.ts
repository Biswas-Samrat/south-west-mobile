export const SITE = {
  name: "South West Mobile",
  legalName: null as string | null, // [CONFIRM] legal company name
  tagline: "Keeping you mobile",
  catchphrase: "We come to you!",
  positioning: "Mobile mechanic with over 15 years of experience",

  phoneDisplay: "07454 986543",
  phoneTel: "+447454986543",
  whatsappNumber: "447454986543",
  email: "southwestmobile@gmail.com",

  facebookUrl: "https://www.facebook.com/south.west.mobile.2025",
  facebookHandle: "@south.west.mobile.2025",
  messengerUrl: "https://m.me/south.west.mobile.2025",

  locality: "Weston-super-Mare",
  region: "North Somerset",
  country: "GB",
  postcodes: ["BS22", "BS23", "BS24"],
  coverageMiles: 10,
  geo: { lat: 51.346, lng: -2.977 },

  workshopAddress: null as string | null, // [CONFIRM] workshop address
  openingHours: null as string | null, // [CONFIRM] opening hours

  companyNumber: null as string | null, // [CONFIRM] registered company number
  registeredAddress: null as string | null, // [CONFIRM] registered address

  reviewLinks: {
    google: null as string | null, // [CONFIRM]
    yell: null as string | null, // [CONFIRM]
    facebook: null as string | null, // [CONFIRM]
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
} as const;
