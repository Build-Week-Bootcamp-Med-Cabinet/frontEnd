export const Data = () => {
    let dataArray = []

    for (let i = 1; i < 11; ++i) {
        dataArray.push({
            name: `Some Strain ${i}`,
            image: "https://media.gettyimages.com/photos/medical-marijuana-picture-id874041882?s=2048x2048",
            desc: "Description",
            rating: "Rating",
            key: i
        });
    }

    return dataArray;
}



