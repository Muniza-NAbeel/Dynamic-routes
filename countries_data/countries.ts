type Country = {
    name: string;
    population: string;
    capital: string;
};

const countries: { [key: string]: Country } = {
    Pakistan: 
            { name: "Pakistan", 
              population: "253.8 million", 
              capital: "Islamabad" },

    Iran: 
            { name: "Iran", 
              population: "88.55 million", 
              capital: "Tehran" },
    Turkiye: 
            { name: "Turkiye", 
              population: "84.98 million", 
              capital: "Ankara" },
     Iraq: 
            { name: "Iraq", 
              population: "44.5 million", 
              capital: "Baghdad" },

    Bangladesh: 
            { name: "Bangladesh", 
              population: "171.2 million", 
              capital: "Dhaka" },
};

export default countries;