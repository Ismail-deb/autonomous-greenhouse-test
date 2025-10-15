# Greenhouse Monitoring Application Deployment Instructions

This document provides detailed instructions on how to deploy the Greenhouse Monitoring Application to GitHub Pages.

## Prerequisites

1. A GitHub account (Username: Ismail-deb)
2. The application files (already in this repository)

## Deployment Options

There are two ways to deploy this application to GitHub:

### Option 1: Using GitHub's Web Interface (Recommended)

This is the simplest method and doesn't require any command-line tools.

1. **Create a New Repository**
   - Go to https://github.com/new
   - Repository name: `Autonomous-Greenhouse`
   - Set to Public
   - Do NOT initialize with a README
   - Click "Create repository"

2. **Upload Files**
   - On your new repository page, click the "Add file" button
   - Select "Upload files"
   - Drag and drop all files from this folder:
     - `greenhouse-monitor.html` (the main application file)
     - `PROJECT_README.md`
     - `DEPLOYMENT_INSTRUCTIONS.md`
     - All sensor files (.ino files)
     - The ServerMotor folder
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository's Settings (gear icon)
   - Scroll down to the "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"
   - Wait a few minutes for GitHub to build and deploy your site

4. **Access Your Live Site**
   - Your site will be available at: `https://Ismail-deb.github.io/Autonomous-Greenhouse/greenhouse-monitor.html`

### Option 2: Using Git Command Line (Advanced)

If you prefer using the command line:

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/Ismail-deb/Autonomous-Greenhouse.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Follow steps 3-4 from Option 1 above

## Updating Your Application

To update your application after making changes:

### Using Web Interface:
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Upload the updated files
4. Commit changes

### Using Command Line:
1. Make your changes to the files
2. Run these commands:
   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```

## Application Features

The deployed application includes:

- Real-time monitoring dashboard for greenhouse conditions
- Historical data trends visualization
- Threshold alerting system
- Automated recommendations
- Responsive design for all devices

## Integration with Oracle Apex (Future Enhancement)

To connect the application to your Oracle Apex database:

1. Locate the data service functions in `greenhouse-monitor.html`
2. Replace the `mockDataGenerator()` function with actual API calls to your Oracle Apex endpoints
3. Update the `fetchRealSensorData()` function with your specific API URLs

Example integration point:
```javascript
// TODO: Replace with actual Oracle Apex API integration
async function fetchRealSensorData() {
  try {
    // This is where you would connect to your Oracle Apex API
    // const response = await fetch('YOUR_ORACLE_APEX_API_ENDPOINT');
    // const data = await response.json();
    // return data;
    
    // For now, return mock data
    return mockDataGenerator();
  } catch (error) {
    console.error('Error fetching sensor data:', error);
    // Return mock data as fallback
    return mockDataGenerator();
  }
}
```

## Troubleshooting

If you encounter issues:

1. **Page not found (404)**: Wait a few minutes for GitHub Pages to finish deploying
2. **Blank page**: Check browser console for JavaScript errors
3. **Styling issues**: Ensure all CSS is properly included in the HTML file
4. **Data not updating**: Verify the JavaScript is executing correctly

## Support

For additional help with deployment or customization:
- Check the GitHub Pages documentation: https://pages.github.com/
- Contact your instructor for assistance with Oracle Apex integration