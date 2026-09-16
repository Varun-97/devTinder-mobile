import { Dimensions, PixelRatio, Platform } from 'react-native';

// ============================================================
// DESIGN REFERENCE (Figma / design file ke base dimensions)
// Yeh woh screen size hai jispe original design banaya gaya tha.
// Sab scaling calculations isi base pe hoti hain.
// ============================================================

// iPad ke liye alag base width — taaki tablet pe font/spacing
// bahut zyada bada na ho jaye (phone ke design ko tablet pe
// directly linear scale karne se UI bahut bada dikhta hai)
export const DesignWidth = Platform.OS === 'ios' && Platform.isPad ? 800 : 390;

export const DesignHeight = 844;

// ============================================================
// CURRENT DEVICE SCREEN SIZE
// Runtime pe jis device pe app chal raha hai uski actual
// width/height. Note: yeh static hai — screen rotate hone pe
// update nahi hoga (agar rotation support chahiye, isko
// useWindowDimensions() hook ke through dynamically lena hoga)
// ============================================================
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// ============================================================
// vw — Width-based scaling
// Use karo: width, maxWidth, minWidth, paddingHorizontal,
// paddingLeft, paddingRight, marginHorizontal, marginLeft,
// marginRight, columnGap, left, right
//
// Design mein jo bhi width value thi (design width ke against),
// usko current screen ki width ke proportion mein convert karta hai.
// PixelRatio.roundToNearestPixel isliye use kiya hai taaki
// sub-pixel values na aaye — blurry rendering avoid hoti hai.
// ============================================================
export const vw = (size: number) =>
    PixelRatio.roundToNearestPixel((screenWidth / DesignWidth) * size);

// ============================================================
// vh — Height-based scaling
// Use karo: height, maxHeight, minHeight, paddingVertical,
// paddingTop, paddingBottom, marginVertical, marginTop,
// marginBottom, rowGap, top, bottom
//
// Same concept jaisa vw, lekin height ke reference se calculate
// hota hai — vertical spacing ke liye zyada accurate hai
// kyunki yeh height ke actual proportion ka use karta hai,
// width ka nahi.
// ============================================================
export const vh = (size: number) =>
    PixelRatio.roundToNearestPixel((screenHeight / DesignHeight) * size);

// ============================================================
// vmin — Safe/normalized scaling (dono dimensions ka minimum)
// Use karo: fontSize, lineHeight, letterSpacing, borderRadius,
// borderWidth, icon size, shadow values
//
// Width aur height dono ke scale factor nikal ke, jo bhi CHHOTA
// hai usko use karta hai. Isse font ya border-radius jaisi
// cheezein kabhi extreme bade/chhote nahi hoti — chahe device
// bahut wide ho (tablet) ya bahut tall/narrow ho.
//
// Yeh CSS ke "vmin" unit jaisa concept hai — responsive lekin
// safe scaling deta hai, especially tablets aur unusual aspect
// ratio waale devices pe.
// ============================================================
const minScale = Math.min(screenWidth / DesignWidth, screenHeight / DesignHeight);

export const vmin = (size: number) =>
    PixelRatio.roundToNearestPixel(size * minScale);