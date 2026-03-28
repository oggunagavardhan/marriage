const testImage = (seed) => `https://picsum.photos/seed/${seed}/1600/1100`

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'morning-events', label: 'Wedding Morning Events' },
  { id: 'evening-events', label: 'Wedding Evening Events' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
]

export const highlightPhotos = [
  { id: '1', title: 'Golden Hour Portrait', src: testImage('wedding-1') },
  { id: '2', title: 'Mandap Details', src: testImage('wedding-2') },
  { id: '3', title: 'Joyful Family Frame', src: testImage('wedding-3') },
  { id: '4', title: 'Temple Walk', src: testImage('wedding-4') },
  { id: '5', title: 'Bride Entrance', src: testImage('wedding-5') },
  { id: '6', title: 'Traditional Blessings', src: testImage('wedding-6') },
  { id: '7', title: 'Couple Portrait', src: testImage('wedding-7') },
  { id: '8', title: 'Celebration Lights', src: testImage('wedding-8') },
  { id: '9', title: 'Procession Moment', src: testImage('wedding-9') },
  { id: '10', title: 'Sacred Muhurtham', src: testImage('wedding-10') },
]

export const gallerySections = [
  {
    id: 'engagement',
    title: 'Engagement',
    photos: highlightPhotos.slice(0, 4),
    featuredPhoto: highlightPhotos[0],
    carouselPhotos: highlightPhotos.slice(0, 4),
  },
  {
    id: 'haldi',
    title: 'Haldi',
    photos: highlightPhotos.slice(3, 7),
    featuredPhoto: highlightPhotos[3],
    carouselPhotos: highlightPhotos.slice(3, 7),
  },
]

export const morningEvents = {
  title: 'Wedding Morning Events',
  items: [
    {
      id: 'morning-1',
      title: 'Groom preparation ceremony',
      photos: [highlightPhotos[1], highlightPhotos[2]],
    },
    {
      id: 'morning-2',
      title: 'Walking to Lord Venkateswara Temple',
      photos: [highlightPhotos[3], highlightPhotos[4]],
    },
  ],
}

export const eveningEvents = {
  title: 'Wedding Evening Events',
  items: [
    {
      id: 'evening-1',
      title: "Bride arriving at groom's house",
      photos: [highlightPhotos[4], highlightPhotos[5]],
    },
    {
      id: 'evening-2',
      title: 'Traditional Nalugu ceremony',
      photos: [highlightPhotos[5], highlightPhotos[6]],
    },
    {
      id: 'evening-3',
      title: 'Grand celebration and procession to wedding hall',
      photos: [highlightPhotos[7], highlightPhotos[8]],
    },
    {
      id: 'evening-4',
      title: 'Wedding Muhurtham',
      photos: [highlightPhotos[8], highlightPhotos[9]],
    },
  ],
}

export const location = {
  title: 'Wedding Venue',
  subtitle: 'Lord Venkateswara Temple and Celebration Hall',
  address: 'Add your exact venue address here',
  mapEmbed:
    'https://www.google.com/maps?q=Lord%20Venkateswara%20Temple&output=embed',
}

export const contactDetails = {
  phone1: '+91 90000 00001',
  phone2: '+91 90000 00002',
  email: 'weddingcelebration@example.com',
}
