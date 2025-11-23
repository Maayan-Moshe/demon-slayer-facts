// Mock data for Demon Slayer Facts application
// Used as fallback when the API is unavailable

const mockCharacters = [
    {
        id: 1,
        name: "Tanjiro Kamado",
        age: "15",
        gender: "Male",
        race: "Human",
        height: "165 cm",
        weight: "61 kg",
        birthday: "July 14th",
        affiliation: "Demon Slayer Corps",
        status: "Alive",
        occupation: "Demon Slayer",
        image: "https://i.pinimg.com/736x/f0/e7/34/f0e734c5b14382dfb53f5e9d4dcb9fb5.jpg",
        abilities: ["Water Breathing", "Hinokami Kagura", "Enhanced Smell"],
        description: "Tanjiro is a kind-hearted boy who became a demon slayer to find a cure for his sister Nezuko and avenge his family."
    },
    {
        id: 2,
        name: "Nezuko Kamado",
        age: "14",
        gender: "Female",
        race: "Demon",
        height: "153 cm",
        weight: "45 kg",
        birthday: "December 28th",
        affiliation: "Demon Slayer Corps",
        status: "Alive",
        occupation: "None",
        image: "https://i.pinimg.com/736x/42/90/52/4290527ccabc99b4aa68a86dd078e1db.jpg",
        abilities: ["Blood Demon Art", "Size Manipulation", "Regeneration"],
        description: "Nezuko is Tanjiro's younger sister who was turned into a demon but retains her humanity and helps her brother."
    },
    {
        id: 3,
        name: "Zenitsu Agatsuma",
        age: "16",
        gender: "Male",
        race: "Human",
        height: "164.5 cm",
        weight: "58 kg",
        birthday: "September 3rd",
        affiliation: "Demon Slayer Corps",
        status: "Alive",
        occupation: "Demon Slayer",
        image: "https://i.pinimg.com/736x/e5/bb/2f/e5bb2f50e4e22c9b79d4e87f5976f6a7.jpg",
        abilities: ["Thunder Breathing", "Enhanced Hearing", "Unconscious Combat"],
        description: "Zenitsu is a cowardly but talented demon slayer who becomes incredibly powerful when he's asleep."
    },
    {
        id: 4,
        name: "Inosuke Hashibira",
        age: "15",
        gender: "Male",
        race: "Human",
        height: "164 cm",
        weight: "63 kg",
        birthday: "April 22nd",
        affiliation: "Demon Slayer Corps",
        status: "Alive",
        occupation: "Demon Slayer",
        image: "https://i.pinimg.com/736x/8e/8f/78/8e8f787d0f5f8e83fcc5f8f85d46ff9f.jpg",
        abilities: ["Beast Breathing", "Enhanced Touch", "Flexible Joints"],
        description: "Inosuke is a wild and aggressive fighter who was raised by boars in the mountains and wears a boar mask."
    },
    {
        id: 5,
        name: "Kanao Tsuyuri",
        age: "16",
        gender: "Female",
        race: "Human",
        height: "156 cm",
        weight: "46 kg",
        birthday: "May 19th",
        affiliation: "Demon Slayer Corps",
        status: "Alive",
        occupation: "Demon Slayer",
        image: "https://i.pinimg.com/736x/d5/4f/46/d54f46e8ae5e8fcaf2ce8f4b9d9e7b5c.jpg",
        abilities: ["Flower Breathing", "Enhanced Vision", "Coin Toss Decision Making"],
        description: "Kanao is a quiet and gentle girl who was adopted by the Kocho sisters and trained as a demon slayer."
    },
    {
        id: 6,
        name: "Shinobu Kocho",
        age: "18",
        gender: "Female",
        race: "Human",
        height: "151 cm",
        weight: "37 kg",
        birthday: "February 24th",
        affiliation: "Demon Slayer Corps",
        status: "Deceased",
        occupation: "Insect Hashira",
        image: "https://i.pinimg.com/736x/5b/0f/c7/5b0fc78ae7e2a3af3f8e1e5e5e5e5e5e.jpg",
        abilities: ["Insect Breathing", "Poison Expert", "Medical Knowledge"],
        description: "Shinobu is the Insect Hashira who uses poison to defeat demons and is known for her gentle smile."
    }
];

