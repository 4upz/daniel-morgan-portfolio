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
    "Having knowledge, understanding, and wisdom in different areas of life will take you a long way.",
    "I only know one percent or less of things in life which is why I’ll always be a lifelong learner.",
    "The happy moments of the past could be painful moments in the present and future.",
    "You may not be able to go back and say or do it again so do it now so you don’t live in regret.",
    "Always say and do what’s right in God’s eyes and ears even if creations find it wrong.",
    "We think things aren’t supposed to happen the way they do but in all honesty, it is supposed to happen, it’s just not how we intended it to be.",
    "Cry, cry, and cry. Don’t hold it back, let it all out.",
    "I’ve failed myself, others, and God. I’ve seen others fail me, themselves, and God. But I’ve never seen or heard God fail. He never does and never will.",
    "I wish I knew who, what, when, where, why, and how but I may never know.",
    "If I didn’t get my life together as early as I did then life would’ve gotten it together for me.",
    "No human being is better than anyone. We’re just unique.",
    "I’m the same but also different.",
    "Be a leader but a follower just as I am. A leader in this world, but a follower of God.",
    "Without God, I am nothing and have nothing.",
    "We are born broke but can die rich.",
    "You don’t always have to be in the same paths as others.",
    "Don’t be normal, be weird.",
    "If you want to elevate you must be weird and accept it.",
    "The most desirable thing for me in life is death here on earth. For death will soon be a new and better beginning for me when I’m with God forever.",
    "I don’t know about you but I’ve seen Him work in my life yesterday, today, and forever.",
    "Don’t be the black and white cow that is unnoticeable, instead be the purple cow that would be easily noticeable.",
    "It’s true that the more I knew the more fear and pain took place. However, I can also say that the more I knew the more hope and joy took place.",
    "The things that happened and still happen in my life are supposed to happen whatsoever. Nevertheless, I lived and am still living today.",
    "I was born broke but Imma die rich.",
    "I’m not chasing success, success is chasing after me.",
    "I’m not better than you, we just move differently.",
    "I am the rose from the concrete.",
    "Without God, I am nothing or nobody.",
    "God is good all the time and all the time God is good.",
    "I don’t know about you but I’ve seen Him work in my life yesterday, today, and forever.",
    "They may try and put me in the grave early but I’m going to keep breathing.",
    "The wrong things in life can last temporarily. But the right things in life can last a very long time.",
    "I was saying and doing all this before you.",
    "Don’t live in the past. Don’t live in the future. Live in the now.",
    "There will be times in which creations may love me and hate me but I will take both into consideration as positive signs and negative signs.",
    "It’s not me against the world, it’s the world against me.",
    "You just have to play the game. It’s around you!",
]
