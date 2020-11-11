export default (amount = 50) => {
  const dataSet = []
  for (let i = 1; i < amount; i++ ) {
    dataSet.push({
      key: i+1000,
      category: "Category Name" + i,
      subcategory: "Subcategory" + i,
      vendor: "Vendor" + i,
      spend: '$1300578',
      variance: '15%'
    })
  }
  return dataSet;
}
