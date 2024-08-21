



export const convertToUSD = (amount:number):string=> {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}