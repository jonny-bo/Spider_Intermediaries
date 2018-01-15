function filter(dirtyData) {
  // wash the dirtyData and return the cleanData
  const cleanData = [];
  const loopLength = dirtyData.length;
  for (let i = 0; i < loopLength; i += 1) {
    const { description, price } = dirtyData[i];
    const housingInformation = dirtyData[i].house_information.split('|');
    const addressInformation = dirtyData[i].house_address.split(/\s{3}/);
    const housingType = housingInformation[0];
    const housingArea = housingInformation[1];
    const community = addressInformation[0];
    const loopData = {
      description,
      community,
      price,
      housingType,
      housingArea,
    };
    cleanData.push(loopData);
  }
  return cleanData;
}

module.exports = filter;
