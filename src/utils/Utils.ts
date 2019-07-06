export default function copyObject(original: Object, copyObj: Object) {
  let obj = new Object.assign(copyObj, original);
}
