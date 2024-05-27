window.onload = function () {
    let pronouns = ['the', 'our'];
    let adjetives = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];
    let tlds = ['.com'];

        for (let pronoun of pronouns){
        for (let adjetive of adjetives){
        for (let noun of nouns){
        for ( let tld of tlds){
            console.log(`${pronoun}${adjetive}${noun}${tld}`);
            }
             }   
         }
        }
} ;