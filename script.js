function findPrimes(){
    let n = $('#maxNumber').val();
    let hasil = [];

    cariPrima:
    for (let i = 2; i <= n; i++) { 
        for (let j = 2; j < i; j++) { 
            if (i % j == 0) continue cariPrima;
        }

        hasil.push(i)
    }
    
    $('#result p').remove()
    $('#result').append(`<p>${hasil}</p>`)
}
