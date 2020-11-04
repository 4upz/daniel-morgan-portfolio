// Hardcoded Quotes with a randomized selector
export const shuffledQuotes = () => {
    const shuffledQuotes = [...quotes]
    var m = shuffledQuotes.length,
        t,
        i
    while (m) {
        i = Math.floor(Math.random() * m--)
        t = shuffledQuotes[m]
        shuffledQuotes[m] = shuffledQuotes[i]
        shuffledQuotes[i] = t
    }
    return shuffledQuotes
}

const quotes = [
    "God should always be first and in the middle of everything in our lives.",
    "I only know one percent or less pertaining to things in life which is why I’ll always be a lifelong learner.",
    "The happy moments of the past could be painful moments in the present and future.",
    "If I didn’t get my life together as early as I did then life would’ve gotten it together for me.",
    "Always say and do what’s right in God’s eyes and ears even if creations find it wrong.",
    "We think things aren’t supposed to happen the way they do but in all honesty, it is supposed to happen, it’s just not how we intended it to be.",
    "I’ve failed myself, others, and God. I’ve seen others fail me, themselves, and God. But I’ve never seen or heard  God fail. He never does and never will.",
    "Be a leader but a follower just as I am. A leader in this world, but a follower of God.",
    "Without God, I am nothing or no one and have nothing or no one.",
    "Don’t be the black and white cow that is unnoticeable, instead be the purple cow that would be easily noticeable.",
    "The things that happened and still happen in my life are supposed to happen whatsoever. Nevertheless, I lived. And I am still living today.",
    "I am the rose from the concrete.",
    "There will be times in which creations may love me and hate me but I will take both into consideration as positive signs and negative signs.",
    "I was saying and doing all this before you.",
    "My net worth may approximately be above or below average. However, it’s surely a dichotomy of my human worth, which is far from average.",
]
