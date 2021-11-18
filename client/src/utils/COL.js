const cheerio = require("cheerio")
const axios = require("axios")


const costOfLiving = async(city)=>{
    const currency = "USD"
    const City = city[0].toUpperCase() + city.slice(1).toLowerCase();
    const url = `https://www.numbeo.com/cost-of-living/in/${City}?displayCurrency=${currency}`
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);   
      
    
    

    

    const rows = $('body > div.innerWidth > table > tbody > tr')
        .filter((i, el) => $(el).children('td').length === 3)
        .map(
            (i, el) => $(el).children().map(
                (i, el) => $(el).text().trim()
            ).toArray()
        ).toArray();
    

    const costs = chunkArray(rows, 3)
        .map(([item, costWithSymbol, range]) => {
            const cost = costWithSymbol.replace(/^.*?([\d,.]+).*?$/, '$1');
            const [rangeLow, rangeHigh] = range.split('-');
            return {
                item,
                cost,
                range: {
                    low: rangeLow,
                    high: rangeHigh
                }
            }
        });
    return {city, costs, currency}
     
}
function chunkArray(arr, chunkSize) {
    let temp = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        temp.push(arr.slice(i, i + chunkSize));
    }
    return temp;
}

costOfLiving("Lancaster").then(data =>{
console.log(data)
})


module.exports= costOfLiving