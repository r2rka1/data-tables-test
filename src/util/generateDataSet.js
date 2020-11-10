export default () => {
  const dataSet = []
  for (let i = 1; i < 50; i++ ) {
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
