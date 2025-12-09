# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
 # 🚕 NYC Taxi Fare Predictor - React Frontend

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Modern, responsive React frontend for NYC Taxi trip duration predictions powered by machine learning. Features a vibrant, user-friendly interface with real-time predictions via REST API.

![App Preview](https://via.placeholder.com/800x400?text=NYC+Taxi+Predictor+Preview)

## ✨ Features

- 🎨 **Vibrant Modern UI**: Eye-catching gradient design with smooth animations
- ⚡ **Real-time Predictions**: Instant ML-powered duration estimates
- 📱 **Fully Responsive**: Seamless experience across desktop, tablet, and mobile
- 🔄 **Smart Error Handling**: User-friendly error messages and loading states
- 🚀 **Fast Performance**: Built with React 18 and optimized Tailwind CSS
- 🎭 **Interactive Elements**: Animated icons and hover effects
- ♿ **Accessible**: Semantic HTML and proper ARIA labels

## 🖥️ Demo

**Live Features:**
- Enter NYC taxi zone IDs for pickup and dropoff
- Get instant trip duration predictions
- View pickup/dropoff zone information
- See model version and confidence metrics

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **HTTP Client**: Fetch API

## 📁 Project Structure
```
taxi-fare-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point
│   └── index.css         # Tailwind configuration
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ and npm
- Backend API running at `http://localhost:8000`

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shivamraghuwanshi6/nyc-taxi-prediction-frontend.git
cd nyc-taxi-prediction-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production
```bash
npm run build
```

Optimized build files will be in the `build/` directory.

## 🔗 Backend Integration

This frontend connects to the FastAPI backend for predictions.

**Backend Repository**: [NYC Taxi MLOps Backend](https://github.com/shivamraghuwanshi6/nyc-taxi-mlops-backend)

**API Endpoint**: `POST http://localhost:8000/predict`

**Request Format:**
```json
{
  "PULocationID": 230,
  "DOLocationID": 100
}
```

**Response Format:**
```json
{
  "predicted_duration_minutes": 44.01,
  "pickup_location": 230,
  "dropoff_location": 100,
  "model_version": "v1.0"
}
```

## 🎨 UI Components

### Main Features

1. **Header Section**
   - Animated taxi icon
   - Clear title and description
   - Gradient background

2. **Input Form**
   - Pickup location (green-themed)
   - Dropoff location (red-themed)
   - Real-time validation
   - Enter key support

3. **Prediction Display**
   - Large, clear duration display
   - Zone information cards
   - Model version badge
   - Success animations

4. **Error Handling**
   - Helpful error messages
   - Backend connection status
   - Retry suggestions

## 📱 Responsive Design

- **Desktop**: Full-width layout with optimal spacing
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Single-column layout, touch-optimized

## 🎯 Usage Example

1. **Enter Locations**
   - Pickup Zone: 230 (e.g., Upper East Side)
   - Dropoff Zone: 100 (e.g., Midtown)

2. **Click "Predict Duration"**
   - Loading animation appears
   - API call is made

3. **View Results**
   - See estimated trip duration
   - Review zone information
   - Check model version

4. **Reset** (optional)
   - Clear inputs for new prediction

## 🧪 NYC Taxi Zone IDs

Common NYC taxi zones for testing:

| Zone ID | Location |
|---------|----------|
| 230 | Upper East Side |
| 161 | Midtown Center |
| 236 | Upper West Side |
| 100 | Manhattan Valley |
| 68 | East Harlem |

*Full zone list: [NYC TLC Zone Map](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)*

## 🐛 Troubleshooting

### Backend Connection Error

**Error**: `Failed to fetch`

**Solution**:
1. Ensure backend is running: `docker ps`
2. Start backend: `docker start taxi-api`
3. Test backend: `curl http://localhost:8000/predict`

### Styling Not Showing

**Solution**:
1. Rebuild Tailwind: `npm run build`
2. Clear cache: `rm -rf node_modules/.cache`
3. Restart dev server: `npm start`

## 🎓 Project Context

This frontend is part of a final-year MLOps project demonstrating:
- Modern web development with React
- Integration with ML backend services
- Responsive UI/UX design
- Real-time data visualization

## 📝 Future Enhancements

- [ ] Google Maps integration for visual zone selection
- [ ] Historical prediction tracking
- [ ] Fare estimation based on duration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics dashboard

## 👤 Author

**Shivam Raghuwanshi**
- GitHub: [@shivamraghuwanshi6](https://github.com/shivamraghuwanshi6)
- Email: raghuwanshishivam8120@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons
- DataTalks.Club for MLOps inspiration

## 📜 License

MIT License - feel free to use this project for learning!

---

⭐ **If you found this helpful, please star the repo!**

🔗 **Check out the backend**: [NYC Taxi MLOps Backend](https://github.com/shivamraghuwanshi6/nyc-taxi-mlops-backend)
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
