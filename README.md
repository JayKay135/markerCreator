# Vuforia Marker Generator
This project is based on the project by [Dario Mazzanti](http://www.dariomazzanti.com/uncategorized/ar-image-target-generation-vuforia/).
It generates images for the vuforia marker tracking system that are always rated with 5 stars.

## Usage
This js code is written with node js.
In order to execute the files you have to setup a node project first and install the following libraries through npm:

```console
npm i fs canvas jimp
```

Also make sure that you've added a folder called *images* to the root path of the project.
Then execute the main.js file via nodejs:

```console
node main.js
```

You can find your generated marker now in the images folder.

## Information
- Vuforia only accepts 24 Bit images where the alpha channel is removed.
This project does this alpha channel removal automatically.
- If you want to change the used colors pallettes, you can simply adjust the used color array
- Use the printed width from the console as the marker width in the online vuforia marker settings