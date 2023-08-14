export function computeArraySize(array) {
    let totalSize = 0;
  
    for (const element of array) {
      if (typeof element === 'number') {
        totalSize += 8; // Assuming 8 bytes for a JavaScript Number (64-bit float)
      } else if (typeof element === 'string') {
        totalSize += element.length * 2; // Assuming 2 bytes per character for UTF-16 encoding
      } else if (typeof element === 'boolean') {
        totalSize += 1; // Assuming 1 byte for a Boolean value
      } else if (typeof element === 'object') {
        totalSize += computeObjectSize(element);
      }
    }
  
    // Add any additional overhead, delimiters, etc.
    return formatBytes(totalSize, 0);
  }
  
  function computeObjectSize(object) {
    let objectSize = 0;
  
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const property = object[key];
        if (typeof property === 'number') {
          objectSize += 8; // Assuming 8 bytes for a JavaScript Number
        } else if (typeof property === 'string') {
          objectSize += property.length * 2; // Assuming 2 bytes per character for UTF-16 encoding
        } else if (typeof property === 'boolean') {
          objectSize += 1; // Assuming 1 byte for a Boolean value
        } else if (typeof property === 'object') {
          objectSize += computeObjectSize(property);
        }
      }
    }
  
    // Add any additional overhead, delimiters, etc.
    return objectSize;
  }

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    );
}
