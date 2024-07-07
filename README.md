
#  Grow Green & Grow Smart: The Future of Gardening is Here

#### Take control of your garden with a smart monitoring system. This innovative technology uses sensors to track vital conditions like soil moisture, temperature, and sunlight, allowing you to optimize plant growth and  conserve resources.
## Step2: Installation Dependencies

Navigate to the project directory and run:

```bash
  git clone https://github.com/Kinsuksingh/smart-garden-and-agriculture.git
  cd smart-garden-and-agriculture
  npm install firebase
```
    
## Roadmap: Initializing Firebase in Your React App

**1. Create a Firebase Project:**

- Open the Firebase console (https://console.firebase.google.com/).

- Click "Add project" to start a new project.

- Enter a desired project name and click "Continue".

- Click "Continue" on the next page.

- Select your existing Firebase account or create a new one.

- Finally, click "Create project" to initiate project creation.

- Click "Continue" once the process finishes.

**2. Set up Firebase for Web:**

- Click the Web icon (</>) on the top left corner.

- Enter a nickname for your React app in the provided field.

- Enter a desired project name and click "Continue".

- Click "Register app".

- Copy the generated code for later use.

- Click "Continue to the console".


**3. Create a Realtime Database:**

- Enable Realtime Database:  In the Firebase console, locate the Develop section and click on Database. You might see options for Cloud Firestore and Realtime Database. Choose Realtime Database.

- Create a Database: Click on the Create database button.

**4 Configure Security Rules (Optional for initial setup):**

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```