const mockBreathingTechniques = [
    {
        id: 1,
        name: "Water Breathing",
        creator: "Unknown",
        style: "Fluid and Adaptive",
        forms: "10 Forms",
        image: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.jpg",
        description: "Water Breathing is one of the five main breathing styles. It's the most flexible breathing style, allowing users to adapt to any situation."
    },
    {
        id: 2,
        name: "Thunder Breathing",
        creator: "Unknown",
        style: "Speed-focused",
        forms: "6 Forms",
        image: "https://i.pinimg.com/736x/b2/c3/d4/b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7.jpg",
        description: "Thunder Breathing focuses on speed and explosive power, with techniques that allow for lightning-fast movements."
    },
    {
        id: 3,
        name: "Flame Breathing",
        creator: "Unknown",
        style: "Powerful and Aggressive",
        forms: "9 Forms",
        image: "https://i.pinimg.com/736x/c3/d4/e5/c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8.jpg",
        description: "Flame Breathing is known for its powerful and aggressive techniques that burn through enemies."
    },
    {
        id: 4,
        name: "Insect Breathing",
        creator: "Shinobu Kocho",
        style: "Speed and Poison",
        forms: "4 Known Forms",
        image: "https://i.pinimg.com/736x/d4/e5/f6/d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9.jpg",
        description: "Insect Breathing uses thrusting and piercing attacks combined with poison to defeat demons."
    },
    {
        id: 5,
        name: "Beast Breathing",
        creator: "Inosuke Hashibira",
        style: "Wild and Unpredictable",
        forms: "Multiple Forms",
        image: "https://i.pinimg.com/736x/e5/f6/g7/e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0.jpg",
        description: "Beast Breathing is a self-taught style that emphasizes wild, unpredictable movements and dual wielding."
    }
];

const mockDemons = [
    {
        id: 1,
        name: "Muzan Kibutsuji",
        status: "Unknown",
        rank: "Demon King",
        gender: "Male",
        image: "https://i.pinimg.com/736x/f6/g7/h8/f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1.jpg",
        abilities: ["Biokinesis", "Blood Manipulation", "Regeneration"],
        description: "Muzan is the first demon and the main antagonist of Demon Slayer. He is extremely powerful and ruthless."
    },
    {
        id: 2,
        name: "Rui",
        status: "Deceased",
        rank: "Lower Moon Five",
        gender: "Male",
        image: "https://i.pinimg.com/736x/g7/h8/i9/g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2.jpg",
        abilities: ["Thread Manipulation", "Blood Demon Art"],
        description: "Rui is a demon who creates a fake family using his thread manipulation powers."
    },
    {
        id: 3,
        name: "Enmu",
        status: "Deceased",
        rank: "Lower Moon One",
        gender: "Male",
        image: "https://i.pinimg.com/736x/h8/i9/j0/h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3.jpg",
        abilities: ["Dream Manipulation", "Sleep Inducement"],
        description: "Enmu is a sadistic demon who can manipulate dreams and put people to sleep."
    },
    {
        id: 4,
        name: "Daki",
        status: "Deceased",
        rank: "Upper Moon Six",
        gender: "Female",
        image: "https://i.pinimg.com/736x/i9/j0/k1/i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4.jpg",
        abilities: ["Obi Sash Manipulation", "Enhanced Strength"],
        description: "Daki is a powerful demon who operates in the Entertainment District with her brother Gyutaro."
    }
];

module.exports = {
    mockCharacters,
    mockBreathingTechniques,
    mockDemons
};
