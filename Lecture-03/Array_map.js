const finalParticipants = ["Taylor", "Donald", "don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
    return member + " joined the contest.";
});

console.log(announcements);
// Alternatively, using a named function