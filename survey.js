const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  const name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    const hobby = answer;
    rl.question(`What do you listen to while doing ${hobby}?`, (answer) => {
      const song = answer;
      rl.question('Which meal is your favourite?', (answer) => {
        const favMeal = answer;
        rl.question(`What's your favourite thing to drink with ${favMeal}?`, (answer) => {
          const drink = answer;
          rl.question(`If you could fly anywhere right now, where would you go?`, (answer) => {
            const place = answer;
            rl.question(`What is your pet peeve?`, (answer) => {
              const petPeeve = answer;
              console.log(`Meet ${name}. The best person to do ${hobby} with. If you admit to like ${song} you may even get the best ${favMeal} in town cooked just by ${name} and enjoy some ${drink} with it. His next destination is ${place} and his biggest pet peeve is ${petPeeve}. Want to meet?`)
              rl.close();
            })
          })
        })
      })
    })
  })
});