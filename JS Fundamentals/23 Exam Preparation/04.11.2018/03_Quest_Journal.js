function solve(actions) {

    let journal = actions.shift().split(', ');
    actions.pop();

    for (let i = 0; i < actions.length; i++) {

        let [command, quest] = actions[i].split(' - ');

        if (command === 'Start' && !journal.includes(quest)) {
            journal.push(quest);
        }

        if (command === 'Complete' && journal.includes(quest)) {
            journal.splice(journal.indexOf(quest), 1);
        }

        if (command === 'Renew' && journal.includes(quest)) {
            let currentQuest = quest;
            journal.splice(journal.indexOf(quest), 1);
            journal.push(currentQuest);
        }

        if (command === 'Side Quest') {

            let [currentQuest, sideQuest] = quest.split(':');

            if (journal.includes(currentQuest) && !journal.includes(sideQuest)) {
                let index = journal.indexOf(currentQuest) + 1;
                journal.splice(index, 0, sideQuest);

            }

        }

    }

    console.log(journal.join(', '));
}