const usersData = [
    {
        userProfileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Lelah Nichols",
        userLocation: "Troy, MI",
        userCategort: ["clothes", "stem"]
    },
    {
        userProfileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Jesus Weiss",
        userLocation: "Fort Worth, TX",
        userCategort: ["headset", "gadget", "speed", "winter"]
    },
    {
        userProfileImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Annie Rice",
        userLocation: "Austin, TX",
        userCategort: ["road", "mountain", "trip", "earth", "nature"]
    },
    {
        userProfileImg: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Robert Brower",
        userLocation: "Cincinnati, OH",
        userCategort: ["Maintenance", "gears", "frames", "repair"]
    },
    {
        userProfileImg: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Amy Campbell",
        userLocation: "Warrior, AI",
        userCategort: ["music", "disks"]
    },
    {
        userProfileImg: "https://images.unsplash.com/photo-1633068587634-4280dabf12ed?q=80&w=1307&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "Anthony S. Morin",
        userLocation: "Lyndhurst, NJ",
        userCategort: ["vintage", "electric"]
    },
]

const userHTML = `
<div class="user">
    <figure class="user-img-con">
        <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user image"
            class="user-img"
        />
    </figure>
    <div class="user-desc">
        <h2 class="user-name">Lelah Nichols</h2>
        <p class="user-location">Troy, MI</p>
        <div class="user-categorys">
            <p class="user-category">clothes</p>
            <p class="user-category">stem</p>
        </div>
    </div>
</div>
`;