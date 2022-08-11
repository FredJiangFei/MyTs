// Generic Functions
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let nummbers = ArrayUtils.wrapInArray(1);
let strs = ArrayUtils.wrapInArray('fred');
