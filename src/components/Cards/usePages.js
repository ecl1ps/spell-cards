// @ts-check

/**
 * @param {object[]} spells
 */
export function usePages(spells, pageSize) {
  if (!spells) {
    return null;
  }

  return spells.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / pageSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
}
