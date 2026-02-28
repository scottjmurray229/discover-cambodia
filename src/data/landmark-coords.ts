// Popular Cambodia POI coordinates for itinerary geocoding.
// Keyed by lowercase normalized name. Covers top attractions at all destinations.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // -- Siem Reap / Angkor --
  'angkor wat': { lat: 13.4125, lng: 103.8670 },
  'angkor thom': { lat: 13.4411, lng: 103.8586 },
  'bayon temple': { lat: 13.4411, lng: 103.8586 },
  'ta prohm': { lat: 13.4346, lng: 103.8889 },
  'banteay srei': { lat: 13.5986, lng: 103.9628 },
  'phnom kulen': { lat: 13.5869, lng: 104.0389 },
  'preah khan': { lat: 13.4612, lng: 103.8691 },
  'siem reap night market': { lat: 13.3536, lng: 103.8560 },
  'pub street siem reap': { lat: 13.3536, lng: 103.8550 },
  'tonle sap lake': { lat: 12.8333, lng: 104.0833 },
  'kompong phluk': { lat: 13.1900, lng: 103.9700 },
  'siem reap airport': { lat: 13.4117, lng: 103.8128 },

  // -- Phnom Penh --
  'royal palace': { lat: 11.5638, lng: 104.9311 },
  'silver pagoda': { lat: 11.5620, lng: 104.9310 },
  'tuol sleng': { lat: 11.5494, lng: 104.9217 },
  's-21': { lat: 11.5494, lng: 104.9217 },
  'killing fields': { lat: 11.4842, lng: 104.9009 },
  'choeung ek': { lat: 11.4842, lng: 104.9009 },
  'central market phnom penh': { lat: 11.5700, lng: 104.9200 },
  'russian market': { lat: 11.5400, lng: 104.9250 },
  'riverside promenade': { lat: 11.5650, lng: 104.9300 },
  'wat phnom': { lat: 11.5761, lng: 104.9228 },
  'national museum phnom penh': { lat: 11.5650, lng: 104.9283 },
  'phnom penh airport': { lat: 11.5466, lng: 104.8441 },
  'independence monument': { lat: 11.5567, lng: 104.9283 },

  // -- Sihanoukville --
  'otres beach': { lat: 10.5880, lng: 103.5300 },
  'ochheuteal beach': { lat: 10.6050, lng: 103.5250 },
  'serendipity beach': { lat: 10.6100, lng: 103.5233 },
  'ream national park': { lat: 10.5000, lng: 103.6500 },

  // -- Koh Rong --
  'long beach koh rong': { lat: 10.7300, lng: 103.2100 },
  'sok san beach': { lat: 10.7300, lng: 103.2100 },
  'koh rong sanloem': { lat: 10.6339, lng: 103.2292 },
  'saracen bay': { lat: 10.6300, lng: 103.2350 },

  // -- Battambang --
  'bamboo train': { lat: 13.0700, lng: 103.2100 },
  'bat cave battambang': { lat: 13.0600, lng: 103.1500 },
  'phare circus': { lat: 13.1050, lng: 103.2000 },
  'battambang colonial quarter': { lat: 13.1023, lng: 103.1986 },

  // -- Kampot --
  'bokor hill station': { lat: 10.6283, lng: 104.0256 },
  'bokor national park': { lat: 10.6283, lng: 104.0256 },
  'kampot pepper farms': { lat: 10.6100, lng: 104.1800 },
  'kampot riverside': { lat: 10.5942, lng: 104.1642 },
  'teuk chhou rapids': { lat: 10.6300, lng: 104.1200 },

  // -- Kep --
  'kep crab market': { lat: 10.4839, lng: 104.3178 },
  'rabbit island': { lat: 10.4839, lng: 104.3178 },
  'koh tonsay': { lat: 10.4839, lng: 104.3178 },
  'kep national park': { lat: 10.4900, lng: 104.3100 },

  // -- Kratie --
  'irrawaddy dolphins kratie': { lat: 12.5300, lng: 106.0300 },
  'koh trong island': { lat: 12.4800, lng: 106.0100 },

  // -- Mondulkiri --
  'elephant valley project': { lat: 12.4500, lng: 107.2000 },
  'bou sra waterfall': { lat: 12.2700, lng: 107.2200 },
  'sen monorom': { lat: 12.4534, lng: 107.1875 },

  // -- Preah Vihear --
  'preah vihear temple': { lat: 14.3920, lng: 104.6808 },

  // -- Tonle Sap --
  'chong kneas': { lat: 13.2800, lng: 103.8500 },
  'kampong khleang': { lat: 13.1300, lng: 104.1500 },
};
