// Single source of truth. Edit here; everything on the site reads from this file.
export const business = {
  name: 'Ink Therapy Tattoo Studios',
  legalName: 'Ink Therapy Tattoo Studios LLC',
  category: 'Tattoo and piercing shop',
  street: '155 N Dupont Hwy #2',
  city: 'Dover',
  region: 'DE',
  postalCode: '19901',
  country: 'US',
  phoneDisplay: '302-678-4900',
  phoneTel: '+13026784900',
  email: '', // not supplied - left empty on purpose
  plusCode: '5F8M+VF Dover, Delaware',
  siteUrl: import.meta.env.VITE_SITE_URL || '', // set at deploy time
  // Source: hours printed on the studio's front door. Please re-verify.
  hours: [
    { label: 'Monday – Thursday', text: '11am – 7pm', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '19:00' },
    { label: 'Friday & Saturday', text: '11am – 9pm', days: ['Friday', 'Saturday'], opens: '11:00', closes: '21:00' },
    { label: 'Sunday', text: 'Closed' },
  ],
};
business.mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${business.name} ${business.street} ${business.city} ${business.region} ${business.postalCode}`);

export const services = [
  { title: 'Tattoos', text: 'Custom and personal pieces — from fine-line florals and portraits to bold colour work, lettering and memorial designs.', icon: 'pen' },
  { title: 'Piercing', text: 'Ear piercings with quality jewellery, done in the studio. Ask us what suits your anatomy and style.', icon: 'gem' },
  { title: 'Consultations', text: 'Bring your idea or reference images and talk it through with the team before you book. Call the studio to arrange one.', icon: 'chat' },
];

export const gallery = [
  ['work-01', 'Black-and-grey tattoo of a woman with flowers, butterflies and a mushroom crescent moon on an upper arm'],
  ['work-02', 'Realistic dog portrait tattoo with pink lilies and a memorial date'],
  ['work-04', 'Small memorial tattoo of a praying angel with a name script'],
  ['work-05', 'Script tattoo with hibiscus flowers on a forearm'],
  ['work-06', 'Colourful mermaid and seashell tattoo on a forearm'],
  ['work-07', 'Fine-line butterfly and crescent moon tattoo with initials on a shoulder blade'],
  ['work-08', 'Fine-line floral forearm tattoo with roses, a daisy and a butterfly'],
  ['work-09', '"I See No Evil" eye and clouds tattoo with red lettering'],
  ['work-10', 'Traditional-style tattoo of roses and a horseshoe'],
  ['work-11', 'Autumn leaves and script lettering tattoo on a forearm'],
  ['work-12', 'Colour tattoo of a sunflower and two lilies on a shoulder'],
  ['work-13', 'Colour animated-lion family tattoo with a quote on a calf'],
  ['work-14', 'Black-and-grey roaring lion tattoo with blue eyes on a forearm'],
  ['work-15', 'Compass and tentacle hand tattoo'],
  ['work-17', 'Large colourful phoenix tattoo on an upper arm'],
  ['work-16', 'Pierced ear with two helix studs and three hoop earrings'],
  ['work-03', 'Healed black-and-grey portrait tattoo with flowers, butterflies and mushrooms'],
].map(([file, alt]) => ({ src: `/images/${file}.webp`, alt }));
