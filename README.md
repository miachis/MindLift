# MindLift

MindLift is an web based application that allows you track your day-to-day challenges and reactions providing you with a summarized insight of your personality throughout the week.

## Overview

MindLift is designed to be sort of a personal free therapist. It is not capable of holding conversations its main focus is to support you with decision making and improving one's mental health.

Features currently available are:

- Daily report requests
- OTP login, no password needed to prevent the issue of forgetting a password
- Summary generation at the end of every week, data from the week is aggregated and summarized

## Local Development

In order to call the APIs, create your own local server from [MindLift Backend](https://github.com/miachis/MindLift-BE)

Navigate to [Login Component](src/pages/Login.jsx) and set the loginHandlerUrl and logingOTPHandlerURL to your backend's.

Navigate to [Signup Component](src/components/Signup.jsx) and set the signupURL and otpVerificationURL to your backend's.

Navigate to [MySpaceComponent](src/pages/MySpace.jsx) and set the mySpaceURL to your backend's.

Navigate to [refresh](src/utility/refreshToken.js) and set the refreshURL to your backend's.

Navigate to [Daily Component](src/components/DailyReports.jsx) and set the dailyReportsURL to your backend's.

Navigate to [Weekly Component](src/components/WeeklyReports.jsx) and set the dailyReportsURL to your backend's.

Navigate to [Account Component](src/components/Account.jsx) and set the signOutHandlerURL, changeUsernameURL, sendOTPHandlerURL, verifyOTPHandlerURL and deleteAccountURL to your backend's.
Make sure you're in the root directory then run:

```
npm install
npm run dev
```

## Stack

- Javascript
- React + vite
- Tailwindcss
