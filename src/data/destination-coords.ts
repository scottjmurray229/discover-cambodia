// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'phnom-penh': { lat: 11.5564, lng: 104.9282, label: 'Phnom Penh' },
  'siem-reap': { lat: 13.3671, lng: 103.8448, label: 'Siem Reap' },
  sihanoukville: { lat: 10.6093, lng: 103.5228, label: 'Sihanoukville' },
  battambang: { lat: 13.1023, lng: 103.1986, label: 'Battambang' },
  kampot: { lat: 10.5942, lng: 104.1642, label: 'Kampot' },
  kep: { lat: 10.4839, lng: 104.3178, label: 'Kep' },
  'koh-rong': { lat: 10.7127, lng: 103.2381, label: 'Koh Rong' },
  kratie: { lat: 12.4880, lng: 106.0189, label: 'Kratie' },
  mondulkiri: { lat: 12.4534, lng: 107.1875, label: 'Mondulkiri' },
  'tonle-sap': { lat: 12.8333, lng: 104.0833, label: 'Tonle Sap' },
};
