// Import web-vitals library
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Define the function to report metrics
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);  // Cumulative Layout Shift
    getFID(onPerfEntry);  // First Input Delay
    getFCP(onPerfEntry);  // First Contentful Paint
    getLCP(onPerfEntry);  // Largest Contentful Paint
    getTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;
