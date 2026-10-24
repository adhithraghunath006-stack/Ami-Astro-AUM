import { CelestialEvent } from '@/types/calendar';

/**
 * AMI-ASTRO 2026 Celestial Almanac & Astronomy Calendar
 *
 * All astronomical events, ephemerides, and viewing geometries compiled
 * from authoritative public domain celestial records:
 * - NASA Goddard Space Flight Center (Eclipse Web & Planetary Data)
 * - U.S. Naval Observatory (USNO) Astronomical Applications Department
 * - American Meteor Society (AMS) & International Meteor Organization (IMO)
 * - NASA Jet Propulsion Laboratory (JPL) Horizons System
 *
 * Descriptions, observing tips, and equipment recommendations are independently
 * authored by AMI-ASTRO for educational and observational stargazing purposes.
 */
export const ASTRONOMY_CALENDAR_2026: CelestialEvent[] = [
  // ==========================================
  // JANUARY 2026
  // ==========================================
  {
    id: 'jan-03-full-supermoon',
    title: 'Full Supermoon (Wolf Moon)',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-01-03',
    utcTime: '10:04',
    utcIso: '2026-01-03T10:04:00Z',
    shortDescription:
      'The first full moon of 2026 coincides with near-perigee alignment, making it the first of three supermoons this year.',
    detailedOverview:
      'When the Moon reaches full phase while close to perigee (its closest orbital point to Earth), it is termed a supermoon. In January 2026, the Moon appears approximately 7% larger in diameter and 15% brighter than an average full moon. Known historically in the Northern Hemisphere as the Wolf Moon, its brilliant lunar glare illuminates midwinter landscapes throughout the night.',
    scientificContext:
      'The Moon orbits Earth along an elliptical path with an average eccentricity of 0.0549. Perigee distance drops under 363,000 km, enhancing optical tidal forces and apparent angular diameter to roughly 33.5 arcminutes.',
    viewingTip:
      'Optimal viewing occurs at moonrise and moonset along the horizon, where the psychological "moon illusion" enhances the perception of size against terrestrial landmarks.',
    optimalTime: 'Evening at moonrise or predawn at moonset',
    skyDirection: 'Rises in east-northeast at sunset, transits high across the south',
    equipment: 'Naked Eye or Binoculars',
    equipmentNotes:
      'Use binoculars to examine the illuminated ray systems extending from crater Tycho and Copernicus. A neutral density lunar filter is advised on telescopes to mitigate glare.',
    visibilityRegion: 'Global night hemisphere',
    isSupermoon: true,
    moonInterference: 'High',
    sourceName: 'NASA SkyCal & USNO Astronomical Applications',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html',
  },
  {
    id: 'jan-03-04-quadrantids-meteor-shower',
    title: 'Quadrantids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-01-03',
    endDate: '2026-01-04',
    shortDescription:
      'A sharp, high-intensity annual meteor shower capable of producing up to 40 bright meteors per hour during its narrow peak.',
    detailedOverview:
      'The Quadrantids are famous for an extremely narrow peak window lasting only about six hours. Debris shed by asteroid 2003 EH1 (suspected to be an extinct cometary core) enters Earth’s upper atmosphere at 41 km/s. In 2026, the coinciding full moon poses significant optical background glare, but patient observers can still spot vivid fireballs cutting across the northern sky.',
    scientificContext:
      'Unlike most showers spawned by icy comets, the Quadrantids originate from Apollo asteroid 2003 EH1, closely linked to the 500-year-old comet C/1490 Y1.',
    viewingTip:
      'Face northeast after midnight, shielding your eyes from direct moonlight behind a building or tree canopy to preserve night vision.',
    optimalTime: 'Late night of Jan 3 through pre-dawn Jan 4 (02:00 AM – 05:30 AM local)',
    skyDirection: 'Radiates from northern Boötes, below the handle of Ursa Major (Big Dipper)',
    equipment: 'Naked Eye',
    equipmentNotes:
      'No optical aid required. Wide naked-eye fields of view are essential to catch fast meteor streaks.',
    visibilityRegion: 'Predominantly Northern Hemisphere; mid-northern latitudes favored',
    parentBody: 'Asteroid 2003 EH1',
    radiantConstellation: 'Boötes',
    peakRatePerHour: '~40 meteors/hr',
    moonInterference: 'High',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'jan-10-jupiter-opposition',
    title: 'Jupiter at Opposition',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-01-10',
    shortDescription:
      'The king of planets reaches opposition, making its closest approach to Earth and shining at maximum brilliance all night long.',
    detailedOverview:
      'Opposition occurs when Jupiter, Earth, and the Sun form a straight line in space, with Earth positioned directly between the two. Jupiter rises in the east as the Sun sets in the west and remains visible across the entire night sky. At peak magnitude of -2.7, Jupiter outshines every star in the sky, offering exceptional detail of its atmospheric cloud belts, Great Red Spot, and four Galilean satellites.',
    scientificContext:
      'Jupiter reaches perigee at approximately 4.2 AU (630 million km). The Sun-Earth-Jupiter geometry yields a 100% illuminated planetary disk with negligible phase angle.',
    viewingTip:
      'Watch for the four Galilean moons—Io, Europa, Ganymede, and Callisto—shifting orbital configurations hour by hour. High magnification reveals atmospheric storms.',
    optimalTime: 'Midnight local time when Jupiter reaches its highest meridian altitude',
    skyDirection: 'Rises in east at sunset, reaches southern zenith around midnight',
    equipment: 'Binoculars or Telescope',
    equipmentNotes:
      '7x50 or 10x50 binoculars easily show all four Galilean moons. A 4-inch or larger telescope resolves the North and South Equatorial Belts and the Great Red Spot.',
    visibilityRegion: 'Global',
    magnitude: '-2.7',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons System',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'jan-18-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-01-18',
    utcTime: '19:53',
    utcIso: '2026-01-18T19:53:00Z',
    shortDescription:
      'The Moon passes between the Earth and Sun, creating completely dark skies ideal for deep-sky observational astronomy.',
    detailedOverview:
      'At new moon, the sunlit side of the lunar sphere faces entirely away from Earth. With zero lunar glare polluting the atmosphere, this is the prime weekend for amateur astronomers to target faint deep-sky targets including the Orion Nebula (M42), the Pleiades (M45), and distant spiral galaxies.',
    scientificContext:
      'Solar elongation reaches 0°. The Moon rises and sets concurrently with the Sun, remaining invisible except during solar eclipses.',
    viewingTip:
      'Travel to a Bortle 3 or 4 dark-sky reserve (such as the Sahyadri mountains or rural open fields) with a star chart to hunt faint emission nebulae.',
    optimalTime: 'Throughout the entire astronomical night',
    skyDirection: 'All sectors of the night sky are free of lunar wash',
    equipment: 'Naked Eye, Binoculars or Telescope',
    equipmentNotes:
      'Perfect night for rich-field binoculars and wide-aperture Dobsonian reflectors.',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications Department',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // FEBRUARY 2026
  // ==========================================
  {
    id: 'feb-01-full-snow-moon',
    title: 'Full Snow Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-02-01',
    utcTime: '20:11',
    utcIso: '2026-02-01T20:11:00Z',
    shortDescription:
      'February’s full moon rises in Cancer, casting bright silver light across late-winter night skies.',
    detailedOverview:
      'Historically documented by Native American tribes and early agrarian cultures as the Snow Moon or Hunger Moon due to severe midwinter precipitation, this full moon illuminates the night sky opposite the Sun. In India, it corresponds with Magha Purnima celebrations.',
    scientificContext:
      'The Moon achieves 180° ecliptic opposition from the Sun at 20:11 UTC (which translates to 01:41 AM IST on February 2).',
    viewingTip:
      'Scan the sky roughly 3 degrees to the west of the Moon to locate the Beehive Cluster (M44) using binoculars, though lunar glare will dampen faint stars.',
    optimalTime: 'Sunset to sunrise; highest at local midnight',
    skyDirection: 'East at dusk, overhead at midnight, west at dawn',
    equipment: 'Naked Eye or Binoculars',
    equipmentNotes:
      'Observe crater ray dynamics around Copernicus, Tycho, and Kepler under direct overhead solar illumination.',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'feb-17-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-02-17',
    utcTime: '12:05',
    utcIso: '2026-02-17T12:05:00Z',
    shortDescription:
      'A moonless sky provides immaculate conditions for late-winter astrophotography and stargazing.',
    detailedOverview:
      'With the Moon aligned directly with the Sun, the night sky is cast into natural darkness. Observers can enjoy crisp views of the winter constellations including Taurus, Gemini, Auriga, and Canis Major without stray lunar reflection.',
    scientificContext:
      'The Moon crosses the ecliptic plane near its ascending node, coinciding with the annular solar eclipse occurring along the southern polar regions.',
    viewingTip:
      'Take advantage of dark skies to photograph the Rosette Nebula (NGC 2237) and California Nebula (NGC 1499).',
    optimalTime: 'Nightfall through predawn hours',
    skyDirection: 'All quadrants of the night sky',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'feb-17-annular-solar-eclipse',
    title: 'Annular Solar Eclipse ("Ring of Fire")',
    category: 'eclipse',
    categoryLabel: 'Eclipse',
    startDate: '2026-02-17',
    shortDescription:
      'The Moon passes centered in front of the Sun while near apogee, creating a breathtaking annular ring of light.',
    detailedOverview:
      'During an annular solar eclipse, the Moon is positioned slightly farther from Earth along its orbit, resulting in an apparent angular diameter smaller than that of the Sun. As the Moon moves directly across the solar disc, a bright ring of sunlight—often called the "Ring of Fire"—surrounds the darkened silhouette of the Moon. This specific eclipse corridor is restricted to remote southern latitudes.',
    scientificContext:
      'Greatest eclipse occurs over Antarctica at 12:12 UTC with an annularity duration of 2 minutes and 20 seconds. Eclipse magnitude reaches 0.963.',
    viewingTip:
      'Certified ISO 12312-2 solar eclipse safety glasses or solar filter apertures are mandatory during all phases of an annular eclipse.',
    optimalTime: 'Daytime eclipse track (09:50 – 14:30 UTC)',
    skyDirection: 'High above southern horizon along path of annularity',
    equipment: 'Telescope with Solar Filter or Solar Eclipse Glasses',
    equipmentNotes:
      'Never look at the Sun without approved solar filtration. Binoculars and telescopes require front-mounted Baader solar filters.',
    visibilityRegion:
      'Path of annularity crosses Antarctica; partial eclipse visible across southern tip of Africa and south Indian Ocean.',
    sourceName: 'NASA Goddard Space Flight Center Eclipse Web',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2026Feb17A.GIF',
  },
  {
    id: 'feb-19-mercury-greatest-eastern-elongation',
    title: 'Mercury at Greatest Eastern Elongation (18.1°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-02-19',
    shortDescription:
      'The innermost planet reaches its greatest separation east of the Sun, offering an optimal window for evening viewing.',
    detailedOverview:
      'Mercury is notoriously elusive due to its close orbital proximity to the Sun. At greatest eastern elongation, Mercury reaches an angular separation of 18.1 degrees from the Sun, hanging above the western horizon as twilight deepens. This evening apparition provides one of the best opportunities of early 2026 to spot the solar system’s fastest-orbiting world.',
    scientificContext:
      'Because Mercury orbits interior to Earth, it exhibits phases similar to the Moon. Through a telescope at greatest elongation, Mercury appears approximately half-illuminated (dichotomy phase).',
    viewingTip:
      'Find an unobstructed western horizon free of trees and tall buildings. Begin scanning with binoculars approximately 30 to 45 minutes after sunset.',
    optimalTime: 'Evening twilight, 35–60 minutes after local sunset',
    skyDirection: 'Low above the west-southwestern horizon',
    equipment: 'Naked Eye or Binoculars',
    equipmentNotes:
      'A small telescope (70mm+) reveals Mercury’s tiny 7 arcsecond crescent-to-half disk.',
    visibilityRegion: 'Global (both hemispheres)',
    magnitude: '-0.4',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },

  // ==========================================
  // MARCH 2026
  // ==========================================
  {
    id: 'mar-03-full-worm-moon',
    title: 'Full Worm Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-03-03',
    utcTime: '11:39',
    utcIso: '2026-03-03T11:39:00Z',
    shortDescription:
      'The traditional late-winter full moon arrives, coinciding with a stunning total lunar eclipse.',
    detailedOverview:
      'The March full moon, historically known as the Worm Moon or Sap Moon, heralds the gradual thawing of soils and emergence of early spring vitality in temperate northern zones. In 2026, this full moon delivers a dual astronomical spectacle as it slips completely into Earth’s umbral shadow.',
    scientificContext:
      'Ecliptic opposition occurs precisely at 11:39 UTC. This marks the first total lunar eclipse of the year.',
    viewingTip:
      'Watch the moonrise carefully as the Moon steps through Earth’s atmospheric boundary, taking on rich amber hues.',
    optimalTime: 'Evening and night hours around eclipse timing',
    skyDirection: 'East at sunset, transiting across the southern meridian',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global night hemisphere',
    moonInterference: 'High (except during totality)',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'mar-03-total-lunar-eclipse',
    title: 'Total Lunar Eclipse ("Blood Moon")',
    category: 'eclipse',
    categoryLabel: 'Eclipse',
    startDate: '2026-03-03',
    shortDescription:
      'The full moon is fully submerged in Earth’s dark shadow, glowing with a deep copper-crimson hue.',
    detailedOverview:
      'During totality, the Earth completely blocks direct sunlight from striking the lunar surface. The only light reaching the Moon is refracted through Earth’s atmosphere—the combined glow of all the sunrises and sunsets happening around our planet simultaneously. Shorter blue wavelengths scatter away into space, while longer red and orange wavelengths bend into the umbra, painting the Moon a dramatic crimson.',
    scientificContext:
      'Totality lasts approximately 58 minutes. Umbral magnitude is 1.150, with the center of the Moon passing through the southern half of Earth’s umbra.',
    viewingTip:
      'Unlike solar eclipses, lunar eclipses are 100% safe to observe with the naked eye, binoculars, or telescopes without any special filters.',
    optimalTime: 'Totality phase (11:04 UTC – 12:02 UTC)',
    skyDirection: 'High in the sky across western North America, Pacific, and Oceania; setting in East Asia',
    equipment: 'Naked Eye, Binoculars or Telescope',
    equipmentNotes:
      'Binoculars reveal delicate variations in umbral darkness, from deep blood-red at the core to turquoise shading along the outer penumbral boundary.',
    visibilityRegion:
      'Visible across North America, Pacific Basin, Australia, New Zealand, and Eastern Asia.',
    sourceName: 'NASA Goddard Space Flight Center Eclipse Web',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/LEplot/LEplot2001/LE2026Mar03T.pdf',
  },
  {
    id: 'mar-19-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-03-19',
    utcTime: '01:26',
    utcIso: '2026-03-19T01:26:00Z',
    shortDescription:
      'Pitch-black skies return, offering ideal conditions for the annual Messier Marathon observing challenge.',
    detailedOverview:
      'Mid-March new moons are historically treasured by observational astronomers because the geometric arrangement of the night sky allows observers to attempt the famous "Messier Marathon"—spotting up to 110 galaxies, nebulae, and clusters in a single dusk-to-dawn observing run.',
    scientificContext:
      'The Moon passes conjunction with the Sun at 01:26 UTC. No ambient moonlight affects sky brightness.',
    viewingTip:
      'Head out to a dark rural observing site with a wide-field telescope and star atlas to tackle the Virgo Cluster of galaxies.',
    optimalTime: 'Entire dark window from end of evening twilight to start of morning twilight',
    skyDirection: 'East through west',
    equipment: 'Telescope or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'mar-20-march-vernal-equinox',
    title: 'March Equinox (Vernal Equinox)',
    category: 'solstice-equinox',
    categoryLabel: 'Solstice & Equinox',
    startDate: '2026-03-20',
    utcTime: '14:45',
    utcIso: '2026-03-20T14:45:00Z',
    shortDescription:
      'The astronomical turning point where the Sun shines directly over Earth’s equator, providing equal day and night.',
    detailedOverview:
      'The March equinox marks the exact moment the Sun crosses the celestial equator from south to north. At this instant, Earth’s axial tilt is perpendicular to the solar rays, resulting in roughly equal 12-hour spans of daylight and darkness worldwide. It signals the astronomical arrival of spring in the Northern Hemisphere and autumn in the Southern Hemisphere.',
    scientificContext:
      'Subsolar point is positioned at 0° latitude, 0° declination. The Sun rises due east and sets due west for all observers on Earth.',
    viewingTip:
      'Observe the sunset alignment along strict east-west gridlines in your city to witness the true cardinal solar direction.',
    optimalTime: 'Exact astronomical crossing at 14:45 UTC (20:15 IST)',
    skyDirection: 'Sun transits directly above Earth’s geographic equator',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global celestial milestone',
    sourceName: 'US Naval Observatory (USNO)',
    sourceUrl: 'https://aa.usno.navy.mil/data/EarthSeasons',
  },

  // ==========================================
  // APRIL 2026
  // ==========================================
  {
    id: 'apr-02-full-pink-moon',
    title: 'Full Pink Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-04-02',
    utcTime: '02:13',
    utcIso: '2026-04-02T02:13:00Z',
    shortDescription:
      'April’s full moon illuminates the blossoming spring landscape, accompanied by bright constellation Spica.',
    detailedOverview:
      'The Pink Moon does not actually appear pink in color; its traditional name originates from early blooming moss pink (wild ground phlox) in North America. In India, this full moon often coincides with Hanuman Jayanti and Chaitra Purnima. It shines near the brilliant blue-white star Spica in Virgo.',
    scientificContext:
      'Full phase geometry achieved at 02:13 UTC. Lunar disc reaches 100% illumination at an earth distance of approximately 376,000 km.',
    viewingTip:
      'Look for the bright star Spica sitting roughly 4 to 6 degrees away from the glowing lunar disk.',
    optimalTime: 'Sunset through sunrise',
    skyDirection: 'Rises in east-southeast, sets in west-southwest',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'apr-03-mercury-greatest-western-elongation',
    title: 'Mercury at Greatest Western Elongation (27.8°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-04-03',
    shortDescription:
      'Mercury reaches its greatest angular distance west of the Sun, presenting an exceptional predawn viewing chance.',
    detailedOverview:
      'At an expansive 27.8-degree elongation, Mercury stands high above the eastern horizon before sunrise. This is one of Mercury’s widest apparitions of 2026, giving early risers plenty of time to catch the speedy messenger planet before dawn light washes out the sky.',
    scientificContext:
      'Due to the high orbital eccentricity of Mercury (0.2056), elongations near aphelion reach maximum angular separation from the Sun, up to nearly 28 degrees.',
    viewingTip:
      'Look toward the eastern horizon roughly 45 to 60 minutes before local sunrise. A pair of binoculars will help pick it out from the predawn glow.',
    optimalTime: 'Predawn twilight, 45 minutes before sunrise',
    skyDirection: 'Low above the eastern horizon',
    equipment: 'Naked Eye or Binoculars',
    magnitude: '+0.2',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'apr-17-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-04-17',
    utcTime: '11:54',
    utcIso: '2026-04-17T11:54:00Z',
    shortDescription:
      'The night sky turns pitch-black, providing prime conditions for spring galaxy clusters and open clusters.',
    detailedOverview:
      'With the Moon positioned between the Sun and Earth, dark skies prevail all night. Observers can target the Sombrero Galaxy (M104), the Leo Triplet (M65/M66/NGC 3628), and the great Hercules Globular Cluster (M13) without optical interference.',
    scientificContext:
      'New Moon occurs at 11:54 UTC. Optimal window for wide-field astrophotography runs across the surrounding three nights.',
    viewingTip:
      'Set up telescopes away from urban light domes to maximize contrast on low surface-brightness galactic arms.',
    optimalTime: 'From 20:30 local until morning twilight',
    skyDirection: 'Direct overhead zenith features Coma Berenices and Ursa Major',
    equipment: 'Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'apr-22-23-lyrids-meteor-shower',
    title: 'Lyrids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-04-22',
    endDate: '2026-04-23',
    shortDescription:
      'One of humanity’s oldest recorded meteor showers, producing swift trails and occasional bright fireballs.',
    detailedOverview:
      'The Lyrids have been observed for more than 2,700 years, with historical Chinese records dating back to 687 BCE. Debris originating from long-period comet C/1861 G1 (Thatcher) impacts the atmosphere at 49 km/s. In 2026, the waxing crescent moon sets early, providing dark skies after midnight for prime viewing.',
    scientificContext:
      'Comet Thatcher has an orbital period of roughly 415 years. The debris stream is relatively narrow, producing a distinct peak around April 22-23.',
    viewingTip:
      'Look toward the bright star Vega in Lyra. Lie flat on a reclining camp chair with a clear 360-degree view of the open sky.',
    optimalTime: 'Midnight to dawn on April 23 (after moonset)',
    skyDirection: 'Radiant lies near Vega in constellation Lyra, rising in the northeast',
    equipment: 'Naked Eye',
    equipmentNotes:
      'Telescopes and binoculars narrow the field of view too drastically; use naked eyes to scan wide sky areas.',
    visibilityRegion: 'Northern Hemisphere favored; also visible from mid-southern latitudes',
    parentBody: 'Comet C/1861 G1 (Thatcher)',
    radiantConstellation: 'Lyra',
    peakRatePerHour: '~18–20 meteors/hr',
    moonInterference: 'Low (moon sets before midnight)',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },

  // ==========================================
  // MAY 2026
  // ==========================================
  {
    id: 'may-01-full-flower-moon',
    title: 'Full Flower Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-05-01',
    utcTime: '17:24',
    utcIso: '2026-05-01T17:24:00Z',
    shortDescription:
      'The radiant Flower Moon rises in Libra, marking the height of Northern Hemisphere spring.',
    detailedOverview:
      'May’s full moon is traditionally celebrated as the Flower Moon due to the profusion of springtime blossoms across temperate landscapes. In Buddhist traditions, this full moon marks Buddha Purnima (Vesak), celebrating the birth, enlightenment, and passing of Gautama Buddha.',
    scientificContext:
      'The Moon reaches full phase at 17:24 UTC (22:54 IST on May 1). Distance to Earth is approximately 382,000 km.',
    viewingTip:
      'Capture dusk astrophotographs as the Moon rises against architectural silhouettes right at golden hour.',
    optimalTime: 'Evening at moonrise',
    skyDirection: 'East-southeast horizon',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'may-06-07-eta-aquarids-meteor-shower',
    title: 'Eta Aquarids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-05-06',
    endDate: '2026-05-07',
    shortDescription:
      'Fast, energetic meteors produced by dusty particles shed from legendary Comet 1P/Halley.',
    detailedOverview:
      'The Eta Aquarids are renowned for their high speed—slamming into the upper atmosphere at 66 km/s—frequently leaving glowing persistent trains lasting several seconds. The shower is especially favorable for observers in the tropics and Southern Hemisphere, where rates can hit 50 meteors per hour. Northern observers typically see 20 to 30 meteors per hour.',
    scientificContext:
      'Earth crosses the inbound orbital path of Comet Halley in early May, encountering fine dust grain streams shed over millennia.',
    viewingTip:
      'The radiant in Aquarius rises only a few hours before dawn. The best observing window is between 03:00 AM and morning nautical twilight.',
    optimalTime: 'Predawn hours (03:00 AM – 05:00 AM local time)',
    skyDirection: 'Radiates from Aquarius in the east-southeast',
    equipment: 'Naked Eye',
    visibilityRegion: 'Tropics and Southern Hemisphere favored; visible worldwide',
    parentBody: 'Comet 1P/Halley',
    radiantConstellation: 'Aquarius',
    peakRatePerHour: '~40–50 meteors/hr (tropics/south), ~25/hr (north)',
    moonInterference: 'Moderate',
    sourceName: 'International Meteor Organization (IMO)',
    sourceUrl: 'https://www.imo.net/resources/calendar/',
  },
  {
    id: 'may-16-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-05-16',
    utcTime: '20:03',
    utcIso: '2026-05-16T20:03:00Z',
    shortDescription:
      'Unimpeded dark skies provide an exceptional platform for early summer Milky Way core observation.',
    detailedOverview:
      'At new moon, the galactic core of the Milky Way arches across the midnight sky through Scorpius and Sagittarius. Star clusters such as Ptolemy’s Cluster (M7) and the Lagoon Nebula (M8) shine with pristine contrast against velvet-black skies.',
    scientificContext:
      'Conjunction occurs at 20:03 UTC. Tidal forces produce moderate spring tides.',
    viewingTip:
      'Head to high elevations or coastlines facing south to take in the Milky Way galactic bulge stretching overhead.',
    optimalTime: 'Late night through predawn hours',
    skyDirection: 'South-southeast across Sagittarius and Scorpius',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'may-31-full-blue-moon',
    title: 'Full Moon & Calendar Blue Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-05-31',
    utcTime: '08:46',
    utcIso: '2026-05-31T08:46:00Z',
    shortDescription:
      'A rare calendar Blue Moon: the second full moon to occur within the single calendar month of May 2026.',
    detailedOverview:
      'Because the lunar synodic month is roughly 29.53 days, calendar months with 31 days occasionally host two full moons. The second full moon in such a month is colloquially called a "Blue Moon." This phenomenon occurs roughly once every 2.7 years, inspiring the famous English idiom "once in a blue moon."',
    scientificContext:
      'Full moon phase is reached at 08:46 UTC (14:16 IST). The physical appearance of the Moon is identical to standard full phases, retaining its brilliant silvery-white hue.',
    viewingTip:
      'Observe the moonrise on the evening of May 31. Notice the sharp detail on the limb craters despite direct illumination.',
    optimalTime: 'Evening at moonrise and throughout the night',
    skyDirection: 'East-southeast at dusk',
    equipment: 'Naked Eye or Binoculars',
    isBlueMoon: true,
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // JUNE 2026
  // ==========================================
  {
    id: 'jun-15-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-06-15',
    utcTime: '02:56',
    utcIso: '2026-06-15T02:56:00Z',
    shortDescription:
      'Moonless night skies create prime conditions for hunting summer nebulae and observing planetary elongations.',
    detailedOverview:
      'Mid-June brings shortest nights in the northern hemisphere, but this new moon ensures that every available dark hour is free from lunar wash. Great targets include the Ring Nebula (M57) and the Dumbbell Nebula (M27).',
    scientificContext:
      'The Moon passes solar conjunction at 02:56 UTC, perfectly complementing Mercury’s greatest eastern elongation occurring on the same day.',
    viewingTip:
      'Start observing right at nautical dusk to catch Mercury in the west, then pivot toward the Cygnus Rift as true darkness sets in.',
    optimalTime: 'Evening twilight through midnight',
    skyDirection: 'Western horizon early, overhead zenith later',
    equipment: 'Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'jun-15-mercury-greatest-eastern-elongation',
    title: 'Mercury at Greatest Eastern Elongation (24.5°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-06-15',
    shortDescription:
      'Mercury reaches 24.5 degrees east of the Sun, presenting a sharp evening apparition low in the west-northwest.',
    detailedOverview:
      'At 24.5 degrees separation, Mercury shines brightly in the western evening twilight. Because this coincides with the new moon, observers will not have to battle lunar glare while identifying the fleet planet amidst sunset colors.',
    scientificContext:
      'Mercury shines at magnitude +0.4 and exhibits an apparent diameter of 8.1 arcseconds, showing a 38% illuminated crescent through telescopes.',
    viewingTip:
      'Scan the west-northwest horizon 40 minutes after sunset. Use binoculars to pinpoint Mercury before the sky darkens completely.',
    optimalTime: '40–70 minutes after sunset',
    skyDirection: 'Low above the west-northwest horizon',
    equipment: 'Naked Eye or Binoculars',
    magnitude: '+0.4',
    moonInterference: 'None',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'jun-21-june-solstice',
    title: 'June Solstice (Summer Solstice)',
    category: 'solstice-equinox',
    categoryLabel: 'Solstice & Equinox',
    startDate: '2026-06-21',
    utcTime: '08:25',
    utcIso: '2026-06-21T08:25:00Z',
    shortDescription:
      'Earth’s northern axis reaches maximum tilt toward the Sun, marking the longest day of the year in the Northern Hemisphere.',
    detailedOverview:
      'The June solstice occurs when the Sun reaches its northernmost position in the sky, positioned directly overhead at the Tropic of Cancer (23.44° N latitude). In the Northern Hemisphere, this day features the longest period of daylight and the shortest night of the year, marking the official astronomical beginning of summer.',
    scientificContext:
      'Solar declination peaks at +23°26\'. North of the Arctic Circle, the Sun remains above the horizon for a full 24 hours (Midnight Sun).',
    viewingTip:
      'Track the path of your midday shadow: at local solar noon on the solstice, your shadow reaches its shortest length of the entire year.',
    optimalTime: 'Exact astronomical solstice occurs at 08:25 UTC (13:55 IST)',
    skyDirection: 'Sun reaches highest northern midday zenith of the year',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global astronomical milestone',
    sourceName: 'US Naval Observatory (USNO)',
    sourceUrl: 'https://aa.usno.navy.mil/data/EarthSeasons',
  },
  {
    id: 'jun-29-full-strawberry-moon',
    title: 'Full Strawberry Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-06-29',
    utcTime: '23:58',
    utcIso: '2026-06-29T23:58:00Z',
    shortDescription:
      'The first full moon of astronomical summer hangs low across the southern sky, glowing with an amber hue.',
    detailedOverview:
      'Named by Native American Algonquin tribes to coincide with the peak harvesting season of wild strawberries, the June full moon stays exceptionally low across the horizon for northern hemisphere observers. Because light must traverse a greater thickness of Earth’s atmosphere, the Strawberry Moon frequently takes on a warm golden-amber or reddish cast.',
    scientificContext:
      'Full moon phase aligns at 23:58 UTC (05:28 AM IST on June 30). Located near the celestial equator in Sagittarius.',
    viewingTip:
      'Enjoy the atmospheric reddening at moonrise and moonset. Notice how the Moon traces a low arc across the southern sky all night.',
    optimalTime: 'Sunset through sunrise',
    skyDirection: 'Low southern sky trajectory',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // JULY 2026
  // ==========================================
  {
    id: 'jul-14-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-07-14',
    utcTime: '09:45',
    utcIso: '2026-07-14T09:45:00Z',
    shortDescription:
      'Optimal dark-sky weekend for observing the majestic Sagittarius and Scorpius star clouds.',
    detailedOverview:
      'With zero moonlight interfering, mid-July provides peerless opportunities to sweep binoculars along the summer Milky Way. From the Eagle Nebula (M16) with its Pillars of Creation to the Trifid Nebula (M20), the dense star clouds of our galaxy take center stage.',
    scientificContext:
      'The Moon passes solar conjunction at 09:45 UTC. Earth is near aphelion (farthest from Sun), moderating solar gravitational gradient.',
    viewingTip:
      'Under Bortle 2 or 3 skies, look for the dark dust lanes of the Great Rift bisecting the Milky Way from Cygnus down to Sagittarius.',
    optimalTime: '21:30 local to 03:30 local',
    skyDirection: 'South to overhead zenith',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'jul-28-29-delta-aquarids-meteor-shower',
    title: 'Delta Aquarids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-07-28',
    endDate: '2026-07-29',
    shortDescription:
      'Steady midsummer meteor shower radiating from Aquarius, producing about 15-20 meteors per hour.',
    detailedOverview:
      'The Delta Aquarids provide a reliable preamble to August’s Perseids. Originating from the complex debris stream of sungrazing comets Marsden and Kracht, these medium-speed meteors strike the atmosphere at 41 km/s. In 2026, the full moon peaks nearby, meaning moonlight will wash out faint meteors, but brighter meteors will remain visible.',
    scientificContext:
      'The radiant centers near the star Skat (Delta Aquarii). Southern hemisphere and tropical observers enjoy the radiant at high altitude.',
    viewingTip:
      'Orient your gaze roughly 45 degrees away from the radiant toward a dark patch of sky away from the Moon.',
    optimalTime: '01:00 AM to 04:30 AM local time',
    skyDirection: 'Radiates from Aquarius in the southern sky',
    equipment: 'Naked Eye',
    visibilityRegion: 'Southern Hemisphere and tropics favored; visible globally',
    parentBody: 'Comets Marsden and Kracht complex',
    radiantConstellation: 'Aquarius',
    peakRatePerHour: '~15–20 meteors/hr',
    moonInterference: 'High',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'jul-29-full-buck-moon',
    title: 'Full Buck Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-07-29',
    utcTime: '14:37',
    utcIso: '2026-07-29T14:37:00Z',
    shortDescription:
      'July’s full moon rises in Capricornus, historically marking the emergence of new velvet antlers on male deer.',
    detailedOverview:
      'Also known in folklore as the Thunder Moon due to frequent midsummer storms, the Buck Moon dominates late-July night skies. In India, this full moon corresponds with Guru Purnima, a solemn festival honoring spiritual mentors and teachers.',
    scientificContext:
      'The Moon reaches full phase at 14:37 UTC (20:07 IST on July 29). Distance is approximately 389,000 km.',
    viewingTip:
      'Observe the dark lunar maria (basaltic plains) including Sea of Tranquility and Ocean of Storms contrasting with the bright highlands.',
    optimalTime: 'Evening at moonrise',
    skyDirection: 'East-southeast at dusk',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // AUGUST 2026
  // ==========================================
  {
    id: 'aug-02-mercury-greatest-western-elongation',
    title: 'Mercury at Greatest Western Elongation (19.5°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-08-02',
    shortDescription:
      'Mercury climbs into the predawn eastern sky, reaching 19.5 degrees separation from the Sun.',
    detailedOverview:
      'Early risers in early August can spot Mercury shining with a sharp golden point of light above the eastern horizon roughly an hour before sunrise. It offers a clean, stable target for morning planetary observers.',
    scientificContext:
      'Mercury shines at magnitude -0.1 and exhibits a 7.2 arcsecond diameter with a 45% illuminated disk.',
    viewingTip:
      'Locate a site with an unobstructed view toward the east-northeast horizon about 45 minutes before local sunrise.',
    optimalTime: '45–60 minutes before sunrise',
    skyDirection: 'Low above the eastern horizon',
    equipment: 'Naked Eye or Binoculars',
    magnitude: '-0.1',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'aug-12-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-08-12',
    utcTime: '17:37',
    utcIso: '2026-08-12T17:37:00Z',
    shortDescription:
      'A momentous new moon: produces the Great Total Solar Eclipse and sets the stage for an immaculate Perseids display!',
    detailedOverview:
      'The August 12 new moon is one of the most significant astronomical dates of the decade. By passing precisely between the Sun and Earth, it casts the Moon’s umbral shadow across the Northern Hemisphere for a Total Solar Eclipse, and leaves the night completely moonless for the Perseids peak.',
    scientificContext:
      'Nodes align with solar syzygy at 17:37 UTC, triggering totality along the European and Arctic eclipse corridor.',
    viewingTip:
      'Prepare for an all-night stargazing session following the daytime eclipse; night conditions will be pitch-black.',
    optimalTime: 'All night',
    skyDirection: 'Entire night sky',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'aug-12-total-solar-eclipse',
    title: 'Total Solar Eclipse (The Great European Eclipse)',
    category: 'eclipse',
    categoryLabel: 'Eclipse',
    startDate: '2026-08-12',
    shortDescription:
      'A spectacular total solar eclipse sweeps across Greenland, western Iceland, and northern Spain at sunset.',
    detailedOverview:
      'The Moon completely blocks the dazzling solar photosphere, unveiling the Sun’s ethereal, pearly-white outer atmosphere—the solar corona—and dramatic pink chromospheric prominences. The narrow path of totality races from northern Russia across the Arctic Ocean, Greenland, Iceland, and crosses mainland Spain before concluding in the Mediterranean Sea at sunset.',
    scientificContext:
      'Greatest eclipse occurs near the coast of Iceland with a totality duration of 2 minutes and 18 seconds. Umbral magnitude is 1.039. First total solar eclipse over mainland Europe since 1999.',
    viewingTip:
      'Totality allows naked-eye viewing of the solar corona, but ALL partial phases require certified ISO 12312-2 solar filters or projection techniques.',
    optimalTime: 'Totality corridor timing: ~17:15 – 18:30 UTC',
    skyDirection: 'Path begins high in Arctic, descending toward western horizon at sunset in Spain',
    equipment: 'Solar Filter / Eclipse Glasses (Naked eye strictly during totality)',
    equipmentNotes:
      'Equip telephoto lenses and telescopes with certified front-aperture solar filters. Remove filters only during the brief seconds of total darkness.',
    visibilityRegion:
      'Totality: Arctic, Greenland, western Iceland, northern/central Spain. Partial eclipse: broad areas of Europe, North Africa, and North America.',
    sourceName: 'NASA Goddard Space Flight Center Eclipse Web',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/SEplot/SEplot2001/SE2026Aug12T.GIF',
  },
  {
    id: 'aug-12-13-perseids-meteor-shower',
    title: 'Perseids Meteor Shower Peak (Pristine Year!)',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-08-12',
    endDate: '2026-08-13',
    shortDescription:
      'The crown jewel of summer meteor showers peaks under pitch-black moonless skies, producing 60–100 meteors per hour!',
    detailedOverview:
      '2026 provides ideal observing geometry for the Perseids: the peak coincides almost exactly with the new moon on August 12! Produced by debris from comet 109P/Swift-Tuttle entering Earth’s atmosphere at 59 km/s, the Perseids are celebrated for their high rates, intense speed, and luminous fireball trails.',
    scientificContext:
      'Comet 109P/Swift-Tuttle has an orbital period of roughly 133 years. Earth crosses the densest strand of its stream annually in mid-August.',
    viewingTip:
      'Find a Bortle 1–3 dark sky away from city lighting. Allow 30 minutes for your eyes to fully dark-adapt. Lie down on a mat and take in as much open sky as possible.',
    optimalTime: 'Midnight through 04:30 AM local time on August 13',
    skyDirection: 'Radiates from constellation Perseus in the northeast, but meteors streak across the entire sky',
    equipment: 'Naked Eye',
    equipmentNotes:
      'Zero optical aid required. Wide naked-eye vision captures the highest meteor counts.',
    visibilityRegion: 'Northern Hemisphere favored; also visible to mid-southern latitudes',
    parentBody: 'Comet 109P/Swift-Tuttle',
    radiantConstellation: 'Perseus',
    peakRatePerHour: '~60–100 meteors/hr',
    moonInterference: 'None (Coincides with New Moon!)',
    sourceName: 'American Meteor Society (AMS) & NASA Meteoroid Environment Office',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'aug-15-venus-greatest-eastern-elongation',
    title: 'Venus at Greatest Eastern Elongation (45.9°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-08-15',
    shortDescription:
      'The dazzling "Evening Star" reaches 45.9 degrees from the Sun, blazing high in the western dusk at peak prominence.',
    detailedOverview:
      'Venus attains its widest angular separation east of the Sun in mid-August 2026. Shining at a brilliant magnitude of -4.4, Venus dominates the post-sunset western horizon and remains visible for hours into the evening.',
    scientificContext:
      'Through a telescope, Venus displays a distinct half-phase (dichotomy) with 50% illumination, spanning an angular diameter of roughly 24 arcseconds.',
    viewingTip:
      'Look west 20 minutes after sunset. Venus is easily visible with the naked eye even in bright urban twilight.',
    optimalTime: 'Post-sunset twilight, 30–120 minutes after sunset',
    skyDirection: 'Prominent in the western evening sky',
    equipment: 'Naked Eye, Binoculars or Telescope',
    equipmentNotes:
      'A small telescope reveals the clean half-moon phase of Venus. Use a polarizing or neutral density filter to reduce glare.',
    visibilityRegion: 'Global',
    magnitude: '-4.4',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'aug-28-full-sturgeon-moon',
    title: 'Full Sturgeon Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-08-28',
    utcTime: '04:19',
    utcIso: '2026-08-28T04:19:00Z',
    shortDescription:
      'Late-August full moon brings crisp night illumination and a partial lunar eclipse.',
    detailedOverview:
      'Historically named by North American fishing tribes after the giant lake sturgeons caught during late summer, this full moon sets the stage for 2026’s second lunar eclipse as part of its orbital traversal.',
    scientificContext:
      'Full moon alignment occurs at 04:19 UTC (09:49 IST on August 28). Located in Aquarius.',
    viewingTip:
      'Notice the stark brightness contrast between the highlands and the dark basaltic plains of Mare Serenitatis and Mare Crisium.',
    optimalTime: 'Sunset through sunrise',
    skyDirection: 'Rises in east-southeast',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'aug-28-partial-lunar-eclipse',
    title: 'Partial Lunar Eclipse',
    category: 'eclipse',
    categoryLabel: 'Eclipse',
    startDate: '2026-08-28',
    shortDescription:
      'Earth’s dark umbral shadow bites noticeably into the southern limb of the Full Moon.',
    detailedOverview:
      'During this partial lunar eclipse, the Moon dips partially into Earth’s inner umbral shadow cone. Observers across the Americas, Atlantic Ocean, Europe, and parts of western Africa will witness a dramatic curved shadow darkening the southern edge of the Moon.',
    scientificContext:
      'Umbral magnitude reaches approximately 0.930, nearly covering the entire southern hemisphere of the lunar disk at peak immersion (04:13 UTC).',
    viewingTip:
      'Observe without filters. Binoculars reveal the subtle gradient between the deep charcoal umbra and the subtle penumbral shading.',
    optimalTime: 'Peak eclipse occurs around 04:13 UTC',
    skyDirection: 'Setting in west for Europe/Africa; high in sky for Americas',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion:
      'Visible throughout North America, South America, Atlantic Ocean, Europe, and western Africa.',
    sourceName: 'NASA Goddard Space Flight Center Eclipse Web',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/LEplot/LEplot2001/LE2026Aug28P.pdf',
  },

  // ==========================================
  // SEPTEMBER 2026
  // ==========================================
  {
    id: 'sep-11-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-09-11',
    utcTime: '03:27',
    utcIso: '2026-09-11T03:27:00Z',
    shortDescription:
      'Velvet-dark skies open prime conditions for early-autumn deep sky astronomy.',
    detailedOverview:
      'Early September brings clear post-monsoon nights across the Indian subcontinent and crisp autumn skies in temperate regions. The Andromeda Galaxy (M31) and Triangulum Galaxy (M33) stand in prime overhead viewing orientation.',
    scientificContext:
      'Conjunction occurs at 03:27 UTC. Absolute minimal ambient sky luminance.',
    viewingTip:
      'Use 10x50 binoculars to find the fuzzy oval nucleus of the Andromeda Galaxy (M31) 2.5 million light-years away.',
    optimalTime: 'Late evening through predawn',
    skyDirection: 'Northeast through southeast',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'sep-23-september-autumnal-equinox',
    title: 'September Equinox (Autumnal Equinox)',
    category: 'solstice-equinox',
    categoryLabel: 'Solstice & Equinox',
    startDate: '2026-09-23',
    utcTime: '00:06',
    utcIso: '2026-09-23T00:06:00Z',
    shortDescription:
      'The Sun crosses the celestial equator southward, bringing equal day and night across the planet.',
    detailedOverview:
      'The September equinox marks the astronomical beginning of autumn in the Northern Hemisphere and spring in the Southern Hemisphere. Earth’s rotational axis tilts neither toward nor away from the Sun, yielding approximately 12 hours of sunlight and 12 hours of darkness for every latitude.',
    scientificContext:
      'Occurs at 00:06 UTC on September 23 (05:36 AM IST). Solar declination crosses 0° south.',
    viewingTip:
      'Witness the exact cardinal sunrise due east and sunset due west.',
    optimalTime: 'Sunrise and sunset',
    skyDirection: 'Exact east-west horizon alignments',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global astronomical milestone',
    sourceName: 'US Naval Observatory (USNO)',
    sourceUrl: 'https://aa.usno.navy.mil/data/EarthSeasons',
  },
  {
    id: 'sep-25-neptune-opposition',
    title: 'Neptune at Opposition',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-09-25',
    shortDescription:
      'The solar system’s outermost ice giant reaches opposition, positioned closest to Earth and visible all night.',
    detailedOverview:
      'Neptune sits opposite the Sun in the constellation Pisces. At magnitude +7.8, Neptune is too faint for the naked eye but can be easily spotted using binoculars or a small telescope. In larger telescopes, Neptune reveals a distinct, pale-blue circular disk.',
    scientificContext:
      'Neptune is positioned roughly 29 AU (4.3 billion km) from Earth. Light from Neptune takes approximately 4 hours to reach our telescopes.',
    viewingTip:
      'Use a detailed star chart of Pisces. Unlike surrounding pinpoint stars, a telescope operating at 150x magnification will resolve Neptune as a tiny non-twinkling azure disk.',
    optimalTime: 'Midnight local time when Neptune reaches highest southern altitude',
    skyDirection: 'Transits high across the south in constellation Pisces',
    equipment: 'Binoculars or Telescope',
    equipmentNotes:
      'Binoculars identify Neptune as a faint star-like point; a 6-inch or larger telescope resolves the 2.3 arcsecond blue disk and its large moon Triton.',
    visibilityRegion: 'Global',
    magnitude: '+7.8',
    moonInterference: 'Low to Moderate',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'sep-26-full-harvest-moon',
    title: 'Full Harvest Moon (Corn Moon)',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-09-26',
    utcTime: '16:50',
    utcIso: '2026-09-26T16:50:00Z',
    shortDescription:
      'The famous Harvest Moon rises shortly after sunset for several consecutive nights, providing bright evening light.',
    detailedOverview:
      'By definition, the Harvest Moon is the full moon occurring closest to the September autumnal equinox. Because the ecliptic makes a shallow angle with the eastern horizon in autumn, the Moon rises only 20 to 30 minutes later each night (compared to the usual 50-minute delay), providing farmers historically with valuable twilight illumination to harvest crops.',
    scientificContext:
      'Opposition occurs at 16:50 UTC (22:20 IST on September 26). The shallow ecliptic geometry produces rapid succession of bright moonrises.',
    viewingTip:
      'Watch the moonrise on successive evenings around September 26 to experience the unique Harvest Moon lighting geometry.',
    optimalTime: 'Evening at moonrise',
    skyDirection: 'East at sunset',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // OCTOBER 2026
  // ==========================================
  {
    id: 'oct-04-saturn-opposition',
    title: 'Saturn at Opposition',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-10-04',
    shortDescription:
      'The ringed planet reaches opposition, glowing with golden brilliance and visible from sunset to sunrise.',
    detailedOverview:
      'Opposition represents the premier observing window of 2026 for Saturn. Positioned directly opposite the Sun in Aquarius, Saturn shines at its brightest (magnitude +0.5) and largest apparent angular size. Even a modest amateur telescope will reveal Saturn’s breathtaking ring system, the dark Cassini Division, and its giant moon Titan.',
    scientificContext:
      'Earth makes its closest approach to Saturn at approximately 8.7 AU (1.3 billion km). The rings exhibit the Seeliger effect—a temporary surge in optical brightness caused by the elimination of particle shadows at zero phase angle.',
    viewingTip:
      'Observe on a night of steady atmospheric seeing. Look for Titan shining as a magnitude +8.5 pinpoint nearby.',
    optimalTime: 'Local midnight when Saturn is highest in the sky',
    skyDirection: 'Rises in east at sunset, transits due south at midnight',
    equipment: 'Binoculars or Telescope',
    equipmentNotes:
      'Binoculars show Saturn as an elongated oval; a 70mm or larger telescope operating at 75x–150x magnification cleanly resolves the rings.',
    visibilityRegion: 'Global',
    magnitude: '+0.5',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'oct-07-draconids-meteor-shower',
    title: 'Draconids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-10-07',
    shortDescription:
      'An unusual meteor shower best observed in the early evening rather than predawn hours.',
    detailedOverview:
      'Unlike almost all other meteor showers where viewing is best after midnight, the Draconids peak in early evening right as darkness falls. The radiant constellation Draco is positioned highest in the northwest sky at dusk. Originating from comet 21P/Giacobini-Zinner, these are slow-moving meteors entering the atmosphere at a gentle 20 km/s.',
    scientificContext:
      'Periodic comet 21P/Giacobini-Zinner has an orbital period of 6.6 years. The Draconids occasionally produce brief, spectacular meteor outbursts.',
    viewingTip:
      'Step outside right at nightfall (between 19:30 and 22:00 local time) and look high toward the north-northwest.',
    optimalTime: 'Early evening right after twilight finishes (19:30 – 22:00 local)',
    skyDirection: 'Radiates from Draco, near the head of the Dragon in the northwest',
    equipment: 'Naked Eye',
    visibilityRegion: 'Northern Hemisphere strictly favored',
    parentBody: 'Comet 21P/Giacobini-Zinner',
    radiantConstellation: 'Draco',
    peakRatePerHour: '~10 meteors/hr (occasional outbursts)',
    moonInterference: 'Low (waning crescent moon does not interfere)',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'oct-10-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-10-10',
    utcTime: '15:50',
    utcIso: '2026-10-10T15:50:00Z',
    shortDescription:
      'Dark autumn skies provide peak conditions for the Great Pegasus Square and Andromeda Galaxy.',
    detailedOverview:
      'With no moonlight in the sky, mid-October offers stellar transparency. The autumn constellations are in prime alignment, making this an ideal weekend for deep-sky photography and open-air stargazing sessions.',
    scientificContext:
      'Syzygy conjunction occurs at 15:50 UTC (21:20 IST on October 10).',
    viewingTip:
      'Target the Double Cluster in Perseus (NGC 869/884) using binoculars for a dazzling field of diamond-like stars.',
    optimalTime: '20:00 local through 04:00 local',
    skyDirection: 'Overhead and northern skies',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'oct-12-mercury-greatest-eastern-elongation',
    title: 'Mercury at Greatest Eastern Elongation (19.6°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-10-12',
    shortDescription:
      'Mercury reaches 19.6 degrees east of the Sun, visible low in the southwest during evening dusk.',
    detailedOverview:
      'Mercury’s third evening apparition of 2026 sees the planet standing low in the southwestern twilight sky. Because the ecliptic has a shallow inclination in autumn evenings from northern latitudes, binoculars will be helpful to spot the planet against the twilight glow.',
    scientificContext:
      'Mercury shines at magnitude -0.1 with an apparent diameter of 6.8 arcseconds.',
    viewingTip:
      'Scan the southwestern horizon 30 to 45 minutes after sunset with binoculars before switching to naked eye viewing.',
    optimalTime: '30–50 minutes after sunset',
    skyDirection: 'Low above the southwestern horizon',
    equipment: 'Binoculars or Naked Eye',
    magnitude: '-0.1',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'oct-21-22-orionids-meteor-shower',
    title: 'Orionids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-10-21',
    endDate: '2026-10-22',
    shortDescription:
      'Fast, bright meteors originating from Comet Halley radiating from the club of Orion.',
    detailedOverview:
      'The Orionids represent Earth’s second annual rendezvous with debris from iconic Comet 1P/Halley. Streaking into the atmosphere at a blistering 66 km/s, Orionid meteors often leave lingering glowing trails and occasional bright fireballs. The waxing gibbous moon sets after midnight, creating dark skies for the peak predawn hours.',
    scientificContext:
      'Earth encounters the outbound leg of Halley’s orbital debris stream. The radiant lies just north of Betelgeuse in Orion.',
    viewingTip:
      'Begin your observing session after midnight once the Moon sets. Look toward Orion in the east, but keep your gaze wide.',
    optimalTime: '01:00 AM to 05:00 AM local time on October 22',
    skyDirection: 'Radiant rises in the east near Orion and transits south before dawn',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global visibility (both hemispheres)',
    parentBody: 'Comet 1P/Halley',
    radiantConstellation: 'Orion',
    peakRatePerHour: '~20 meteors/hr',
    moonInterference: 'Moderate (Moon sets after midnight)',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'oct-26-full-hunters-moon',
    title: 'Full Hunter’s Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-10-26',
    utcTime: '04:13',
    utcIso: '2026-10-26T04:13:00Z',
    shortDescription:
      'The traditional Hunter’s Moon rises in Aries, bathing late-autumn nights in brilliant lunar glow.',
    detailedOverview:
      'Following the Harvest Moon, the Hunter’s Moon traditionally signaled the time to stockpile stores for the coming winter. Like the Harvest Moon, it rises shortly after sunset on consecutive nights, giving extended evening light under crisp autumn air.',
    scientificContext:
      'Oppositional phase is achieved at 04:13 UTC (09:43 IST on October 26). Distance is approximately 380,000 km.',
    viewingTip:
      'Observe the moonrise against autumn trees. Use binoculars to explore lunar crater Copernicus and Oceanus Procellarum.',
    optimalTime: 'Sunset through sunrise',
    skyDirection: 'East at dusk, overhead at midnight',
    equipment: 'Naked Eye or Binoculars',
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },

  // ==========================================
  // NOVEMBER 2026
  // ==========================================
  {
    id: 'nov-04-05-taurids-meteor-shower',
    title: 'South Taurids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-11-04',
    endDate: '2026-11-05',
    shortDescription:
      'A minor, long-duration shower celebrated for slow-moving, luminous fireballs (bolides).',
    detailedOverview:
      'While the Taurids only produce 5 to 10 meteors per hour, they are renowned for generating an unusually high percentage of spectacular fireballs. Originating from Comet 2P/Encke and Asteroid 2004 TG10, Taurid meteoroids are pebble-sized rather than dust grains, creating brilliant trails that can light up the entire landscape.',
    scientificContext:
      'Taurid meteors travel at a relatively slow velocity of 28 km/s, allowing prolonged visual observation across several seconds.',
    viewingTip:
      'A waning crescent moon poses minimal interference. Watch around midnight when the radiant in Taurus stands high overhead.',
    optimalTime: '23:00 local through 03:30 local',
    skyDirection: 'Radiates from Taurus near the Pleiades and Aldebaran',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global',
    parentBody: 'Comet 2P/Encke & Asteroid 2004 TG10',
    radiantConstellation: 'Taurus',
    peakRatePerHour: '~5–10 meteors/hr (high fireball percentage)',
    moonInterference: 'Low',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'nov-09-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-11-09',
    utcTime: '07:03',
    utcIso: '2026-11-09T07:03:00Z',
    shortDescription:
      'Dark November skies open an immaculate window for early winter deep-sky stargazing.',
    detailedOverview:
      'The November new moon is a favorite for amateur astronomers. With Orion, Taurus, Auriga, and Perseus climbing high into the evening sky, observers can target the Orion Nebula (M42), the Pleiades (M45), and the Crab Nebula (M1) under pristine darkness.',
    scientificContext:
      'Conjunction occurs at 07:03 UTC (12:33 IST on November 9).',
    viewingTip:
      'Use rich-field binoculars to trace the blue nebulosity enveloping the Pleiades star cluster (Seven Sisters).',
    optimalTime: '20:30 local through 04:30 local',
    skyDirection: 'Eastern and overhead night sky',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'nov-17-18-leonids-meteor-shower',
    title: 'Leonids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-11-17',
    endDate: '2026-11-18',
    shortDescription:
      'Famous fast meteors capable of producing brilliant persistent trains from the Sickle of Leo.',
    detailedOverview:
      'The Leonids are among the fastest meteors known, striking Earth’s upper atmosphere at 71 km/s. Produced by debris from comet 55P/Tempel-Tuttle, they frequently leave vaporized incandescent ionization trails that linger in the upper atmosphere for many seconds. The waxing gibbous moon sets shortly after midnight, leaving dark skies for the peak predawn show.',
    scientificContext:
      'Comet 55P/Tempel-Tuttle orbits the Sun every 33 years. While historic storms produced thousands of meteors per hour (e.g. 1966 and 2001), current rates hover at a steady 15 per hour.',
    viewingTip:
      'Focus your observation between 02:00 AM and morning nautical dawn. Recline facing east toward Leo.',
    optimalTime: '02:00 AM to 05:15 AM local time on November 18',
    skyDirection: 'Radiates from the "Sickle" of Leo in the east',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global',
    parentBody: 'Comet 55P/Tempel-Tuttle',
    radiantConstellation: 'Leo',
    peakRatePerHour: '~15 meteors/hr',
    moonInterference: 'Low (Moon sets after midnight)',
    sourceName: 'American Meteor Society (AMS) & IMO',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'nov-20-mercury-greatest-western-elongation',
    title: 'Mercury at Greatest Western Elongation (19.6°)',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-11-20',
    shortDescription:
      'Mercury climbs to 19.6 degrees west of the Sun, presenting an excellent morning apparition before sunrise.',
    detailedOverview:
      'For morning observers, late November provides a crisp, high-contrast look at Mercury rising in the east-southeast before dawn. Shining at magnitude -0.6, it will be easy to spot with the naked eye once you know where to look.',
    scientificContext:
      'Mercury achieves maximum western elongation with a 62% illuminated disk spanning 6.4 arcseconds.',
    viewingTip:
      'Look low in the east-southeast roughly 45 minutes before local sunrise. It appears as a bright, steady amber spark.',
    optimalTime: '45–60 minutes before sunrise',
    skyDirection: 'Low above the east-southeastern horizon',
    equipment: 'Naked Eye or Binoculars',
    magnitude: '-0.6',
    moonInterference: 'Low',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },
  {
    id: 'nov-24-full-supermoon-beaver',
    title: 'Full Supermoon (Beaver Moon)',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-11-24',
    utcTime: '14:55',
    utcIso: '2026-11-24T14:55:00Z',
    shortDescription:
      'The second of three 2026 supermoons: perigee proximity makes the Beaver Moon exceptionally large and brilliant.',
    detailedOverview:
      'Traditionally named the Beaver Moon by Native American tribes and early European settlers who set beaver traps before winter rivers froze over, this full moon coincides closely with lunar perigee. Appearing up to 7% larger and 15% brighter than an average full moon, it casts sharp shadows outdoors throughout the night.',
    scientificContext:
      'Perigee distance reaches approximately 361,500 km. Syzygy occurs at 14:55 UTC (20:25 IST on November 24).',
    viewingTip:
      'Catch the moonrise right at dusk. The warm horizon colors coupled with the increased perigee diameter create dramatic photo opportunities.',
    optimalTime: 'Sunset through sunrise',
    skyDirection: 'Rises in east-northeast, climbs high overhead',
    equipment: 'Naked Eye or Binoculars',
    isSupermoon: true,
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'NASA SkyCal & USNO Astronomical Applications',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html',
  },
  {
    id: 'nov-25-uranus-opposition',
    title: 'Uranus at Opposition',
    category: 'planetary',
    categoryLabel: 'Planetary',
    startDate: '2026-11-25',
    shortDescription:
      'The cyan ice giant reaches opposition in Taurus, shining at peak magnitude and visible all night long.',
    detailedOverview:
      'Uranus reaches opposition directly opposite the Sun, making its closest approach of the year to Earth. Shining at magnitude +5.6, it is theoretically visible to the naked eye under exceptional Bortle 1 dark skies, and is an easy target for standard binoculars in the constellation Taurus.',
    scientificContext:
      'Distance to Uranus drops to roughly 18.6 AU (2.78 billion km). In a telescope at 200x magnification, Uranus reveals a distinct cyan-green disk measuring 3.7 arcseconds in diameter.',
    viewingTip:
      'Use binoculars to locate Uranus positioned south of the Pleiades. Its steady, non-twinkling cyan point separates it from background stars.',
    optimalTime: 'Midnight local time when Uranus transits the meridian',
    skyDirection: 'Overhead in Taurus, near the Pleiades',
    equipment: 'Binoculars or Telescope',
    equipmentNotes:
      'Binoculars reveal Uranus as a greenish 6th-magnitude dot. A 4-inch or larger telescope resolves the pale cyan planetary disk.',
    visibilityRegion: 'Global',
    magnitude: '+5.6',
    moonInterference: 'Moderate',
    sourceName: 'NASA JPL Horizons Ephemeris',
    sourceUrl: 'https://ssd.jpl.nasa.gov/horizons/',
  },

  // ==========================================
  // DECEMBER 2026
  // ==========================================
  {
    id: 'dec-09-new-moon',
    title: 'New Moon',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-12-09',
    utcTime: '00:52',
    utcIso: '2026-12-09T00:52:00Z',
    shortDescription:
      'Crisp winter dark skies provide perfect conditions for observing the winter Milky Way.',
    detailedOverview:
      'With zero moonlight to interfere, December’s new moon is one of the clearest observing windows of the entire year. Observers can trace the winter arm of the Milky Way stretching through Cassiopeia, Perseus, Auriga, and Monoceros.',
    scientificContext:
      'Conjunction occurs at 00:52 UTC (06:22 AM IST on December 9).',
    viewingTip:
      'Target open clusters M36, M37, and M38 in Auriga using binoculars or a small refractor.',
    optimalTime: 'Evening through predawn',
    skyDirection: 'High across the northern and eastern night sky',
    equipment: 'Naked Eye, Binoculars or Telescope',
    visibilityRegion: 'Global',
    moonInterference: 'None',
    sourceName: 'USNO Astronomical Applications',
    sourceUrl: 'https://aa.usno.navy.mil/data/MoonPhases',
  },
  {
    id: 'dec-13-14-geminids-meteor-shower',
    title: 'Geminids Meteor Shower Peak (King of Showers)',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-12-13',
    endDate: '2026-12-14',
    shortDescription:
      'The undisputed monarch of meteor showers peaks with up to 120 multicolored meteors per hour under moon-free dark skies!',
    detailedOverview:
      'The Geminids are widely celebrated as the best and most reliable annual meteor shower in the night sky. In 2026, conditions are pristine: the waxing crescent moon sets early in the evening, leaving dark skies for the entire midnight-to-dawn peak! Debris from rocky asteroid 3200 Phaethon produces slow, bright, multicolored meteors (white, yellow, green, and blue).',
    scientificContext:
      'Unlike icy comets, parent body 3200 Phaethon is an Apollo asteroid (or extinct comet nucleus) with a rock-rich composition, producing denser meteoroids that penetrate deeper into the atmosphere before burning up.',
    viewingTip:
      'Dress in warm winter layers, recline on an insulated ground mat, and observe after 22:00 local time. Peak rates occur between 01:00 AM and 04:00 AM.',
    optimalTime: '22:00 local on Dec 13 through 05:00 AM local on Dec 14',
    skyDirection: 'Radiates from near Castor and Pollux in Gemini, high overhead',
    equipment: 'Naked Eye',
    equipmentNotes:
      'No optical aids needed. Wide-angle unassisted naked-eye viewing yields the highest counts.',
    visibilityRegion: 'Global (Both hemispheres; northern hemisphere enjoys higher radiant altitude)',
    parentBody: 'Asteroid 3200 Phaethon',
    radiantConstellation: 'Gemini',
    peakRatePerHour: '~120 meteors/hr',
    moonInterference: 'None (Crescent moon sets early evening)',
    sourceName: 'American Meteor Society (AMS) & NASA Meteoroid Environment Office',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'dec-21-december-winter-solstice',
    title: 'December Solstice (Winter Solstice)',
    category: 'solstice-equinox',
    categoryLabel: 'Solstice & Equinox',
    startDate: '2026-12-21',
    utcTime: '20:49',
    utcIso: '2026-12-21T20:49:00Z',
    shortDescription:
      'The shortest day and longest night of the year in the Northern Hemisphere; marks official start of astronomical winter.',
    detailedOverview:
      'The December solstice occurs when the Sun reaches its southernmost declination in the sky, positioned directly overhead at the Tropic of Capricorn (23.44° S latitude). For Northern Hemisphere observers, this provides the longest night of the year—an astronomical gift for all-night stargazing sessions.',
    scientificContext:
      'The Sun reaches southern extreme declination (-23°26\') at 20:49 UTC (02:19 AM IST on December 22). In the Southern Hemisphere, this marks the summer solstice.',
    viewingTip:
      'Celebrate the longest night of the year by spending an extended evening observing the winter constellations from Orion to Taurus.',
    optimalTime: 'Exact crossing occurs at 20:49 UTC (02:19 IST Dec 22)',
    skyDirection: 'Sun reaches lowest midday arc across the southern sky',
    equipment: 'Naked Eye',
    visibilityRegion: 'Global astronomical milestone',
    sourceName: 'US Naval Observatory (USNO)',
    sourceUrl: 'https://aa.usno.navy.mil/data/EarthSeasons',
  },
  {
    id: 'dec-21-22-ursids-meteor-shower',
    title: 'Ursids Meteor Shower Peak',
    category: 'meteor-shower',
    categoryLabel: 'Meteor Shower',
    startDate: '2026-12-21',
    endDate: '2026-12-22',
    shortDescription:
      'A minor circumpolar meteor shower radiating near the Little Dipper on the longest nights of the year.',
    detailedOverview:
      'The Ursids provide a quiet, compact meteor display peaking just after the winter solstice. Originating from comet 8P/Tuttle, these meteors radiate from Ursa Minor near the star Kochab. While typical rates are 5 to 10 meteors per hour, the shower is circumpolar for northern latitudes, meaning the radiant never sets.',
    scientificContext:
      'Comet 8P/Tuttle has a 13.6-year orbital period. Debris strikes Earth at a moderate speed of 33 km/s.',
    viewingTip:
      'Face north toward Polaris and Ursa Minor after midnight. Wrap up warmly for winter temperatures.',
    optimalTime: 'Midnight to dawn on December 22',
    skyDirection: 'High in the northern sky near Polaris (Ursa Minor)',
    equipment: 'Naked Eye',
    visibilityRegion: 'Strictly Northern Hemisphere',
    parentBody: 'Comet 8P/Tuttle',
    radiantConstellation: 'Ursa Minor',
    peakRatePerHour: '~5–10 meteors/hr',
    moonInterference: 'Moderate to High',
    sourceName: 'American Meteor Society (AMS)',
    sourceUrl: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
  },
  {
    id: 'dec-23-full-supermoon-cold',
    title: 'Full Supermoon (Cold Moon)',
    category: 'moon-phase',
    categoryLabel: 'Moon Phase',
    startDate: '2026-12-23',
    utcTime: '01:30',
    utcIso: '2026-12-23T01:30:00Z',
    shortDescription:
      'The third and final supermoon of 2026 rides exceptionally high across northern winter skies.',
    detailedOverview:
      'Closing out the astronomical calendar of 2026, the Cold Moon (also known as the Long Night Moon) reaches full phase while close to perigee, delivering the third supermoon of the year. Because the full moon sits opposite the low winter sun, it reaches the highest altitude across the northern night sky of any full moon of the year, illuminating crisp winter landscapes like a beacon.',
    scientificContext:
      'Perigee occurs near syzygy at 01:30 UTC on December 23 (07:00 AM IST). High northern celestial declination keeps the Moon above the horizon for over 15 hours in mid-northern latitudes.',
    viewingTip:
      'Observe the Moon at midnight: notice how high overhead it climbs compared to summer full moons.',
    optimalTime: 'Sunset through sunrise; transits near zenith at midnight',
    skyDirection: 'Rises in northeast, crosses near zenith, sets in northwest',
    equipment: 'Naked Eye or Binoculars',
    isSupermoon: true,
    visibilityRegion: 'Global',
    moonInterference: 'High',
    sourceName: 'NASA SkyCal & USNO Astronomical Applications',
    sourceUrl: 'https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html',
  },
];
