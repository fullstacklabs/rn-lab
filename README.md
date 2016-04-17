Yaya Mobile
===

# Install

```bash
git clone https://github.com/fullstacklabs/yaya_mobile/;

cd yaya_mobile;

npm install;

sudo npm install -g react-native;

cat <<BASHRC >> ~/.bashrc
export ANDROID_HOME=~/Library/Android/sdk;
export rn=react-native;
export PATH="\${PATH}:${PWD}/bin";
BASHRC
```

# Start Packager

Packager will be opened by default by XCode on Mac.

```bash
npm start
```

# Run iOS app

```bash
npm run ios
```

# Run Android app

```bash
npm run android
```

# Build Relase for Android

# Build Android release

```bash
keytool -genkey -v -keystore my-release-key.keystore \
  -alias yaya-alias -keyalg RSA -keysize 2048 -validity 10;

mv my-release-key.keystore android/app;

cat <<DOC >> ~/.gradle/gradle.properties
YAYA_RELEASE_STORE_FILE=my-release-key.keystore
YAYA_RELEASE_KEY_ALIAS=yaya-alias
YAYA_RELEASE_STORE_PASSWORD=*****
YAYA_RELEASE_KEY_PASSWORD=*****
DOC

npm run release
```

Open a new AVD with Genymotion.

Drag `android/app/build/outputs/apk/app-release.apk` into the new AVD.
