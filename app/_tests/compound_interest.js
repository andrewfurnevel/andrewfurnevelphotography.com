

const calcCompoundInt = (principle, years, interest) => {
    interest = interest / 100;

    console.log(principle);
    for(let i=0; i < years ; i++) {
        principle = (principle * interest) + principle;
        console.log(principle);
    }

    // Array.from({ length: 10 }).forEach(() => {
    //     principle = (principle * interest) + principle;
    //     console.log(principle);
    //   });
}

calcCompoundInt (20000, 10, 100);
