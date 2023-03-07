
obj = [{
    country :'rus',
    name :'gop',
    pop :'123'
},{
    country :'us',
    name :'ankur',
    pop :'12345'
},
{
    country :'rus',
    name :'gopii',
    pop :'123'
},
{
    country :'russsndieb',
    name :'gopii',
    pop :'123'
}
]
let result = []
obj.map((el) => {
    const {country, ...data} = el
    if (result[country]){
        result[country].push(data)
    }
    else {
        result[el.country] = [data]
    }
})
console.log(result)
