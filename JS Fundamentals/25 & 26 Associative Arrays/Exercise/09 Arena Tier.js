function solve(input) {

    input.pop();
    console.log(input);
    let gladiators = {};
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

    for (const line of input) {

        if (line.includes(' -> ')) {
            let [name, skill, points] = line.split(' -> ');

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
            }
            if (!gladiators[name].hasOwnProperty(skill)) {

                gladiators[name][skill] = points;
            } else {
                let oldValue = gladiators[name][skill];
                if (oldValue < points) {
                    gladiators[name][skill] = points;
                }
            }


        } else {
            let [firstName, secondName] = line.split(' vs ');

            if (gladiators.hasOwnProperty(firstName) && gladiators.hasOwnProperty(secondName)) {

                let arrayGladiators = Object.entries(gladiators);

                for (const [gladiator, skill] of  arrayGladiators) {
                    {

                    }

                }


            }


        }
    }

        let sortedGladiators = Object.entries(gladiators).sort(sortGladiators);
        let firstOutput = '';
        let secondOutput = '';


        for (let [gladiator, skill] of sortedGladiators) {
            let sortedSkills = Object.entries(skill).sort(sortGladiators);


            let sum = 0;

            for (let [skillName, skillPoint] of sortedSkills) {
                sum += Number(skillPoint);
            }

            console.log(gladiator + ': ' + sum + ' skill');

            for (let [skillName, skillPoint] of sortedSkills) {
                console.log('- ' + skillName + ' <!> ' + skillPoint);
            }

        }

        function sortGladiators(firstGladiator, secondGladiator) {
            let firstName = firstGladiator[0];
            let secondName = secondGladiator[0];

            return secondName.localeCompare(firstName);
        }


    }



solve([
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]

);
