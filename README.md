# Northern Lights Radar

A production-ready, mobile-first website that aggregates publicly available space-weather and weather data into a simple, honest "Viewing Conditions" score per city in Finland/Lapland. Features beautiful Nordic-minimal UI and strong SEO.

## Features

- **Real-time Aurora Scoring**: Transparent scoring based on NOAA space weather data, cloud cover, darkness levels, and moon conditions
- **Mobile-First Design**: Optimized for aurora hunters on the go
- **Live Data Integration**: NOAA SWPC OVATION Prime, Open-Meteo weather, OpenWeather moon data
- **City Pages**: Dedicated pages for 7 Lapland cities with live conditions
- **Comprehensive Guides**: How-to guides, seasonal information, and photography tips
- **SEO Optimized**: Complete metadata, JSON-LD structured data, sitemap, and robots.txt
- **Performance Focused**: Edge runtime, caching, lazy loading, and optimized images

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Maps**: MapLibre GL (open-source)
- **Deployment**: Vercel (recommended)

## Data Sources

- **NOAA SWPC OVATION Prime**: Aurora probability data
- **Open-Meteo**: Weather data (cloud cover, visibility, precipitation)
- **OpenWeather**: Moon phase and solar data
- **Public APIs**: No private vendors, all data publicly available

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenWeather API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd northern-lights-radar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenWeather API key:
   ```env
   OWM_API_KEY=your_openweather_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Get OpenWeather API Key**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard
   - Add it to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── score/         # Score calculation endpoint
│   │   └── city/[slug]/   # City data endpoint
│   ├── finland/           # Finland hub page
│   ├── lapland/           # Lapland hub page
│   ├── guide/             # Guide pages
│   └── finland/lapland/[city]/aurora/  # City pages
├── components/            # React components
│   ├── HomeMap.tsx        # MapLibre map component
│   ├── TonightCard.tsx    # Live conditions card
│   ├── CityPage.tsx       # City page template
│   └── AdSense.tsx        # AdSense component
├── lib/                   # Utility libraries
│   ├── ovation.ts         # NOAA OVATION data
│   ├── weather.ts         # Open-Meteo weather data
│   ├── moon.ts            # Moon phase data
│   ├── solar.ts           # Solar calculations
│   └── score.ts           # Scoring algorithm
└── data/
    └── cities.json        # City registry
```

## Scoring Algorithm

The aurora viewing score uses a simple, transparent formula:

```
Score = 100 × Aurora Probability × Visibility × Darkness × Moon Conditions
```

### Components

- **Aurora Probability (P)**: From NOAA SWPC OVATION Prime (0-1)
- **Visibility**: 1 - Cloud Cover (0-1)
- **Darkness**: Based on solar elevation (0-1)
- **Moon Conditions**: 1 - 0.6 × Moon Brightness (0-1)

### Badge Levels

- **80-100**: Excellent
- **60-79**: Great  
- **40-59**: Good
- **20-39**: Fair
- **0-19**: Poor

## API Endpoints

### GET /api/score?lat={lat}&lon={lon}

Returns aurora viewing score for a specific location.

**Response:**
```json
{
  "score": 75,
  "badge": "Great",
  "components": {
    "P": 0.8,
    "Visibility": 0.9,
    "Dark": 0.85,
    "MoonOK": 0.7
  },
  "raw": { /* raw data sources */ },
  "dataAvailability": {
    "aurora": true,
    "weather": true,
    "moon": true,
    "solar": true
  }
}
```

### GET /api/city/[slug]

Returns city data with live aurora score.

**Response:**
```json
{
  "city": {
    "name": "Rovaniemi",
    "region": "Lapland",
    "country": "Finland",
    "latitude": 66.5039,
    "longitude": 25.7294,
    "timezone": "Europe/Helsinki",
    "viewingSpots": ["Arktikum Science Centre", "..."],
    "description": "The capital of Lapland..."
  },
  "score": 75,
  "badge": "Great",
  "components": { /* score components */ },
  "raw": { /* raw data sources */ },
  "dataAvailability": { /* data source status */ }
}
```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `OWM_API_KEY` | OpenWeather API key for moon data | Yes | - |
| `NEXT_PUBLIC_SITE_URL` | Site URL for API calls | No | `http://localhost:3000` |
| `NEXT_PUBLIC_ENABLE_ADSENSE` | Enable AdSense ads | No | `false` |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | AdSense client ID | No | - |

## Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Use the Next.js preset
- **Self-hosted**: Use `npm run build && npm start`

## Performance

- **Edge Runtime**: API routes use edge runtime for faster response times
- **Caching**: Data sources cached with appropriate TTL
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting and lazy loading
- **CDN**: Static assets served via CDN

## SEO Features

- **Metadata API**: Complete meta tags for all pages
- **JSON-LD**: Structured data for better search results
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Proper canonical URL structure
- **Open Graph**: Social media sharing optimization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Data Attribution

- **Aurora Data**: NOAA Space Weather Prediction Center (OVATION Prime)
- **Weather Data**: Open-Meteo (CC BY 4.0)
- **Moon Data**: OpenWeather (CC BY-SA 4.0)
- **Map Data**: OpenStreetMap contributors

## Support

For questions or issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## Changelog

### v1.0.0
- Initial release
- Real-time aurora scoring
- 7 Lapland city pages
- Complete guide section
- SEO optimization
- Mobile-first design