# Weather App

A React-based weather application that displays current conditions and a 5-day forecast for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Current conditions: temperature, humidity, pressure
- 5-day forecast cards
- Temperature trend chart
- Responsive layout with Bootstrap

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- An [OpenWeatherMap API key](https://openweathermap.org/api) (free tier available)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PMuiruri/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure environment variables

Copy the example environment file and add your API key:

```bash
cp .env.example .env
```

Open `.env` and replace `your_openweathermap_api_key_here` with your actual key:

```
REACT_APP_WEATHER_KEY=your_openweathermap_api_key_here
```

> **Never commit your `.env` file.** It is already excluded by `.gitignore`.
>
> For CI/CD, add `REACT_APP_WEATHER_KEY` as a repository secret in **GitHub → Settings → Secrets and variables → Actions**.

### 4. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Create an optimised production build |
| `npm run lint` | Lint source files with ESLint |
| `npm run format` | Format source files with Prettier |

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `REACT_APP_WEATHER_KEY` | ✅ | OpenWeatherMap API key |

## Project Structure

```
src/
  components/
    Card.js          # Main layout card
    Form.js          # City search form
    main.js          # Data-fetching container
    miniCard.js      # Stats mini card (humidity, pressure...)
    weatherCard.js   # Current weather display
    weatherChart.js  # Temperature trend chart (Google Charts)
    Week.js          # Single forecast day card
  App.js
  App.test.js
  index.js
public/
  index.html
```

## Security

- API keys are stored in environment variables and **never** committed to source control.
- `.env`, `key.js`, `node_modules/`, and `build/` are excluded via `.gitignore`.
- Source maps are disabled in production builds (`GENERATE_SOURCEMAP=false`).
- Run `npm audit` regularly to check for known dependency vulnerabilities.

## Running Tests

```bash
npm test
```

Tests use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Run once (non-interactive):

```bash
npm test -- --watchAll=false
```

## CI/CD

A GitHub Actions workflow (`.github/workflows/ci.yml`) automatically runs lint, test, and build on every push and pull request to `master` or `develop`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a pull request targeting the `develop` or `master` branch

Please follow the existing code style (enforced by ESLint and Prettier) and ensure all tests pass before submitting.

## License

This project is open source. See the repository for details.
